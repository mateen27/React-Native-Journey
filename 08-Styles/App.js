import { View , Text , Button , StyleSheet } from "react-native";
import style from './styles/style'

function App(){

  return(
    <View>
      {/* Text which will appear at the top of the Application */}
        {/* Using Inline Styles for the Heading ! */}
      <Text style = {{marginTop : 50 , fontSize : 30 , textAlign: 'center' ,  color : 'blue' }}>Styles in React Native!</Text>

    {/* Using Internal Styles for the below Text Component  --> imported StyleSheet from the react-native*/}
      <Text style = {styles.text}>Hello welcome to the world of React Native</Text>  

    {/* Using External Styles for the Below Component! */}
      <Text style = {style.textBox}>Hope you are doing good</Text>  

    </View>
  )
}


const styles = StyleSheet.create({
  text : {
    fontSize : 20 , 
    padding : 15 , 
    backgroundColor : 'lightblue' , 
    color : 'black' , 
    marginTop : 10 , 
    borderRadius : 20
  }

})



export default App;