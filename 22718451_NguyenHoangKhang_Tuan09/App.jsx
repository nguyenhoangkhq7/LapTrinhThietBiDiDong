import AddTaskScreen from "./components/AddTaskScreen";
import LoginScreen from "./components/LoginScreen";
import TaskListScreen from "./components/TaskListScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="TaskList" component={TaskListScreen} />
        <Stack.Screen name="AddTask" component={AddTaskScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
