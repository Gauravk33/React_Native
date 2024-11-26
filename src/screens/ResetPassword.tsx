// import React from 'react'
// import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'


// const ResetPassword = () => {
//   return (
//     <View style={styles.container}>   
//      <Text style = {styles.Heading}>
//         Fogot Password?
//     </Text>
//       <Text style = {styles.subHeading}>
//         we just need your registered user name to sent your password reset instructions on your registered mail
//       </Text>

//       <TextInput
//         placeholder="User name"
//         placeholderTextColor="#888"
//         style={styles.input}
//       />
//             <TouchableOpacity style={styles.resetButton}>
//         <Text style={styles.resetText}>LOGIN</Text>
//       </TouchableOpacity>
//    </View>
//   )
// }

// export default ResetPassword


// const styles = StyleSheet.create({
//     container: {
//       display: "flex",
//       height: "100%",
//       backgroundColor: "#fff",
//       alignItems: "center",
//       justifyContent: 'center',
//       paddingHorizontal: 30, // Padding only affects the elements in the container, not the bottom image
//     },
//     Heading: {
//         display: 'flex',
//         fontSize: 24,
//         fontWeight: 500,
//         marginBottom: 14
//     },
//     subHeading: {
//         fontSize: 18,
//         // fontWeight : 400
//         paddingHorizontal: 12,
//         marginBottom: 20
//     },
//     input: {
//         width: "100%",
//         height: 50,
//         borderBottomWidth: 1,
//         borderBottomColor: "#ccc",
//         marginBottom: 30,
//         fontSize: 18,
//         color: "#000",
//       },
//       resetButton: {
//         width: "100%",
//         backgroundColor: "#007BFF",
//         borderRadius: 25,
//         justifyContent: "center",
//         alignItems: "center",
//         marginBottom: 30,
//         padding: 10,
//       },
//       resetText: {
//         color: "#fff",
//         fontSize: 16,
//         fontWeight: "bold",
//         paddingVertical: 10,
//       },

// })



import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

type RootStackParamList = {
  ChangePassword : undefined
 }

type ResetPasswordScreenNavigationProp = StackNavigationProp<RootStackParamList , 'ChangePassword'  >

const ResetPassword = () => {

  const navigation = useNavigation<ResetPasswordScreenNavigationProp>()

  const handleResetPassword = () => {
    navigation.navigate("ChangePassword")
  }
  return (
    <View style={styles.container}>   
      <Text style={styles.Heading}>
        Forgot Password?
      </Text>
      <Text style={styles.subHeading}>
        We just need your registered username to send your password reset instructions to your registered mail.
      </Text>

      <TextInput
        placeholder="Username"
        placeholderTextColor="#888"
        style={styles.input}
      />
      <TouchableOpacity style={styles.resetButton} onPress={handleResetPassword}>
        <Text style={styles.resetText}>Reset Password</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ResetPassword

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: 'flex-start', // Align content to the top
    paddingHorizontal: 30, 
    paddingTop: 40, // Adds some space from the top
    marginTop: 30
  },
  Heading: {
    fontSize: 30,
    fontWeight: '500',
    marginBottom: 14
  },
  subHeading: {
    fontSize: 18,
    paddingHorizontal: 10,
    marginBottom: 20,
    color: 'gray',
  },
  input: {
    width: "100%",
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 30,
    fontSize: 18,
    color: "#000",
  },
  resetButton: {
    width: "100%",
    backgroundColor: "#007BFF",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
    padding: 10,
  },
  resetText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    paddingVertical: 10,
  },
})
