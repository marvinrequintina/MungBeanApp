import { StyleSheet, Text, TouchableOpacity, Image, Modal, View} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState, useEffect} from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


const ImageLogo = require('../assets/laptop.png');
const ImageCorrect = require('../assets/correct.png');
const ImageWrong = require('../assets/wrong.png');

export default function MenuPage({navigation}) {

    const [isModalVisible, setIsModalVisible ] = useState(false);

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={() => setIsModalVisible(true)}>
                    <FontAwesome name="question-circle" size={30} color="#124217" />
                </TouchableOpacity>
            )
        })
    }, [navigation])
    
    return (
        <SafeAreaView style={styles.container}>
            <Image source={ImageLogo} style={styles.logo}/>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Camera")}>
                <Text style={styles.btnStyle}>
                    TAKE A PHOTO
                </Text>
            </TouchableOpacity>

            <Text style={styles.txtStyle}>
                OR
            </Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Gallery")}>
                <Text style={styles.btnStyle}>
                    CHOOSE FROM CAMERA ROLL
                </Text>
            </TouchableOpacity>

            <Modal visible={isModalVisible} animationType='slide'>
                <SafeAreaView style={styles.modalContainer}>
                    <TouchableOpacity style={styles.icon}>
                        <FontAwesome5 name="grip-lines" size={24} color="#D0E7D2" onPress={() => setIsModalVisible(false)}/>
                    </TouchableOpacity>
                    <Text style={styles.title}>HOW TO USE</Text>
                    <Text style={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                          laboris nisi ut aliquip ex ea commodo consequat. 
                    </Text>
                    <View style={{flexDirection: 'row',justifyContent:'center',marginTop: 15, marginBottom: 15}}>
                        <Image source={ImageCorrect} style={{justifyContent:'flex-start'}}/>
                        <Image source={ImageWrong} style={{justifyContent:'flex-end'}}/>
                    </View>
                    <Text style={styles.paragraph}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Text>
                       
                </SafeAreaView> 
            </Modal>

            
        </SafeAreaView>
    )
}





const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button:{
        backgroundColor: '#618264',
        borderRadius: 20,
        height: 90,
        width: 261,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 6,
        
    },
    btnStyle:{
        paddingHorizontal: 30,
        fontFamily: 'PopBold',
        color: '#D0E7D2',
        fontSize: 20,
        textAlign: 'center'
    },
    txtStyle: {
        fontFamily: 'PopBold',
        fontSize: 20,
        color: '#124217',
    },
    logo: {
        height: 200,
        width: 270,
        marginBottom: 80,
    },
    modalContainer:{
        height: '97%',
        width: '100%',
        backgroundColor: '#618264',
        position: 'absolute',
        bottom: 0,
        borderTopRightRadius: 18,
        borderTopLeftRadius: 18,
    },
    title: {
        marginTop: 30,
        textAlign: 'center',
        color: '#D0E7D2',
        fontFamily: 'FredBold',
        fontSize: 30,
    },
    icon: {
        marginTop: 15,
        alignItems: 'center',
    },
    paragraph: {
        marginTop: 15,
        marginHorizontal: 20,
        textAlign: 'justify',
        fontFamily: 'PopRegular',
        color: '#D0E7D2',
    },
});