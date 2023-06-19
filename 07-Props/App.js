import { useState } from "react";
import { View , Text , Button } from "react-native";

//Props helps in sharing Data from one component to another component

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
      <Text>Props in React Native!</Text>

      {/* Displaying the Name in the application using State */}
      <Text>Hello {name} welcome to the world of React Native</Text>

      {/* Updating the State Value using button Press Event! */}
      <Button title = "Click Me" onPress = {buttonHandler} color={'orange'}/>     

      {/* Using another component or calling another component  */}
      <UserData name={name}/>

      {/* Another Button which will change the Value of UserData Component using setName */}
      <Button title = "Click Me" onPress = {()=>setName('Ram Kapoor')} color={'orange'}/> 
    </View>
  )
}


function UserData(props){
  return (
    <View>
      <Text style = {{padding : 50 , backgroundColor : 'black' , color : 'white' , fontSize : 20}}>
        Hi {props.name} Welcome to another Component! 
      </Text>
    </View>
  )
}

export default App;