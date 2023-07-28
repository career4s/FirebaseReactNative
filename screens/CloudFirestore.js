import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import React,{useEffect,useState} from 'react'
import {firestore} from '../Setup';

const CloudFirestore = ({navigation}) => {
  const usersCollectionRef = firestore().collection('members');
  const adduser = () => {
    usersCollectionRef.add({
      Name: 'Harry',
      Location: new firestore.GeoPoint(53.483959, -2.244644),
      age: 28,
      dateAdded: firestore.FieldValue.serverTimestamp(),
    });
  };
  
  const deleteData = () => {
    usersCollectionRef
      .doc('genny')
      .delete()
      .then(() => {})
      .catch(() => {});
  };

  const fetchData = () => {
    firestore()
    .collection('members')
    .get().then(querySnapshot => {
      console.log('Total users: ', querySnapshot.size);
      querySnapshot.forEach(documentSnapshot => {
        console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
      });
    });
  };
 

  // React.useEffect(() => {
  //   usersCollectionRef.querySnapshot ((documentSnapshot) => {
  //     console.log(documentSnapshot.size);
  //   });
  // }, []);

  return (
    <View>
       <TouchableOpacity style={{padding: '20',marginBottom:'50',backgroundColor:'lightblue'}} onPress={() => navigation.goBack()}><Text>-BACK-</Text></TouchableOpacity>
     
      <Text>cloudFirestore</Text>

      <TouchableOpacity rounded style={{marginBottom: 10}} onPress={adduser}>
          <Text>Save Data</Text>
        </TouchableOpacity>
        <TouchableOpacity rounded style={{marginBottom: 10}} onPress={deleteData}>
          <Text>Delete Data Based On Doc Id</Text>
        </TouchableOpacity>

        <TouchableOpacity rounded style={{marginBottom: 10}} onPress={fetchData}>
          <Text>Get/Fetch Data</Text>
        </TouchableOpacity>
    </View>
  )
}

export default CloudFirestore

const styles = StyleSheet.create({})