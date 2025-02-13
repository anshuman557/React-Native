import { Image, Linking, StyleSheet, Text, TouchableOpacity, View }from 'react-native'
import React from 'react'

const ActionCard = () => {
    function openWebSite(websiteLink: string) {
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card,styles.elevatedCard]}>
        <View style={styles.headingContainer}>
            <Text style={styles.headerText}>
                Whats new in React Native 0.64
            </Text>
        </View>
        <Image
        source={{uri: 'https://reactjs.org/logo-og.png',}}
        style={styles.cardImage}
        />
        <View  style={styles.bodyContainer}>
            <Text numberOfLines={3}>
                React Native 0.64 is now available. This release includes many new features, improvements and bug fixes. 
                Here are some highlights from this release. 
                You can view the full changelog here.
            </Text> 
        </View>
        <View  style={styles.footerContainer}>
            <TouchableOpacity onPress={() => openWebSite('https://reactnative.dev/blog/2021/03/12/version-0.64')}>
                <Text  style={styles.socialLinks} >Read More</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openWebSite('https://www.linkedin.com/in/anshuman-singh-83b3ba200/')}>
                <Text style={styles.socialLinks}>Follow me</Text>
            </TouchableOpacity>
        </View>
        
      </View>
    </View>
  )
}

export default ActionCard

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal:8,
        margin: 20
    },
    card:{
        width: 350,
        height: 380,
        borderRadius: 10,
        marginVertical: 12,
        marginHorizontal: 16,
    },
    elevatedCard:{
        backgroundColor:'#2596be',
        elevation: 5,
        shadowOffset: {width: 1, height: 1},
        shadowColor: 'white',
        shadowOpacity: 0.5,
    },
    headingContainer:{
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText:{
        color: 'white',
        fontSize: 20,
        fontWeight:'600',
    },
    cardImage:{
        height: 200,
    },
    bodyContainer:{
        padding: 10, 
    },
    footerContainer:{
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    socialLinks:{
        fontSize: 16,
        color: '#2596be',
        backgroundColor: 'white',        
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 10,
    }
})