import React, { Component } from 'react';
import { 
 Container,
 Header,
 Content,
 Form,
 Item, 
 Input,
 Button,
 Label
  } from 'native-base';

import { 
Touchable,
 TouchableOpacity,
 StyleSheet,
 Text,
 Image,
 StatusBar,
secureTextEntry,
View,
TextInput } from 'react-native';

// export default class FloatingLabelExample extends Component {
//   render() {
    function company(props){
    return (
      <Container style={{alignItems:'center' , paddingTop:70}}>
       <Image style= {{width:200,height: 200, resizeMode: 'contain'}}
 source={{uri: "https://cdn2.vectorstock.com/i/thumb-large/83/16/round-simple-recruitment-logo-vector-20778316.jpg"}}>
  </Image>

            {/* email */}
            <TextInput  onChangeText= {(text)=>console.log(text)}
            style = {{fontSize: 16,height:40, borderColor:'gray',borderWidth:1, width:"80%", marginBottom:20, paddingHorizontal: 15, borderRadius: 10}} 
            placeholder = "Enter Email"></TextInput>
            {/* password */}
            <TextInput onChangeText= {(text)=>console.log(text)} secureTextEntry= {true} 
            style= {{fontSize: 16,height:40, borderColor:'gray',borderWidth:1, width:"80%",  marginBottom: 20, paddingHorizontal: 15, borderRadius: 10}}
            placeholder="Enter Password"></TextInput>
            


            {/* <Item floatingLabel secureTextEntry= {true} style = {{marginBottom:70, fontSize: 20} }> */}
              {/* <Label style={{marginBottom:70, fontSize: 20}}  >Password</Label>
              <Input /> */}
               
{/* <TouchableOpacity onPress={()=> alert("Succesfully Login...")} activeOpacity= {0.8} style={styles.button}><Text style= {styles.btnText}>LOGIN</Text></TouchableOpacity>
<StatusBar style="auto" /> */}

<TouchableOpacity onPress={()=> props.navigation.navigate("Login")} activeOpacity= {0.8} style={styles.button}><Text style= {styles.btnText}>Log in</Text></TouchableOpacity>
<StatusBar style="auto" />
<TouchableOpacity onPress={()=> props.navigation.navigate("Student Data")} activeOpacity= {0.8} style={styles.button}><Text style= {styles.btnText}>Students Data</Text></TouchableOpacity>
            <StatusBar style="auto" />
<Text style= {{color:"navy" , fontSize:18 ,marginTop: 10}}> Doesn't have an account?</Text>
<Text  style= {{color:"navy" , fontSize:18, fontWeight: 'bold'}}>Signup</Text>
<TouchableOpacity onPress={()=> props.navigation.navigate("Signup")} activeOpacity= {0.8} style={styles.button}><Text style= {styles.btnText}>Signup</Text></TouchableOpacity>
<StatusBar style="auto" />


       
      </Container> 
    );
    };
    const styles = StyleSheet.create({
            button: {
            backgroundColor: "navy",
            width: "40%",
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            marginBottom: 15,
            marginTop: 10,

            },
            btnText: {
                color: "white",
                fontSize: 18,
                },
            signupTextCont: {
                // flex:1,
                color: "navy",
                flexDirection:'row',
                fontSize:18,
                marginVertical: 20,
               
            },
            signupbtn: {
                color: 'black',
                fontSize:18,
                fontWeight:'bold',
                textAlign:'center'

            }
    })



export default company;
