import Foundation from "@expo/vector-icons/Foundation";
import Ionicons from "@expo/vector-icons/Ionicons";
import Back from "@expo/vector-icons/Entypo";
import { View, TouchableOpacity } from "react-native";
export default function Footer() {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 8,
        paddingBottom: 32,
        backgroundColor: "#1BA9FF",
        marginTop: "auto",
      }}
    >
      <TouchableOpacity>
        <Foundation name="list" size={28} color="black" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name="home" size={28} color="black" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Back name="back" size={28} color="black" />
      </TouchableOpacity>
    </View>
  );
}
