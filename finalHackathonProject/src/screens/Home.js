/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
SafeAreaView,
StyleSheet,
ScrollView,
View,
Text,
StatusBar,
Image,
TextInput,
TouchableOpacity,
Button
} from 'react-native';

import {
Header,
LearnMoreLinks,
Colors,
DebugInstructions,
ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Home = (props) => {
return (

<View style={styles.container}>

<View style={styles.main1}>


<Image style= {{width:200,height: 200, resizeMode: 'contain'}}
 source={{uri: "https://cdn2.vectorstock.com/i/thumb-large/83/16/round-simple-recruitment-logo-vector-20778316.jpg"}}>
  </Image>

  <Text style = {{fontSize: 30, color: 'navy' , fontWeight: 'bold' , marginBottom: 30}}>
            Campus Recruitment System
  </Text>
  
  <Text style = {{fontSize: 20, color: 'navy',marginBottom: 80,marginTop:20 }}>
        Select One, In order to Sign in/Sign up
  </Text>
  
</View>
<View style={styles.main2}>
  {/* <TextInput onChangeText= {(text)=>console.log(text)} style= {{fontSize: 16,height:40, borderColor:'gray',borderWidth:1, width:"80%", marginBottom:20, paddingHorizontal: 15, borderRadius: 10}} placeholder = "Enter Username"></TextInput> */}

{/* <TextInput onChangeText= {(text)=>console.log(text)} secureTextEntry= {true} style= {{fontSize: 16,height:40, borderColor:'gray',borderWidth:1, width:"80%",  marginBottom: 20, paddingHorizontal: 15, borderRadius: 10}} placeholder="Enter Password"></TextInput> */}

{/* loginbtn */}
{/* <TouchableOpacity onPress={()=> alert("Loading...")} activeOpacity= {0.8} style={styles.button}><Text style= {styles.btnText}>LOGIN</Text></TouchableOpacity>
<StatusBar style="auto" /> */}




{/* AdminLogin */}
<TouchableOpacity onPress={()=> props.navigation.navigate("Admin")} activeOpacity= {0.8} style={styles.button}><Text style= {styles.btnText}>Admin</Text></TouchableOpacity>
<StatusBar style="auto" />
{/* StudentLogin */}
<TouchableOpacity onPress={()=> props.navigation.navigate("student")} activeOpacity= {0.8} style={styles.button}><Text style= {styles.btnText}>Student</Text></TouchableOpacity>
<StatusBar style="auto" />
{/* CompanyLogin */}
<TouchableOpacity onPress={()=> props.navigation.navigate("company")} activeOpacity= {0.8} style={styles.button}><Text style= {styles.btnText}>Company</Text></TouchableOpacity>
<StatusBar style="auto" />

<Text style = {{fontSize: 15, color: 'navy',marginTop:120 }}>
        Developed By Neha Kausar (WM-9077)
  </Text>

{/* <Button  onPress={()=>props.navigation.navigate("Donor")} title = "Go to Registration"/> */}

</View>
</View>



);
};


const styles = StyleSheet.create({
container: {
flex: 1,
// backgroundColor: 'lightyellow',
alignItems: 'center',
justifyContent: 'center',

},
main1: {
backgroundColor: "white",
width: "100%",
flex:0.8,
justifyContent: 'center',
alignItems: 'center'
},

body: {
backgroundColor: Colors.white,
},

// sectionContainer: {
// marginTop: 32,
// paddingHorizontal: 24,
// },

// sectionTitle: {
// fontSize: 24,
// fontWeight: '600',
// color: Colors.black,
// },
// sectionDescription: {
// marginTop: 8,
// fontSize: 18,
// fontWeight: '400',
// color: Colors.dark,
// },

// highlight: {
// fontWeight: '700',
// },
// footer: {
// color: Colors.dark,
// fontSize: 12,
// fontWeight: '600',
// padding: 4,
// paddingRight: 12,
// textAlign: 'right',
// },
main2: {
backgroundColor: "white",
width: "100%",
flex:0.8,
justifyContent: 'center',
alignItems: 'center'
},
button: {
backgroundColor: "navy",
width: "50%",
height: 40,
justifyContent: 'center',
alignItems: 'center',
borderRadius: 10,
marginBottom: 10,
},
btnText: {
color: "white",
fontSize: 20,
},
});

export default Home;
