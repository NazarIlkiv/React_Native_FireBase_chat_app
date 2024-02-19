import { View, Text, Button, Pressable } from "react-native";
import React from "react";
import { useAuth } from "../../context/authContext";

const Home = () => {
  const { logout } = useAuth();
  const handleLogout = async () => {
    await logout();
  };
  return (
    <View>
      <Pressable onPress={handleLogout} title="Logout">
        <Text>Logout</Text>
      </Pressable>
    </View>
  );
};

export default Home;
