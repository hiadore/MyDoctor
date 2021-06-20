import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Gap} from '../../../components';
import {colors, fonts} from '../../../utils';

export default function ProfileItem({title, desc}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Gap height={6} />
      <Text style={styles.desc}>{desc}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderColor: colors.border.primary,
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 14,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
  },
  desc: {
    fontSize: 14,
    fontFamily: fonts.primary[400],
    color: colors.text.primary,
  },
});
