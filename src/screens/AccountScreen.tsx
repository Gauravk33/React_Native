import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

type CardProps = {
  iconName: string;
  title: string;
  onPress: () => void; // Add onPress as a prop
};
type RootStackParamList = {
  EmergencyContracts: undefined;
  ChangePassword: undefined;
  Login: any;
};

type EmergencyContractNavigationProp = StackNavigationProp<
  RootStackParamList,
  'EmergencyContracts'
>;

// Reusable Card Component with Props Type
const Card: React.FC<CardProps> = ({iconName, title, onPress}) => (
  <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
    <View style={styles.cardIcon}>
      <Icon name={iconName} color="#000" size={35} />
      <Text style={styles.cardText}>{title}</Text>
    </View>
    <Icon name="chevron-right" color="#000" size={35} />
  </TouchableOpacity>
);

const AccountScreen: React.FC = () => {
  const navigation = useNavigation<EmergencyContractNavigationProp>();

  const handleMyContractPress = () => {};

  const handleEmergencyContactsPress = () => {
    navigation.navigate('EmergencyContracts');
  };

  const handleChangePasswordPress = () => {
    navigation.navigate('ChangePassword');
  };

  const handleLogoutPress = () => {
    navigation.navigate('Login');
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Image
        source={require('../../assets/bottomImg.jpg')} // Replace with your logo's path
        style={styles.logo}
      />
      <Text style={styles.heading}>TEST 1</Text>

      {/* Cards */}
      <Card
        iconName="file-copy"
        title="My Contract"
        onPress={handleMyContractPress}
      />
      <Card
        iconName="call"
        title="Emergency Contacts"
        onPress={handleEmergencyContactsPress}
      />
      <Card
        iconName="lock"
        title="Change Password"
        onPress={handleChangePasswordPress}
      />
      <Card
        iconName="power-settings-new"
        title="Logout"
        onPress={handleLogoutPress}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    paddingHorizontal: 10,
  },
  logo: {
    borderRadius: 999,
    width: 180,
    height: 180,
    marginBottom: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 20,
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    elevation: 1,
    paddingVertical: 15,
    marginBottom: 10,
    borderRadius: 8,
  },
  cardIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  cardText: {
    fontSize: 20,
    fontWeight: '400',
    color: '#333',
  },
});

export default AccountScreen;
