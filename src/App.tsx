import { Image, StyleSheet, Text, View,ImageSourcePropType, Pressable } from 'react-native'
import React,{useState} from 'react'
import type { PropsWithChildren } from 'react'
import DiceOne from '../assets/one.png';
import DiceTwo from '../assets/two.png';
import DiceThree from '../assets/three.png';
import DiceFour from '../assets/four.png';
import DiceFive from '../assets/five.png';
import DiceSix from '../assets/six.png';
import ReactNativeHapticFeedback from "react-native-haptic-feedback";


type DiceProps = PropsWithChildren<{
  imageUrl:ImageSourcePropType
}>

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};


const Dice=({imageUrl}:DiceProps):JSX.Element=>{
  return(
    <View style={styles.diceContainer}>
      <Image style={styles.diceImage} source={imageUrl}/>
    </View>
  )
}
function App ():JSX.Element {
  const[diceImage,setDiceImage]=React.useState<ImageSourcePropType>(DiceOne);
  const rollDiceOnTap=()=>{
    let randomNumber=Math.floor(Math.random()*6)+1;
  switch(randomNumber){
    case 1:
      setDiceImage(DiceOne);
      break;
    case 2:
      setDiceImage(DiceTwo);
      break;
    case 3:
      setDiceImage(DiceThree);
      break;
    case 4:
      setDiceImage(DiceFour);
      break;
    case 5:
      setDiceImage(DiceFive);
      break;
    case 6:
      setDiceImage(DiceSix);
      break;
    default:
      setDiceImage(DiceOne);
  }
  ReactNativeHapticFeedback.trigger("impactLight", options);
}
  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImage}/>      
      <Pressable onPress={rollDiceOnTap}>
        <Text style={styles.rollDiceBtnText}>
        Roll The Dice {" "}
        </Text>
      </Pressable>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF2F2',
    alignItems: 'center',
    justifyContent: 'center'
  },
  diceContainer:{
    margin:12,
  },
  diceImage:{
    width:200,
    height:200, 
  },
  rollDiceBtnText:{
    padding:12,
    borderWidth:2,
    borderRadius:10,
    borderColor:'#E5E0FF',
    fontSize:16,
    fontWeight:'700',
    color:'#8EA7E9',
    textTransform:'uppercase',
  }
})