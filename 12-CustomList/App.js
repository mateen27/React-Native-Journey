import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const users = [
  { id: 1, name: 'Shubh' },
  { id: 2, name: 'Lobe' },
  { id: 3, name: 'Shubham' },
  { id: 4, name: 'Jasleen' },
  { id: 5, name: 'Jaspreet' },
  { id: 6, name: 'Arshveer' },
  { id: 7, name: 'Mahendra' }
];

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={{ marginTop: 50, fontSize: 25 }}>FlatList in React Native!</Text>

{/* Making The Custom List with Map Function and adding ScrollView to it!  */}
      <ScrollView>
        {users.map((item) => (
          <Text key={item.id} style={styles.list}>
            {item.name}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    padding: 20,
    backgroundColor: 'black',
    color: 'white',
    fontSize: 20,
    margin: 10,
    borderRadius: 10
  }
});

export default App;
