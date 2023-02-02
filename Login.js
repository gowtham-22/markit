import React, { Component } from 'react'
import { Text, TouchableOpacity, StyleSheet, Image, View,SafeAreaView,TextInput, ScrollView} from 'react-native'


const Email = () => {
    const [emailtext, onChangeText] = React.useState(null);
  
    return (
      <SafeAreaView>
        <TextInput
          style={styles.Name}
          onChangeText={onChangeText}
          value={emailtext}
          placeholder=" Enter Your Email "
          //keyboardType="keyboard"
        />
      </SafeAreaView>
    );
  };
  const Pass = () => {
    const [emailtext, onChangeText] = React.useState(null);
  
    return (
      <SafeAreaView>
        <TextInput
          style={styles.Name}
          onChangeText={onChangeText}
          value={emailtext}
          placeholder="Password"
          //keyboardType="keyboard"
        />
      </SafeAreaView>
    );
  };

class Login extends Component {
   render() {
      return (
         
        <View>
            <ScrollView>
         <Text style={{fontSize:20,fontWeight:'bold',textAlign:'center',marginVertical:50,position:'absolute',marginHorizontal:149}}>Welcome !</Text>
         <View>
         <Image
               style={{height:250,width:250,marginVertical:130,marginHorizontal:80,}}
               source={require('../assets/Welcome.jpeg')}  >
                </Image>
            <Email style = {[styles.Promo, {flexDirection: 'row'}]}/>
            <Pass style = {[styles.Promo, {flexDirection: 'row'}]}/>      
         </View>
            <TouchableOpacity>
                <Text style={{textAlign:'center'}}> FORGET PASSWORD?</Text>
            </TouchableOpacity>
            </ScrollView>
            <TouchableOpacity style={styles.Button1}>
                     <Text style={styles.Button2}>LOGIN</Text>
            </TouchableOpacity>
            <Text style={{fontSize:10,textAlign:'center',marginVertical:15}}>Not having an accountt? <TouchableOpacity><Text style={[{color:'#0AEB57',fontSize:10,}]}>SIGN UP</Text></TouchableOpacity></Text>
         </View>        
      );
   }
}
export default Login
const styles=StyleSheet.create({

    Name: {
        marginHorizontal:30,
        marginVertical: 15,
        borderRadius: 30,
        alignItems: 'center',
        textAlign:'center',
        padding: 15,
        fontWeight:'bold',
        backgroundColor: '#D9D9D9',
     },

     Button1:{    
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: '#0AEB57',
        marginHorizontal:30,
        marginTop:40,
        textAlign:'center',
        padding: 15,
      },
       Button2:{
        color: 'black',
        fontWeight: 'bold',
        
       },
})
