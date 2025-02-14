import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

function  App (): JSX.Element {
  const[randomBackground,setRandomBackground]=useState("#ffffff");

  const generateRandomColor=()=>{
    const hexRange="0123456789ABCDEF";
    let color="#";

    for(let i=0;i<6;i++){
      color+=hexRange[Math.floor(Math.random()*16)];
    }  
    setRandomBackground(color);
  }
  return (
    <>
    <StatusBar backgroundColor={randomBackground} />
    <View style={[styles.container, {backgroundColor:randomBackground}]}>
      <TouchableOpacity onPress={generateRandomColor}>
        <View style={styles.actionBtn}>
          <Text style={styles.actionBtnText}>
            Click Kar!
          </Text>
        </View>
      </TouchableOpacity>
    </View>
    </>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center', 
    justifyContent:'center' 
  },
  actionBtn:{
    backgroundColor:'#f0f0f0',
    // padding:10,
    paddingVertical:10, 
    paddingHorizontal:40,
    borderRadius:5
  },
  actionBtnText:{
    color:'#000000',
    fontSize:20,
  }
})