import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import React from 'react'
import {analytics} from '../Setup';
import crashlytics from '@react-native-firebase/crashlytics';

const Analytics = ({navigation}) => {
  const getUserDetails = () => {
    try {
      crashlytics().setUserId('userId');
      // If u have single value return from response
      crashlytics().setAttribute('userName', 'userName Value');

      // If u have multiple values returnfrom response
      crashlytics().setAttributes({
        role: 'admin',
        followers: '13',
        email: user.email,
        username: user.username,
      });
    } catch (err) {
      crashlytics().recordError(err);
    }
  };
  React.useEffect(() => {
    crashlytics().crash();
    crashlytics().log('Analytics Page Just Mounted');
    getUserDetails();
    return () => {
      crashlytics().log('Analytics Page Just Unmounted');
    };
  }, []);
  return (
    <View> 
      <TouchableOpacity  onPress={() =>
            analytics().logEvent('cart', {
              id: 'shoes_372732173',
              item: 'Nivia Shoes - Sports',
              description: ['Sports', 'Cricket'],
              size: '9',
            })
          }>   <Text>Add To Cart</Text></TouchableOpacity>
      
      <TouchableOpacity   onPress={() =>
            analytics().logJoinGroup({
              group_id: 'whatsapp_group_12121',
            })
          }> <Text>Join Group</Text></TouchableOpacity>

    </View>
  )
}

export default Analytics

const styles = StyleSheet.create({})