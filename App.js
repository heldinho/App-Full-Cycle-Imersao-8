import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import Card from './src/components/Card';
import * as Animatable from 'react-native-animatable';
import Vvideo from './src/components/Video';

const aulas = [
  {
    key: 1,
    title: `Full Cycle, Projeto prático e Microsserviços`,
    image: require('./src/assets/1.png'),
    video: require('./src/assets/v1.mp4'),
    date: '20/06',
  },
  {
    key: 2,
    title: `Nest.js e o Backend orientado a microsserviços`,
    image: require('./src/assets/2.png'),
    video: require('./src/assets/v2.mp4'),
    date: '21/06',
  },
  {
    key: 3,
    title: `React.js Tempo real com websockets e geolocalização`,
    image: require('./src/assets/3.png'),
    video: require('./src/assets/v3.mp4'),
    date: '22/06',
  },
  {
    key: 4,
    title: `Kafka Connect, Elasticsearch e Kibana: Integração e visualização de dados`,
    image: require('./src/assets/4.png'),
    video: require('./src/assets/v4.mp4'),
    date: '23/06',
  },
  {
    key: 5,
    title: `Kubernetes Deploy e escalabilidade de aplicações`,
    image: require('./src/assets/5.png'),
    video: require('./src/assets/v5.mp4'),
    date: '24/06',
  },
];

export default function App() {
  const [video, setVideo] = React.useState(null);
  const [show, setShow] = React.useState(false);

  const fnShow = item => {
    const { url } = item;
    setShow(true);
    setVideo(url);
  };

  // return (
  //   <SafeAreaView style={styles.container}>
  //     <WebView
  //       javaScriptEnabled={true}
  //       domStorageEnabled={true}
  //       source={{
  //         uri: 'https://www.youtube.com/watch?v=SSd7sOHrHVQ',
  //       }}
  //     />
  //   </SafeAreaView>
  // );

  return (
    <SafeAreaView style={styles.container}>
      {show ? (
        <Vvideo vUrl={video} fnShowVideo={value => setShow(value)} />
      ) : (
        <ScrollView
          style={{ width: '100%' }}
          contentContainerStyle={{ paddingVertical: 20 }}
          showsVerticalScrollIndicator={false}
        >
          {aulas.map((item, index) => (
            <Animatable.View
              key={item.key}
              animation={index % 2 === 0 ? 'fadeInLeft' : 'fadeInRight'}
            >
              <Card {...item} fnShowVideo={fnShow} />
            </Animatable.View>
          ))}
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
