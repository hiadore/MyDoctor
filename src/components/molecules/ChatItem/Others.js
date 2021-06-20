import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DummyDoctor9} from '../../../assets';
import {colors, fonts} from '../../../utils';

export default function Others() {
  return (
    <View style={styles.container}>
      <Image source={DummyDoctor9} style={styles.avatar} />
      <View>
        <Text style={styles.chatContent}>
          Oh tentu saja tidak karena jeruk itu sangat sehat...
        </Text>
        <Text style={styles.chatDate}>4.20 AM</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    marginLeft: 16,
    marginBottom: 20,
    flexDirection: 'row',
  },
  avatar: {width: 30, height: 30, marginRight: 12},
  chatContent: {
    padding: 12,
    maxWidth: '80%',
    backgroundColor: colors.primary,
    fontSize: 14,
    fontFamily: fonts.primary[400],
    lineHeight: 16.8,
    borderRadius: 10,
    borderBottomLeftRadius: 0,
    color: colors.white,
  },
  chatDate: {
    fontFamily: fonts.primary[400],
    fontSize: 11,
    color: colors.text.secondary,
    marginTop: 8,
  },
});
