// import React from 'react'
// import { Image, StyleSheet, Text, View } from 'react-native'
// import Icon from 'react-native-vector-icons/MaterialIcons';

// const EmergencyContacts = () => {
//   return (
//     <View style = {styles.container}>
//         <View style = {styles.itemContainer}>
//             <View style={{ flexDirection:'row' ,alignItems:'center' ,gap: 10}}>
//             <Image
//         source={require('../../assets/bottomImg.jpg')} // Replace with your logo's path
//         style={styles.logo}
//       />
//       <View>
//       <Text style={styles.Heading}>
//         Office
//        </Text>
//        <Text style={styles.Heading}>
//        Al Khattal , Al Qusais
//        </Text>
//       </View>
//             </View>

//       <View style = {styles.Icon}>
//         <Icon name='call' color="#0066CC" size={45}></Icon>
//       </View>

//         </View>

//         <View style = {styles.itemContainer}>
//             <View style={{ flexDirection:'row' ,alignItems:'center' ,gap: 10}}>
//             <Image
//         source={require('../../assets/bottomImg.jpg')} // Replace with your logo's path
//         style={styles.logo}
//       />
//       <View>
//       <Text style={styles.Heading}>
//         Office
//        </Text>
//        <Text style={styles.Heading}>
//        Al Khattal , Al Qusais
//        </Text>
//       </View>
//             </View>

//       <View style = {styles.Icon}>
//         <Icon name='call' color="#0066CC" size={45}></Icon>
//       </View>

//         </View>
//     </View>
//   )
// }

// export default EmergencyContacts

// const styles = StyleSheet.create({
//     container:{
//         justifyContent:'center',
//         alignItems: 'center',
//         padding: 10,
//         marginVertical: 10
//     },
//     itemContainer:{
//       backgroundColor: "#F0F0F0",
//       width: '100%',
//       paddingHorizontal: 20,
//       paddingVertical: 20,
//       elevation: 8,
//       flexDirection: 'row',
//       alignItems: 'center',
//       justifyContent: 'space-between',
//       gap: 10,
//       borderRadius: 15,
//       marginBottom: 20
//     },
//     logo: {
//         borderRadius: 999,
//         width: 70,
//         height: 70,
//       },
//       Heading:{
//         fontSize: 18,
//         fontWeight: 400,
//       },
//       Icon:{
//         alignItems:'center',
//       }
// })

import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
  ScrollView,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Define the structure of each contact item
interface Contact {
  officeName: string;
  address: string;
  logoSource: ImageSourcePropType;
}

// Example contact data (can be fetched from an API or database)
const contactData: Contact[] = [
  {
    officeName: 'Office',
    address: 'Al Khattal, Al Qusais',
    logoSource: require('../../assets/bottomImg.jpg'),
  },
  {
    officeName: 'A.K',
    address: 'Al Khattal, Al Qusais',
    logoSource: require('../../assets/bottomLogo.jpeg'),
  },
  {
    officeName: 'Mahmoud Mahmoud',
    address: 'Al Khattal, Al Qusais',
    logoSource: require('../../assets/bottomImg.jpg'),
  },

  {
    officeName: 'Office',
    address: 'Al Khattal, Al Qusais',
    logoSource: require('../../assets/bottomLogo.jpeg'),
  },

  // Add more contacts as needed
];

const EmergencyContacts: React.FC = () => {
  const renderItem = ({item}: {item: Contact}) => (
    <View style={styles.itemContainer}>
      <View style={styles.itemLeft}>
        <Image source={item.logoSource} style={styles.logo} />
        <View>
          <Text style={styles.Heading}>{item.officeName}</Text>
          <Text style={styles.Heading}>{item.address}</Text>
        </View>
      </View>
      <View style={styles.Icon}>
        <Icon name="call" color="#0066CC" size={45} />
      </View>
    </View>
  );

  return (
    <FlatList
      data={contactData}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={styles.container}
    />
  );
};

export default EmergencyContacts;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginVertical: 10,
  },
  itemContainer: {
    backgroundColor: '#F0F0F0',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 20,
    elevation: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 15,
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  logo: {
    borderRadius: 999,
    width: 70,
    height: 70,
  },
  Heading: {
    fontSize: 18,
    fontWeight: '400',
  },
  Icon: {
    alignItems: 'center',
  },
});
