import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { urlFor } from "../../sanity";
import { DELIVERUBLU, GREY, OFFGRAY } from "../colors";
import Currency from "react-currency-formatter";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";

const Dishrow = ({ id, name, description, price, image }) => {
  const [isPressed, setIsPressed] = useState(false);
  const items = {};
  return (
    <>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => setIsPressed(!isPressed)}
        className={`bg-white p-4 borer border-gray-200 ${
          isPressed && "border-b-0"
        }`}
      >
        <View className="flex-row">
          <View className="flex-1 pr-2">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-400">{description}</Text>
            <Text className="text-gray-400 mt-2">
              <Currency quantity={price} Currency="GBP" />
            </Text>
          </View>
          <View>
            <Image
              style={{ borderWidth: 1, borderColor: OFFGRAY }}
              source={{ uri: urlFor(image).url() }}
              className="h-20 w-20 bg-gray-300 p-4"
            />
          </View>
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View className="bg-white px-4">
          <View className="item-center space-x-2 pb-3 flex-row">
            <TouchableOpacity>
              <MinusCircleIcon
                size={40}
                color={items.length > 0 ? DELIVERUBLU : GREY}
              />
            </TouchableOpacity>
            <Text>0</Text>
            <TouchableOpacity>
              <PlusCircleIcon
                size={40}
                color={items.length > 0 ? DELIVERUBLU : GREY}
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default Dishrow;

const styles = StyleSheet.create({});
