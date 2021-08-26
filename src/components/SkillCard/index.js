import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export const SkillCard = ({ skill }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={[styles.buttonSkill]}>
      <Text style={[styles.textSkill]}>{skill}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textSkill: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonSkill: {
    padding: 20,
    borderRadius: 20,
    backgroundColor: '#1F1E25',
    alignItems: 'center',
    marginTop: 10,
  },
});
