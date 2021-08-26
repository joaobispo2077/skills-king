import React, { useState } from 'react';

import {
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Platform,
  TouchableOpacity,
} from 'react-native';

export const Home = () => {
  const [newSkill, setNewSkill] = useState('');
  const [skills, setSkills] = useState([]);

  const handleAddNewSkill = () => {
    const hasSkill = newSkill.trim().length === 0;
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
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={handleAddNewSkill}
      >
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
      <Text style={[styles.title, { marginTop: 50 }]}>My skills</Text>
      {skills.map((skill, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={0.7}
          style={[styles.buttonSkill]}
        >
          <Text style={[styles.textSkill]}>{skill}</Text>
        </TouchableOpacity>
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
