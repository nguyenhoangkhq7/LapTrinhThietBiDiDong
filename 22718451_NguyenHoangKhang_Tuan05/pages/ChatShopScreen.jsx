import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  Text,
  ActivityIndicator,
} from "react-native";
import { useEffect, useState } from "react";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import Footer from "../components/Footer";
export default function ShopList() {
  const [data, setData] = useState([]); // Dữ liệu từ API
  const [loading, setLoading] = useState(true); // Trạng thái loading
  const [error, setError] = useState(null); // Trạng thái lỗi (nếu có)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://68ca0ae8430c4476c3481352.mockapi.io/products"
        );
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <ActivityIndicator size="large" color="blue" />;
  if (error) return <Text>Đã xảy ra lỗi: {error}</Text>;

  const renderItem = ({ item }) => {
    return (
      <View
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}
      >
        <Image
          source={{ uri: item.productImage }}
          style={{ width: 80, height: 80, marginRight: 10 }}
        />
        <View style={{ flex: 1 }}>
          <Text>{item.productName}</Text>
          <Text>{item.shopName}</Text>
        </View>
        <TouchableOpacity
          style={{ padding: 10, backgroundColor: "red", borderRadius: 5 }}
        >
          <Text>Chat</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 8,
          paddingTop: 32,
          backgroundColor: "#1BA9FF",
        }}
      >
        <TouchableOpacity>
          <Entypo name="arrow-bold-left" size={24} color="black" />
        </TouchableOpacity>
        <Text>Chat</Text>
        <TouchableOpacity>
          <Feather name="shopping-cart" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View>
        <Text style={{ fontWeight: "bold", padding: 8 }}>
          Bạn có thắc mắc với sản phẩm vừa xem, đừng ngại nhắn shop!
        </Text>
      </View>

      <View style={{ flex: 1, padding: 8 }}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>

      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#ecf0f1",
    // padding: 8,
  },
});
