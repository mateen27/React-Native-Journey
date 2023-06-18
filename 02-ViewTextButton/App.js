import React from "react";
import {View , Text , Button} from 'react-native';

function App() {
  return (
    <View>
      <Text style={{fontSize : 20}}>Hello React Native <Text style={{fontSize : 50}}>My Name is Mateen</Text></Text>
      <Button title="Click Me!" color={'orange'}/>
    </View>
  )
}

export default App;