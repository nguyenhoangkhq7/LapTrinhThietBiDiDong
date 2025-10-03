import {View, Text, Image, StyleSheet, TouchableOpacity} from "react-native"


export default function PowerBikeShopScreen() {

  return <View style={styles.container}>
    <Text style={styles.title}>A premium online store for sporter and their stylish choice</Text>
    <View style={styles.imageContainer}>
      <Image style={styles.image} source={{uri:"https://res.cloudinary.com/dzcodbajo/image/upload/v1759277674/hk223yp2kcwctkurcbez.png"}}/>
    </View>

    <Text style={styles.shopName}>POWER BIKE SHOP</Text>

    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Get Started</Text>
    </TouchableOpacity>

  </View>
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  title: {
    fontSize:18,
    fontWeight: "600",
    width: "90%"
  },
  image: {
    width:200,
    height:200
  },
  imageContainer:{
    backgroundColor: "pink",
    width:"100%",
    height:240,
    alignItems:"center",
    justifyContent: "center",
    borderRadius: 50
  },
  shopName: {
    fontSize: 20,
    fontWeight: "700"
  },
  button: {
    backgroundColor: "red",
    width: "80%",
    padding: 12
  },
  buttonText: {
    width: "100%",
    height: "100%",
    textAlign: "center",
    fontSize:16,
    fontWeight: "bold",
    color: "white"
  }
})