// Filename: index.js
// Combined code from all files

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';

const Stack = createNativeStackNavigator();

const stories = [
    { id: 1, title: 'The Hungry Lion', content: 'Once upon a time, there was a hungry lion...' },
    { id: 2, title: 'The Clever Fox', content: 'Once upon a time, there was a clever fox...' },
    { id: 3, title: 'The Brave Rabbit', content: 'Once upon a time, there was a brave rabbit...' },
];

function HomeScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Choose a Story</Text>
            {stories.map((story) => (
                <TouchableOpacity
                    key={story.id}
                    style={styles.storyButton}
                    onPress={() => navigation.navigate('Story', { title: story.title, content: story.content })}
                >
                    <Text style={styles.storyButtonText}>{story.title}</Text>
                </TouchableOpacity>
            ))}
        </SafeAreaView>
    );
}

function StoryScreen({ route }) {
    const { title, content } = route.params;

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.content}>{content}</Text>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        paddingTop: 20,
        paddingHorizontal: 16,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 20,
        color: '#fff',
        textAlign: 'center',
    },
    storyButton: {
        backgroundColor: '#6200ee',
        padding: 15,
        borderRadius: 5,
        marginVertical: 10,
        width: '100%',
        alignItems: 'center',
    },
    storyButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    scrollViewContent: {
        alignItems: 'center',
    },
    content: {
        fontSize: 16,
        textAlign: 'justify',
        color: '#ddd',
    },
});

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Story Tales', headerStyle: { backgroundColor: '#121212' }, headerTintColor: '#fff' }} />
                <Stack.Screen name="Story" component={StoryScreen} options={({ route }) => ({ title: route.params.title, headerStyle: { backgroundColor: '#121212' }, headerTintColor: '#fff' })} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}