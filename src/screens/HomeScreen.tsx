// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   FlatList,
//   Image,
//   ListRenderItemInfo,
//   ScrollView,
// } from 'react-native';

// // Type definition for the data items
// interface Item {
//   id: string;
//   text: string;
//   location: string;
//   date: string;
//   status: string;
// }

// const HomeScreen: React.FC = () => {
//   const [status, setStatus] = useState<string>('Pending'); // Tab state

//   // Sample data
//   const data: Item[] = [
//     { id: '1', text: 'hi', location: 'G1 , Al Khattal , Al Qusais', date: '2024-11-18', status: 'Pending' },
//     { id: '2', text: 'hi', location: 'G1 , Al Khattal , Al Qusais', date: '2024-11-18', status: 'Pending' },
//     { id: '3', text: 'hi', location: 'G1 , Al Khattal , Al Qusais', date: '2024-11-18', status: 'Pending' },
//     { id: '4', text: 'hi', location: 'G1 , Al Khattal , Al Qusais', date: '2024-11-18', status: 'Pending' },
//   ];

//   // Function to render each item in the list
//   const renderItem = ({ item }: ListRenderItemInfo<Item>) => (
//     <View style={styles.itemContainer}>
//       <View>
//         <Text style={styles.itemTextHeading}>{item.text}</Text>
//         <Text style={styles.itemTextlocation}>{item.location}</Text>
//       </View>

//       <View style={styles.itemSubContainer}>
//         <Text style={styles.itemTextDate}>{item.date}</Text>
//         <Text style={[styles.statusText, { color: getStatusColor(item.status) }]}>
//           Status: {item.status}
//         </Text>
//       </View>
//     </View>
//   );

//   // Function to dynamically return color for status
//   const getStatusColor = (status: string) => {
//     switch (status) {
//       case 'Pending':
//         return 'red'; // red
//       case 'Requested':
//         return '#0066cc'; // blue
//       case 'Completed':
//         return '#33cc33'; // green
//       default:
//         return 'red';
//     }
//   };

//   return (
//     <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1 }}>
//       {/* Logo and Description */}
//       <View style={styles.header}>
//         <Image source={require('../../assets/LogoImage.png')} style={styles.logo} />
//         <Text style={styles.description}>
//           Acclaimed as one of the leading real estate consultancy companies throughout 2 decades of experience in the UAE,
//           Al Khattal Real Estate has provided a wide range of professional services supported by qualified and experienced
//           teams of engineers, consultants, marketing, and property management professionals.
//         </Text>
//       </View>

//       {/* Tab Buttons */}
//       <View style={styles.tabContainer}>
//         <TouchableOpacity
//           style={[styles.tab, status === 'Pending' && styles.activeTab]}
//           onPress={() => setStatus('Pending')}
//           activeOpacity={0.7}
//         >
//           <Text style={styles.tabText}>Pending</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[styles.tab, status === 'Requested' && styles.activeTab]}
//           onPress={() => setStatus('Requested')}
//           activeOpacity={0.7}
//         >
//           <Text style={styles.tabText}>Requested</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[styles.tab, status === 'Completed' && styles.activeTab]}
//           onPress={() => setStatus('Completed')}
//           activeOpacity={0.7}
//         >
//           <Text style={styles.tabText}>Completed</Text>
//         </TouchableOpacity>
//       </View>

