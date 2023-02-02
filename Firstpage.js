import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet, Image, View} from 'react-native';


class Get_Started extends Component {
   render() {
      return (
         
        <View>
            <View>
            <Image
               style={{height:300,width:300,marginVertical:150,marginHorizontal:50}}
               source={require('../assets/Welcomepage.jpeg')}  >
                </Image>
            </View>
           
            <Text style={styles.Text}>Gets things done with <Text style = {[{color: '#FFBA07'}]}>MARKIT</Text></Text>
            <TouchableOpacity style={styles.Button1}>
                     <Text style={styles.Button2}>Get Started</Text>
                  </TouchableOpacity>
        </View>           
        
      );
   }
}
export default Get_started

const styles = StyleSheet.create ({
   
  Text:{
   textAlign:'center',
   fontSize:20,
   fontWeight:'bold',
   alignItems:'baseline'
  },
  Button1:{  
   alignItems:'center',
   justifyContent: 'center',
   backgroundColor: '#0AEB57',
   marginHorizontal:30,
   marginVertical:90,
   textAlign:'center',
   padding: 15,
 },
  Button2:{
   color: 'black',
   fontWeight: 'bold',
   
  },
})
