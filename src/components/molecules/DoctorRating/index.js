import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DummyDoctor1, IconStart} from '../../../assets';
import {colors, fonts} from '../../../utils';

export default function DoctorRating() {
  return (
    <View style={styles.container}>
      <Image source={DummyDoctor1} style={styles.avatar} />
      <View style={styles.profile}>
        <Text style={styles.name}>Nindy Ayunda</Text>
        <Text style={styles.category}>Pediatrician</Text>
      </View>
      <IconStart />
      <IconStart />
      <IconStart />
      <IconStart />
      <IconStart />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatar: {width: 50, height: 50, borderRadius: 50 / 2},
  profile: {flex: 1, marginLeft: 12},
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  category: {
    fontSize: 12,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
  },
});
