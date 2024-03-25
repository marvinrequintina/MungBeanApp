import { Text, StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import {Camera, CameraType} from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../src/components/Button';
import { useCameraPermissions } from 'expo-image-picker';

const CameraPage = ({navigation}) => {
    const [hasCameraPermission, setHasCameraPermission] = useState(null);
    const [image, setImage] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const cameraRef = useRef(null);


    useEffect(() => {
        (async () =>{
            MediaLibrary.requestPermissionsAsync();
            const cameraStatus = await Camera.requestCameraPermissionsAsync();
            setHasCameraPermission(cameraStatus.status === 'granted');
        })();
    }, [])

    const takePicture = async () => {
        if(cameraRef) {
            try{
                const data = await cameraRef.current.takePictureAsync();
                console.log(data);
                setImage(data.uri);
            } catch(e) {
                console.log(e);
            }
        }
    }

    const saveImage = async () => {
        if(image) {
            try{
                await MediaLibrary.createAssetAsync(image);
                alert('Picture save!')
                setImage(null);
            }catch (e){
                console.log(e)
            }
        }
    }

    if(hasCameraPermission === false) {
        return <Text>No access to camera</Text>
    }

  return (
    <SafeAreaView style={styles.container}>
        {!image ? 
        <Camera
        style={styles.camera}
        type={type}
        ref={cameraRef}

        >  
        </Camera>
        :
        <Image source={{uri: image}} style={styles.camera}/>
        }
        <View>
            {image ?
            <View style={{
                flexDirection:'row',
                justifyContent: 'space-between',
                paddingHorizontal: 50,
            }}>
                <Button title={"Re-take"} icon="retweet" onPress={() => setImage(null)}/>
                <Button title={"Save"} icon="check" onPress={saveImage}/>
            </View>
            :
            <Button title={'Capture a photo'} icon="camera" onPress={takePicture}/>
            }
            <Button title={'Go back'} icon="back" onPress={() => navigation.navigate("Menu")}/>
        </View>
    </SafeAreaView>
  )
}

export default CameraPage
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        paddingBottom: 20,
    },
    camera: {
        flex: 1,
        justifyContent: 'flex-end',
        borderRadius: 20,
    },
});