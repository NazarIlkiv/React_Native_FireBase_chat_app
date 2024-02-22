import { View, Text, TextInput, Pressable } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import ChatRoomHeader from "../../components/ChatRoomHeader";
import { useRouter } from "expo-router";
import MessageList from "../../components/MessageList";
import { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Feather } from "@expo/vector-icons";
import CustomKeyboardAvoidView from "../../components/CustomKeyboardAvoidView";

const ChatRoom = () => {
  const router = useRouter();
  const item = useLocalSearchParams();
  const [messages, setMessages] = useState([]);
  return (
    <CustomKeyboardAvoidView inChat={true}>
      <View className="flex-1 bg-white">
        <StatusBar style="dark" />
        <ChatRoomHeader user={item} router={router} />
        <View className="h-3 border-b border-b-neutral-300" />
        <View className="flex-1 justify-between bg-neutral-100 overflow-visible">
          <View className="flex-1">
            <MessageList />
          </View>
          <View style={{ marginBottom: hp(2.7) }} className="pt-2">
            <View className="flex-row mx-3 justify-between bg-white border p-2 border-neutral-300 rounded-full">
              <TextInput
                placeholder="Type message..."
                style={{ fontSize: hp(2) }}
                className="flex-1 mr-2"
              />
              <Pressable className="bg-neutral-200 p-2 mr-[1px] rounded-full">
                <Feather name="send" size={hp(2.7)} color="#737373" />
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </CustomKeyboardAvoidView>
  );
};

export default ChatRoom;
