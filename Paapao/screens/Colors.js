import React from "react";
import { ScrollView, View, Text } from "react-native";
import stylesC from "../styles/stylesColors";

export default function Colors() {
    return (
        <ScrollView
            contentContainerStyle={stylesC.container}
            keyboardShouldPersistTaps="handled"
        >
            <View style={stylesC.contentcard}>
                <View style={stylesC.imgcardWh}></View>
                <View style={stylesC.textcard}>
                    <Text style={stylesC.title}>
                        สีขาว : สีขาวสะท้อนแสงแดดได้ดีที่สุด และดูดซับความร้อนได้น้อยที่สุด
                        อุณหภูมิประมาณ 30°C หรือใกล้เคียงอุณหภูมิร่างกาย
                        เหมาะสำหรับใส่กลางแดดหรือกิจกรรมกลางแจ้งที่ต้องการลดความร้อนสะสม
                    </Text>
                </View>
            </View>
            <View style={stylesC.contentcard}>
                <View style={stylesC.imgcardYL}></View>
                <View style={stylesC.textcard}>
                    <Text style={stylesC.title}>
                        สีเหลือง : สีเหลืองก็สะท้อนแสงแดดได้ดีเช่นกัน แม้จะไม่ดีเท่าสีขาว
                        อุณหภูมิประมาณ 32-33°C เหมาะสำหรับผู้ที่ไม่ต้องการเสื้อสีขาว
                        แต่ยังต้องการลดความร้อน
                    </Text>
                </View>
            </View>
            <View style={stylesC.contentcard}>
                <View style={stylesC.imgcardGr}></View>
                <View style={stylesC.textcard}>
                    <Text style={stylesC.title}>
                        สีเทาอ่อน : สีเทาอ่อนสะท้อนแสงได้ดีในระดับหนึ่ง
                        แต่เริ่มดูดซับความร้อนเล็กน้อย อุณหภูมิประมาณ 35°C เหมาะสำหรับใส
                    </Text>
                </View>
            </View>
            <View style={stylesC.contentcard}>
                <View style={stylesC.imgcardRe}></View>
                <View style={stylesC.textcard}>
                    <Text style={stylesC.title}>
                        สีแดง : สีแดงเริ่มดูดซับพลังงานแสงมากขึ้น เพราะเป็นสีเข้มกว่าโทนสว่าง
                        อุณหภูมิประมาณ 37-40°C ใส่ได้ในพื้นที่ที่มีร่มเงา
                        แต่ไม่เหมาะสำหรับกิจกรรมกลางแดดจัด
                    </Text>
                </View>
            </View>
            <View style={stylesC.contentcard}>
                <View style={stylesC.imgcardPP}></View>
                <View style={stylesC.textcard}>
                    <Text style={stylesC.title}>
                        สีม่วง : สีม่วงเป็นโทนสีที่เข้มขึ้นกว่าแดงและส้ม จึงสะสมความร้อนเพิ่ม
                        อุณหภูมิประมาณ 40-43°C ใส่ได้ในอากาศเย็นหรือพื้นที่ที่มีแอร์
                        แต่หลีกเลี่ยงกลางแดด
                    </Text>
                </View>
            </View>
            <View style={stylesC.contentcard}>
                <View style={stylesC.imgcardBlu}></View>
                <View style={stylesC.textcard}>
                    <Text style={stylesC.title}>
                        สีน้ำเงิน : แม้จะเป็นสีเข้ม
                        แต่สีน้ำเงินสะท้อนบางช่วงคลื่นของแสงแดดได้ดีกว่าสีม่วง
                        อุณหภูมิประมาณ 38-42°C ใส่ได้ในวันที่ร้อนปานกลาง
                    </Text>
                </View>
            </View>
            <View style={stylesC.contentcard}>
                <View style={stylesC.imgcardDG}></View>
                <View style={stylesC.textcard}>
                    <Text style={stylesC.title}>
                        สีเขียวเข้ม : สีเขียวเข้มดูดซับแสงแดดมากกว่าสีอ่อนในกลุ่มสีเดียวกัน
                        อุณหภูมิประมาณ 45-48°C ควรหลีกเลี่ยงในวันที่แดดแรง
                        เพราะอาจทำให้ร่างกายสะสมความร้อนสูงF
                    </Text>
                </View>
            </View>
            <View style={stylesC.contentcard}>
                <View style={stylesC.imgcardBl}></View>
                <View style={stylesC.textcard}>
                    <Text style={stylesC.title}>
                        สีดำ : สีดำดูดซับทุกช่วงคลื่นแสง จึงสะสมความร้อนได้มากที่สุด
                        อุณหภูมิประมาณ 50°C หรือมากกว่า ไม่เหมาะสำหรับกิจกรรมกลางแจ้ง
                        เพราะอาจทำให้ร้อนจนเสี่ยงต่อฮีทสโตรก
                    </Text>
                </View>
            </View>

       
    </ScrollView >
  );
}
