import {View, Image, TouchableOpacity, Text, StyleSheet} from "react-native"
import {FontAwesome} from '@expo/vector-icons';

export default function PhoneDetail({imageUrl}) {
  return (
  <View style={styles.container}>
    <Image source={imageUrl} style={styles.image}/>
    <Text>Điện thoại vsmart 3 - Chính hãng</Text>
    <View style={styles.bodyContainer}>
      <View style={styles.rateContainer}>
        <FontAwesome  name="star-rate" size={24} color="yellow" />
        <FontAwesome  name="star-rate" size={24} color="yellow" />
        <FontAwesome  name="star-rate" size={24} color="yellow" />
        <FontAwesome  name="star-rate" size={24} color="yellow" />
        <FontAwesome  name="star-rate" size={24} color="yellow" />
      </View>
      <Text>(Xem 828 đánh giá)</Text>
    </View>
    <View style={{flexDirection: "row", alignItems: "center"}}>
      <Text style={{fontSize: 20, fontWeight: "bold", marginRight: 24 }}>1.790.000 đ</Text>
      <Text style={{textDecorationLine: "line-through"}}>1.790.000 đ</Text>
    </View>
    <View> 
      <Text style={{color: "red", fontSize:13, fontWeight: "bold", marginTop:12}}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
    </View>

    <TouchableOpacity style={{alignSelf: "center", paddingTop: 8, paddingBottom: 8, borderWidth: 1, width: "100%", marginTop: 12, marginBottom: 24, borderRadius: 8}}>
      <Text style={{textAlign: "center"}}>4 MÀU - CHỌN MÀU ></Text>
    </TouchableOpacity>

    <TouchableOpacity style={{margin: "auto", backgroundColor: "red", width: "100%", paddingTop:8, paddingBottom:8, borderRadius: 8}}>
      <Text style={{width: "100%", textAlign: "center"}}>CHỌN MUA</Text>
    </TouchableOpacity>
  </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    marginLeft: 12,
    marginRight: 12,
  },
  image: {
    width:"100%", height:400
  },
  bodyContainer: {
    flexDirection:"row",
    marginTop: 12,
  },
  rateContainer: {
    flexDirection: "row",
    marginRight: 24,
  }
})