import { StyleSheet, Text, View, TouchableOpacity,TextInput } from 'react-native'
import React, {useEffect,useState} from 'react'
import {submitUser} from '../apiService';
import {database} from '../Setup';

const RealtimeDatabase = ({navigation}) => {
  const [id, setId] = useState();
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [users, setUsers] = useState([]);

  
  const saveUsers = () => {
    submitUser(id, name, position)
      .then((result) => {
        setId(null);
        setName('');
        setPosition('');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteAllUsers = () => {
    database()
      .ref('users')
      .remove()
      .then(() => {
        setUsers([]);
      });
  };

  const deleteUser = (Item) => {
    database()
      .ref('users/' + Item.Id)
      .remove()
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  };

  const editUser = (Item) => {
    setId(Item.Id);
    setName(Item.name);
    setPosition(Item.Position);
  };


  return (

    <View>
      <TouchableOpacity style={{padding: '20',marginBottom:'50',backgroundColor:'lightblue'}} onPress={() => navigation.goBack()}><Text>-BACK-</Text></TouchableOpacity>
      <Text>realtimeDatabase</Text>
     
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
      value={position}
      onChangeText={txt => {
        setPosition(txt.trim().toString());
      }}
      placeholder="Position"
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
    <TouchableOpacity style={{padding: '20',marginBottom:'50',marginRight:'100',backgroundColor:'lightgreen'}}  onPress={saveUsers}><Text>-SAVE-</Text></TouchableOpacity>

 <TouchableOpacity style={{padding: '20',marginBottom:'50',marginRight:'100',backgroundColor:'red'}}  onPress={deleteAllUsers}><Text>-TRASH-</Text></TouchableOpacity>
      


    </View>
  )
}

export default RealtimeDatabase

const styles = StyleSheet.create({})