import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const UpdatePassword = () => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Old Password"
        placeholderTextColor="#888"
        style={styles.input}
      />
      <TextInput
        placeholder="New Password"
        placeholderTextColor="#888"
        style={styles.input}
      />
      <TextInput
        placeholder="Confirm Password"
        placeholderTextColor="#888"
        style={styles.input}
      />

      <TouchableOpacity style={styles.UpdateButton}>
        <Text style={styles.UpdateText}>Update Password</Text>
      </TouchableOpacity>
    </View>
  );
};
 
export default UpdatePassword;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 30,
    paddingVertical: 30,
    // margin: 10
  },
  input: {
    backgroundColor: '#E8E8E8',
    width: '100%',
    height: 60,
    paddingHorizontal: 20,
    borderRadius: 100,
    fontSize: 18,
    marginBottom: 30,

    //  paddingVertical: 40
  },
  UpdateButton: {
    width: '100%',
    backgroundColor: '#007BFF',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    // marginBottom: 30,
    padding: 10,
  },
  UpdateText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 600,
    paddingVertical: 5,
  },
});
