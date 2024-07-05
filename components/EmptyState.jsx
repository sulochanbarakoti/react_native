import { View, Text, Image } from "react-native";
import React from "react";
import { images } from "../constants";
import CustomeButton from "./CustomButton";
import { router } from "expo-router";

const EmptyState = ({ title, subtitle }) => {
  return (
    <View className="justify-center items-center px-4">
      <Image
        source={images.empty}
        className="w-[270px] h-[215px]"
        resizeMode="contain"
      />
      <Text className="font-pregural text-sm text-gray-100">{subtitle}</Text>
      <Text className="font-pbold text-lg text-gray-100 mt-2">{title}</Text>
      <CustomeButton
        title="Create video"
        handlePress={() => router.push("/create")}
        containerStyle="w-full my-5"
      />
    </View>
  );
};

export default EmptyState;
