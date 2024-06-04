import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import React from 'react';
import ScreenWrapper from '../components/screenWrapper';
import { colors } from '../theme';
import { items } from '../constants/places';
import randomImage from '../assets/images/randomImage';
import EmptyList from '../components/emptyList';
import { useNavigation } from '@react-navigation/native';
import BackButton from '../components/backButton';
import ExpenseCard from '../components/expenseCard';
import { categories } from '../constants/categories';

export default function TripExpensesScreen(props) {
  const { place, country } = props.route.params;
  const navigation = useNavigation();

  return (
    <ScreenWrapper className='flex-1 bg-slate-400'>
      <View className='px-4'>
        <View className='mt-2'>
          <View className='absolute'>
            <BackButton />
          </View>

          <View>
            <Text className={`${colors.heading} text-xl font-bold text-center`}>
              {place}
            </Text>
            <Text className={`${colors.heading} text-xs text-center`}>
              {country}
            </Text>
          </View>
        </View>

        <View className='flex-row justify-center items-center rounded-xl mt-10 mb-4'>
          <Image
            source={require('../assets/images/7.png')}
            className='w-80 h-80'
          />
        </View>

        <View className='space-y-4'>
          <View className='flex-row justify-between items-center'>
            <Text className={`${colors.heading} font-bold text-xl`}>
              Expenses
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('AddExpense')}
              className='p-2 px-3 bg-white border border-gray-200 rounded-full'
            >
              <Text className={colors.heading}>Add Expense</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              height: 430,
            }}
          >
            <FlatList
              data={categories}
              ListEmptyComponent={
                <EmptyList message={"You haven't recorded any expenses yet"} />
              }
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              className='mx-0'
              renderItem={({ item }) => {
                return <ExpenseCard item={item} />;
              }}
            />
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
}
