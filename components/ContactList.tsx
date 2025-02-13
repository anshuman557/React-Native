import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ContactList = () => {
    const contacts=[
        {
           uid:1,
           name:'Anshuman Singh',
           status:'Software Developer',
           imageUrl:'https://img.freepik.com/free-vector/blond-man-with-eyeglasses-icon-isolated_24911-100831.jpg?t=st=1739469381~exp=1739472981~hmac=62bd977e02a10d6c99177c8edac68bd4b9fff02afdfc64d2fe5b94b18513059c&w=740',
        },
        {
           uid:2,
           name:'John Doe',
           status:'Software Developer',
           imageUrl:'https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?t=st=1739469451~exp=1739473051~hmac=16246e207500d6220f14f11f6434980b9ade5618e52bf314989ac7bfa533fe46&w=740',
        },
        {
           uid:3,
           name:'Anny',
           status:'Software Developer',
           imageUrl:'https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?t=st=1739469451~exp=1739473051~hmac=16246e207500d6220f14f11f6434980b9ade5618e52bf314989ac7bfa533fe46&w=740',
        },
        {
            uid:4,
            name:'Mark Doe',
            status:'Software Developer',
            imageUrl:'https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?t=st=1739469451~exp=1739473051~hmac=16246e207500d6220f14f11f6434980b9ade5618e52bf314989ac7bfa533fe46&w=740',
        }

    ]
  return (
    <View>
      <Text style={styles.headerText}>ContactList</Text>
      <ScrollView 
      scrollEnabled={false}
      style={styles.container} >
        {contacts.map(({uid,name,status,imageUrl}) => (
            <View key={uid} style={styles.userCard}>
                <Image
                source={{uri: imageUrl}}
                style={styles.userImage}
                />
                <View>
                <Text style={styles.userName}>{name}</Text>
                <Text style={styles.userStatus}>{status}</Text>
                </View>
            </View>
        ))}
      </ScrollView>
    </View>
  )
}

export default ContactList;

const styles = StyleSheet.create({
    headerText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal:8,
        margin: 20
    },
    container: {
        paddingHorizontal: 16,
        marginBottom: 4,
    },
    userCard: {
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
        backgroundColor: 'gray',
        padding: 10,
        borderRadius: 10,
        elevation: 5,
        shadowOffset: {width: 5, height: 5},
        shadowOpacity: 0.5,
        
    },
    userImage: {
        width:60,
        height:60, 
        borderRadius:60/2,
        marginRight: 14,
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    userStatus: {
        fontSize: 14,
        color: 'white',
    } 
})