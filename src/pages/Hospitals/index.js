import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {
  DummyHospital1,
  DummyHospital2,
  DummyHospital3,
  ILHospitalBG,
} from '../../assets';
import {HospitalsList} from '../../components';
import {colors, fonts} from '../../utils';

export default function Hospitals() {
  return (
    <View style={styles.page}>
      <ImageBackground source={ILHospitalBG} style={styles.background}>
        <Text style={styles.title}>Nearby Hospitals</Text>
        <Text style={styles.desc}>3 tersedia</Text>
      </ImageBackground>
      <View style={styles.content}>
        <HospitalsList
          type="Rumah Sakit"
          title="Citra Bunga Merdeka"
          address="Jln. Surya Sejahtera 20"
          pic={DummyHospital1}
        />
        <HospitalsList
          type="Rumah Sakit Anak"
          title="Happy Family & Kids"
          address="Jln. Surya Sejahtera 20"
          pic={DummyHospital2}
        />
        <HospitalsList
          type="Rumah Sakit Jiwa"
          title="Tingkatan Paling Atas"
          address="Jln. Surya Sejahtera 20"
          pic={DummyHospital3}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {backgroundColor: colors.secondary, flex: 1},
  background: {height: 240, paddingTop: 30},
  title: {
    color: colors.white,
    textAlign: 'center',
    fontFamily: fonts.primary[600],
    fontSize: 20,
  },
  desc: {
    fontSize: 14,
    fontFamily: fonts.primary[300],
    color: colors.white,
    textAlign: 'center',
    marginTop: 6,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderRadius: 20,
    marginTop: -30,
    paddingTop: 14,
  },
});
