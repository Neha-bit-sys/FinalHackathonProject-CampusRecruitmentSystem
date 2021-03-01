import React, {useState} from 'react';
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
import database from '@react-native-firebase/database';


const Login = ({navigation}) => {
  const [user, setuser] = useState('');
  const [pass, setpass] = useState('');
  const [Error, setError] = useState('');


  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: (props) => (
        <Text {...props} style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
            Campus Recruitment System
        </Text>
      ),
      headerStyle: {
        backgroundColor: 'navy',
      },
    });
  }, [navigation]);

  const login = () => {
    console.log('user==>', user);
    console.log('pass==>', pass);
    database().signInWithEmailAndPassword(user, pass)
        .then((result)=>{
        // console.log(result)
        console.log("Login sucessfully..")
        navigation.navigate('Main');
        })
        .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        setError(errorMessage);
        console.log(errorMessage);
        });
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.mainheading}>Sign In</Text>
        <TextInput
          placeholder="Enter your email"
          type="email"
          style={styles.inputs}
          value={user}
          onChangeText={(text) => setuser(text)}
        />
        <TextInput
          secureTextEntry={true}
          placeholder="Enter your password"
          type="password"
          style={styles.inputs}
          value={pass}
          onChangeText={(text) => setpass(text)}
        />
        {Error ? 
        <Text style={styles.error}>{Error}</Text> : null }
        <TouchableOpacity
          onPress={login}
          activeOpacity={0.5}
          style={styles.Button}>
          <Text style={styles.btntext}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.text}>or</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Signup');
          }}
          activeOpacity={0.5}
          style={styles.Button}>
          <Text style={styles.btntext}>SignUp</Text>
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
  mainheading: {
    fontSize: 60,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 10,
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  Button: {
    backgroundColor: "navy",
    width: "40%",
    height: 40,
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
 fontSize: 16,
 height:40, 
 borderColor:'gray',
 borderWidth:1,
 width:"80%",
 marginBottom:20, 
 paddingHorizontal: 15,
 borderRadius: 10
  },
  error:{
    color: "red",
    fontSize: 20,
    margin:10,
  },
});
export default Login;
