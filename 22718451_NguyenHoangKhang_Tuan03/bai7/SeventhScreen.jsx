import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
export default function SeventhScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>LOGIN</Text>

      {/* Input */}
      <View style={styles.inputContainerView}>
        <View style={styles.inputContainer}>
          <MaterialCommunityIcons
            style={styles.iconLeft}
            name="human-child"
            size={32}
            color="black"
          />
          <TextInput style={styles.input} placeholder="Name" />
        </View>

        <View style={styles.inputContainer}>
          <AntDesign
            style={styles.iconLeft}
            name="lock"
            size={32}
            color="black"
          />
          <TextInput style={styles.input} placeholder="Password" />
          <Entypo style={styles.iconEye} name="eye" size={32} color="black" />
        </View>
      </View>

      {/* Login */}
      <View style={styles.loginContainer}>
        <TouchableOpacity style={styles.buttonLogin}>
          <Text style={styles.textLogin}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonCreateAcc}>
          <Text style={styles.textCreateAcc}>CREATE ACCOUNT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "orange",
  },
  title: {
    width: "80%",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "left",
  },
  inputContainerView: {
    width: "80%",
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: "white",
    flexDirection: "row",
    paddingTop: 8,
    paddingBottom: 8,
    marginBottom: 24,
  },
  input: {
    flex: 1,
    paddingLeft: 12,
  },
  iconLeft: {
    position: "relative",
    left: 5,
    top: 5,
  },
  iconEye: {
    position: "relative",
    right: 12,
    top: 5,
  },
  loginContainer: {
    width: "80%",
  },
  buttonLogin: {
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: "black",
    borderRadius: 4,
  },
  textLogin: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonCreateAcc: {
    marginTop: 12,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 4,
  },
  textCreateAcc: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
