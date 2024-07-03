// Filename: index.js
// Combined code from all files

import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useColorScheme, SafeAreaView, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';

// HomeScreen.js code
const stories = [
    { id: 1, title: 'The Hungry Lion', content: 'Once upon a time, there was a hungry lion...' },
    { id: 2, title: 'The Clever Fox', content: 'Once upon a time, there was a clever fox...' },
    { id: 3, title: 'The Brave Rabbit', content: 'Once upon a time, there was a brave rabbit...' },
];

function HomeScreen({ navigation }) {
    const scheme = useColorScheme();

    return (
        <SafeAreaView style={[styles.container, scheme === 'dark' && styles.containerDark]}>
            <Text style={[styles.title, scheme === 'dark' && styles.titleDark]}>Choose a Story</Text>
            {stories.map((story) => (
                <TouchableOpacity
                    key={story.id}
                    style={[styles.storyButton, scheme === 'dark' && styles.storyButtonDark]}
                    onPress={() => navigation.navigate('Story', { title: story.title, content: story.content })}
                >
                    <Text style={[styles.storyButtonText, scheme === 'dark' && styles.storyButtonTextDark]}>{story.title}</Text>
                </TouchableOpacity>
            ))}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        paddingTop: 20,
        paddingHorizontal: 16,
        alignItems: 'center',
    },
    containerDark: {
        backgroundColor: '#121212',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 20,
        color: '#000',
    },
    titleDark: {
        color: '#fff',
    },
    storyButton: {
        backgroundColor: '#6200ee',
        padding: 15,
        borderRadius: 5,
        marginVertical: 10,
        width: '100%',
        alignItems: 'center',
    },
    storyButtonDark: {
        backgroundColor: '#3700b3',
    },
    storyButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    storyButtonTextDark: {
        color: '#ccc',
    },
});

// StoryScreen.js code
function StoryScreen({ route }) {
    const { title, content } = route.params;
    const scheme = useColorScheme();

    return (
        <SafeAreaView style={[stylesStory.container, scheme === 'dark' && stylesStory.containerDark]}>
            <ScrollView contentContainerStyle={stylesStory.scrollViewContent}>
                <Text style={[stylesStory.title, scheme === 'dark' && stylesStory.titleDark]}>{title}</Text>
                <Text style={[stylesStory.content, scheme === 'dark' && stylesStory.contentDark]}>{content}</Text>
            </ScrollView>
        </SafeAreaView>
    );
}

const stylesStory = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        paddingTop: 20,
        paddingHorizontal: 16,
    },
    containerDark: {
        backgroundColor: '#121212',
    },
    scrollViewContent: {
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 20,
        textAlign: 'center',
        color: '#000',
    },
    titleDark: {
        color: '#fff',
    },
    content: {
        fontSize: 16,
        textAlign: 'justify',
        color: '#000',
    },
    contentDark: {
        color: '#ddd',
    },
});

// App.js code
const Stack = createNativeStackNavigator();

export default function App() {
    const scheme = useColorScheme();

    return (
        <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Story Tales' }} />
                <Stack.Screen name="Story" component={StoryScreen} options={({ route }) => ({ title: route.params.title })} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}