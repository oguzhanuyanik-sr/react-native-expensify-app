import {
  Alert,
  Image,
  ScrollView,
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
import { categoryTitles } from '../constants/categories';

export default function AddExpenseScreen() {
  const navigation = useNavigation();

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const handleAddExpense = () => {
    if (title && amount && category) {
      navigation.goBack();
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
            Add Expense
          </Text>

          <View className='flex-row justify-center mb-3 mt-5'>
            <Image
              className='h-72 w-72'
              source={require('../assets/images/4.png')}
            />
          </View>

          <ScrollView
            className='space-y-2 mx-2 h-[310]'
            showsVerticalScrollIndicator={false}
          >
            <Text className={`${colors.heading} text-lg font-bold `}>
              For What?
            </Text>
            <TextInput
              value={title}
              placeholder='Please enter a thing...'
              onChangeText={(value) => setTitle(value)}
              className='p-4 bg-white rounded-full mb-3'
            />

            <Text className={`${colors.heading} text-lg font-bold `}>
              How Much?
            </Text>
            <TextInput
              value={amount}
              placeholder='Please enter a price...'
              onChangeText={(value) => setAmount(value)}
              className='p-4 bg-white rounded-full mb-3'
              keyboardType='number-pad'
            />

            <Text className={`${colors.heading} text-lg font-bold `}>
              Which Category?
            </Text>
            <View className='flex-row flex-wrap items-center mb-4'>
              {categoryTitles.map((categoryItem) => {
                const bgColor =
                  categoryItem.value === category ? 'bg-green-200' : 'bg-white';

                return (
                  <TouchableOpacity
                    onPress={() => setCategory(categoryItem.value)}
                    key={categoryItem.value}
                    className={`${bgColor} rounded-full p-3 mb-2 mr-2`}
                  >
                    <Text>{categoryItem.title}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </ScrollView>

          <View className='mt-10'>
            <TouchableOpacity
              onPress={handleAddExpense}
              style={{ backgroundColor: colors.button }}
              className='my-6 rounded-full p-3 shadow-sm mx-2 fixed bottom-10'
            >
              <Text className='text-center text-white text-lg font-bold'>
                Add Expense
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
}
