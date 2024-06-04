import {
  Alert,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import ScreenWrapper from '../components/screenWrapper';
import { colors } from '../theme';
import BackButton from '../components/backButton';
import { useNavigation } from '@react-navigation/native';

export default function AddTripScreen() {
  const navigation = useNavigation();

  const [place, setPlace] = useState('');
  const [country, setCountry] = useState('');

  const handleAddTrip = () => {
    if (place && country) {
      navigation.navigate('Home');
    } else {
      Alert.alert('Please fill the inputs!');
    }
  };

  return (
    <ScreenWrapper>
      <View className='flex justify-between h-full mx-4 mt-5'>
        <View>
          <View className='absolute left-0 top-0'>
            <BackButton />
          </View>

          <Text className={`${colors.heading} text-xl font-bold text-center`}>
            Add Trip
          </Text>

          <View className='flex-row justify-center mb-3 mt-5'>
            <Image
              className='h-72 w-72'
              source={require('../assets/images/4.png')}
            />
          </View>

          <View className='space-y-2 mx-2'>
            <Text className={`${colors.heading} text-lg font-bold `}>
              Where On Earth?
            </Text>
            <TextInput
              value={place}
              placeholder='Please enter a place...'
              onChangeText={(value) => setPlace(value)}
              className='p-4 bg-white rounded-full mb-3'
            />

            <Text className={`${colors.heading} text-lg font-bold `}>
              Which Country?
            </Text>
            <TextInput
              value={country}
              placeholder='Please enter a country...'
              onChangeText={(value) => setCountry(value)}
              className='p-4 bg-white rounded-full mb-3'
            />
          </View>
        </View>

        <View className=''>
          <TouchableOpacity
            onPress={handleAddTrip}
            style={{ backgroundColor: colors.button }}
            className='my-6 rounded-full p-3 shadow-sm mx-2 fixed bottom-10'
          >
            <Text className='text-center text-white text-lg font-bold'>
              Add Trip
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  );
}
