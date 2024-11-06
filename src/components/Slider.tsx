import React from 'react';
import {Dimensions, Text, View} from 'react-native';
import Swiper from 'react-native-swiper';
import {styles} from './styles/sliderStyles';

const Slider = ({data}: any) => {
  return (
    <Swiper
      style={[styles.wrapper]}
      showsButtons={false}
      showsPagination={false}
      loop={false}>
      {data?.map((item: any, index: number) => (
        <View key={index} style={styles.slider}>
          <Text style={styles.sliderName}>{item.title}</Text>
          <Text style={styles.sliderUnit}>
            {item.balance} {item.unit}
          </Text>
        </View>
      ))}
    </Swiper>
  );
};

export default Slider;
