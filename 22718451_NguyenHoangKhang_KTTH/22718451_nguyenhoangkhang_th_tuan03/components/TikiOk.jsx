import {View, StyleSheet, Text, TouchableOpacity, TextInput, Image} from "react-native"

export default function TikiOk() {
  return (
    <View style={styles.container}>
      <View> 

        <View style={styles.inforContainer}>
          <View style={styles.imageContainer}> 
            <Image style={styles.image} source={require('./img/book.png')}/>
          </View>

          <View style={styles.info}> 
            <Text style={styles.normalText}>Nguyên hàm tích phân và ứng dụng</Text>
            <Text>Cung cấp bởi tiki trading</Text>
            <Text>141.800 đ</Text>
            <Text>141.800 đ</Text>
            <View> 
              <TouchableOpacity>
                <Text>-</Text>
              </TouchableOpacity>
              <Text>1</Text>
              <TouchableOpacity>
                <Text>+</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity>
                  <Text>Mua sau</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

      <View>
        <Text>Mã giảm giá đã lưu</Text>
        <TouchableOpacity>
          <Text>Xem tại đây</Text>
        </TouchableOpacity>
      </View>

      <View> 
        <TextInput placeholder="Nhập mã giảm giá tại đây"/>
        <TouchableOpacity>
            <Text>Áp dụng</Text>
        </TouchableOpacity>
      </View>

      </View>

      <View> 
      
      </View>

      <View> 
      
      </View>
    </View>
  );
} 
const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: "center",
  },
  inforContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%"
  },
  imageContainer: {
    flex: 1
  },
  image: {
    width: 140,
    height: 200
  },
  info: {
    flex: 1
  },
  normalText: {
    fontWeight: "bold",
    fontSize: "14"
  }
})
























