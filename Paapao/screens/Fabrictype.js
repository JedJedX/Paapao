import React from 'react';
import { Image, View, Text } from 'react-native';
import styles from "../styles/styles";

export default function Fabrictype() {
    return (
        <View style={styles.contentcard}>
            <View style={styles.cardprice}>
                <Image
                    source={require('../assets/imagesFabric/nilon.png')}
                    style={styles.fabricImage}
                />
                <Text style={styles.title}>Fabric</Text>
            </View>
        </View>
    );
};