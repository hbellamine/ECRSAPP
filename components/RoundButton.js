import React from 'react';
import {  Text, View, TouchableOpacity,StyleSheet } from 'react-native';

const RoundButton = props =>{
  let disabled = false
  return(
    <TouchableOpacity 
      onPress= {props.onPressHandler} 
      style = {[styles.button,{backgroundColor: props.background}]}
      activeOpacity= {disabled? 1.0 : 0.7}>
      
      <View style={styles.buttonBorder}>
        <Text style= {[styles.buttonTitle,props.color]}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({  
    button: {
      width:100,
      height:100,
      borderRadius:50,
      justifyContent:'center',
      alignItems:'center',
      
    },
    buttonTitle: {
  
      fontSize: 18,
    },
  
    buttonBorder: {
      width:96,
      height:96,
      borderRadius: 48,
      borderWidth:2,
      justifyContent:'center',
      alignItems:'center'
    },
    buttonsRow: {
      flexDirection:'row',
      alignSelf: 'stretch',
      justifyContent: 'space-between',
      marginTop: 80,
      marginBottom:30
    }
  });

export default RoundButton;