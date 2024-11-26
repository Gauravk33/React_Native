import React from 'react';
import 'react-native-gesture-handler';
import 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import HomeScreen from './src/screens/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LoginScreen from './src/screens/LoginScreen';
import ResetPassword from './src/screens/ResetPassword';
import AccountScreen from './src/screens/AccountScreen';
import UpdatePassword from './src/screens/UpdatePassword';
import EmergencyContacts from './src/screens/EmergencyContacts';
import PropertyLists from './src/screens/PropertyLists';
import RequestScreen from './src/screens/RequestScreen';
import BuildingList from './src/screens/BuildingList';

// Bottom Tab Navigator
const Tab = createBottomTabNavigator();

// const BottomTabNavigator = () => (
//   <Tab.Navigator>
//     <Tab.Screen
//       name="Home"
//       component={HomeScreen}
//       options={{
//         headerShown: false,
//         tabBarIcon: ({color, size}) => (
//           <IonIcon name="home-outline" color={''} size={24} />
//         ),
//       }}
//     />
//     {/* <Tab.Screen name="Login" component={LoginScreen} options={{ headerShown: false,
//       tabBarIcon: ({ color, size }) => (
//         <Icon name="login" color={'#7aa73f'} size={24} />
//       ),
//     }}/> */}
//     <Tab.Screen
//       name="Create Request"
//       component={RequestScreen}
//       options={{
//         headerShown: false,
//         tabBarIcon: ({color, size}) => (
//           // <Icon name="lock" color={''} size={24} />
//           <IonIcon  name = "create-outline" color={''} size={24} />
//         ),
//       }}
//     />

//     {/* <Tab.Screen name="Emergency Contacts" component={UpdatePassword} options={{ headerShown: true,
//       tabBarIcon: ({ color, size }) => (
//         <Icon name="person" color={'#7aa73f'} size={24} />

//         ),
//     }}
//     /> */}

//     <Tab.Screen
//       name="Buildings"
//       component={PropertyLists}
//       options={{
//         headerShown: false,
//         tabBarIcon: ({color, size}) => (
//           <FontAwesomeIcon name="building-o" color={''} size={24} />
//         ),
//       }}
//     />

//     <Tab.Screen
//       name="Account"
//       component={AccountScreen}
//       options={{
//         headerShown: false,
//         tabBarIcon: ({color, size}) => (
//           <IonIcon name="person-outline" color={''} size={24} />
//         ),
//       }}
//     />

//     {/* <Tab.Screen name="Building Lists" component={BuildingList} options={{ headerShown: true,
//       tabBarIcon: ({ color, size }) => (
//         <Icon name="person" color={'#7aa73f'} size={24} />
//       ),
//     }}
//     /> */}

//     <Tab.Screen
//       name="Building Lists"
//       component={BuildingList}
//       options={{
//         headerShown: true,
//         headerTitleAlign: 'center', // Centers the header title
//         headerTitleStyle: {
//           // fontSize: 20, // You can adjust the font size as needed
//         },
//         headerStyle: {
//           backgroundColor: '#007BFF',
//         },
//         tabBarIcon: ({color, size}) => (
//           <Icon name="person" color={''} size={24} />
//         ),
//       }}
//     />
//   </Tab.Navigator>
// );

const BottomTabNavigator = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({color, size}) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = 'home-outline'; // MaterialIcon
          return <IonIcon name={iconName} color={color} size={size} />;
        } else if (route.name === 'Create Request') {
          iconName = 'create-outline'; // IonIcon
          return <IonIcon name={iconName} color={color} size={size} />;
        } else if (route.name === 'Buildings') {
          iconName = 'building-o'; // MaterialIcon
          return <FontAwesomeIcon name={iconName} color={color} size={size} />;
        } else if (route.name === 'Account') {
          iconName = 'person-outline'; // MaterialIcon
          return <IonIcon name={iconName} color={color} size={size} />;
        } else if (route.name === 'Building Lists') {
          iconName = 'business-outline'; // IonIcon
          return <IonIcon name={iconName} color={color} size={size} />;
        }
      },
      tabBarActiveTintColor: '#007BFF', // Active tab icon color
      tabBarInactiveTintColor: 'gray', // Inactive tab icon color
    })}>
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="Create Request"
      component={RequestScreen}
      options={{
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="Buildings"
      component={PropertyLists}
      options={{
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="Account"
      component={AccountScreen}
      options={{
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="Building Lists"
      component={BuildingList}
      options={{
        headerShown: true,
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#007BFF',
        },
      }}
    />
  </Tab.Navigator>
);

// Stack Navigator
const Stack = createStackNavigator();

const App = () => {
  return (
    // <HomeScreen/>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ResetPassword}
          options={{headerShown: true, headerTitle: ''}}
        />
        <Stack.Screen
          name="ChangePassword"
          component={UpdatePassword}
          options={{headerShown: true}}
        />

        <Stack.Screen
          name="Main"
          component={BottomTabNavigator}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="EmergencyContracts"
          component={EmergencyContacts}
          options={{headerShown: true}}
        />
        {/* Add more screens to the stack if needed */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
