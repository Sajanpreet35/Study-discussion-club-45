
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { logout } from '../firebase';

const exams = [
  { id: 1, name: 'UPSC', icon: 'school', color: '#FF6B6B' },
  { id: 2, name: 'NEET', icon: 'medical', color: '#4ECDC4' },
  { id: 3, name: 'JEE', icon: 'calculator', color: '#45B7D1' },
  { id: 4, name: 'Judiciary', icon: 'library', color: '#96CEB4' },
  { id: 5, name: 'Board Exam', icon: 'book', color: '#FECA57' },
];

export default function ExamListScreen() {
  const router = useRouter();

  const handleExamSelect = (exam) => {
    router.push(`/payment?exam=${exam.name}&examId=${exam.id}`);
  };

  const handleLogout = async () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Logout',
          onPress: async () => {
            const result = await logout();
            if (result.success) {
              router.replace('/');
            } else {
              Alert.alert('Error', 'Failed to logout');
            }
          },
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={['#667eea', '#764ba2']} style={styles.gradient}>
        <View style={styles.header}>
          <Text style={styles.title}>Select Your Exam</Text>
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Ionicons name="log-out" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
        
        <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
          <View style={styles.examContainer}>
            {exams.map((exam) => (
              <TouchableOpacity
                key={exam.id}
                style={[styles.examCard, { backgroundColor: exam.color }]}
                onPress={() => handleExamSelect(exam)}
              >
                <View style={styles.examContent}>
                  <Ionicons name={exam.icon} size={40} color="#fff" />
                  <Text style={styles.examText}>{exam.name}</Text>
                  <Ionicons name="chevron-forward" size={24} color="#fff" />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  header: {
    paddingTop: 20,
    paddingBottom: 30,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  logoutButton: {
    padding: 10,
  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  examContainer: {
    paddingBottom: 30,
  },
  examCard: {
    borderRadius: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  examContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    justifyContent: 'space-between',
  },
  examText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    flex: 1,
    marginLeft: 15,
  },
});
