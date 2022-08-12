import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { DELIVERUBLU } from "../colors";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";

const PreparingOrderScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 4000);
  }, []);
  return (
    <SafeAreaView className="flex-1 bg-white justify-center items-center">
      <Animatable.Image
        source={require("../../assets/OrderPrepare.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="h-80 w-80"
      />
      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-lg text-[#00CCBB] font-bold text-center"
      >
        Waiting for Restaurant to accept your order!
      </Animatable.Text>

      <Progress.Circle
        size={60}
        indeterminate
        color={DELIVERUBLU}
        className="mt-10"
      />
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;

const styles = StyleSheet.create({});
