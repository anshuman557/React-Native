import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.headigText}>Trending Places</Text>
      <View style={[styles.card,styles.cardElevated]}>
      {/* <Image source={{uri: 'https://reactjs.org/logo-og.png'}} */}
      <Image source={{uri: 'https://imgs.search.brave.com/sH-HHNF_C3qlo_a0t2gI8yQ6dcARp48JPw36aM4ko5I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA4LzU1LzU4Lzg3/LzM2MF9GXzg1NTU4/ODc2NV85RU1TVXgy/YzdiRTAwVkRaSWhm/ZDEyQkdZbXRYYVJo/MC5qcGc'}}
       style={styles.cardImage} />

       <View style={styles.cardBody}>
        <Text style={styles.cardTitle}>Amber Fort</Text>
        <Text style={styles.cardLabel}>Jaipur,Pink City</Text>
        <Text style={styles.cardDescription}>The Amber Fort is a fort located in Amer, Rajasthan, India. Amber is a town with an area of 4 square kilometres located 11 kilometres from Jaipur, the capital of Rajasthan. Located high on a hill, it is the principal tourist attraction in Jaipur.
        </Text>
        <Text style={styles.cardFooter}>12 mins away</Text>
       </View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 10,

  },
    headigText:{
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 10,
    },
    card:{
      width: 350,
      height: 380,
      borderRadius:10,
      marginVertical: 12,
      marginHorizontal: 16,

    },
    cardElevated:{
      backgroundColor: '#FFFFFF',
      elevation: 5,
      shadowOffset: {width: 1, height: 1},
    },
    cardImage:{
        height: 200,
        marginBottom: 10,
        borderTopLeftRadius: 10,  
        borderTopRightRadius: 10,
    },
    cardBody:{
      flex: 1,
      flexGrow: 1,
      paddingHorizontal: 12,
    },
    cardTitle:{
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 2,

    } ,
    cardLabel:{
      fontSize: 14,
      marginBottom:6,
    },
    cardDescription:{
      fontSize: 12,
      marginBottom:12,
      marginTop: 4,
      color:'#242B2E'
      // flexShrink: 1,
    },
    cardFooter:{
      fontSize: 12,

    }
})