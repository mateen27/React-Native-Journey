import { Button, Text, View } from 'react-native'
import React, { Component } from 'react'
import Student from './component/Student';

export default class App extends Component {

  greetingMessage = () => {
    console.warn('Hello Friend!');
  }

  render() {
    return (
      <View>
        <Text style = {{fontSize : 25 , textAlign : 'center' , marginTop : 20 , marginBottom : 30}}>Class Component in React Native!</Text>
        <Button title='Press Me!' onPress={this.greetingMessage}/>
        {/* Calling the component */}
        <Student/>
      </View>
    )
  }
}