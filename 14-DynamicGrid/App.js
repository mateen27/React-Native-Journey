import {View , Text, StyleSheet} from 'react-native';

const App = () => {

  const users = [
    { id: 1, name: 'Shubh' },
    { id: 2, name: 'Lobe' },
    { id: 3, name: 'Shub' },
    { id: 4, name: 'Jasleen' },
    { id: 5, name: 'Jaspreet' },
    { id: 6, name: 'Arshveer' },
    { id: 7, name: 'Mahendra' }
  ];

  return (

    <View>
      <Text style = {{fontSize : 20 , marginTop : 20 , marginLeft : 85}}>Grid In React Native!</Text>
      <View style = {{flex : 1 , flexDirection : 'row' , flexWrap : 'wrap' , justifyContent : 'center' , marginTop : 50}}>

          {
            users.map((items) => (
            <Text key={items.id} style = {style.cards}>
              {items.name}
            </Text>)
            )
          }

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