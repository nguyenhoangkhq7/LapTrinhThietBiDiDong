import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native";

const NOTE_IMAGE = require("../assets/note.png");

const LoginScreen = ({ navigation }) => {
  const [userName, setUserName] = useState("");

  const handleGetStarted = () => {
    navigation.navigate("TaskList", { name: userName });
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.imageContainer}>
        <Image source={NOTE_IMAGE} style={styles.image} resizeMode="contain" />
      </View>

      <Text style={styles.title}>MANAGE YOUR TASK</Text>

      <View style={styles.inputWrapper}>
        <Text style={styles.inputIcon}>✉️</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          placeholderTextColor="#999"
          value={userName}
          onChangeText={setUserName}
          keyboardType="default"
          autoCapitalize="words"
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={handleGetStarted}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>GET STARTED →</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    paddingTop: 50,
    paddingHorizontal: 30,
  },
  imageContainer: {
    width: "100%",
    alignItems: "center",
    marginBottom: 40,
    marginTop: 30,
  },
  image: {
    width: 250,
    height: 250,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#8A2BE2",
    marginBottom: 60,
    letterSpacing: 1.5,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 120,
  },
  inputIcon: {
    fontSize: 18,
    marginRight: 10,
    color: "#555",
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
    padding: 0,
  },
  button: {
    backgroundColor: "#00CED1",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#00CED1",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
});
