import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    title: {
        fontSize: 33,
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
    input: {
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
        marginTop: 10,
    },
    buttonView: {
        flexDirection: 'row',
        alignSelf: 'center',
        gap: 18,
        marginTop: 15,
    },
    button: {
        width: 130,
        height: 55,
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: 'white',
        borderRadius: 30,
        alignSelf: 'center',
        justifyContent: 'center',
        padding: 10,
        marginTop: 20,
    },
    buttonTxt: {
        fontSize: 17,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
    },
})

export default styles;