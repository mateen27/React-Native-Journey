import {View , Text, FlatList} from 'react-native';
import UserData from './component/UserData';

const App = () => {

  const users = [
    {
      id : 1 , 
      name : 'Shubh' , 
      age : 21 , 
      email : 'shubh@rediffmail.com'
    } , 
    {
      id : 2 , 
      name : 'Saleem' , 
      age : 23 , 
      email : 'saleem@gmail.com'
    } , 
    {
      id : 3 , 
      name : 'Shoaib' , 
      age : 24 , 
      email : 'shaoib@outlook.co.in'
    } , 
    {
      id : 4 , 
      name : 'Luv' , 
      age : 21 , 
      email : 'lub2002@gmail.com'
    }
  ];

  return (

    <View>
      <Text style = {{fontSize : 18 , marginTop : 20 , textAlign : 'center'}}>Component in Loop with FlatList In React Native!</Text>
      <FlatList
      data={users}
      key={users.id}
      renderItem={({item})=>{
        return (
          <UserData data={item}/>
        )
      }}
      />
    </View>
  )
}

export default App;