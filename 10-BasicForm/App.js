import { useState } from "react";
import { View , Text , Button , StyleSheet , TextInput } from "react-native";

function App(){

  const [name , setName] = useState('');
  const [password , setPassword] = useState('');
  const [email , setEmail] = useState('');

  //state for making the Password Visible!
  const[disabledPassword , showPassword] = useState(true);

  //state for displaying the Data 
  const [data , displayData] = useState(false);

  //function for clearing the Data on Clear Button Press
  const clearData = ()=>{
    displayData(false);
    showPassword(true);
    setName('');
    setEmail('');
    setPassword('');
  }

  return(
    <View>
      {/* Text which will appear at the top of the Application */}
        {/* Using Inline Styles for the Heading ! */}
      <Text style = {{marginTop : 50 , fontSize : 30 , textAlign: 'center' ,  color : 'blue' }}>Basic Form in React Native!</Text>


    {/* TextInput for Name*/}
    <TextInput 
    style = {styles.textInput}
    placeholder="Enter your Name"
    onChangeText={(value)=>setName(value)}
    value = {name}
    />

    {/* TextInput for Password*/}
    <TextInput 
    style = {styles.textInput}
    placeholder="Enter your Password"
    onChangeText={(value)=>setPassword(value)}
    secureTextEntry = {disabledPassword}
    value = {password}
    />

    {/* TextInput for Email*/}
    <TextInput 
    style = {styles.textInput}
    placeholder="Enter your Email"
    onChangeText={(value)=>setEmail(value)}
    value = {email}
    />

    <View style = {{marginBottom : 10}}>  
      {/* Button for Printing the Data */}
      <Button title="Print Data" 
      onPress={()=>displayData(true)}
      />
    </View>

    <View style = {{marginBottom : 10}}>  
      {/* Button for Making Password Visible */}
      <Button title="Show Password" 
      onPress={()=>showPassword(false)}
      color={'orange'}
      />
    </View>

    {/* Button for Clearing the Data */}
    <Button title="Clear Data" color = {'black'}
    onPress={clearData}
    />

    {
      data ?
      <View>
        <Text style = {{fontSize : 20}}>User Name is : {name}</Text>
        <Text style = {{fontSize : 20}}>Password is : {password}</Text>
        <Text style = {{fontSize : 20}}>Email-ID is : {email}</Text>
      </View> 
      :null
    }

    </View>
  )
}


const styles = StyleSheet.create({
  textInput : {
    marginTop : 30 ,
    marginBottom : 10 ,
    fontSize : 20 , 
    padding : 10 , 
    backgroundColor : 'white' , 
    color : 'black' , 
    marginTop : 10 , 
    borderRadius : 15 , 
    borderColor : 'black' ,
    borderWidth : 2
  }

})



export default App;