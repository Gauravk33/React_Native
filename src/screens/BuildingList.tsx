import React from 'react';
import { View, FlatList, Text, Image, TouchableOpacity, StyleSheet, ListRenderItemInfo } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Building {
  id: string;
  name: string;
  image: any; // You can also specify the type of image if necessary (e.g., ImageSourcePropType)
  status: string;
}

const data: Building[] = [
  {
    id: '1',
    name: 'AL MULLA',
    image: require('../../assets/buildingImg.jpg'), // Replace with your image path
    status: 'Pending',
  },
  {
    id: '2',
    name: 'Ghanim Al',
    image: require('../../assets/buildingImg.jpg'), // Replace with your image path
    status: 'Pending',
  },
  {
    id: '3',
    name: 'Burwaz',
    image: require('../../assets/buildingImg.jpg'), // Replace with your image path
    status: 'Pending',
  },
];

const BuildingList: React.FC = () => {
  const renderItem = ({ item }: ListRenderItemInfo<Building>) => (
    <TouchableOpacity style={styles.itemContainer}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.status}>{item.status}</Text>
        
      </View>
      {/* <Text style={styles.arrow}>→</Text> */}
      <Icon name="chevron-right" color="#000" size={35} />
      </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 5,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center', // Ensures the text is vertically centered
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  status: {
    fontSize: 14,
    color: '#888',
  },
  arrow: {
    fontSize: 20,
    color: '#888',
    marginLeft: 10, // Ensures arrow is not right next to the text
  },
});

export default BuildingList;
