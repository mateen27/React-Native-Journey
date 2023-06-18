import {View , Text} from 'react-native';

const App = ()=>{
  return (
    // View is same as the div tag of the Web
    <View>
      {/* Text is like p or span tag */}
      <Text style={{fontSize : 20}}>Hello React Native</Text>
    </View>
  )
}

export default App;

//React Native always generate Native Application not Hybrid Application