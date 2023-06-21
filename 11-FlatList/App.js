import {View , Text , StyleSheet , FlatList} from 'react-native';

// creating array of objects
const users = [
  {
    id : 1 , 
    name : 'Shubh'
  } ,
  {
    id : 2 , 
    name : 'Lobe'
  } , 
  {
    id : 3 , 
    name : 'Shubham'
  } ,
  {
    id : 4 ,
    name : 'Jasleen'
  }
]

const App = () => {
  return (
    <View>
      <Text style = {{marginTop : 50 , fontSize : 25}}>FlatList in React Native!</Text>

      {/* Using FlatList in React Native */}
      <FlatList
      data={users}
      renderItem={({item})=><Text style = {styles.list}>{item.name}</Text>}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  list : {
    padding : 20 , 
    backgroundColor : 'black' , 
    color : 'white' , 
    fontSize : 20 , 
    margin : 10 , 
    borderRadius : 10 , 
  }
})

export default App