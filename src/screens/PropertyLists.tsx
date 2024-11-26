import React from 'react';
import { FlatList, Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native';

// Define a TypeScript type for the property data
type Property = {
  id: string;
  title: string;
  count: number;
  image: ImageSourcePropType;
};

// Sample property data
const properties: Property[] = [
  {
    id: '1',
    title: 'AL Khattal, AI',
    count: 0,
    image: require('../../assets/buildingImg.jpg'),
  },
  {
    id: '2',
    title: 'Downtown Views',
    count: 2,
    image: require('../../assets/propertyImg.jpg'),
  },
  {
    id: '3',
    title: 'Ocean Drive Villas',
    count: 5,
    image: require('../../assets/propertyImg.jpg'),
  },
  {
    id: '4',
    title: 'Sunset Heights',
    count: 5,
    image: require('../../assets/buildingImg.jpg'),
  },
];

const PropertyLists: React.FC = () => {
  const renderItem = ({ item }: { item: Property }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.logo} resizeMode="cover" />
      <Text style={styles.heading}>{item.title}</Text>
      <Text style={styles.subheading}>{item.count}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Property Lists</Text>
      <FlatList
        data={properties}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default PropertyLists;

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  card: {
    width: '45%',
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 5,
    marginHorizontal: 5,
    marginBottom: 20,
    overflow: 'hidden',
  },
  logo: {
    width: '100%',
    height: 150,
  },
  heading: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
    paddingHorizontal: 10,
    marginTop: 5
  },
  subheading: {
    fontSize: 14,
    fontWeight: '400',
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
});
