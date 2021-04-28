import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {ILHospitalBG} from '../../assets';
import {HospitalsList} from '../../components';

export default function Hospitals() {
  return (
    <View>
      <ImageBackground source={ILHospitalBG} style={styles.background}>
        <Text>Nearby Hospitals</Text>
        <Text>3 tersedia</Text>
      </ImageBackground>
      <HospitalsList />
      <HospitalsList />
      <HospitalsList />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {height: 240},
});
