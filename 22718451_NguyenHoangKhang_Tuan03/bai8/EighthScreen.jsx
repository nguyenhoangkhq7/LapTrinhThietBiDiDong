import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Octicons from "@expo/vector-icons/Octicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import PersonAdd from "@expo/vector-icons/Octicons";
import Wifi from "@expo/vector-icons/AntDesign";
import Facebook from "@expo/vector-icons/AntDesign";
export default function EighthScreen() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("./img/eye.png")} />

      <View style={styles.inputContainerView}>
        <View style={styles.inputContainer}>
          <Octicons
            style={styles.iconInput}
            name="person"
            size={32}
            color="#33467bff"
          />
          <TextInput placeholder="Please input user name" />
        </View>
        <View style={styles.inputContainer}>
          <MaterialIcons
            style={styles.iconInput}
            name="lock-outline"
            size={32}
            color="#33467bff"
          />
          <TextInput placeholder="Please input password" />
        </View>
      </View>

      <View style={styles.loginContainer}>
        <TouchableOpacity style={styles.buttonLogin}>
          <Text style={styles.textLogin}>LOGIN</Text>
        </TouchableOpacity>
        <View style={styles.otherOptionView}>
          <TouchableOpacity style={styles.otherButton}>
            <Text style={styles.otherText}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.otherButton}>
            <Text style={styles.otherText}>Forgot password</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.otherLoginMethodContainer}>
        <View>
          <View style={styles.divider} />
          <Text style={styles.otherLoginMethodText}>Other Login Methods</Text>
        </View>
        <View style={styles.loginMethodContainer}>
          <PersonAdd
            style={styles.iconOtherMethod}
            name="person-add"
            size={48}
            color="#3ab4ff"
          />
          <Wifi
            style={styles.iconOtherMethod}
            name="wifi"
            size={48}
            color="#f4aa47"
          />
          <Facebook
            style={styles.iconOtherMethod}
            name="facebook-square"
            size={48}
            color="#3a579c"
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  image: { width: 100, height: 100, borderRadius: 12 },
  inputContainerView: {
    width: "80%",
  },
  inputContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    paddingTop: 4,
    paddingBottom: 4,
    marginBottom: 16,
  },
  iconInput: {
    marginRight: 12,
  },
  loginContainer: {
    width: "80%",
  },
  buttonLogin: {
    backgroundColor: "#386ffc",
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  textLogin: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  otherOptionView: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  otherButton: {
    padding: 8,
  },
  otherText: {
    fontSize: 14,
  },
  otherLoginMethodContainer: {
    width: "80%",
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "#386ffc",
  },
  otherLoginMethodText: {
    backgroundColor: "white",
    position: "relative",
    top: -12,
    left: "25%",
    alignSelf: "flex-start",
    paddingHorizontal: 10,
  },
  loginMethodContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  iconOtherMethod: {
    margin: 12,
  },
});
