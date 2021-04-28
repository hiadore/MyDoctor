import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILCatUmum} from '../../../assets';
import {colors, fonts} from '../../../utils';
import {Gap} from '../../atoms';

export default function DoctorCategory() {
  return (
    <View style={styles.container}>
      <ILCatUmum style={styles.illustration} />
      <Gap height={28} />
      <Text style={styles.text1}>Saya butuh</Text>
      <Text style={styles.text2}>dokter umum</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.cardLight,
    alignSelf: 'flex-start',
    borderRadius: 10,
    marginRight: 10,
    padding: 12,
    width: 100,
    height: 130,
  },
  illustration: {
    width: 46,
    height: 46,
  },
  text1: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.primary,
  },
  text2: {
    fontSize: 12,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
});