//       {/* List of Items */}
//       <FlatList
//         data={data.filter((item) => item.status === status)}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id}
//         ListEmptyComponent={<Text style={styles.emptyMessage}>No items to display for this status.</Text>}
//         style={{ flexGrow: 1 }}
//         scrollEnabled={false} // Allows the outer ScrollView to handle scrolling
//       />
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingHorizontal: 10,
//     backgroundColor: '#fff',
//   },
//   header: {
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   logo: {
//     width: 200,
//     height: 150,
//     marginBottom: 10,
//   },
//   description: {
//     textAlign: 'center',
//     fontSize: 20,
//     lineHeight: 30,
//     marginBottom: 20,
//   },
//   tabContainer: {
//     flexDirection: 'row',
//     // justifyContent: 'space-between',
//     marginBottom: 20,
//     gap: 4,
//   },
//   tab: {
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     backgroundColor: '#007BFF',
//     borderRadius: 5,
//   },
//   activeTab: {
//     backgroundColor: '#0056b3',
//   },
//   tabText: {
//     color: '#fff',
//     fontSize: 16,
//   },
//   itemContainer: {
//     flexDirection: 'column',
//     padding: 16,
//     backgroundColor: '#f8f8f8',
//     elevation: 6,
//     marginBottom: 10,
//     borderRadius: 5,
//   },
//   itemSubContainer: {
//     flexDirection: 'row',
//     width: '100%',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginTop: 8,
//   },
//   itemTextHeading: {
//     fontSize: 18,
//     color: '#333',
//     marginBottom: 4,
//     fontWeight: '700',
//   },
//   itemTextlocation: {
//     marginBottom: 4,
//     fontSize: 18,
//   },
//   itemTextDate: {
//     fontSize: 16,
//     color: '#555',
//     // width: '65%',
//     textAlign: 'left',
//   },
//   statusText: {
//     fontSize: 14,
//     color: '#333',
//     marginTop: 5,
//     // width: '30%',
//     textAlign: 'right',
//   },
//   emptyMessage: {
//     textAlign: 'center',
//     fontSize: 18,
//     color: '#999',
//     marginTop: 20,
//   },
// });

// export default HomeScreen;






import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

// Type definition for the data items
interface Item {
  id: string;
  text: string;
  location: string;
  date: string;
  status: string;
}

const HomeScreen: React.FC = () => {
  const [index, setIndex] = useState(0); // Current tab index
  const [routes] = useState([
    { key: 'pending', title: 'Pending' },
    { key: 'requested', title: 'Requested' },
    { key: 'completed', title: 'Completed' },
  ]);

  // Sample data
  const data: Item[] = [
    { id: '1', text: 'hi', location: 'G1, Al Khattal, Al Qusais', date: '2024-11-18', status: 'Pending' },
    { id: '2', text: 'hi', location: 'G1, Al Khattal, Al Qusais', date: '2024-11-18', status: 'Requested' },
    { id: '3', text: 'hi', location: 'G1, Al Khattal, Al Qusais', date: '2024-11-18', status: 'Completed' },
    { id: '4', text: 'hi', location: 'G1, Al Khattal, Al Qusais', date: '2024-11-18', status: 'Pending' },
  ];

  // Function to render items in the list
  const renderItem = ({ item }: { item: Item }) => (
    <View style={styles.itemContainer}>
      <View>
        <Text style={styles.itemTextHeading}>{item.text}</Text>
        <Text style={styles.itemTextLocation}>{item.location}</Text>
      </View>
      <View style={styles.itemSubContainer}>
        <Text style={styles.itemTextDate}>{item.date}</Text>
        <Text style={[styles.statusText, { color: getStatusColor(item.status) }]}>
          Status: {item.status}
        </Text>
      </View>
    </View>
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Pending':
        return 'red';
      case 'Requested':
        return '#0066cc';
      case 'Completed':
        return '#33cc33';
      default:
        return '#333';
    }
  };

  // Scenes for each tab
  const Pending = () => (
    <FlatList
      data={data.filter((item) => item.status === 'Pending')}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      ListEmptyComponent={<Text style={styles.emptyMessage}>No pending items.</Text>}
    />
  );

  const Requested = () => (
    <FlatList
      data={data.filter((item) => item.status === 'Requested')}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      ListEmptyComponent={<Text style={styles.emptyMessage}>No requested items.</Text>}
    />
  );

  const Completed = () => (
    <FlatList
      data={data.filter((item) => item.status === 'Completed')}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      ListEmptyComponent={<Text style={styles.emptyMessage}>No completed items.</Text>}
    />
  );

  const renderScene = SceneMap({
    pending: Pending,
    requested: Requested,
    completed: Completed,
  });

  return (
    <View style={styles.container}>
      {/* Logo and Description */}
      <View style={styles.header}>
        <Image source={require('../../assets/LogoImage.png')} style={styles.logo} />
        <Text style={styles.description}>
          Acclaimed as one of the leading real estate consultancy companies throughout 2 decades of experience in the UAE,
          Al Khattal Real Estate has provided a wide range of professional services supported by qualified and experienced
          teams of engineers, consultants, marketing, and property management professionals.
        </Text>
      </View>

      {/* TabView */}
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={(props) => (
          <TabBar {...props} style={styles.tabBar} labelStyle={styles.tabText} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    marginBottom: 10,
  },
  logo: {
    width: 200,
    height: 150,
    marginBottom: 10,
  },
  description: {
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
  },
  tabBar: {
    backgroundColor: '#007BFF',
  },
  tabText: {
    color: '#fff',
    fontSize: 16,
  },
  itemContainer: {
    padding: 16,
    backgroundColor: '#f8f8f8',
    marginBottom: 10,
    borderRadius: 5,
  },
  itemSubContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  itemTextHeading: {
    fontSize: 18,
    color: '#333',
    marginBottom: 4,
  },
  itemTextLocation: {
    fontSize: 14,
    color: '#555',
  },
  itemTextDate: {
    fontSize: 14,
    color: '#777',
  },
  statusText: {
    fontSize: 14,
  },
  emptyMessage: {
    textAlign: 'center',
    fontSize: 16,
    color: '#999',
    marginTop: 20,
  },
});

export default HomeScreen;




