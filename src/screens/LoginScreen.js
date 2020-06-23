import React from 'react';
import { StyleSheet, Text,  View, TextInput } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import firebase from 'firebase';

class LoginScreen extends React.Component {
    state = {
        email: '',
        password: '',
    }

    handleSubmit() {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then((user) => {
                console.log('success', user);
                this.props.navigation.navigate('Home', { currentUser: user });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return(
            <View style={styles.container}>

                <Text style={styles.title}>ログイン</Text>

                <TextInput
                    style={styles.input}
                    value={this.state.email}
                    onChangeText={(text) => {this.setState({ email: text }); }}
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Email Address"
                />
                <TextInput
                    style={styles.input}
                    value={this.state.password}
                    onChangeText={(text) => { this.setState({ password: text }); }}
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Password"
                    secureTextEntry
                />

                <TouchableHighlight style={styles.button1} onPress={this.handleSubmit.bind(this)} underlayColor="#D83B77">
                    <Text style={styles.buttonTitle}>ログイン</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.button2} onPress={() => { this.props.navigation.navigate('Signup'); }} underlayColor="#06B1A3">
                    <Text style={styles.buttonTitle}>新規登録</Text>
                </TouchableHighlight>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        padding: 24,
        alignItems: "center",
        backgroundColor: '#E6FFEC',
    },
    title: {
        fontSize: 28,
        alignSelf: 'center',
        marginTop: 80,
        marginBottom: 40,
        color: "#454545",
    },
    input: {
        backgroundColor: '#eee',
        height: 48,
        marginBottom: 18,
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 8,
        width: '90%',
    },
    button1: {
        backgroundColor: '#FF50BC',
        height: 40,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: "center",
        marginTop: 30,
        marginBottom: 20,
        width: 140,
    },
    button2: {
        backgroundColor: '#04D5C4',
        height: 40,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: "center",
        marginBottom: 14,
        width: 140,
    },
    buttonTitle: {
        color: "#fff",
        fontSize: 22,
    },
});

export default LoginScreen;