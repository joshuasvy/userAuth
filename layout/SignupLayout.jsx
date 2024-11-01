import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        alignSelf: 'left',
        marginLeft: 60,
        marginBottom: 25,
    },
      emailInput: {
        width: 280,
        height: 48,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 30,
        alignSelf: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    email: {
        fontSize: 15,
        color: 'black',
    },
    passwordInput: {
        width: 280,
        height: 48,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 30,
        alignSelf: 'center',
        justifyContent: 'center',
        padding: 10,
        marginTop: 10,
    },
    password: {
        fontSize: 15,
        color: 'black',
    },
    confirmPasswordInput: {
        width: 280,
        height: 48,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 30,
        alignSelf: 'center',
        justifyContent: 'center',
        padding: 10,
        marginTop: 10,
    },
    confirmPassword: {
        fontSize: 15,
        color: 'black',
    },
    signUpBtn: {
        width: 140,
        height: 50,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 30,
        alignSelf: 'center',
        justifyContent: 'center',
        padding: 10,
        marginTop: 20,
    },
    signUptxt: {
        fontSize: 17,
        color: 'black',
        textAlign: 'center',
    },
})

export default styles;