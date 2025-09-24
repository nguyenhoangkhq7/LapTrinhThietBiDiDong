import { StyleSheet, Text, View } from 'react-native';
import PhoneDetail from "./components/PhoneDetail"
import ChooseColor from "./components/ChooseColor"
export default function App() {
  return (
    // <PhoneDetail imageUrl={{uri: "https://res.cloudinary.com/dzcodbajo/image/upload/v1758673508/ig9panpqvf5p0qnwzoh9.png"}}/>
      <ChooseColor imageUrl={{uri: "https://res.cloudinary.com/dzcodbajo/image/upload/v1758673508/ig9panpqvf5p0qnwzoh9.png"}} phoneColor="đỏ" provideBy="Tiki Trading" price="1.790.000 đ"/>
  );
}
