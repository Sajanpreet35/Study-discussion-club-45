
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function LiveClassesScreen({ navigation }) {
  const liveClasses = [
    { id: 1, title: 'Mathematics - Algebra', time: '10:00 AM', instructor: 'Dr. Smith', isLive: true },
    { id: 2, title: 'Physics - Mechanics', time: '2:00 PM', instructor: 'Prof. Johnson', isLive: false },
    { id: 3, title: 'Chemistry - Organic', time: '4:00 PM', instructor: 'Dr. Brown', isLive: false },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={['#667eea', '#764ba2']} style={styles.gradient}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.title}>Live Classes</Text>
        </View>
        
        <ScrollView style={styles.content}>
          {liveClasses.map((classItem) => (
            <View key={classItem.id} style={styles.classCard}>
              <View style={styles.classHeader}>
                <Text style={styles.classTitle}>{classItem.title}</Text>
                {classItem.isLive && (
                  <View style={styles.liveBadge}>
                    <Text style={styles.liveText}>LIVE</Text>
                  </View>
                )}
              </View>
              
              <Text style={styles.instructor}>Instructor: {classItem.instructor}</Text>
              <Text style={styles.time}>Time: {classItem.time}</Text>
              
              <TouchableOpacity 
                style={[styles.joinButton, !classItem.isLive && styles.disabledButton]}
                disabled={!classItem.isLive}
              >
                <Ionicons name="videocam" size={20} color="#fff" style={styles.buttonIcon} />
                <Text style={styles.joinButtonText}>
                  {classItem.isLive ? 'Join Live Class' : 'Not Started'}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
          
          <View style={styles.scheduleSection}>
            <Text style={styles.sectionTitle}>Upcoming Schedule</Text>
            <Text style={styles.scheduleText}>• Monday - Mathematics (10:00 AM)</Text>
            <Text style={styles.scheduleText}>• Tuesday - Physics (2:00 PM)</Text>
            <Text style={styles.scheduleText}>• Wednesday - Chemistry (4:00 PM)</Text>
            <Text style={styles.scheduleText}>• Thursday - Biology (10:00 AM)</Text>
            <Text style={styles.scheduleText}>• Friday - English (2:00 PM)</Text>
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
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },
  backButton: {
    marginRight: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  classCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  classHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  classTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
  },
  liveBadge: {
    backgroundColor: '#FF4444',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
  },
  liveText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  instructor: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  time: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
  },
  joinButton: {
    backgroundColor: '#667eea',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 10,
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  buttonIcon: {
    marginRight: 8,
  },
  joinButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  scheduleSection: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    marginTop: 10,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  scheduleText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
});
