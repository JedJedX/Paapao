import React from "react";
import { Image, ScrollView, View, Text } from "react-native";
import styles from "../styles/stylesPrice";

export default function Price() {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.contentcard}>
        <View style={styles.cardPrice}>
          <View style={styles.cardimg}>
            <Image
              style={styles.fabricImage}
              source={require("../assets/imagesFabric/cotton.png")}
            />
          </View>
          <View style={styles.textPrice}>
            <Text style={styles.title}>
              ราคาของผ้าคอตตอน {"\n"}
              ช่วงราคา 100 - 300 บาทต่อเมตร{"\n"}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.contentcard}>
        <View style={styles.cardPrice}>
          <View style={styles.cardimg}>
            <Image
              style={styles.fabricImage}
              source={require("../assets/imagesFabric/linen.png")}
            />
          </View>
          <View style={styles.textPrice}>
            <Text style={styles.title}>
              ราคาของผ้าลินิน {"\n"}
              ช่วงราคา 200 - 500 บาทต่อเมตร{"\n"}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.contentcard}>
        <View style={styles.cardPrice}>
          <View style={styles.cardimg}>
            <Image
              style={styles.fabricImage}
              source={require("../assets/imagesFabric/mai.png")}
            />
          </View>
          <View style={styles.textPrice}>
            <Text style={styles.title}>
              ราคาของผ้าไหม {"\n"}
              ช่วงราคา 500 - 1,500 บาทต่อเมตร{"\n"}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.contentcard}>
        <View style={styles.cardPrice}>
          <View style={styles.cardimg}>
            <Image
              style={styles.fabricImage}
              source={require("../assets/imagesFabric/nilon.png")}
            />
          </View>
          <View style={styles.textPrice}>
            <Text style={styles.title}>
              ราคาของผ้าซาติน {"\n"}
              ช่วงราคา 100 - 300 บาทต่อเมตร{"\n"}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.contentcard}>
        <View style={styles.cardPrice}>
          <View style={styles.cardimg}>
            <Image
              style={styles.fabricImage}
              source={require("../assets/imagesFabric/shefong.png")}
            />
          </View>
          <View style={styles.textPrice}>
            <Text style={styles.title}>
              ราคาของผ้าชีฟอง {"\n"}
              ช่วงราคา 80 - 250 บาทต่อเมตร{"\n"}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.contentcard}>
        <View style={styles.cardPrice}>
          <View style={styles.cardimg}>
            <Image
              style={styles.fabricImage}
              source={require("../assets/imagesFabric/spandash.png")}
            />
          </View>
          <View style={styles.textPrice}>
            <Text style={styles.title}>
              ราคาของผ้าสแปนเด็กซ์ {"\n"}
              ช่วงราคา 150 - 400 บาทต่อเมตร{"\n"}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.contentcard}>
        <View style={styles.cardPrice}>
          <View style={styles.cardimg}>
            <Image
              style={styles.fabricImage}
              source={require("../assets/imagesFabric/zatin.png")}
            />
          </View>
          <View style={styles.textPrice}>
            <Text style={styles.title}>
              ราคาของผ้าไนลอน {"\n"}
              ช่วงราคา 100 - 300 บาทต่อเมตร{"\n"}
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
