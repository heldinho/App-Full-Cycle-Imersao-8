import React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import Card from "./src/components/Card";

const aulas = [
  {
    key: 1,
    title: `Full Cycle, Projeto prático e Microsserviços`,
    image: require("./src/assets/1.png"),
    date: "20/06",
  },
  {
    key: 2,
    title: `Nest.js e o Backend orientado a microsserviços`,
    image: require("./src/assets/2.png"),
    date: "21/06",
  },
  {
    key: 3,
    title: `React.js Tempo real com websockets e geolocalização`,
    image: require("./src/assets/3.png"),
    date: "22/06",
  },
  {
    key: 4,
    title: `Kafka Connect, Elasticsearch e Kibana: Integração e visualização de dados`,
    image: require("./src/assets/4.png"),
    date: "23/06",
  },
  {
    key: 5,
    title: `Kubernetes Deploy e escalabilidade de aplicações`,
    image: require("./src/assets/5.png"),
    date: "24/06",
  },
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={{ width: "100%" }}
        contentContainerStyle={{ paddingVertical: 20 }}
        showsVerticalScrollIndicator={false}
      >
        {aulas.map((item) => (
          <Card {...item} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
