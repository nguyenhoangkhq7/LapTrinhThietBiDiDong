import { View, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // Hoặc import từ 'react-native-vector-icons'

const StarRating = ({ rating }) => {
  const totalStars = 5;
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  const renderStars = () => {
    const stars = [];
    // Tạo các ngôi sao đầy
    for (let i = 0; i < filledStars; i++) {
      stars.push(
        <FontAwesome
          style={{ marginRight: 4 }}
          name="star"
          size={16}
          color="gold"
          key={`filled-${i}`}
        />
      );
    }
    // Tạo ngôi sao nửa (nếu có)
    if (hasHalfStar) {
      stars.push(
        <FontAwesome
          style={{ marginRight: 4 }}
          name="star-half-empty"
          size={16}
          color="gold"
          key="half"
        />
      );
    }
    // Tạo các ngôi sao rỗng
    const emptyStars = totalStars - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <FontAwesome
          style={{ marginRight: 4 }}
          name="star-o"
          size={16}
          color="gold"
          key={`empty-${i}`}
        />
      );
    }
    return stars;
  };

  return <View style={styles.container}>{renderStars()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default StarRating;
