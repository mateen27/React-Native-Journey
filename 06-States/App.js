import { useState } from "react";
import { View , Text , Button } from "react-native";

function App(){

  //Creating a name State --> Default value of State is Raman
  const [name , setName] = useState('Raman');

  //updating the State inside of this Function!
  const buttonHandler = ()=>{
    setName("Mateen");
  }

  return(
    <View>
      {/* Text which will appear at the top of the Application */}
      <Text>States in React Native!</Text>

      {/* Displaying the Name in the application using State */}
      <Text>Hello {name} welcome to the world of React Native</Text>

      {/* Updating the State Value using button Press Event! */}
      <Button title = "Click Me" onPress = {buttonHandler} color={'orange'}/>     
    </View>
  )
}

export default App;