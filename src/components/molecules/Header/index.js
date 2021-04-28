import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IconBackDark} from '../../../assets';
import {colors} from '../../../utils';
import {Button, Gap} from '../../atoms';

export default function Header({label}) {
  return (
    <View style={styles.container}>
      {/* <IconBackDark /> */}
      <Button type="icon-only" />
      <Text style={styles.text}>{label}</Text>
      <Gap width={24} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 30,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 20,
    backgroundColor: 'white',
    flex: 1,
    textAlign: 'center',
    color: colors.text.primary,
  },
});
