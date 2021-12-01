import React from 'react';
import { View } from 'react-native';
import Cell from '../Cell/Cell';
import styles from './style';

export default function Row(props) {
    const {rowIndex,row,onPress} = props;
    return (
        <View  style={styles.row}>
        {row.map((cell, columnIndex) => (
          <Cell
            key={`row-${rowIndex}-col-${columnIndex}`}
            cell={cell}
            onPress={() => onPress(rowIndex, columnIndex)}
          />
        ))}
      </View>
    )
}
