import { LinearGradient } from "expo-linear-gradient";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import AntDesign from "@expo/vector-icons/AntDesign";

export default function SecondaryScreen() {
  return (
    <LinearGradient
      colors={[
        "#c8eff7ff",
        "#c8eff7ff",
        "#c8eff7ff",
        "#c8eff7ff",
        "#c8eff7ff",
        "#c8eff7ff",
        "#c8eff7ff",
        "#c8eff7ff",
        "#00cffdff",
      ]}
      style={styles.container}
    >
      <Image source={require("./img/lock.png")} />
      <Text style={styles.header}>FORGET PASSWORD</Text>
      <Text style={styles.description}>
        Provide your account's email for which you want to reset your password
      </Text>
      <View style={styles.inputContainer}>
        <AntDesign name="mail" size={20} color="black" style={styles.icon} />
        <TextInput placeholder="Email" style={styles.textInput} />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>NEXT</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00CCF9",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  header: {
    width: "50%",
    fontSize: 28,
    textAlign: "center",
    fontWeight: "bold",
  },
  description: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
    marginLeft: 12,
    marginRight: 12,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ccc",
    paddingLeft: 10,
    marginLeft: 24,
    marginRight: 24,
  },
  icon: {
    marginRight: 8,
  },
  textInput: {
    flex: 1,
    height: 40,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
  },
  button: {
    backgroundColor: "orange",
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 144,
    paddingRight: 144,
    marginBottom: 36,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
