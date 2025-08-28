
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const exams = [
  { id: 1, name: 'UPSC', icon: 'school', color: '#FF6B6B' },
  { id: 2, name: 'NEET', icon: 'medical', color: '#4ECDC4' },
  { id: 3, name: 'JEE', icon: 'calculator', color: '#45B7D1' },
  { id: 4, name: 'Judiciary', icon: 'library', color: '#96CEB4' },
  { id: 5, name: 'Board Exam', icon: 'book', color: '#FECA57' },
];

export default function ExamListScreen({ navigation }) {
  const handleExamSelect = (exam) => {
    navigation.navigate('Payment', { exam });
  };

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={['#667eea', '#764ba2']} style={styles.gradient}>
        <View style={styles.header}>
          <Text style={styles.title}>Select Your Exam</Text>
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
          
          <View style={styles.quickAccessSection}>
            <Text style={styles.sectionTitle}>Quick Access</Text>
            <View style={styles.quickAccessGrid}>
              <TouchableOpacity style={styles.quickAccessCard} onPress={() => navigateToScreen('LiveClasses')}>
                <Ionicons name="videocam" size={24} color="#667eea" />
                <Text style={styles.quickAccessText}>Live Classes</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.quickAccessCard} onPress={() => navigateToScreen('Notes')}>
                <Ionicons name="document-text" size={24} color="#667eea" />
                <Text style={styles.quickAccessText}>Study Notes</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.quickAccessCard} onPress={() => navigateToScreen('CurrentAffairs')}>
                <Ionicons name="newspaper" size={24} color="#667eea" />
                <Text style={styles.quickAccessText}>Current Affairs</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.quickAccessCard} onPress={() => navigateToScreen('Scholarship')}>
                <Ionicons name="school" size={24} color="#667eea" />
                <Text style={styles.quickAccessText}>Scholarships</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.quickAccessCard} onPress={() => navigateToScreen('Feedback')}>
                <Ionicons name="chatbubble" size={24} color="#667eea" />
                <Text style={styles.quickAccessText}>Feedback</Text>
              </TouchableOpacity>
            </View>
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
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
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
  quickAccessSection: {
    paddingTop: 20,
    paddingBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 15,
    textAlign: 'center',
  },
  quickAccessGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  quickAccessCard: {
    backgroundColor: '#fff',
    width: '30%',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  quickAccessText: {
    fontSize: 12,
    color: '#333',
    marginTop: 8,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
