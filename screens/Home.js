import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'
import React,{useEffect} from 'react'
import inAppMessaging from '@react-native-firebase/in-app-messaging';

const Home = ({navigation}) => {
// React.useEffect(async () => {
//   await inAppMessaging().setMessagesDisplaySuppressed(false);
//   }, []);
  return (
    <View>
      <Text>Home</Text>      
      <TouchableHighlight onPress={() => navigation.navigate('Home')} style={styles.Navstyles}><Text>Home Screen</Text></TouchableHighlight>
      <TouchableHighlight onPress={() => navigation.navigate('Auth')} style={styles.Navstyles}><Text>Authentication</Text></TouchableHighlight>
      <TouchableHighlight onPress={() => navigation.navigate('RealtimeDB')} style={styles.Navstyles}><Text>RealtimeDB</Text></TouchableHighlight>
      <TouchableHighlight onPress={() => navigation.navigate('CloudFirestoreDB')} style={styles.Navstyles}><Text>CloudFirestoreDB</Text></TouchableHighlight>
      <TouchableHighlight onPress={() => navigation.navigate('CloudStorage')} style={styles.Navstyles}><Text>CloudStorage</Text></TouchableHighlight>
      <TouchableHighlight onPress={() => navigation.navigate('Admob')} style={styles.Navstyles}><Text>Admob</Text></TouchableHighlight>
      <TouchableHighlight onPress={() => navigation.navigate('Functions')} style={styles.Navstyles}><Text>Functions</Text></TouchableHighlight>
      <TouchableHighlight onPress={() => navigation.navigate('Analytics')} style={styles.Navstyles}><Text>Analytics</Text></TouchableHighlight>
      <TouchableHighlight onPress={() => navigation.navigate('Notifications')} style={styles.Navstyles}><Text>Notifications</Text></TouchableHighlight>
      <TouchableHighlight onPress={() => navigation.navigate('UseStateScreen')} style={styles.Navstyles}><Text>UseStateScreen</Text></TouchableHighlight>
      <TouchableHighlight onPress={() => navigation.navigate('ContextApiScreen')} style={styles.Navstyles}><Text>ContextApi</Text></TouchableHighlight>
          
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  Navstyles: {fontSize:20,color:'Blue',backgroundColor:'orange',margin:20}
})