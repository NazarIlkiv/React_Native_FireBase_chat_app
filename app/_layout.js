import { View, Text } from "react-native";
import { Slot, useSegments, useRouter } from "expo-router";
import React, { useEffect, useContext } from "react";
import "../global.css";
import { AuthContextProvider, useAuth } from "../context/authContext";

const MainLayout = () => {
  const { isAuthenticated } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    // Check if user is authenticated
    if (typeof isAuthenticated == "undefiend") return;
    const inApp = segments[0] === "app"; // має повертати false
    if (isAuthenticated && !inApp) {
      router.replace("home");
    } else if (isAuthenticated == false) {
      router.replace("signIn");
    }
  }, [isAuthenticated]);

  return <Slot />;
};

export default function RootLayout() {
  return (
    <AuthContextProvider>
      <MainLayout />
    </AuthContextProvider>
  );
}
