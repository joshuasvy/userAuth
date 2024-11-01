import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    backBtn: {
        position: 'absolute',
        top: 50,
        left: 25,
    },
    backImage: {
        width: 45,
        height: 45,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        alignSelf: 'left',
        marginLeft: 60,
        marginBottom: 25,
    },
      emailInput: {
        width: 280,
        height: 48,
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: 'white',
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
        borderColor: 'white',
        backgroundColor: 'white',
        borderRadius: 30,
        alignSelf: 'center',
        justifyContent: 'center',
        padding: 10,
        marginTop: 13,
    },
    password: {
        fontSize: 15,
        color: 'black',
    },
    confirmPasswordInput: {
        width: 280,
        height: 48,
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: 'white',
        borderRadius: 30,
        alignSelf: 'center',
        justifyContent: 'center',
        padding: 10,
        marginTop: 13,
    },
    confirmPassword: {
        fontSize: 15,
        color: 'black',
    },
    signUpBtn: {
        width: 140,
        height: 50,
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: 'white',
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