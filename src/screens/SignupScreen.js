import React from 'react';
import { StyleSheet, Text,  View, TextInput } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import firebase from 'firebase';
import { StackActions, NavigationActions } from 'react-navigation';

class SignupScreen extends React.Component {
    state = {
        email: '',
        password: '',
    }

    handleSubmit() {
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {
                const resetAction = StackActions.reset({
                    index: 0,
                    actions: [
                        NavigationActions.navigate({ routeName: 'Home' }),
                    ],
                });
                this.props.navigation.dispatch(resetAction);
            })
            .catch(() => {
            });
    }

    render() {
        return(
            <View style={styles.container}>

                <Text style={styles.title}>新規登録</Text>

                <TextInput
                    style={styles.input}
                    value={this.state.email}
                    onChangeText={(text) => {this.setState({ email: text }); }}
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Email Address"
                    keyboardType="email-address"
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
                    <Text style={styles.buttonTitle}>新規登録</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.button2} onPress={() => { this.props.navigation.navigate('Login'); }} underlayColor="#06B1A3">
                    <Text style={styles.buttonTitle}>戻る</Text>
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

export default SignupScreen;