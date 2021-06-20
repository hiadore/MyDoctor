import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {colors, fonts} from '../../../utils';
import {Button} from '../../atoms';

export default function ChatInput() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Tulis pesan ke Nairobi" />
      <Button type="btn-icon-send" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
  },
  input: {
    backgroundColor: colors.disable,
    borderRadius: 10,
    padding: 14,
    fontSize: 14,
    fontFamily: fonts.primary[400],
    flex: 1,
    marginRight: 10,
    maxHeight: 45,
  },
});
