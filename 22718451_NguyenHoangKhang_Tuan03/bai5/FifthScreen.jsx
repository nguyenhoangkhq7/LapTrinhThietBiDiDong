import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Octicons from "@expo/vector-icons/Octicons";
import AntDesignFB from "@expo/vector-icons/AntDesign";
import Fontisto from "@expo/vector-icons/Fontisto";
import AntDesignGoogle from "@expo/vector-icons/AntDesign";

export default function FifthScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>LOGIN</Text>

      {/* Input */}
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Email" />
        <View style={styles.inputPasswordContainer}>
          <TextInput style={styles.input} placeholder="Password" />
          <Octicons style={styles.iconEye} name="eye" size={36} color="black" />
        </View>
      </View>

      <View style={styles.loginContainer}>
        <TouchableOpacity style={styles.buttonLogin}>
          <Text style={styles.textLogin}>LOGIN</Text>
        </TouchableOpacity>
        <Text style={styles.normalText}>
          When you agree to terms and conditions
        </Text>
        <TouchableOpacity>
          <Text style={[styles.normalText, styles.link]}>
            Forgot your password?
          </Text>
        </TouchableOpacity>
        <Text style={styles.normalText}>Or login with</Text>
      </View>

      <View style={styles.loginWith}>
        <AntDesignFB
          style={styles.iconLoginWith}
          name="facebook-square"
          size={36}
          color="blue"
        />
        <Fontisto
          style={styles.iconLoginWith}
          name="messenger"
          size={36}
          color="purple"
        />
        <AntDesignGoogle
          style={styles.iconLoginWith}
          name="google"
          size={36}
          color="green"
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d8efdf",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    paddingTop: 12,
    paddingBottom: 12,
    marginBottom: 24,
    backgroundColor: "#cae1d1",
    paddingLeft: 12,
  },
  iconEye: {
    position: "absolute",
    top: 4,
    right: 8,
  },
  loginContainer: {
    width: "80%",
  },
  buttonLogin: {
    backgroundColor: "#c34e3b",
    alignSelf: "stretch",
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: 4,
  },
  textLogin: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  normalText: {
    textAlign: "center",
    padding: 8,
  },
  link: {
    color: "#6250daff",
  },
  loginWith: {
    flexDirection: "row",
  },
  iconLoginWith: {
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 32,
    paddingRight: 32,
  },
});
