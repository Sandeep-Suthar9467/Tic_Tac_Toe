import React from "react";
import { Pressable } from "react-native";
import Circle from "../Circle/Circle";
import Cross from "../Cross/Cross";
import styles from './style';

const Cell = (props) => {
  const { cell, onPress } = props;
  return (
    <Pressable onPress={() => onPress()}  style={styles.cell} >
      {cell === "o" && <Circle/>}
      {cell === "x" && <Cross />}
    </Pressable>
  );
};

export default Cell;