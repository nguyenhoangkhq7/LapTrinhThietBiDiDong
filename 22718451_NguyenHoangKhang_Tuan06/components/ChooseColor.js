import {View, Image, TouchableOpacity, Text, StyleSheet} from "react-native"

export default function ChooseColor({imageUrl, phoneColor, provideBy, price}) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={imageUrl} style={styles.image}/>
        <View>
          <Text style={styles.title}>Điện thoại VSMart Joy 3 Hàng Chính Hãng</Text>
          <Text style={styles.title}>Màu: {phoneColor}</Text>
          <Text style={styles.title}>Cung cấp bởi: {provideBy}</Text>
          <Text style={styles.title}>{price}</Text>
        </View>
      </View>
      <View style={styles.bodyContainer}>
        <Text style={{fontSize:16, fontWeight: "bold", margin:12}}>Chọn một màu bên dưới:</Text>
        <View style={{alignItems: "center"}}>
          <View style={{width:80, height:80, backgroundColor: "#C5F1FB", marginBottom: 12}}/>
          <View style={{width:80, height:80, backgroundColor: "red", marginBottom: 12}}/>
          <View style={{width:80, height:80, backgroundColor: "black", marginBottom: 12}}/>
          <View style={{width:80, height:80, backgroundColor: "#234896", marginBottom: 12}}/>
          <TouchableOpacity 
            style={{marginTop: 12, backgroundColor: "red", width: "100%", 
                  paddingTop:12, paddingBottom:12, borderRadius: 8}}>
            <Text style={{width: "100%", textAlign: "center"}}>CHỌN MUA</Text>
          </TouchableOpacity> 
        </View>
      </View>

    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    marginLeft: 12,
    marginRight: 12,
  },
  header: {
    flexDirection: "row",
    marginBottom: 12
  },
  image: {
    width:120, height:150
  },
  title: {
    marginTop: 12,
    marginLeft: 8,
    fontSize: 14,
    fontWeight: "bold"
  },
  bodyContainer: {
    backgroundColor: "gray",
    flex:1,

  },
})