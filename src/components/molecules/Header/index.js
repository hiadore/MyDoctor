import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../utils';
import {Button, Gap} from '../../atoms';

export default function Header({onPress, label, type}) {
  return (
    <View style={styles.container(type)}>
      <Button
        type="icon-only"
        icon={type === 'dark' ? 'back-light' : 'back-dark'}
        onPress={onPress}
      />
      <Text style={styles.text(type)}>{label}</Text>
      <Gap width={24} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: type => ({
    paddingHorizontal: 16,
    paddingVertical: 30,
    backgroundColor: type === 'dark' ? colors.secondary : colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomLeftRadius: type === 'dark' ? 20 : 0,
    borderBottomRightRadius: type === 'dark' ? 20 : 0,
  }),
  text: type => ({
    fontFamily: 'Nunito-SemiBold',
    fontSize: 20,
    // backgroundColor: 'white',
    flex: 1,
    textAlign: 'center',
    color: type === 'dark' ? colors.white : colors.text.primary,
  }),
});
