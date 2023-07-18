import { Text, View } from 'react-native'
import React, { Component } from 'react'

export class Student extends Component {
  render() {
    return (
      <View>
        <Text  style = {{marginTop : 20 , fontSize : 20 , color : 'orange'}}>Student name : {this.props.name}</Text>
      </View>
    )
  }
}

export default Student