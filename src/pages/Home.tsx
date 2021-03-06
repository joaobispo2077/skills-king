import React, { useEffect, useState } from 'react';

import {
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Platform,
  FlatList,
} from 'react-native';
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

export interface ISkill {
  id: string;
  name: string;
}

export const Home = () => {
  const [newSkill, setNewSkill] = useState('');
  const [skills, setSkills] = useState<ISkill[]>([]);
  const [gretting, setGretting] = useState('');

  const handleAddNewSkill = () => {
    const hasSkill = newSkill.trim().length >= 0;
    if (!hasSkill) {
      return;
    }
    console.info('hayoo');

    const skill = {
      id: String(new Date().getTime()),
      name: newSkill,
    };

    setSkills(previousSkills => previousSkills.concat(skill));
    setNewSkill('');
  };

  const handleRemoveSkill = (id: string) => {
    setSkills(previousSkills => previousSkills
      .filter(prevSkill => prevSkill.id !== id));
  };

  const handleCalculateGretting = () => {
    const currentHours = new Date().getHours();
    console.info(currentHours);

    const isMorning = currentHours >= 6 && currentHours < 12;
    if (isMorning) {
      setGretting('Good morning!');
      return;
    }

    const isAfternoon = currentHours >= 12 && currentHours < 18;
    if (isAfternoon) {
      setGretting('Good afternoon!');
      return;
    }

    const isEvening = currentHours >= 18 && currentHours < 20;
    if (isEvening) {
      setGretting('Good evening!');
      return;
    }

    setGretting('Good night!');
    return;
  };

  useEffect(() => {
    handleCalculateGretting();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome, skills king</Text>
      <Text style={styles.greetings}>{gretting}</Text>
      <TextInput
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#555"
        value={newSkill}
        onChangeText={text => setNewSkill(text)}
      />
      <Button onPress={handleAddNewSkill}>Add</Button>

      <Text style={[styles.title, { marginTop: 50 }]}>My skills</Text>

      <FlatList
        data={skills}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <SkillCard 
            onPress={() => handleRemoveSkill(item.id)} 
            skill={item.name} 
          />
        )}
      />
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
  greetings: {
    color: '#fff',
  },
});
