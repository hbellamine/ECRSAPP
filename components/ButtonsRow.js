import React from 'react';
import {  Text, View,StyleSheet } from 'react-native';

const ButtonsRow = props => {

    return (
      <View style = {styles.buttonsRow}>{props.children}</View>
    )
  }

  const styles = StyleSheet.create({

    buttonsRow: {
      flexDirection:'row',
      alignSelf: 'stretch',
      justifyContent: 'space-between',
      marginTop: 80,
      marginBottom:30
    }
  });
  
  export default ButtonsRow;
