import React from "react";
import {View , Text} from 'react-native';

function App() {
  let name = "Peter";
  let age = 29;
  let bloodGroup = "b+";
  return (
    <View>
      {/* JSX is know as JavaScript Extension 
        It is basically used to write Js Code with the Native Code
      */}
      <Text>JSX in React Native</Text>
      <Text style = {{fontSize : 30}}>Hello My Name is {name}</Text>
      <Text style = {{fontSize : 30}}>My Age is {age}</Text>
      <Text style = {{fontSize : 30}}>My Blood Group is {bloodGroup}</Text>

      {/* Using conditional Statements using JSX */}
      {
        age >= 30 ?
        <Text>You are Eligible! </Text> 
        :
        <Text>You are not Eligible!</Text>
      }
    </View>
  )
}

export default App;