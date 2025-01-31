import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import styles from "../styles/styles";
import stylesC from "../styles/stylesColors";

export default function Colors() {
    return (
        <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
            <View style={styles.contentcard}>
                <View style={stylesC.imgcardWh}></View>
                <View style={styles.textcard}>
                    <Text style={styles.title}>information</Text>
                </View>
            </View>
            <View style={styles.contentcard}>
                <View style={stylesC.imgcardYL}></View>
                <View style={styles.textcard}>
                    <Text style={styles.title}>information</Text>
                </View>
            </View>
            <View style={styles.contentcard}>
                <View style={stylesC.imgcardGr}></View>
                <View style={styles.textcard}>
                    <Text style={styles.title}>information</Text>
                </View>
            </View>
            <View style={styles.contentcard}>
                <View style={stylesC.imgcardRe}></View>
                <View style={styles.textcard}>
                    <Text style={styles.title}>information</Text>
                </View>
            </View>
            <View style={styles.contentcard}>
                <View style={stylesC.imgcardPP}></View>
                <View style={styles.textcard}>
                    <Text style={styles.title}>information</Text>
                </View>
            </View>
            <View style={styles.contentcard}>
                <View style={stylesC.imgcardBlu}></View>
                <View style={styles.textcard}>
                    <Text style={styles.title}>information</Text>
                </View>
            </View>
            <View style={styles.contentcard}>
                <View style={stylesC.imgcardDG}></View>
                <View style={styles.textcard}>
                    <Text style={styles.title}>information</Text>
                </View>
            </View>
            <View style={styles.contentcard}>
                <View style={stylesC.imgcardBl}></View>
                <View style={styles.textcard}>
                    <Text style={styles.title}>information</Text>
                </View>
            </View>
        </ScrollView>
    );
};
