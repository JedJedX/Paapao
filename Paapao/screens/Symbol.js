import React from 'react';
import { Image, ScrollView, View, Text } from 'react-native';
import styles from "../styles/stylesSymbol";

export default function Symbol() {
    return (
        <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
            <View style={styles.contentcard}>

                <View style={styles.cardsymbol}>
                    <Image
                        style={styles.SymbolImage}
                        source={require("../assets/imgsymbol/bleachingallowed.png")}
                    />
                </View>
                <View style={styles.textsymbol}>
                    <Text style={styles.title}>สามเหลี่ยม หมายถึงอนุญาตให้ใช้สารฟอกขาวได้ทุกชนิด</Text>
                </View>
            </View>
            <View style={styles.contentcard}>

                <View style={styles.cardsymbol}>
                    <Image
                        style={styles.SymbolImage}
                        source={require("../assets/imgsymbol/donotdrywash.png")}
                    />
                </View>
                <View style={styles.textsymbol}>
                    <Text style={styles.title}>กากบาททับวงกลม เป็นสัญลักษณ์ห้ามซักแห้งเด็ดขาด</Text>
                </View>
            </View>
            <View style={styles.contentcard}>

                <View style={styles.cardsymbol}>
                    <Image
                        style={styles.SymbolImage}
                        source={require("../assets/imgsymbol/donotiron.png")}
                    />
                </View>
                <View style={styles.textsymbol}>
                    <Text style={styles.title}>รูปกากบาททับบนเตารีด แปลว่า เป็นผ้าชนิดที่ห้ามรีด เช่น ผ้ายืด, ผ้าขนสัตว์, ผ้าหนัง</Text>
                </View>
            </View>
            <View style={styles.contentcard}>

                <View style={styles.cardsymbol}>
                    <Image
                        style={styles.SymbolImage}
                        source={require("../assets/imgsymbol/Donotwash.png")}
                    />
                </View>
                <View style={styles.textsymbol}>
                    <Text style={styles.title}>กากบาททับบนถัง คือสัญลักษณ์ห้ามซักผ้าชนิดนั้นกับเครื่องซักผ้า</Text>
                </View>
            </View>
            <View style={styles.contentcard}>

                <View style={styles.cardsymbol}>
                    <Image
                        style={styles.SymbolImage}
                        source={require("../assets/imgsymbol/dryclean.png")}
                    />
                </View>
                <View style={styles.textsymbol}>
                    <Text style={styles.title}>วงกลม หมายถึงการซักแห้ง หรือซักด้วยสารเคมี ซึ่งเหมาะกับชุดสูท</Text>
                </View>
            </View>
            <View style={styles.contentcard}>

                <View style={styles.cardsymbol}>
                    <Image
                        style={styles.SymbolImage}
                        source={require("../assets/imgsymbol/drying.png")}
                    />
                </View>
                <View style={styles.textsymbol}>
                    <Text style={styles.title}>สัญลักษณ์การดูแลเสื้อผ้า ที่บ่งบอกถึงการปล่อยให้ผ้าแห้งเองตามธรรมชาติ</Text>
                </View>
            </View>
            <View style={styles.contentcard}>

                <View style={styles.cardsymbol}>
                    <Image
                        style={styles.SymbolImage}
                        source={require("../assets/imgsymbol/ironning.png")}
                    />
                </View>
                <View style={styles.textsymbol}>
                    <Text style={styles.title}>สัญลักษณ์การดูแลเสื้อผ้า ที่ระบุว่า เป็นผ้าที่สามารถรีดได้ เช่น ชุดข้าราชการ</Text>
                </View>
            </View>
            <View style={styles.contentcard}>

                <View style={styles.cardsymbol}>
                    <Image
                        style={styles.SymbolImage}
                        source={require("../assets/imgsymbol/Machinewash.png")}
                    />
                </View>
                <View style={styles.textsymbol}>
                    <Text style={styles.title}>เป็นผ้าที่สามารถทนแรงปั่นจากเครื่องซักผ้าได้</Text>
                </View>
            </View>
            <View style={styles.contentcard}>

                <View style={styles.cardsymbol}>
                    <Image
                        style={styles.SymbolImage}
                        source={require("../assets/imgsymbol/tumbledry.png")}
                    />
                </View>
                <View style={styles.textsymbol}>
                    <Text style={styles.title}>สามารถอบแห้งโดยเครื่องอบผ้าได้</Text>
                </View>
            </View>
            
            
        </ScrollView>
    );
};