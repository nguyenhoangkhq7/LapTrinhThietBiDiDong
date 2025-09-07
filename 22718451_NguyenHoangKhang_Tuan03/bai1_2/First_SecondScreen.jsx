import { LinearGradient } from "expo-linear-gradient";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function FirstScreen() {
  return (
    // container
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
      {/* image */}
      <Image source={require("./img/ellipse.png")} />

      {/* header */}
      <Text style={styles.header}>GROW YOUR BUSINESS</Text>

      {/* supscription */}
      <Text style={styles.description}>
        We will help you to grow your business using online server
      </Text>

      {/* Button */}
      <View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.howwework}>HOW WE WORK?</Text>
      </View>

      {/*  */}
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
    fontSize: 28,
    textAlign: "center",
    fontWeight: "bold",
  },
  description: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
  },
  button: {
    backgroundColor: "orange",
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 36,
    paddingRight: 36,
    borderRadius: 12,
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
