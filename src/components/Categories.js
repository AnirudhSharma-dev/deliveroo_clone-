import { StyleSheet, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingTop: 10,
        paddingBottom: 15,
      }}
    >
      {/* CategoryCard */}
      <CategoryCard imgUrl="https://links.papareact.com/wru" title="Testing1" />
      <CategoryCard imgUrl="https://links.papareact.com/wru" title="Testing2" />
      <CategoryCard imgUrl="https://links.papareact.com/wru" title="Testing3" />
    </ScrollView>
  );
};

export default Categories;

const styles = StyleSheet.create({});
