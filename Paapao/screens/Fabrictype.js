import React from "react";
import { ScrollView, Image, View, Text } from "react-native";
import styles from "../styles/stylesFabrictype";

export default function Fabrictype() {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.contentcard}>
        <View style={styles.cardfabric}>
          <View style={styles.cardimg}>
            <Image
              style={styles.fabricImage}
              source={require("../assets/imagesFabric/cotton.png")}
            />
          </View>
          <View style={styles.name}>
            <Text style={styles.nameprice}>ผ้าคอตตอน{"\n"}</Text>
          </View>
          <View style={styles.strength}>
            <Text style={styles.title}>
              ✅ ข้อดี:{"\n"}
              ระบายอากาศดี {"\n"}
              ดูดซับความชื้นได้ดี {"\n"}
              อ่อนนุ่มและไม่ระคายเคืองผิว{"\n"}
            </Text>
          </View>
          <View style={styles.weakness}>
            <Text style={styles.title}>
              ❌ ข้อเสีย:{"\n"}
              ยับง่าย{"\n"}
              แห้งช้า{"\n"}
              ราคาแพงกว่าผ้าใยสังเคราะห์{"\n"}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.contentcard}>
        <View style={styles.cardfabric}>
          <View style={styles.cardimg}>
            <Image
              style={styles.fabricImage}
              source={require("../assets/imagesFabric/linen.png")}
            />
          </View>
          <View style={styles.name}>
            <Text style={styles.nameprice}>ผ้าลินิน{"\n"}</Text>
          </View>
          <View style={styles.strength}>
            <Text style={styles.title}>
              ✅ ข้อดี:{"\n"}
              ระบายอากาศดี เหมาะกับอากาศร้อน{"\n"}
              แข็งแรงและทนทาน{"\n"}
              ยิ่งซักยิ่งนุ่ม{"\n"}
            </Text>
          </View>
          <View style={styles.weakness}>
            <Text style={styles.title}>
              ❌ ข้อเสีย:{"\n"}
              ยับง่าย{"\n"}
              หดตัวเมื่อซักครั้งแรก{"\n"}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.contentcard}>
        <View style={styles.cardfabric}>
          <View style={styles.cardimg}>
            <Image
              style={styles.fabricImage}
              source={require("../assets/imagesFabric/mai.png")}
            />
          </View>
          <View style={styles.name}>
            <Text style={styles.nameprice}>ผ้าไหม{"\n"}</Text>
          </View>
          <View style={styles.strength}>
            <Text style={styles.title}>
              ✅ ข้อดีของผ้าไหม:{"\n"}
              เนื้อนุ่ม หรูหรา และมีความเงา{"\n"}
              ให้ความอบอุ่นในฤดูหนาวและเย็นสบายในฤดูร้อน{"\n"}
              น้ำหนักเบาและให้สัมผัสที่ดีต่อผิว{"\n"}
            </Text>
          </View>
          <View style={styles.weakness}>
            <Text style={styles.title}>
              ❌ ข้อเสีย:{"\n"}
              ราคาแพง{"\n"}
              ต้องดูแลเป็นพิเศษ (ห้ามซักแรงและห้ามโดนแดดจัด){"\n"}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.contentcard}>
        <View style={styles.cardfabric}>
          <View style={styles.cardimg}>
            <Image
              style={styles.fabricImage}
              source={require("../assets/imagesFabric/nilon.png")}
            />
          </View>
          <View style={styles.name}>
            <Text style={styles.nameprice}>ผ้าซาติน{"\n"}</Text>
          </View>
          <View style={styles.strength}>
            <Text style={styles.title}>
              ✅ ข้อดี:{"\n"}
              เงางามและเรียบลื่น{"\n"}
              ให้สัมผัสที่หรูหราและดูแพง{"\n"}
              น้ำหนักเบา{"\n"}
            </Text>
          </View>
          <View style={styles.weakness}>
            <Text style={styles.title}>
              ❌ ข้อเสีย:{"\n"}
              ลื่นง่ายและอาจหลุดทรง{"\n"}
              ยับง่ายและดูแลรักษายาก{"\n"}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.contentcard}>
        <View style={styles.cardfabric}>
          <View style={styles.cardimg}>
            <Image
              style={styles.fabricImage}
              source={require("../assets/imagesFabric/shefong.png")}
            />
          </View>
          <View style={styles.name}>
            <Text style={styles.nameprice}>ผ้าชีฟอง{"\n"}</Text>
          </View>
          <View style={styles.strength}>
            <Text style={styles.title}>
              ✅ ข้อดี: {"\n"}
              น้ำหนักเบาและพลิ้วไหว {"\n"}
              ดูหรูหราและโรแมนติก{"\n"}
              ระบายอากาศได้ดี{"\n"}
            </Text>
          </View>
          <View style={styles.weakness}>
            <Text style={styles.title}>
              ❌ ข้อเสีย: {"\n"}
              ขาดง่าย {"\n"}
              ลื่นและเย็บยาก{"\n"}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.contentcard}>
        <View style={styles.cardfabric}>
          <View style={styles.cardimg}>
            <Image
              style={styles.fabricImage}
              source={require("../assets/imagesFabric/spandash.png")}
            />
          </View>
          <View style={styles.name}>
            <Text style={styles.nameprice}>ผ้าสแปนเด็กซ์{"\n"}</Text>
          </View>
          <View style={styles.strength}>
            <Text style={styles.title}>
              ✅ ข้อดี: {"\n"}
              ยืดหยุ่นสูง รองรับการเคลื่อนไหวได้ดี {"\n"}
              คืนตัวได้เร็ว ไม่เสียรูปง่าย {"\n"}
              เบาและกระชับร่างกาย{"\n"}
            </Text>
          </View>
          <View style={styles.weakness}>
            <Text style={styles.title}>
              ❌ ข้อเสีย: {"\n"}
              ระบายอากาศไม่ดีเท่าผ้าอื่น ๆ {"\n"}
              ไม่ทนความร้อน{"\n"}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.contentcard}>
        <View style={styles.cardfabric}>
          <View style={styles.cardimg}>
            <Image
              style={styles.fabricImage}
              source={require("../assets/imagesFabric/zatin.png")}
            />
          </View>
          <View style={styles.name}>
            <Text style={styles.nameprice}>ผ้าไนลอน{"\n"}</Text>
          </View>
          <View style={styles.strength}>
            <Text style={styles.title}>
              ✅ ข้อดี: {"\n"}
              แข็งแรงและทนทาน {"\n"}
              แห้งเร็วและกันน้ำได้ {"\n"}
              น้ำหนักเบา{"\n"}
            </Text>
          </View>
          <View style={styles.weakness}>
            <Text style={styles.title}>
              ❌ ข้อเสีย:{"\n"}
              ไม่ระบายอากาศ {"\n"}
              อาจเกิดไฟฟ้าสถิตง่าย{"\n"}
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
