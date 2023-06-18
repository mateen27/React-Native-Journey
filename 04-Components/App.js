import React from "react";
import {View , Text} from 'react-native';
import CompanyData from "./components/CompanyData";

function App() {
  return (
    <View>
      <Text style = {{fontSize : 30}}>
        Components in React JS
      </Text>

      {/* Component in Same File */}
      <UserData/>

      {/* Components -> imported from external File */}
      <CompanyData/>
    </View>
  )
}

const UserData = ()=>{
  return(
  <View>
    <Text style = {{fontSize : 20}}>Name : Mateen</Text>
    <Text style = {{fontSize : 20}}>Age : 20</Text>
    <Text style = {{fontSize : 20}}>City : Bareilly</Text>
  </View>
  )
}


export default App;