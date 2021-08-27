import React from 'react';
import { TouchableOpacity, StyleSheet, Text, GestureResponderEvent } from 'react-native';

export type ButtonProps = {
  onPress: (text: GestureResponderEvent) => void;
}

export const Button: React.FC<ButtonProps> = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#A370F7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
