import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

export type SkillCardProps = TouchableOpacityProps & {
    skill: string;
}

export const SkillCard: React.FC<SkillCardProps> = ({ skill, ...rest }) => {
  return (
    <TouchableOpacity 
      activeOpacity={0.7}
      style={[styles.buttonSkill]}
      {...rest}
    >
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
