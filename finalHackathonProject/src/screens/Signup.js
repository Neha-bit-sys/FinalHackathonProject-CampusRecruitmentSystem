import React, { useState } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity,
  TextInput,
} from 'react-native';


const Signup = ({navigation}) => {

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: (props) => (
        <Text {...props} style={{color: 'navy', fontSize: 20, fontWeight: 'bold'}}>
                      Campus Recruitment System

        </Text>
      ),
      headerStyle: {
        backgroundColor: "white",
      },
    });
  }, [navigation]);


  const back = ()=>{
    navigation.navigate('login');
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.sucess}>Your Account has been Created Successfully!</Text>
  
        <TouchableOpacity
          onPress={back}
          activeOpacity={0.5}
          style={styles.Button}>
          <Text style={styles.btntext}>Go Back to Login</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  sucess:{
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 100,
    marginBottom: 100,
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  Button: {
    backgroundColor: "navy",
    width: "60%",
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 15,
    marginTop: 10,
  },
  btntext: {
    color: "white",
    fontSize: 18,
  },
  inputs: {
    margin: 10,
    height: 40,
    width: '80%',
    borderColor: 'red',
    borderWidth: 2,
    padding: 10,
  },
});

export default Signup;