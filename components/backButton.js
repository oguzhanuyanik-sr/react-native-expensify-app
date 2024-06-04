import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { colors } from '../theme';
import { useNavigation } from '@react-navigation/native';

export default function BackButton() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      className={`bg-gray-700 rounded-full p-2`}
    >
      <ChevronLeftIcon size={20} color='#fff' />
    </TouchableOpacity>
  );
}
