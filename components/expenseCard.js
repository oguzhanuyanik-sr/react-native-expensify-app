import { View, Text } from 'react-native';
import React from 'react';
import { categoryColors, colors } from '../theme';

export default function ExpenseCard({ item }) {
  return (
    <View
      style={{ backgroundColor: categoryColors[item.category.toLowerCase()] }}
      className='flex-row justify-between items-center p-3 mb-3 rounded-xl px-5'
    >
      <View>
        <Text className={`${colors.heading} font-bold`}>{item.title}</Text>
        <Text className={`${colors.heading} text-xs`}>{item.category}</Text>
      </View>

      <View>
        <Text>${item.amount}</Text>
      </View>
    </View>
  );
}
