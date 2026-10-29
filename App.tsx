import React, { useState } from "react"; 
import { StyleSheet, Text, TextInput, View } from "react-native"; 
 
export default function App() { 
  const [age, setAge] = useState<string>("") 
  const ageAsNumber: number = !isNaN(Number(age)) === true ? Number(age) : 0 
  var lower = 0
  var upper = 0

  if (ageAsNumber > 0)
  {
    lower = (220 - ageAsNumber) * 0.65
    upper = (220 - ageAsNumber) * 0.85
  }
 
  return ( 
    <View style={styles.container}> 
      <Text style={styles.heading}>Heart Rate Limits Calculator</Text> 
      <Text>Enter your age:</Text> 
      <TextInput  
        style={styles.input}
        keyboardType="number-pad"  
        value={age}  
        onChangeText={setAge}  
      /> 
      <Text style={styles.text}>Lower limit: {lower} bpm</Text> 
      <Text style={styles.text}>Upper limit: {upper} bpm</Text> 
    </View> 
  ); 
} 
 
const styles = StyleSheet.create({ 
  container: { 
    flex: 1, 
    margin: 16 
  }, 
  heading: { 
    fontSize: 24, 
    marginTop: 32, 
    marginBottom: 16 
  }, 
  text: { 
    marginVertical: 16 
  }, 
  input: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
  }
});
