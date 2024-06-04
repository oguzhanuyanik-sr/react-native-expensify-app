import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import React from 'react';
import ScreenWrapper from '../components/screenWrapper';
import { colors } from '../theme';
import { items } from '../constants/places';
import randomImage from '../assets/images/randomImage';
import EmptyList from '../components/emptyList';

export default function HomeScreen() {
  return (
    <ScreenWrapper className='flex-1 bg-slate-400'>
      <View className='flex-row justify-between items-center p-4'>
        <Text className={`${colors.heading} font-bold text-3xl shadow-sm`}>
          Expensify
        </Text>

        <TouchableOpacity className='p-2 px-3 bg-white border border-gray-200 rounded-full'>
          <Text className={colors.heading}>Logout</Text>
        </TouchableOpacity>
      </View>

      <View className='flex-row justify-center items-center bg-blue-200 rounded-xl mx-4 mb-4'>
        <Image
          source={require('../assets/images/banner.png')}
          className='w-60 h-60'
        />
      </View>

      <View className='px-4 space-y-4'>
        <View className='flex-row justify-between items-center'>
          <Text className={`${colors.heading} font-bold text-xl`}>
            Recent Trips
          </Text>
          <TouchableOpacity className='p-2 px-3 bg-white border border-gray-200 rounded-full'>
            <Text className={colors.heading}>Add Trip</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            height: 430,
          }}
        >
          <FlatList
            numColumns={2}
            columnWrapperStyle={{
              justifyContent: 'space-between',
            }}
            data={items}
            ListEmptyComponent={
              <EmptyList message={"You haven't recorded any trips yet"} />
            }
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            className='mx-0'
            renderItem={({ item }) => {
              return (
                <TouchableOpacity className='bg-white p-3 rounded-2xl mb-3 shadow-sm'>
                  <View>
                    <Image source={randomImage()} className='w-36 h-36 mb-2' />
                    <Text className={`${colors.heading} font-bold`}>
                      {item.place}
                    </Text>
                    <Text className={`${colors.heading} text-xs`}>
                      {item.country}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
}
