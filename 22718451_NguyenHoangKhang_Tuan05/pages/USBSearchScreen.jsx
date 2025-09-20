import {
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import StarRating from "../components/StartRating";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { TextInput } from "react-native-paper";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
export default function USBSearchScreen() {
  const [data, setData] = useState([]);
  const [err, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://68ca0ae8430c4476c3481352.mockapi.io/usb"
        );
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (err) return <View>Err {err}</View>;
  if (loading) return <ActivityIndicator size={"large"} />;

  const renderItem = ({ item }) => {
    return (
      <View style={{ margin: 8, padding: 8 }}>
        <Image
          style={{ width: "100%", height: 120 }}
          source={{ uri: item.imageUrl }}
        />
        <Text style={{ width: 150 }}>{item.productName}</Text>
        <View style={{ flexDirection: "row", marginTop: 12 }}>
          <StarRating rating={item.rating} />
          <Text style={{ marginLeft: 12, alignItems: "center" }}>
            ({item.numberOfRating})
          </Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: 12 }}>
          <Text style={{ fontWeight: "bold", fontSize: 16, marginRight: 12 }}>
            {item.price}00 đ
          </Text>
          <Text style={{ fontSize: 16, color: "gray" }}>{item.discount}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      {/* header */}
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
          <Entypo name="arrow-bold-left" size={32} color="black" />
        </TouchableOpacity>

        <View style={{ flexDirection: "row", maxWidth: 220, marginRight: 32 }}>
          <FontAwesome
            style={{ position: "relative", top: 5, left: 32, zIndex: 1 }}
            name="search"
            size={24}
            color="black"
          />
          <TextInput
            style={{ width: "100%", height: 32, paddingLeft: 24 }}
            placeholder="Dây cáp USB"
          />
        </View>
        <TouchableOpacity style={{ marginLeft: 12, marginRight: 12 }}>
          <Feather name="shopping-cart" size={28} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginRight: 12 }}>
          <SimpleLineIcons name="options" size={28} color="black" />
        </TouchableOpacity>
      </View>

      {/* body */}
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <FlatList
          contentContainerStyle={{ alignItems: "flex-start" }}
          data={data}
          renderItem={renderItem}
          numColumns={2}
          keyExtractor={(item) => item.id}
        />
      </View>

      {/* footer */}
      <Footer />
    </View>
  );
}
