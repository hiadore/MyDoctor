import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DummyDoctor9} from '../../../assets';
import {colors, fonts} from '../../../utils';
import {Button} from '../../atoms';

export default function DarkProfile({onPress, label}) {
  return (
    <View style={styles.container}>
      <Button type="icon-only" icon="back-light" onPress={onPress} />
      <View style={styles.text}>
        <Text style={styles.name}>{label}</Text>
        <Text style={styles.category}>Dokter Anak</Text>
      </View>
      <Image style={styles.avatar} source={DummyDoctor9} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    paddingHorizontal: 16,
    paddingVertical: 30,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    flex: 1,
    alignItems: 'center',
  },
  name: {
    color: colors.white,
    fontSize: 20,
    fontFamily: fonts.primary[600],
  },
  category: {
    color: colors.text.subTitle,
    fontSize: 14,
    fontFamily: fonts.primary[400],
  },
  avatar: {
    height: 46,
    width: 46,
    borderRadius: 46 / 2,
  },
});
