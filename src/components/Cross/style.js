import { StyleSheet } from "react-native";

export default  styles = StyleSheet.create({
    cross: {
      flex: 1,
    },
    crossLine: {
      color: "black",
      position: "absolute",
      left: "48%",
      width: 10,
      height: "100%",
      backgroundColor: "white",
      borderRadius: 5,
      transform: [
        {
          rotate: "45deg",
        },
      ],
    },
    crossLineReversed: {
      transform: [
        {
          rotate: "-45deg",
        },
      ],
    },
  });