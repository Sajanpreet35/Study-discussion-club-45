
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function CurrentAffairsScreen({ navigation }) {
  const currentAffairs = [
    {
      id: 1,
      title: 'New Education Policy Updates',
      summary: 'Government announces major changes in higher education structure...',
      date: 'Today',
      category: 'Education',
      readTime: '3 min read'
    },
    {
      id: 2,
      title: 'Economic Survey Highlights',
      summary: 'Key findings from the latest economic survey released by the finance ministry...',
      date: 'Yesterday',
      category: 'Economy',
      readTime: '5 min read'
    },
    {
      id: 3,
      title: 'Space Mission Success',
      summary: 'ISRO successfully launches communication satellite in polar orbit...',
      date: '2 days ago',
      category: 'Science',
      readTime: '4 min read'
    },
    {
      id: 4,
      title: 'Environmental Conservation Act',
      summary: 'New legislation passed for protecting endangered species and habitats...',
      date: '3 days ago',
      category: 'Environment',
      readTime: '6 min read'
    },
    {
      id: 5,
      title: 'International Trade Agreement',
      summary: 'Bilateral trade agreement signed to boost economic cooperation...',
      date: '4 days ago',
      category: 'International',
      readTime: '4 min read'
    }
  ];

  const getCategoryColor = (category) => {
    const colors = {
      Education: '#FF6B6B',
      Economy: '#4ECDC4',
      Science: '#45B7D1',
      Environment: '#96CEB4',
      International: '#FECA57'
    };
    return colors[category] || '#667eea';
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={['#667eea', '#764ba2']} style={styles.gradient}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.title}>Daily Current Affairs</Text>
        </View>
        
        <ScrollView style={styles.content}>
          <View style={styles.dateHeader}>
            <Text style={styles.dateText}>Today's Updates</Text>
            <Text style={styles.dateSubtext}>{new Date().toDateString()}</Text>
          </View>
          
          {currentAffairs.map((item) => (
            <TouchableOpacity key={item.id} style={styles.newsCard}>
              <View style={styles.newsHeader}>
                <View style={[styles.categoryBadge, { backgroundColor: getCategoryColor(item.category) }]}>
                  <Text style={styles.categoryText}>{item.category}</Text>
                </View>
                <Text style={styles.dateText}>{item.date}</Text>
              </View>
              
              <Text style={styles.newsTitle}>{item.title}</Text>
              <Text style={styles.newsSummary}>{item.summary}</Text>
              
              <View style={styles.newsFooter}>
                <Text style={styles.readTime}>{item.readTime}</Text>
                <Ionicons name="arrow-forward" size={16} color="#667eea" />
              </View>
            </TouchableOpacity>
          ))}
          
          <View style={styles.subscriptionCard}>
            <Ionicons name="notifications" size={40} color="#667eea" style={styles.subscriptionIcon} />
            <Text style={styles.subscriptionTitle}>Stay Updated!</Text>
            <Text style={styles.subscriptionText}>
              Get daily current affairs notifications to stay ahead in your preparation.
            </Text>
            <TouchableOpacity style={styles.subscribeButton}>
              <Text style={styles.subscribeButtonText}>Enable Notifications</Text>
            </TouchableOpacity>
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
  dateHeader: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
  },
  dateText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  dateSubtext: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  newsCard: {
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
  newsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  categoryBadge: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
  },
  categoryText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  newsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  newsSummary: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 15,
  },
  newsFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  readTime: {
    fontSize: 12,
    color: '#999',
  },
  subscriptionCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 25,
    marginTop: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  subscriptionIcon: {
    marginBottom: 15,
  },
  subscriptionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subscriptionText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 20,
  },
  subscribeButton: {
    backgroundColor: '#667eea',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  subscribeButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
