import React, { useState } from 'react';

import {
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Platform,
} from 'react-native';
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

export const Home = () => {
  const [newSkill, setNewSkill] = useState('');
  const [skills, setSkills] = useState(['dfsad', 'testing']);

  const handleAddNewSkill = () => {
    const hasSkill = newSkill.trim().length >= 0;
    if (!hasSkill) {
      return;
    }
    console.info('hayoo');
    setSkills(previousSkills => previousSkills.concat(newSkill));
    setNewSkill('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome, João</Text>
      <TextInput
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#555"
        value={newSkill}
        onChangeText={text => setNewSkill(text)}
      />
      <Button onPress={handleAddNewSkill}>Add</Button>

      <Text style={[styles.title, { marginTop: 50 }]}>My skills</Text>

      {skills.map((skill, index) => (
        <SkillCard key={index} skill={skill} />
      ))}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 30,
    paddingVertical: 70,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 24,
  },
  input: {
    color: '#fff',
    fontSize: 18,
    backgroundColor: '#1F1E25',
    padding: Platform.OS === 'ios' ? 15 : 12,
    marginTop: 30,
    borderRadius: 7,
  },
});
