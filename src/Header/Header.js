import React from 'react'
import { Text } from 'react-native'
import styles from './style';

export default function Header(props) {
    const {currentTurn} = props;
    return (
        <Text style={styles.header}>
        Current Turn: {currentTurn.toUpperCase()}
      </Text>
    )
}
