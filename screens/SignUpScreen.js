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

export default function SignUpScreen() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    if (email && password) {
      navigation.navigate('Home');
    } else {
      Alert.alert('Please fill the inputs!');
    }
  };

  return (
    <ScreenWrapper>
      <View className='flex justify-between h-full mx-4'>
        <View>
          <View className='absolute left-0 top-0'>
            <BackButton />
          </View>

          <Text className={`${colors.heading} text-xl font-bold text-center`}>
            Sign Up
          </Text>

          <View className='flex-row justify-center mb-3 mt-5'>
            <Image
              className='h-72 w-72'
              source={require('../assets/images/login.png')}
            />
          </View>

          <View className='space-y-2 mx-2'>
            <Text className={`${colors.heading} text-lg font-bold `}>
              Email
            </Text>
            <TextInput
              value={email}
              placeholder='Please enter your email...'
              onChangeText={(value) => setEmail(value)}
              className='p-4 bg-white rounded-full mb-3'
            />

            <Text className={`${colors.heading} text-lg font-bold `}>
              Password
            </Text>
            <TextInput
              value={password}
              placeholder='Please enter your password...'
              onChangeText={(value) => setPassword(value)}
              className='p-4 bg-white rounded-full mb-3'
              secureTextEntry
            />
          </View>
        </View>

        <View className=''>
          <TouchableOpacity
            onPress={handleSubmit}
            style={{ backgroundColor: colors.button }}
            className='my-6 rounded-full p-3 shadow-sm mx-2 fixed bottom-10'
          >
            <Text className='text-center text-white text-lg font-bold'>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  );
}
