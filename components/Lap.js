import React from 'react';
import {  Text, View,StyleSheet } from 'react-native';
import Timer from './Timer'

const Lap = props =>{
  
  const lapStyle= [styles.laptext, props.slowest && styles.slowest]
  
  return (
    <View style = {styles.lap}>
      <Text style={lapStyle}> {props.tasktitle} </Text>
      <Timer style={lapStyle} interval={props.interval} />
    </View>
  )
}

const styles = StyleSheet.create({

      lap: {
      color: '#FFFFFF',
      flexDirection: 'row',
      justifyContent:'space-between',
      borderColor: 'lightgreen',
      borderTopWidth: 1,
      paddingVertical:10,
  
    },
   
    laptext: {
  
      color: '#FFFFFF',
      fontSize: 18,
  
    },
  
 
  });


export default Lap;


