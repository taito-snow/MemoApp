import React from 'react';
import { StyleSheet, Text,  View, TextInput, TouchableHighlight } from 'react-native';

class SignupScreen extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.title}>新規登録</Text>
                <TextInput style={styles.input} value="Email Adress" />
                <TextInput style={styles.input} value="Password" />
                <TouchableHighlight style={styles.button1} onPress={() => {}} underlayColor="#D83B77">
                    <Text style={styles.buttonTitle}>新規登録</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.button2} onPress={() => {}} underlayColor="#06B1A3">
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