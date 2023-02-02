import React, { Component } from 'react'
import { Text, TouchableOpacity, StyleSheet, Image, View,SafeAreaView,TextInput} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';

const Fullname = () => {
    const [emailtext, onChangeText] = React.useState(null);
  
    return (
      <SafeAreaView>
        <TextInput
          style={styles.Name}
          onChangeText={onChangeText}
          value={emailtext}
          placeholder="Enter your full name "
          //keyboardType="keyboard"
        />
      </SafeAreaView>
    );
  };
  const Email = () => {
    const [emailtext, onChangeText] = React.useState(null);
  
    return (
      <SafeAreaView>
        <TextInput
          style={styles.Name}
          onChangeText={onChangeText}
          value={emailtext}
          placeholder="Enter your email"
          //keyboardType="keyboard"
        />
      </SafeAreaView>
    );
  };

  const Password = () => {
    const [emailtext, onChangeText] = React.useState(null);
  
    return (
      <SafeAreaView>
        <TextInput
          style={styles.Name}
          onChangeText={onChangeText}
          value={emailtext}
          placeholder="Enter password"
          //keyboardType="keyboard"
        />
      </SafeAreaView>
    );
  };

  const Conpass = () => {
    const [emailtext, onChangeText] = React.useState(null);
  
    return (
      <SafeAreaView>
        <TextInput
          style={styles.Name}
          onChangeText={onChangeText}
          value={emailtext}
          placeholder="Conform Password"
          //keyboardType="keyboard"
        />
      </SafeAreaView>
    );
  };

class Sec_page extends Component {
   render() {
      return (
        <View>
            <ScrollView>
             <Text style={[styles.Text,{marginTop:100}]}>Welcome Onboard!</Text>
             <Text style={[{fontSize:18,textAlign:'center',marginTop:40}]}>Let’s help you meet up your tasks..</Text>
         
        <View style={[{flexDirection: 'column',marginTop:30}]} >
        
            <Fullname style = {[styles.Promo, ]}/>
            <Email style = {[styles.Promo, ]}/> 
            <Password style = {[styles.Promo, ]}/>  
            <Conpass style = {[styles.Promo, ]}/>  
                  <TouchableOpacity style={styles.Button1}>
                     <Text style={styles.Button2}>Register</Text>
                  </TouchableOpacity>
         </View>
         <Text style={{fontSize:10,textAlign:'center',marginVertical:15,marginTop:40}}>Already have an account?<TouchableOpacity><Text style={[{color:'#0AEB57',fontSize:10,}]}>SIGN IN</Text></TouchableOpacity></Text>
        </ScrollView>
        </View>           
        
      );
   }
}
export default Sec_page

const styles = StyleSheet.create ({
   
  Text:{
   textAlign:'center',
   fontSize:20,
   fontWeight:'bold',
   alignItems:'baseline'
  },
  Name: {
    marginHorizontal:30,
    marginVertical: 25,
    borderRadius: 30,
    alignItems: 'center',
    textAlign:'center',
    padding: 10,
    fontWeight:'bold',
    backgroundColor: '#D9D9D9',
 },
 Button1:{
    backgroundColor: '#0AEB57',
    marginHorizontal:30,
    marginTop:60,
    alignItems: 'center',
    padding: 15,
   },
    Button2:{
    fontWeight: 'bold',
    fontSize:20
    },
 
})
