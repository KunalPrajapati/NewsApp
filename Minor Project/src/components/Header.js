import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {MagnifyingGlassIcon} from 'react-native-heroicons/solid';

const Header = ({navigation}) => {
  return (
    <View className="bg-redprimary flex-row px-4 py-3 justify-between items-center shadow-lg ">
      <Text className="text-base font-SemiBold text-white">Country Live</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Search')}>
        <MagnifyingGlassIcon color="#fff" size={20} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
