import { useState } from "react";
import { View , Text , Button , StyleSheet , TextInput } from "react-native";

function App(){

  const [name , setName] = useState('');

  return(
    <View>
      {/* Text which will appear at the top of the Application */}
        {/* Using Inline Styles for the Heading ! */}
      <Text style = {{marginTop : 50 , fontSize : 30 , textAlign: 'center' ,  color : 'blue' }}>Getiing Text Input Value in React Native!</Text>

      {/* Displaying The Name using the TextInput in React Native */}
      <Text style = {{marginTop : 50 , fontSize : 22 , textAlign: 'center' ,  color : 'black' }}>Hello {name} Welcome to the World of React Native</Text>

    {/* TextInput */}
    <TextInput 
    style = {styles.textInput}
    placeholder="Enter your Name"
    onChangeText={(value)=>setName(value)}
    value = {name}
    />

    {/* Clearing the value of Text Input Field and State on Button Click */}
    <Button title="Click Me" color = {'black'}
    onPress={()=>setName('')}
    />

    </View>
  )
}


const styles = StyleSheet.create({
  textInput : {
    marginTop : 50 ,
    marginBottom : 30 ,
    fontSize : 20 , 
    padding : 10 , 
    backgroundColor : 'white' , 
    color : 'black' , 
    marginTop : 10 , 
    borderRadius : 20 , 
    borderColor : 'black' ,
    borderWidth : 2
  }

})



export default App;