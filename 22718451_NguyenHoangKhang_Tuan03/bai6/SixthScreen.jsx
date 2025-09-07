import * as React from "react";
import { Octicons } from "@expo/vector-icons";
import { useActionState, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { RadioButton } from "react-native-paper";

export default function SixthScreen() {
  const [checked, setChecked] = React.useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>REGISTER</Text>

      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Name" />
        <TextInput style={styles.input} placeholder="Phone" />
        <TextInput style={styles.input} placeholder="Email" />
        <View>
          <TextInput style={styles.input} placeholder="Password" />
          <Octicons style={styles.iconEye} name="eye" size={36} color="black" />
        </View>
        <TextInput style={styles.input} placeholder="Birthday" />

        <View style={styles.radioButtonContainer}>
          <View style={[styles.radioButtonContainer, styles.raidoButton]}>
            <RadioButton
              value="male"
              status={checked ? "checked" : "unchecked"}
              onPress={() => setChecked(!checked)}
            />
            <Text style={styles.radioText}>Male</Text>
          </View>

          <View style={styles.radioButtonContainer}>
            <RadioButton
              value="male"
              status={checked ? "checked" : "unchecked"}
              onPress={() => setChecked(!checked)}
            />
            <Text style={styles.radioText}>Female</Text>
          </View>
        </View>
      </View>

      <View style={styles.registerContainer}>
        <TouchableOpacity style={styles.buttonRegister}>
          <Text style={styles.textRegister}>REGISTER</Text>
        </TouchableOpacity>
        <Text>When you agree to terms and conditions</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d0f6dbff",
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
  radioButtonContainer: {
    flexDirection: "row",
  },
  raidoButton: {
    marginRight: 24,
  },
  radioText: {
    textAlignVertical: "center",
  },
  registerContainer: {
    width: "100%",
    alignItems: "center",
  },
  buttonRegister: {
    width: "80%",
    backgroundColor: "#c34e3b",
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: 4,
    marginBottom: 12,
  },
  textRegister: {
    textAlign: "center",
  },
});
