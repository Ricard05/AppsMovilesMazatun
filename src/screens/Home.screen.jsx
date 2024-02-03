import { useState } from "react";
import { ScrollView } from "react-native";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const Images = [
    [
      "https://mazatun.com/wp-content/uploads/2022/07/0029_Mazatun_Recetas2022_PROD2_Ensalada_Stock_AR5_1607-min.jpg",
      "https://images.pexels.com/photos/19051901/pexels-photo-19051901/free-photo-of-ensalada-sano-cena-comida.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://d2j9trpqxd6hrn.cloudfront.net/uploads/recipe/main_image/838/atun_guisado.webp",
    ],
    [
      "https://images.pexels.com/photos/248444/pexels-photo-248444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
  ];

  const Images2 = [
    "https://mazatun.com/wp-content/uploads/2021/07/0031_Mazatun_Recetas2021_PROD2_Flautas_Stock_AR6_1052.jpg",
    "https://mazatun.com/wp-content/uploads/2022/02/0033_Mazatun_Recetas2022_PROD1_Torre_Stock_AR5_1655-feature-min.jpg",
    "https://mazatun.com/wp-content/uploads/2023/11/0311_Mazatun_Recetas_2023_10_10_PROD3_Stock_R62_2372-min1-768x512.jpg",
  ];
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={{ flexDirection: "row", paddingTop: 60, paddingLeft: 20 }}>
        <Image
          style={{ width: 80, height: 80, borderRadius: 50 }}
          source={{
            uri: "https://t2.uc.ltmcdn.com/es/posts/8/9/9/como_saber_si_un_hombre_no_me_conviene_6998_600.jpg",
          }}
        ></Image>

        {/* Welcome message */}
        <Text style={{ fontSize: 25, alignSelf: "center", marginLeft: 10 }}>
          Hi, Ricardo
        </Text>

        <FontAwesomeIcon
          name="bell-o"
          size={30}
          style={{ alignSelf: "center", right: -90 }}
        />
      </View>

      {/* Body */}
      <View style={{ flexDirection: "row" }}>
        {/* Search bar */}
        <TextInput
          style={{
            height: 40,
            width: "71%",
            margin: 20,
            borderColor: "gray",
            borderWidth: 1,
            borderRadius: 60,
            paddingTop: 2,
            paddingLeft: 20,
          }}
          placeholder="Find recipies"
        />

        <FontAwesomeIcon
          name="sliders"
          size={30}
          style={{ alignSelf: "center" }}
        />
      </View>

      <View>
        <Text style={{ fontSize: 17, fontWeight: "500", marginLeft: 20 }}>
          Categories
        </Text>

        <View style={{ flexDirection: "row", marginLeft: 20 }}>
          <TouchableOpacity
            style={{
              backgroundColor: "#352981",
              borderRadius: 50,
              width: 100,
              padding: 5,
              marginTop: 10,
            }}
            onPress={() => {
              setCurrentIndex(0);
            }}
          >
            <Text style={{ textAlign: "center", color: "#fff" }}>
              Appetizers
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: "#352981",
              borderRadius: 50,
              width: 100,
              padding: 5,
              marginTop: 10,
              marginLeft: 5,
            }}
            onPress={() => {
              setCurrentIndex(1);
            }}
          >
            <Text style={{ textAlign: "center", color: "#fff" }}>
              Main dishes
            </Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          style={{ paddingLeft: 10 }}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {Images.flatMap((imageGroup, index) => {
            return index === currentIndex ? (
              imageGroup.map((imageSource, i) => (
                <Image
                  key={imageSource}
                  style={{
                    width: 200,
                    height: 200,
                    borderRadius: 10,
                    marginTop: 10,
                    marginRight: 10,
                  }}
                  source={{ uri: imageSource }}
                />
              ))
            ) : (
              <></>
            );
          })}
        </ScrollView>

        <Text
          style={{
            fontSize: 17,
            fontWeight: "500",
            marginLeft: 20,
            marginTop: 20,
          }}
        >
          The newest
        </Text>
        <ScrollView
          style={{ paddingLeft: 10 }}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {Images2.map((image, j) => (
            <Image
              key={j + 1} // Assuming each image object has a unique ID
              style={styles.images}
              source={{ uri: image }}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

/*  */
/*  */

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#fff",
    alignContent: "center",
  },

  images: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginTop: 10,
    marginRight: 10,
  },

  title: {
    fontSize: 25,
    fontWeight: "500",
    width: 250,
    textAlign: "center",
    alignSelf: "center",
    padding: 20,
  },

  image: {
    width: 400,
    height: 530,
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
  },

  button: {
    backgroundColor: "#352981",
    padding: 15,
    borderRadius: 30,
    width: 300,
    alignSelf: "center",
  },

  text: {
    fontSize: 15,
    textAlign: "center",
    color: "#666",
    marginBottom: 40,
  },
});

export default Home;
