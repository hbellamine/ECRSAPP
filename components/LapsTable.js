import React,{useState} from 'react';
import { Platform,StyleSheet, Text, View,ScrollView, TouchableOpacity, TextInput } from 'react-native';
import Lap from './Lap'

const LapsTable = props =>{

  const finishedLaps = props.laps
  let min= Number.MAX_SAFE_INTEGER
  let max= Number.MIN_SAFE_INTEGER 

  if (finishedLaps.length >= 2) {
    finishedLaps.forEach(lap => {
      if (lap.duration<min) min = lap.duration
      if (lap.duration>max) max = lap.duration
    })
  }

  return (
    <ScrollView style={styles.scrollView}> 
      {finishedLaps.map((lap,index) => 
      lap.tasktitle!= 'Current Task' && <Lap  
        tasktitle={lap.tasktitle} 
        interval ={index ===0? props.timer + lap.duration: lap.duration} 
        key={index}
        slowest = {lap.duration === min}
        />
      )}
    
    </ScrollView>
  )

}

const styles = StyleSheet.create({

    scrollView: {
      alignSelf:'stretch'
  
    },
    slowest: {
      color: 'yellow'
    },
  
  
  });
  
  export default LapsTable;
