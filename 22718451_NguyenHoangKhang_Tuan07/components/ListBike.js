import {FlatList ,View, Text, TouchableOpacity, StyleSheet, ActivityIndicator, Image} from "react-native"
import {useState ,useEffect} from "react"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';

export default function ListBike() {
  const [bikes, setBikes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://68ca0ae8430c4476c3481352.mockapi.io/bikes')
      .then((response) => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
      })
      .then((data) => {
        setBikes(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Có lỗi khi fetch:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <ActivityIndicator size="large" style={{ marginTop: 40 }} />;

  const renderItem = ({ item }) => (
    <View
      style={{
        backgroundColor: "pink",
        padding: 12,
        marginHorizontal: 8,
        marginVertical: 8,
        borderRadius: 10,
        alignItems: "center",
        flex: 1,
      }}
    >
      <Image
        style={{ width: 100, height: 100, borderRadius: 8 }}
        source={{ uri: item.image }}
        resizeMode="cover"
      />
      <Text style={{ marginTop: 8 }}>{item.name}</Text>
      <Text>{item.price}</Text>
    </View>
  );

  const Tab = createMaterialTopTabNavigator();

  function All() {
    return (
      <FlatList
        data={bikes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={{ padding: 8 }}
      />
    );
  }

  function RoadBike() {
    return (
      <FlatList
        data={bikes.filter((bike) => bike.type == "RoadBike")}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={{ padding: 8 }}
      />
    ); 
  } 
  function Mountain() {
    return (
      <FlatList
        data={bikes.filter((bike) => bike.type == "Mountain")}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={{ padding: 8 }}
      />
    );
  }

  return (
    <NavigationContainer>
      <View style={{ paddingTop: 40, paddingBottom: 12, alignItems: 'center' }}>
        <Text style={styles.title}>The world's best bike</Text>
      </View>
      
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'white',
          tabBarLabelStyle: { fontSize: 14 },
          tabBarStyle: { backgroundColor: '#6200ee' },
          tabBarIndicatorStyle: { backgroundColor: 'white' },
        }}
      >
        <Tab.Screen name="All" component={All} />
        <Tab.Screen name="RoadBike" component={RoadBike} />
        <Tab.Screen name="Mountain" component={Mountain} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "red",
    marginBottom: 12
  }
})