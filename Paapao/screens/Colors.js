import React from 'react';
import { ScrollView,View, Text } from 'react-native';
import styles from "../styles/styles";

export default function Colors() {
    return (
        <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
            <View style={styles.contentcard}>
                <View style={styles.imgcard}>
                    <Text style={styles.title}>img</Text>
                </View>
                <View style={styles.textcard}>
                    <Text style={styles.title}>Colors</Text>
                </View>
            </View>
            <View style={styles.contentcard}>
                <View style={styles.imgcard}>
                    <Text style={styles.title}>img</Text>
                </View>
                <View style={styles.textcard}>
                    <Text style={styles.title}>Colors</Text>
                </View>
            </View>
            <View style={styles.contentcard}>
                <View style={styles.imgcard}>
                    <Text style={styles.title}>img</Text>
                </View>
                <View style={styles.textcard}>
                    <Text style={styles.title}>Colors</Text>
                </View>
            </View>
            <View style={styles.contentcard}>
                <View style={styles.imgcard}>
                    <Text style={styles.title}>img</Text>
                </View>
                <View style={styles.textcard}>
                    <Text style={styles.title}>Colors</Text>
                </View>
            </View>
            <View style={styles.contentcard}>
                <View style={styles.imgcard}>
                    <Text style={styles.title}>img</Text>
                </View>
                <View style={styles.textcard}>
                    <Text style={styles.title}>Colors</Text>
                </View>
            </View>
            <View style={styles.contentcard}>
                <View style={styles.imgcard}>
                    <Text style={styles.title}>img</Text>
                </View>
                <View style={styles.textcard}>
                    <Text style={styles.title}>Colors</Text>
                </View>
            </View>
            <View style={styles.contentcard}>
                <View style={styles.imgcard}>
                    <Text style={styles.title}>img</Text>
                </View>
                <View style={styles.textcard}>
                    <Text style={styles.title}>Colors</Text>
                </View>
            </View>
            <View style={styles.contentcard}>
                <View style={styles.imgcard}>
                    <Text style={styles.title}>img</Text>
                </View>
                <View style={styles.textcard}>
                    <Text style={styles.title}>Colors</Text>
                </View>
            </View>
        </ScrollView>
    );
};
