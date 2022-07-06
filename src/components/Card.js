import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

export default function Card(props) {
  const { title, date, image, video, fnShowVideo } = props;
  return (
    <TouchableOpacity
      style={{
        elevation: 8,
        backgroundColor: '#fff',
        flexDirection: 'row',
        width: '90%',
        height: 150,
        borderRadius: 8,
        overflow: 'hidden',
        marginBottom: 20,
        alignSelf: 'center',
      }}
      activeOpacity={0.8}
      onPress={() => fnShowVideo({ url: video })}
    >
      <View>
        <Image
          source={image}
          style={{ resizeMode: 'contain', width: 150, height: 150 }}
        />
      </View>
      <View
        style={{ justifyContent: 'space-between', padding: 20, width: '61.5%' }}
      >
        <View>
          <Text style={{ color: '#444', fontSize: 16 }}>{title}</Text>
        </View>
        <View>
          <View
            style={{
              borderBottomWidth: 1,
              borderColor: '#ccc',
              marginBottom: 10,
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <View>
              <Text style={{ color: '#444' }}>Assistir</Text>
            </View>
            <View>
              <Text style={{ color: '#444' }}>{date} NO AR</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
