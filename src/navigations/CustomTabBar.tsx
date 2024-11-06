import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import {Home, Money3, Notification, Profile} from 'iconsax-react-native';
import Color from '../assets/theme/Color';

const CustomTabBar = ({state, descriptors, navigation}: any) => {
  const labels: {[key: string]: string} = {
    HomeScreen: 'Anasayfa',
    TransactionScreen: 'İşlemler',
    QrGenerationScreen: '',
    NotificationScreen: 'Bildirimler',
    AccountScreen: 'Hesap',
  };

  return (
    <View style={styles.container}>
      <View style={[styles.sideContainer, styles.leftContainer]}>
        {state.routes.slice(0, 2).map((route: any, index: any) => {
          const {options} = descriptors[route.key];
          const isFocused = state.index === index;
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };
          return (
            <TouchableOpacity
              key={route.key}
              onPress={onPress}
              style={styles.tab}>
              {route.name === 'HomeScreen' && (
                <Home
                  size="24"
                  variant="Bold"
                  color={isFocused ? Color.FocusedGray : Color.DarkGray}
                />
              )}
              {route.name === 'TransactionScreen' && (
                <Money3
                  size="24"
                  variant="Bold"
                  color={isFocused ? Color.FocusedGray : Color.DarkGray}
                />
              )}
              <Text
                style={{
                  color: isFocused ? Color.FocusedGray : Color.DarkGray,
                  fontSize: 10,
                }}>
                {labels[route.name]}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <View style={styles.qrButtonContainer}>
        <TouchableOpacity
          style={styles.qrButton}
          onPress={() => navigation.navigate('QrGenerationScreen')}>
          <QRCode size={32} color={Color.Black} />
        </TouchableOpacity>
      </View>

      <View style={[styles.sideContainer, styles.rightContainer]}>
        {state.routes.slice(3).map((route: any, index: any) => {
          const {options} = descriptors[route.key];
          const isFocused = state.index === index + 3;
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };
          return (
            <TouchableOpacity
              key={route.key}
              onPress={onPress}
              style={styles.tab}>
              {route.name === 'NotificationScreen' && (
                <Notification
                  size="24"
                  variant="Bold"
                  color={isFocused ? Color.FocusedGray : Color.DarkGray}
                />
              )}
              {route.name === 'AccountScreen' && (
                <Profile
                  size="24"
                  variant="Bold"
                  color={isFocused ? Color.FocusedGray : Color.DarkGray}
                />
              )}
              <Text
                style={{
                  color: isFocused ? Color.FocusedGray : Color.DarkGray,
                  fontSize: 10,
                }}>
                {labels[route.name]}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default CustomTabBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 70,
    backgroundColor: 'trasparent',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  sideContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
  },
  leftContainer: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: 'white',
  },
  rightContainer: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: 'white',
  },
  tab: {
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  qrButtonContainer: {
    position: 'relative',
    bottom: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingBottom: 10,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  qrButton: {
    width: 50,
    height: 50,
    borderRadius: 35,
    backgroundColor: Color.DarkBlue,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});
