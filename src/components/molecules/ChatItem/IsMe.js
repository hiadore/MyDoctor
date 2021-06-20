import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';

export default function IsMe() {
  return (
    <View style={styles.container}>
      <Text style={styles.chatContent}>
        Ibu dokter, apakah memakan jeruk tiap hari itu buruk?
      </Text>
      <Text style={styles.chatDate}>4.20 AM</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {alignItems: 'flex-end', marginRight: 16, marginBottom: 20},
  chatContent: {
    padding: 12,
    maxWidth: '70%',
    backgroundColor: colors.cardLight,
    fontSize: 14,
    fontFamily: fonts.primary[400],
    lineHeight: 16.8,
    borderRadius: 10,
    borderBottomRightRadius: 0,
    color: colors.text.primary,
  },
  chatDate: {
    fontFamily: fonts.primary[400],
    fontSize: 11,
    color: colors.text.secondary,
    marginTop: 8,
  },
});
