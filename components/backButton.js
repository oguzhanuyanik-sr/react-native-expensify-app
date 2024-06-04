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
      className={`rounded-full p-3 mt-2 border-gray-700 border`}
    >
      <ChevronLeftIcon size={30} color='#374151' />
    </TouchableOpacity>
  );
}
