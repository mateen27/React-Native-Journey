import { View, Text , StyleSheet } from 'react-native'
import React from 'react'

const UserData = (prop) => {
    //fetching the data using props
    const item = prop.data;
  return (
    <View style = {styles.box}>
          <Text style = {styles.item}>{item.name}</Text>
          <Text style = {styles.item}>{item.email}</Text>
    </View>
  )
}

export default UserData

const styles = StyleSheet.create ({
    item : {
      padding : 5 ,
      margin : 2 , 
      color : 'orange' , 
      fontSize : 16 ,
      flex : 1, 
      fontWeight : '500' , 
      textAlign : 'center'
    } , 
    box : {
      flexDirection : 'row' , 
      borderWidth : 2 , 
      borderColor : '#dadada' , 
      marginBottom : 10
    }
  })

//   we can use custom component in flatList