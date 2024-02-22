import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import React from "react";

const ios = Platform.OS === "ios";
const CustomKeyboardAvoidView = ({ children, inChat }) => {
  let kavConfig = {};
  let scrollViewConfig = {};
  if (inChat) {
    kavConfig = {
      KeyboardVerticalOffset: 90,
    };
    scrollViewConfig = {
      contentContainerStyle: { flex: 1 },
    };
  }
  return (
    <KeyboardAvoidingView
      behavior={ios ? "padding" : "height"}
      style={{ flex: 1 }}
      {...kavConfig}
    >
      <ScrollView
        style={{ flex: 1 }}
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flex: 1 }}
      >
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default CustomKeyboardAvoidView;
