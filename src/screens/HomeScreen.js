import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  Platform,
  StatusBar,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  ChevronDownIcon,
  UserIcon,
  SearchIcon,
  AdjustmentsIcon,
} from "react-native-heroicons/outline";
import { DELIVERUBLU, GREY } from "../colors";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView
      className="bg-white pt-4"
      style={{
        paddingTop:
          Platform.OS === "android"
            ? StatusBar.currentHeight
            : Platform.OS === "web"
            ? 10
            : 0,
      }}
    >
      {/* Header */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2 px-4 ">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color={DELIVERUBLU} />
          </Text>
        </View>
        <UserIcon size={35} color={DELIVERUBLU} />
      </View>

      {/* Search */}
      <View className="flex-row items-center space-x-2 pb-2 mx-2 ">
        <View className="flex-row bg-gray-200 space-x-2 p-3 flex-1">
          <SearchIcon color={GREY} size={20} />
          <TextInput
            placeholder="Restraunts and cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsIcon color={DELIVERUBLU} />
      </View>
      {/* Body */}
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        {/* Categories */}
        <Categories />
        {/* Featured */}
        <FeaturedRow
          id="123"
          title="Featured"
          description="Paid placements from our parnters"
        />
        {/* Tasty Discounts */}
        <FeaturedRow
          id="1234"
          title="Tasty Discounts"
          description="Everyone's been enjoying those juicy discounts!"
        />
        {/* Offers near you */}
        <FeaturedRow
          id="12345"
          title="Offers near you!"
          description="Why not support your local restaurants tonight!"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
