import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  SafeAreaView,
  StatusBar,
} from "react-native";

// Dữ liệu mẫu
const initialTasks = [
  { id: "1", title: "To check email", completed: true },
  { id: "2", title: "UI task web page", completed: true },
  { id: "3", title: "Learn javascript basic", completed: true },
  { id: "4", title: "Learn HTML Advance", completed: true },
  { id: "5", title: "Medical App UI", completed: true },
  { id: "6", title: "Learn Java", completed: false },
];

const USER_AVATAR = { uri: "https://i.pravatar.cc/150?img=1" };

// --- Task Item Component ---
const TaskItem = ({ task, onToggleComplete, onEdit }) => (
  <View style={styles.taskItemContainer}>
    <TouchableOpacity
      style={[
        styles.checkbox,
        task.completed ? styles.checkboxChecked : styles.checkboxUnchecked,
      ]}
      onPress={() => onToggleComplete(task.id)}
    >
      <Text style={styles.checkmark}>{task.completed ? "✓" : ""}</Text>
    </TouchableOpacity>

    <Text
      style={[styles.taskTitle, task.completed && styles.taskTitleCompleted]}
    >
      {task.title}
    </Text>

    <TouchableOpacity onPress={() => onEdit(task.id)}>
      <Text style={styles.editIcon}>✏️</Text>
    </TouchableOpacity>
  </View>
);

const TaskListScreen = ({ navigation, route }) => {
  const name = route.params.name;

  const [tasks, setTasks] = useState(initialTasks);
  const [searchTerm, setSearchTerm] = useState("");
  const [task, setTask] = useState("");

  const handleToggleComplete = (id) => {
    setTasks((prev) =>
      prev
        .map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
        .sort((a, b) =>
          a.completed === b.completed ? 0 : a.completed ? 1 : -1
        )
    );
  };

  const handleEdit = (id) => console.log("Edit task ID:", id);

  // callback qua addtask
  const onAddTask = (newJobTitle) => {
    const newTask = {
      id: Date.now().toString(),
      title: newJobTitle,
      completed: false,
    };
    // Cập nhật State tasks (phải là MẢNG mới)
    setTasks((prevTasks) => [newTask, ...prevTasks]);

    // Lưu ý: Không cần goBack() ở đây nếu bạn gọi nó trong AddTaskScreen
  };

  const handleAddTask = () => {
    navigation.navigate("AddTask", { onAddTask: onAddTask });
  };

  const filteredTasks = tasks.filter((t) =>
    t.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f9f9f9" }}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        {/* HEADER */}
        <View style={styles.header}>
          <Image source={USER_AVATAR} style={styles.avatar} />
          <View>
            <Text style={styles.greetingTitle}>Hi {name}</Text>
            <Text style={styles.greetingSubtitle}>Have a great day ahead</Text>
          </View>
        </View>

        {/* SEARCH */}
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search tasks..."
            value={searchTerm}
            onChangeText={setSearchTerm}
          />
        </View>

        {/* TASK LIST */}
        <FlatList
          data={filteredTasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TaskItem
              task={item}
              onToggleComplete={handleToggleComplete}
              onEdit={handleEdit}
            />
          )}
          contentContainerStyle={{ paddingBottom: 100 }}
        />

        {/* FAB */}
        <TouchableOpacity style={styles.fab} onPress={handleAddTask}>
          <Text style={styles.fabIcon}>+</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default TaskListScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { flexDirection: "row", alignItems: "center", marginBottom: 20 },
  avatar: { width: 50, height: 50, borderRadius: 25, marginRight: 15 },
  greetingTitle: { fontSize: 18, fontWeight: "bold" },
  greetingSubtitle: { fontSize: 14, color: "#666" },
  searchContainer: {
    backgroundColor: "#eee",
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginBottom: 20,
  },
  searchInput: { fontSize: 16 },
  taskItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  checkbox: {
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
    borderWidth: 2,
  },
  checkboxChecked: { backgroundColor: "#4caf50", borderColor: "#4caf50" },
  checkboxUnchecked: { backgroundColor: "#fff", borderColor: "#ccc" },
  checkmark: { color: "#fff", fontWeight: "bold" },
  taskTitle: { flex: 1, fontSize: 16 },
  taskTitleCompleted: { textDecorationLine: "line-through", color: "#999" },
  editIcon: { fontSize: 18, color: "#E91E63", marginLeft: 10 },
  fab: {
    position: "absolute",
    bottom: 30,
    right: 30,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#00CED1",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  fabIcon: { fontSize: 35, color: "#fff", lineHeight: 40 },
});
