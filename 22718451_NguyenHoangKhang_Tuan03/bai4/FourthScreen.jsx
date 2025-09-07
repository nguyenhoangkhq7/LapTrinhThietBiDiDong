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

export default function ThirdScreen() {
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
      <Text style={styles.header}>CODE</Text>
      <Text style={styles.title}>VERIFICATION</Text>
      <Text style={styles.description}>
        Enter ontime password sent on ++849092605798
      </Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} />
        <TextInput style={styles.textInput} />
        <TextInput style={styles.textInput} />
        <TextInput style={styles.textInput} />
        <TextInput style={styles.textInput} />
        <TextInput style={styles.textInput} />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>VERIFY CODE</Text>
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
    fontSize: 48,
    textAlign: "center",
    fontWeight: "bold",
  },
  title: {
    fontSize: 24,
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
  },
  icon: {
    marginRight: 8,
  },
  textInput: {
    width: 48,
    height: 48,
    borderWidth: 1,
    borderColor: "black",
  },
  button: {
    backgroundColor: "orange",
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 112,
    paddingRight: 112,
    marginBottom: 36,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  howwework: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: "20",
  },
});
