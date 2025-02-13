import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal={true}>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>Me</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>To</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>Scroll</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>more...</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>😋</Text>
        </View>

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
    },
    container:{
        backgroundColor: '#F5F5F5',
        padding: 10,

    },
    card:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        margin: 10,
        width: 100,
        height: 100,
    },
    cardElevated:{
        backgroundColor: '#CAD5E2',
        elevation: 5,
        shadowOffset: {width: 5, height: 5},
        shadowColor: '#333',
        shadowOpacity: 0.5,
        shadowRadius: 10,
    },
    
})