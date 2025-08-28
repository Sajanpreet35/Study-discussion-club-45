
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function NotesScreen({ navigation }) {
  const notes = [
    { id: 1, title: 'Mathematics - Algebra Formulas', subject: 'Mathematics', size: '2.5 MB', type: 'PDF' },
    { id: 2, title: 'Physics - Laws of Motion', subject: 'Physics', size: '1.8 MB', type: 'PDF' },
    { id: 3, title: 'Chemistry - Organic Reactions', subject: 'Chemistry', size: '3.2 MB', type: 'PDF' },
    { id: 4, title: 'Biology - Cell Structure', subject: 'Biology', size: '4.1 MB', type: 'PDF' },
    { id: 5, title: 'English - Grammar Rules', subject: 'English', size: '1.2 MB', type: 'PDF' },
    { id: 6, title: 'History - Ancient India', subject: 'History', size: '2.8 MB', type: 'PDF' },
  ];

  const handleDownload = (note) => {
    Alert.alert(
      'Download Note',
      `Download "${note.title}"?`,
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Download', onPress: () => Alert.alert('Success', 'Note downloaded successfully!') }
      ]
    );
  };

  const getSubjectColor = (subject) => {
    const colors = {
      Mathematics: '#FF6B6B',
      Physics: '#4ECDC4',
      Chemistry: '#45B7D1',
      Biology: '#96CEB4',
      English: '#FECA57',
      History: '#A8E6CF'
    };
    return colors[subject] || '#667eea';
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={['#667eea', '#764ba2']} style={styles.gradient}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.title}>Study Notes</Text>
        </View>
        
        <ScrollView style={styles.content}>
          {notes.map((note) => (
            <View key={note.id} style={styles.noteCard}>
              <View style={styles.noteHeader}>
                <View style={[styles.subjectBadge, { backgroundColor: getSubjectColor(note.subject) }]}>
                  <Text style={styles.subjectText}>{note.subject}</Text>
                </View>
                <Text style={styles.fileType}>{note.type}</Text>
              </View>
              
              <Text style={styles.noteTitle}>{note.title}</Text>
              <Text style={styles.fileSize}>Size: {note.size}</Text>
              
              <TouchableOpacity 
                style={styles.downloadButton}
                onPress={() => handleDownload(note)}
              >
                <Ionicons name="download" size={18} color="#fff" style={styles.buttonIcon} />
                <Text style={styles.downloadButtonText}>Download</Text>
              </TouchableOpacity>
            </View>
          ))}
          
          <View style={styles.infoSection}>
            <Ionicons name="information-circle" size={24} color="#667eea" />
            <Text style={styles.infoText}>
              All notes are prepared by our expert faculty members and are regularly updated.
            </Text>
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
  noteCard: {
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
  noteHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  subjectBadge: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
  },
  subjectText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  fileType: {
    fontSize: 12,
    color: '#999',
    fontWeight: 'bold',
  },
  noteTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  fileSize: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
  },
  downloadButton: {
    backgroundColor: '#667eea',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 8,
  },
  buttonIcon: {
    marginRight: 8,
  },
  downloadButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  infoSection: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  infoText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 10,
    flex: 1,
  },
});
