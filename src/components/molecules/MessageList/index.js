import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DummyDoctor2} from '../../../assets';
import {colors, fonts} from '../../../utils';

export default function MessageList() {
  return (
    <View style={styles.container}>
      <Image source={DummyDoctor2} style={styles.avatar} />
      <View style={styles.text}>
        <Text style={styles.name}>Bryan Alex</Text>
        <Text style={styles.chat}>Oke menurut pak dokter bagaimana unt...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderColor: colors.border.secondary,
    alignItems: 'center',
  },
  avatar: {width: 46, height: 46, borderRadius: 46 / 2},
  text: {marginLeft: 12},
  name: {
    fontSize: 16,
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
  },
  chat: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
  },
});
