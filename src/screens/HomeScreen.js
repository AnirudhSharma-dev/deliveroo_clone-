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
import React, { useEffect, useLayoutEffect, useState } from "react";
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
import sanityClient from "../../sanity";
const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCatgeories, setFeaturedCategories] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    sanityClient
      .fetch(
        `
  *[_type == "featured"] {
    ...,
    restaurants[]->{
      ...,
      dishes[]->
    }
  }`
      )
      .then((data) => {
        setFeaturedCategories(data);
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
      <View className="flex-row pb-3 items-center space-x-2 px-2 ">
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
        {featuredCatgeories?.map((category) => (
          <FeaturedRow
            key={category._id}
            id={category._id}
            title={category.name}
            description={category.short_description}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
