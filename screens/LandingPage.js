import {Button, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

const ImageLogo = require('../assets/logo.png');

const LandingPage = ({navigation}) => {
    return(
        <SafeAreaView style={styles.container}>
            <Image source={ImageLogo} style={styles.logo}/>
            <Text style={styles.title}>NAME OF THE APP</Text>
            <Text style={styles.paragraph}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation.
            </Text>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Menu")}>
                <Text style={styles.btnStyle}>
                    GET STARTED
                </Text>
            </TouchableOpacity>


        </SafeAreaView>
    )
}

export default LandingPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
    },
    logo: {
        width: 225,
        height: 230,
        marginTop: 73,
    },
    title: {
        fontSize: 35,
        fontFamily: 'FredBold',
        color: '#124217',
        marginTop: 44,
    },
    paragraph: {
        fontFamily: 'FredRegular',
        fontSize: 13,
        marginTop: 8,
        marginHorizontal: 19,
        color: '#124217',
        textAlign: 'justify',
    },
    button:{
        borderRadius: 31,
        backgroundColor: '#618264',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        marginTop: 50
    },
    btnStyle:{
        paddingHorizontal: 80, 
        paddingVertical: 15,
        fontWeight:'900',
        fontSize: 22, 
        color: '#D0E7D2'
    },
});