import {View , Text, SectionList} from 'react-native';

const App = () => {

  const users = [
    {
      id : 1 , 
      name : 'Shubh' , 
      age : 21 , 
      email : 'shubh@rediffmail.com',
      data : ['Angular' , 'C#' , '.NET']
    } , 
    {
      id : 2 , 
      name : 'Saleem' , 
      age : 23 , 
      email : 'saleem@gmail.com' ,
      data : ['ReactNative' , 'Firebase' , 'SQL']
    } , 
    {
      id : 3 , 
      name : 'Shoaib' , 
      age : 24 , 
      email : 'shaoib@outlook.co.in',
      data : ['Java' , 'JS' , 'SQL']
    } , 
    {
      id : 4 , 
      name : 'Luv' , 
      age : 21 , 
      email : 'lub2002@gmail.com' , 
      data : ['Java' , 'MERN']
    }
  ];

  return (

    <View>
      <Text style = {{fontSize : 22 , marginTop : 20 , textAlign : 'center'}}>SectionList In React Native!</Text>
      {/* used for the nested array */}
      <SectionList
      sections={users}
      renderItem={({item})=> {
        return <Text style = {{fontSize : 18 , marginLeft : 20}}>
          {item}
        </Text>
      }}
      renderSectionHeader={({section:{name}})=>(
        <Text style = {{fontSize : 25}}>{name}</Text>
      )}
      />
    </View>
  )
}

export default App;