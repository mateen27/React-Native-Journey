import { Button, Text, TextInput, View } from 'react-native'
import React, { Component } from 'react'
import Student from './component/Student';

export default class App extends Component {

  greetUser = (item) => {
    this.setState({
      name : item
    })
  }
  constructor() {
    super();
    this.state = {
      name : ''
    }
  };
  render() {
    return (
      <View>
        <Text style = {{fontSize : 25 , textAlign : 'center' , marginTop : 20 , marginBottom : 30}}>States and Props in Class Component</Text>
        <Text style = {{marginTop : 20 , fontSize : 25 , color : 'orange'}}>Hi {this.state.name}</Text>
        <TextInput placeholder='Enter your value' onChangeText={(item)=> {
          this.greetUser(item)
        }}/>
        {/* passing props in Class Component */}
        <Student name = {this.state.name}/>
      </View>
    )
  }
}