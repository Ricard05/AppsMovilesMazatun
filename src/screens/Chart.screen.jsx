import { StyleSheet, Text, View } from "react-native";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import { Dimensions } from "react-native";

const ChartScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={{ padding: 5 }}>
        <Text style={{ fontSize: 20, marginTop: 50, alignSelf: "center" }}>
          Populartity
        </Text>
        <LineChart
          data={{
            labels: ["Ene", "Feb", "Mar", "Abril", "May", "Jun"],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
          width={Dimensions.get("window").width - 10} // from react-native
          height={220}
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#352981",
            backgroundGradientFrom: "#352981",
            backgroundGradientTo: "#352981",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726",
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
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

export default ChartScreen;
