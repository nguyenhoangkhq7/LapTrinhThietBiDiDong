import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

const USER_AVATAR = { uri: "https://i.pravatar.cc/150?img=1" };
const NOTE_IMAGE = require("../assets/note.png");

const AddTaskScreen = ({ navigation, route }) => {
  const [jobTitle, setJobTitle] = useState("");
  const onAddTask = route.params.onAddTask;

  const handleFinish = () => {
    if (jobTitle.trim() === "") {
      alert("Vui lòng nhập công việc!");
      return;
    }
    onAddTask(jobTitle);
    navigation.goBack();
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar barStyle="dark-content" />

      {/* Sử dụng KeyboardAvoidingView để đẩy nội dung lên khi bàn phím xuất hiện */}
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        {/* 1. HEADER */}
        <View style={styles.header}>
          {/* Khu vực thông tin user */}
          <View style={styles.userInfo}>
            <Image source={USER_AVATAR} style={styles.avatar} />
            <View>
              <Text style={styles.greetingTitle}>Hi Twinkle</Text>
              <Text style={styles.greetingSubtitle}>
                Have a great day ahead
              </Text>
            </View>
          </View>

          {/* Nút Back */}
          <TouchableOpacity onPress={() => console.log("Go Back")}>
            <Text style={styles.backIcon}>←</Text>
          </TouchableOpacity>
        </View>

        {/* 2. TIÊU ĐỀ CHÍNH */}
        <Text style={styles.mainTitle}>ADD YOUR JOB</Text>

        {/* 3. INPUT NHẬP LIỆU */}
        <View style={styles.inputWrapper}>
          <Text style={styles.inputIcon}>📋</Text>
          <TextInput
            style={styles.input}
            placeholder="input your job"
            placeholderTextColor="#999"
            value={jobTitle}
            onChangeText={setJobTitle}
            keyboardType="default"
            autoCapitalize="sentences"
          />
        </View>

        {/* 4. NÚT FINISH */}
        <TouchableOpacity
          style={styles.button}
          onPress={handleFinish}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>FINISH →</Text>
        </TouchableOpacity>

        {/* 5. HÌNH ẢNH MINH HỌA */}
        <View style={styles.imageContainer}>
          <Image
            source={NOTE_IMAGE}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AddTaskScreen;

// 🎨 Stylesheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 20,
  },
  // --- 1. HEADER (Đảo ngược vị trí so với màn hình Task List) ---
  header: {
    flexDirection: "row",
    justifyContent: "space-between", // Căn cách 2 bên
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 20,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  backIcon: {
    fontSize: 30,
    color: "#333",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
    borderWidth: 2,
    borderColor: "#00CED1",
  },
  greetingTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  greetingSubtitle: {
    fontSize: 14,
    color: "#999",
  },
  // --- 2. TIÊU ĐỀ CHÍNH ---
  mainTitle: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginTop: 30,
    marginBottom: 40,
  },
  // --- 3. INPUT NHẬP LIỆU ---
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
    marginBottom: 50, // Khoảng cách với nút
  },
  inputIcon: {
    fontSize: 20,
    marginRight: 10,
    color: "#66BB6A", // Màu xanh lá cho icon danh sách
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
    padding: 0,
  },
  // --- 4. NÚT FINISH ---
  button: {
    backgroundColor: "#00CED1", // Màu xanh ngọc
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    alignSelf: "center", // Căn giữa nút
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#00CED1",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
    marginBottom: 50,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
  // --- 5. HÌNH ẢNH MINH HỌA ---
  imageContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: 20,
    // Đảm bảo ảnh nằm ở phía dưới cùng, flex: 1 giúp nó chiếm không gian còn lại
  },
  image: {
    width: 200,
    height: 200,
  },
});
