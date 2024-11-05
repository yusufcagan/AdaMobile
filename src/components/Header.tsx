import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {styles} from './styles/headerStyles';
import {HambergerMenu} from 'iconsax-react-native';
import Color from '../assets/theme/Color';

const Header = () => {
  return (
    <View style={[styles.flexDirection, styles.container]}>
      <TouchableOpacity>
        <Image
          source={require('../assets/image/kusadasi.png')}
          style={styles.logo}
        />
      </TouchableOpacity>
      <View style={[styles.flexDirection, styles.alignCenter]}>
        <Image
          source={require('../assets/image/adaliKart.png')}
          style={styles.logo2}
        />
        <TouchableOpacity style={styles.hamburgerMenu}>
          <HambergerMenu size="20" color={Color.DarkBlue} variant="Outline" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
