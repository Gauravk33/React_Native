// import { Picker } from '@react-native-picker/picker';
// import React, { useState } from 'react'
// import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
// import  Icon  from 'react-native-vector-icons/MaterialIcons';

// const RequestScreen = () => {
//     const [selectedProblem, setSelectedProblem] = useState("");

//   return (
//     <View style={styles.container}>   
//       <Text style={styles.Heading}>
//         What problems are you experiencing?
//       </Text>

//       <TextInput
//         placeholder="title"
//         placeholderTextColor="#888"
//         style={styles.input}
//       />
//             <Picker
//         selectedValue={selectedProblem}
//         onValueChange={(itemValue) => setSelectedProblem(itemValue)}
//         style={styles.picker}
//       >
//         <Picker.Item label="Select Apartments" value="" />
//         <Picker.Item label="Issue with login" value="login" />
//         <Picker.Item label="App crashing" value="crash" />
//         <Picker.Item label="Slow performance" value="performance" />
//         <Picker.Item label="Other" value="other" />
//       </Picker>

//       <TextInput
//         style={ styles.textArea}
//         placeholder="Write in detail here..."
//         multiline
//         numberOfLines={100}
//         // value={details}
//         // onChangeText={setDetails}
//       />

//    <View style = {{flexDirection: 'row', gap: 10}}>
//    <TextInput
//         placeholder="Attach files"
//         placeholderTextColor="#888"
//         style={styles.Attachfile}
//       />
//       {/* <Icon name='attach-file' size={35} /> */}
//             <TextInput
//         placeholder="Record Notes"
//         placeholderTextColor="#888"
//         style={styles.Attachfile}
//       />
//    </View>

//       <TouchableOpacity style={styles.resetButton}>
//         <Text style={styles.resetText}>SUBMIT</Text>
//       </TouchableOpacity>
//     </View>
//   )
// }

// export default RequestScreen

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: 'flex-start', // Align content to the top
//     paddingHorizontal: 30, 
//     paddingTop: 40, // Adds some space from the top
//     marginTop: 30
//   },
//   Heading: {
//     fontSize: 30,
//     fontWeight: '500',
//     marginBottom: 14
//   },
//   subHeading: {
//     fontSize: 18,
//     paddingHorizontal: 10,
//     marginBottom: 20,
//     color: 'gray',
//   },
//   input:{
//     backgroundColor: '#E8E8E8',
//     width:'100%',
//     height: 60,
//     paddingHorizontal: 20,
//     borderRadius: 100,
//     fontSize: 18,
//     marginBottom: 30

//    //  paddingVertical: 40
//    },
//    picker: {
//     backgroundColor: '#E8E8E8',
//     width: '100%',
//     height: 60,
//     paddingHorizontal: 20,
//     borderRadius: 100,
//     fontSize: 18,
//     marginBottom: 30,
//   },
//   resetButton: {
//     width: "100%",
//     backgroundColor: "#007BFF",
//     borderRadius: 25,
//     justifyContent: "center",
//     alignItems: "center",
//     marginBottom: 30,
//     padding: 8,  
//   },
//   textArea: {
//     textAlignVertical: 'top',
//     backgroundColor: '#E8E8E8',
//     width:'100%',
//     height: 200,
//     paddingHorizontal: 20,
//     borderRadius: 20,
//     fontSize: 18,
//     marginBottom: 30
//   },
//   resetText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "bold",
//     paddingVertical: 10,
//   },
//   Attachfile:{
//     backgroundColor: '#E8E8E8',
//     width:'50%',
//     height: 60,
//     paddingHorizontal: 20,
//     borderRadius: 100,
//     fontSize: 18,
//     marginBottom: 30
//   }
// })


import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const RequestScreen = () => {
  const [selectedProblem, setSelectedProblem] = useState("");

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <Text style={styles.Heading}>What problems are you experiencing?</Text>

        <TextInput
          placeholder="title"
          placeholderTextColor="#888"
          style={styles.input}
        />
        <Picker
          selectedValue={selectedProblem}
          onValueChange={(itemValue) => setSelectedProblem(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Select Apartments" value="" />
          <Picker.Item label="Issue with login" value="login" />
          <Picker.Item label="App crashing" value="crash" />
          <Picker.Item label="Slow performance" value="performance" />
          <Picker.Item label="Other" value="other" />
        </Picker>

        <TextInput
          style={styles.textArea}
          placeholder="Write in detail here..."
          multiline
          numberOfLines={100}
        />

        <View style={{ flexDirection: 'row', gap: 10 }}>
          <TextInput
            placeholder="Attach files"
            placeholderTextColor="#888"
            style={styles.Attachfile}
          />
          <TextInput
            placeholder="Record Notes"
            placeholderTextColor="#888"
            style={styles.Attachfile}
          />
        </View>

        <TouchableOpacity style={styles.resetButton}>
          <Text style={styles.resetText}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};  

export default RequestScreen;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1, // Ensures scrolling works correctly
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30, // Add some vertical spacing
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: 'flex-start',
    paddingHorizontal: 30,
    paddingTop: 40,
  },
  Heading: {
    fontSize: 30,
    fontWeight: '500',
    marginBottom: 14,
  },
  input: {
    backgroundColor: '#E8E8E8',
    width: '100%',
    height: 60,
    paddingHorizontal: 20,
    borderRadius: 100,
    fontSize: 18,
    marginBottom: 30,
  },
  picker: {
    backgroundColor: '#E8E8E8',
    width: '100%',
    height: 60,
    paddingHorizontal: 20,
    borderRadius: 100,
    fontSize: 18,
    marginBottom: 30,
  },
  resetButton: {
    width: "100%",
    backgroundColor: "#007BFF",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
    padding: 8,
  },
  textArea: {
    textAlignVertical: 'top',
    backgroundColor: '#E8E8E8',
    width: '100%',
    height: 200,
    paddingHorizontal: 20,
    borderRadius: 20,
    fontSize: 18,
    marginBottom: 30,
  },
  resetText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    paddingVertical: 10,
  },
  Attachfile: {
    backgroundColor: '#E8E8E8',
    width: '50%',
    height: 60,
    paddingHorizontal: 20,
    borderRadius: 100,
    fontSize: 18,
    marginBottom: 30,
  },
});
