import {View , Text, StyleSheet} from 'react-native';

const App = () => {
  return (

    <View>
      <Text style = {{fontSize : 20 , marginTop : 20 , marginLeft : 85}}>Grid In React Native!</Text>
      <View style = {{flex : 1 , flexDirection : 'row' , flexWrap : 'wrap' , justifyContent : 'center' , marginTop : 50}}>

          <Text style = {style.cards}>Sam</Text>
          <Text style = {style.cards}>Peter</Text>
          <Text style = {style.cards}>Ridz</Text>
          <Text style = {style.cards}>Barak</Text>
          <Text style = {style.cards}>Barak</Text>

      </View>
    </View>
  )
}


const style = StyleSheet.create ({
  cards : {
    padding : 20 ,
    margin : 10 ,
    backgroundColor : 'blue' , 
    color : 'white' , 
    fontSize : 20 , 
    borderRadius : 10
  }
})

export default App;