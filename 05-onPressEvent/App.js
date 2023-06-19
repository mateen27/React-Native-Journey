import { View , Text , Button } from "react-native";

function App(){

  function onPressHandler(val){
    console.warn(`Hey ${val} the Button is pressed!`);
  }

  const buttonHandler = ()=>{
    console.warn("Hello the Button has been Pressed!");
  }

  return(
    <View>
      {/* Text which will appear at the top of the Application */}
      <Text>Button & onPress Events in React Native!</Text>

      {/* Creating  a onPress Event on a Button which will console some value to the Screen! */}
      <Button title = "Press Me" onPress = {buttonHandler} color={'black'}/>

      {/* Passing some values through the Button */}
      <Button title = "Click Me" onPress = {()=>onPressHandler("Mateen")} color={'orange'}/>     
    </View>
  )
}

export default App;