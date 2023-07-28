import {View, Text, TextInput, TouchableOpacity,StyleSheet,ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Auth} from '../Setup';
import {SignUpUser, SignInUser, SignOutUser} from '../apiService';


const Auther = ({navigation}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [state, setState] = React.useState({
    emailAddress: '',
    password: '',
  });
  const [user, setUser] = React.useState();

  const signUp = () => {
    SignUpUser(email, password)
      .then((data) => {
        alert(data);
      })
      .catch((error) => {
        alert(error);
      });
  };
  const signIn = () => {
    SignInUser(email, password)
      .then((data) => {
        alert(data);
      })
      .catch((error) => {
        alert(error);
      });
  };
  const signOut = () => {
    SignOutUser()
      .then((data) => {
        alert(data);
      })
      .catch((error) => {999999999999
        alert(error);
      });
  };

  const onAuthStateChanged = (user) => {
    setUser(user);
  };
  React.useEffect(() => {
    const subscriber = Auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

 
  return (
    <ScrollView>
    <View style={{flex: 1}}>
    <Text
      style={{
        alignSelf: 'center',
        marginTop: 20,
        fontSize: 20,
        fontWeight: '800',
      }}>
      Firebase SIGNUP
    </Text>
    <TextInput
      value={name}
      onChangeText={txt => {
        setName(txt.trim().toString());
      }}
      placeholder="Enter Name"
      style={{
        width: '84%',
        height: 50,
        borderRadius: 10,
        borderWidth: 0.5,
        alignSelf: 'center',
        paddingLeft: 15,
        marginTop: 20,
      }}
    />
    <TextInput
      value={email}
      onChangeText={txt => {
        setEmail(txt.trim().toString());
      }}
      placeholder="Enter Email Id"
      style={{
        width: '84%',
        height: 50,
        borderRadius: 10,
        borderWidth: 0.5,
        alignSelf: 'center',
        paddingLeft: 15,
        marginTop: 20,
      }}
    />
    <TextInput
    secureTextEntry
      value={password}
      onChangeText={txt => {
        setPassword(txt.trim().toString());
      }}
      placeholder="Enter Password"
      style={{
        width: '84%',
        height: 50,
        paddingLeft: 15,
        borderRadius: 10,
        borderWidth: 0.5,
        alignSelf: 'center',
        marginTop: 20,
      }}
    />
    <TextInput
    secureTextEntry
      value={password}
      onChangeText={txt => {
        setPassword(txt.trim().toString());
      }}
      placeholder="Confirm Password"
      style={{
        width: '84%',
        height: 50,
        paddingLeft: 15,
        borderRadius: 10,
        borderWidth: 0.5,
        alignSelf: 'center',
        marginTop: 20,
      }}
    />
    <TouchableOpacity
      style={{
        width: '84%',
        height: 50,
        backgroundColor: 'orange',
        borderRadius: 10,
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
      }}
      onPress={signIn}>
      <Text style={{fontSize: 20, color: '#000'}}>Sign up</Text>
    </TouchableOpacity>
    {/* <Loader modalVisible={modalVisible} setModalVisible={setModalVisible} /> */}

   



    <Text
      style={{
        alignSelf: 'center',
        marginTop: 20,
        fontSize: 20,
        fontWeight: '800',
      }}>
     **** Firebase SIGNIN ****
    </Text>
    
    <TextInput
      value={email}
      onChangeText={txt => {
        setEmail(txt.trim().toString());
      }}
      placeholder="Enter Email Id"
      style={{
        width: '84%',
        height: 50,
        borderRadius: 10,
        borderWidth: 0.5,
        alignSelf: 'center',
        paddingLeft: 15,
        marginTop: 20,
      }}
    />
    <TextInput
    secureTextEntry
      value={password}
      onChangeText={txt => {
        setPassword(txt.trim().toString());
      }}
      placeholder="Enter Password"
      style={{
        width: '84%',
        height: 50,
        paddingLeft: 15,
        borderRadius: 10,
        borderWidth: 0.5,
        alignSelf: 'center',
        marginTop: 20,
      }}
    />
    
    <TouchableOpacity
      style={{
        width: '84%',
        height: 50,
        backgroundColor: 'orange',
        borderRadius: 10,
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
      }}
      onPress={signIn}>
      <Text style={{fontSize: 20, color: '#000'}}>Sign In</Text>
    </TouchableOpacity>
    {/* <Loader modalVisible={modalVisible} setModalVisible={setModalVisible} /> */}
      <Text style={{
        alignSelf: 'center',
        marginTop: 20,
        fontSize: 20,
        fontWeight: '800',
      }}>***SIGNOUT***</Text>
    <TouchableOpacity
      style={{
        width: '84%',
        height: 50,
        backgroundColor: 'orange',
        borderRadius: 10,
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
      }}
      onPress={signOut}>
      <Text style={{fontSize: 20, color: '#000'}}>Sign Out</Text>
    </TouchableOpacity>
  </View>
  </ScrollView>
  )
}

export default Auther

const styles = StyleSheet.create({})