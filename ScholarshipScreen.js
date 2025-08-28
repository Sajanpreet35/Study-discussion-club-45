
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function ScholarshipScreen({ navigation }) {
  const scholarships = [
    {
      id: 1,
      title: 'Merit Scholarship Program',
      amount: '₹50,000',
      eligibility: 'Students with 85%+ marks',
      deadline: '15th March 2024',
      description: 'Merit-based scholarship for outstanding academic performance',
      available: true
    },
    {
      id: 2,
      title: 'Need-Based Financial Aid',
      amount: '₹30,000',
      eligibility: 'Annual family income < 2 Lakhs',
      deadline: '20th March 2024',
      description: 'Financial assistance for economically disadvantaged students',
      available: true
    },
    {
      id: 3,
      title: 'Minority Community Scholarship',
      amount: '₹25,000',
      eligibility: 'Students from minority communities',
      deadline: '25th February 2024',
      description: 'Special scholarship program for minority community students',
      available: false
    },
    {
      id: 4,
      title: 'Sports Excellence Award',
      amount: '₹40,000',
      eligibility: 'State/National level sports achievements',
      deadline: '10th April 2024',
      description: 'Recognition and financial support for sports achievers',
      available: true
    }
  ];

  const handleApply = (scholarship) => {
    if (!scholarship.available) {
      Alert.alert('Application Closed', 'The application deadline for this scholarship has passed.');
      return;
    }
    
    Alert.alert(
      'Apply for Scholarship',
      `Apply for "${scholarship.title}"?\n\nAmount: ${scholarship.amount}\nDeadline: ${scholarship.deadline}`,
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Apply Now', 
          onPress: () => Alert.alert('Application Submitted', 'Your scholarship application has been submitted successfully!') 
        }
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={['#667eea', '#764ba2']} style={styles.gradient}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.title}>Scholarships</Text>
        </View>
        
        <ScrollView style={styles.content}>
          <View style={styles.infoCard}>
            <Ionicons name="school" size={40} color="#667eea" style={styles.infoIcon} />
            <Text style={styles.infoTitle}>Financial Assistance Programs</Text>
            <Text style={styles.infoText}>
              We offer various scholarship programs to support deserving students in their educational journey.
            </Text>
          </View>
          
          {scholarships.map((scholarship) => (
            <View key={scholarship.id} style={styles.scholarshipCard}>
              <View style={styles.cardHeader}>
                <Text style={styles.scholarshipTitle}>{scholarship.title}</Text>
                <View style={[styles.statusBadge, scholarship.available ? styles.availableBadge : styles.closedBadge]}>
                  <Text style={styles.statusText}>
                    {scholarship.available ? 'Available' : 'Closed'}
                  </Text>
                </View>
              </View>
              
              <Text style={styles.amount}>{scholarship.amount}</Text>
              <Text style={styles.description}>{scholarship.description}</Text>
              
              <View style={styles.detailsContainer}>
                <View style={styles.detailRow}>
                  <Ionicons name="checkmark-circle" size={16} color="#4CAF50" />
                  <Text style={styles.detailText}>{scholarship.eligibility}</Text>
                </View>
                
                <View style={styles.detailRow}>
                  <Ionicons name="calendar" size={16} color="#FF9800" />
                  <Text style={styles.detailText}>Deadline: {scholarship.deadline}</Text>
                </View>
              </View>
              
              <TouchableOpacity 
                style={[styles.applyButton, !scholarship.available && styles.disabledButton]}
                onPress={() => handleApply(scholarship)}
              >
                <Ionicons name="document-text" size={18} color="#fff" style={styles.buttonIcon} />
                <Text style={styles.applyButtonText}>
                  {scholarship.available ? 'Apply Now' : 'Application Closed'}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
          
          <View style={styles.requirementsCard}>
            <Text style={styles.requirementsTitle}>General Requirements</Text>
            <Text style={styles.requirementItem}>• Valid academic transcripts</Text>
            <Text style={styles.requirementItem}>• Income certificate (if applicable)</Text>
            <Text style={styles.requirementItem}>• Character certificate from school</Text>
            <Text style={styles.requirementItem}>• Passport size photographs</Text>
            <Text style={styles.requirementItem}>• Bank account details</Text>
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
  infoCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  infoIcon: {
    marginBottom: 10,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 20,
  },
  scholarshipCard: {
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
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  scholarshipTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
  },
  availableBadge: {
    backgroundColor: '#4CAF50',
  },
  closedBadge: {
    backgroundColor: '#FF5722',
  },
  statusText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  amount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#667eea',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
    lineHeight: 20,
  },
  detailsContainer: {
    marginBottom: 15,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  detailText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 8,
  },
  applyButton: {
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
  applyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  requirementsCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    marginTop: 10,
    marginBottom: 20,
  },
  requirementsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  requirementItem: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
});
