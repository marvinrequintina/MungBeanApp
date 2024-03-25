import { StyleSheet, Text, SafeAreaView, Image, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';

const ImageSample = require('../assets/samplePhoto.png');

const ConfirmationPage = ({navigation}) => {
  const route = useRoute();
  const selectedImage = route.params?.selectedImage;
  return (
    <SafeAreaView style={styles.container}>
      <Image source={{uri: selectedImage}} style={styles.imageSize}/>
      <View style={{flexDirection: 'row', justifyContent:'space-between', marginVertical: 50}}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Landing")}>
          <Text style={styles.btnStyle}>
            PROCEED
          </Text>
        </TouchableOpacity>
        <View width={20}></View>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Menu")}>
          <Text style={styles.btnStyle}>
            CANCEL
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default ConfirmationPage

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  imageSize:{
    marginTop: 65,
    width: 350, 
    height: 400,
    borderRadius: 17,
  },
  button: {
    height: 60,
    width: 150, 
    backgroundColor: '#618264', 
    alignItems:'center',
    justifyContent:'center', 
    borderRadius: 16, 
    elevation: 5,
  },
  btnStyle:{
    color: '#D0E7D2', 
    fontFamily:'PopBold', 
    fontSize: 17
  },
})