import { StyleSheet, Text, View, Button,Alert } from 'react-native'
import React,{useEffect,useState} from 'react'
import notifee, {AndroidImportance} from '@notifee/react-native';
import messaging from '@react-native-firebase/messaging';

const Notification = () => {

    useEffect(()=>{
      getDeviceToken();
    },[]);

    const getDeviceToken = async () =>{
      let token = await messaging().getToken();
      console.log(token);
    }; 

    useEffect(() => {
      const unsubscribe = messaging().onMessage(async remoteMessage => {
        Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
      });
  
      return unsubscribe;
    }, []);



    async function onDisplayNotification() {
        // Request permissions (required for iOS)
        await notifee.requestPermission()
    
        // Create a channel (required for Android)
        const channelId = await notifee.createChannel({
          id: 'default7',
          name: 'Default Channel',
          sound: 'default',
          importance: AndroidImportance.HIGH
        });
    
        // Display a notification
        await notifee.displayNotification({
          title: '<p style="color: #4caf50"><b>Notification Title</b></p>',
          body: 'Main body content of the notification',
          android: {
            channelId,                    
            color: '#4caf50',
            pressAction: {
              id: 'default', 
            },
          },
        });
    }

  return (
    <View>
      <Text>Notification</Text>
      <Button title="Display Notification" onPress=  {onDisplayNotification} />
    </View>
  )
}

export default Notification

const styles = StyleSheet.create({})