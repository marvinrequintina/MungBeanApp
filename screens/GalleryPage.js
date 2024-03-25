import { StyleSheet, Text, View, Button, Image, SafeAreaView} from 'react-native';
import { useEffect,useState} from 'react';
import * as ImagePicker from "expo-image-picker"
import { LogBox } from 'react-native';
import { useNavigation } from '@react-navigation/native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();

const GalleryPage = () => {

    const targetWidth = 293;
    const targetHeight = 353;
    const aspectRatio = [targetWidth,targetHeight];
    const navigation = useNavigation();
    const [hasGalleryPermission,setHasGalleryPermission] = useState(null);
    const [galPhoto, galSetPhoto] = useState(" ");
    useEffect(() => {
        (async() => {
        const galleryPermission = await ImagePicker.requestMediaLibraryPermissionsAsync();
        setHasGalleryPermission(galleryPermission.status === "granted");
        if (galleryPermission.status === 'granted'){
            galleryImage();
        }
        })();
    },[]);

    const galleryImage = async() =>{
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspectRatio,
          quality: 1,
          base64: true,
          exif: false
        });
          console.log(result);
          if(!result.canceled){
            galSetPhoto(result.assets[0].uri);
            navigation.navigate('Confirmation', { selectedImage: result.assets[0].uri });
          }
        };
    
        if (hasGalleryPermission === false){
          return <Text>No Access to Internal Storage...</Text>
      }

  return (
    <SafeAreaView style={{flex: 1, justifyContent:'center'}}>
        {<Image source={{uri:galPhoto}} style={{flex:1/2}}/>}

    </SafeAreaView>
  )
}

export default GalleryPage

const styles = StyleSheet.create({})