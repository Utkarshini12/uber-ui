/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button,Image,ScrollView,Animated,ImageBackground,TextInput,TouchableOpacity} from 'react-native';
import { createStackNavigator, createAppContainer,createBottomTabNavigator } from "react-navigation";
import { grey } from 'ansi-colors';
import * as Animatable from 'react-native-animatable';



class LoginScreen extends React.Component{
  static navigationOptions= {header: null};
  render(){
      return(

       <View style = {{flex:1}}>
       <ImageBackground source={{uri: 'https://raw.githubusercontent.com/nathvarun/Uber-App-UI-Clone-React-Native/master/assets/login_bg.jpg'}}
                                      style={{width:'100%',height:'100%'}}
       >
       

       <View style = {{flex:1, justifyContent:'center', alignItems:'center',}}>
       
              <Animatable.View 
                animation = "zoomIn"
                iterationCount ={1}
                style ={{backgroundColor:'white',height:100,width:100,justifyContent:'center', alignItems:'center',}}>
        
                    <Text style={{fontWeight:'bold',fontSize:26,}}>UBER</Text>
       
              </Animatable.View>
       
       </View>
       

       <Animatable.View
              animation="slideInUp"
              iterationCount={1}>

            <View style ={{height:150, backgroundColor:'white' }}>

                <View style ={{
                  opacity:1,
                alignItems:'flex-start',
                paddingHorizontal:25,
                marginTop:25,}}>

                <Text style={{fontSize:24,}}> Get moving with Uber </Text>

                <TouchableOpacity>
                    <View style ={{
                      marginTop:25,
                      paddingHorizontal:25,
                      flexDirection:'row',
                      
                    }}>
                     
                    <Image source={{uri: 'https://raw.githubusercontent.com/nathvarun/Uber-App-UI-Clone-React-Native/master/assets/india.png'}}
                    style={{width:24,height:24,resizeMode:'contain',}}/>

                    <View 
                        
                    
                      style ={{
                      flexDirection:'row', 
                      flex:1,
                      
                    }}>
                    

                    <TextInput
                          style={{height: 40, width :250, borderColor: 'white', borderWidth: 1,fontSize:20,paddingHorizontal:30,}}
                          placeholder="Enter your mobile number"

        
      />
                    
                    
                    
                    </View>
                    
                    </View>
                
                </TouchableOpacity>

                </View>
          
           </View>

            <View style={
              {backgroundColor:'white', 
               height:70, 
               justifyContent:'center', 
               alignItems:'flex-start', 
               borderTopColor:'grey', 
               borderTopWidth:1, 
               paddingHorizontal:25}}>

              <Text style={{ color:'#5a7fdf', fontWeight:'bold', }}
              >or connect using a social account</Text>
            
            
            </View>
       
       </Animatable.View>
       
       </ImageBackground>
        
        

        </View>
      );
  }
}

const AppNavigator = createStackNavigator(
  {Login: LoginScreen}
);

export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});