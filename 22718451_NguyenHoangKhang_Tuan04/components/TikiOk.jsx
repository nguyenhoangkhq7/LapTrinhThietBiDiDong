import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";

export default function TikiOk() {
  return (
    <View style={styles.container}>
      {/* View chung cho phần phía trên */}
      <View style={styles.topContainer}>
        <View style={styles.inforContainer}>
          {/* image */}
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={require("./img/book.png")} />
          </View>

          {/* infor */}
          <View style={styles.info}>
            <Text style={styles.boldText}>
              Nguyên hàm tích phân và ứng dụng
            </Text>
            <Text style={styles.boldText}>Cung cấp bởi tiki trading</Text>
            <Text style={{ fontSize: 16, color: "red", fontWeight: "bold" }}>
              141.800 đ
            </Text>
            <Text
              style={{
                fontSize: 12,
                textDecorationLine: "line-through",
                color: "gray",
              }}
            >
              141.800 đ
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                // backgroundColor: "red",
                alignItems: "center",
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity
                  style={{
                    paddingLeft: 8,
                    paddingRight: 8,
                    marginTop: 8,
                    marginBottom: 8,
                    backgroundColor: "gray",
                  }}
                >
                  <Text>-</Text>
                </TouchableOpacity>
                <Text style={{ padding: 8 }}>1</Text>
                <TouchableOpacity
                  style={{
                    paddingLeft: 8,
                    paddingRight: 8,
                    marginTop: 8,
                    marginBottom: 8,
                    backgroundColor: "gray",
                  }}
                >
                  <Text>+</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity>
                  <Text style={{ fontWeight: "bold", color: "blue" }}>
                    Mua sau
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <View style={{ flexDirection: "row", marginTop: 12 }}>
          <Text style={[styles.boldText, { marginRight: 24 }]}>
            Mã giảm giá đã lưu
          </Text>
          <TouchableOpacity>
            <Text style={{ fontWeight: "bold", color: "blue" }}>
              Xem tại đây
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row" }}>
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: "gray",
              paddingLeft: 12,
              paddingRight: 148,
            }}
            placeholder="Mã giảm giá"
          />
          <TouchableOpacity style={{ backgroundColor: "blue", marginLeft: 24 }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                color: "white",
                textAlign: "center",
                marginTop: 6,
                paddingLeft: 12,
                paddingRight: 12,
              }}
            >
              Áp dụng
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          // padding: 12,
          paddingTop: 12,
          width: "100%",
          backgroundColor: "white",
          marginTop: 12,
          justifyContent: "center",
        }}
      >
        <Text style={[styles.boldText, { fontSize: 13, marginRight: 12 }]}>
          Bạn có phiếu quà tặng Tiki/Got it/Urbox?
        </Text>
        <TouchableOpacity>
          <Text style={{ fontWeight: "bold", color: "blue" }}>
            Nhập tại đây?
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: "row",
          backgroundColor: "white",
          width: "100%",
          marginTop: 12,
          paddingLeft: 12,
          paddingRight: 12,
          justifyContent: "space-between",
          paddingTop: 12,
        }}
      >
        <Text style={[styles.boldText, {}]}>Tạm tính</Text>
        <Text style={[styles.boldText, { color: "red" }]}>141.800đ</Text>
      </View>

      <View
        style={{
          backgroundColor: "white",
          width: "100%",
          marginTop: 12,
          paddingLeft: 12,
          paddingRight: 12,
          paddingTop: 12,
          marginTop: "auto",
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={[styles.boldText, { color: "gray" }]}>Thành tiền</Text>
          <Text style={[styles.boldText, { color: "red" }]}>141.800đ</Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "#e53935",
            paddingTop: 12,
            paddingBottom: "12",
            alignItems: "center",
            marginBottom: 16,
            marginTop: 24,
          }}
        >
          <Text style={{ fontSize: 24, color: "white", fontWeight: "bold" }}>
            TIẾN HÀNH ĐẶT HÀNG
          </Text>
        </TouchableOpacity>
      </View>

      <View></View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
  },
  topContainer: {
    padding: 12,
    paddingTop: 24,
    paddingBottom: 24,
    backgroundColor: "white",
  },
  inforContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
  },
  imageContainer: {
    flex: 2,
  },
  image: {
    width: 140,
    height: 150,
  },
  info: {
    flex: 3,
    marginLeft: 12,
  },
  boldText: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 12,
  },
});
