import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';

export default function MessageList({profile, name, desc}) {
  return (
    <View style={styles.container}>
      <Image source={profile} style={styles.avatar} />
      <View style={styles.text}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.chat}>{desc}</Text>
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
