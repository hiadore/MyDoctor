import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {IconSendDark, IconSendLight} from '../../../assets';
import {colors} from '../../../utils';

export default function BtnIconSend({onPress, disable}) {
  const Icon = () => {
    if (disable === true) {
      return <IconSendDark />;
    }
    if (disable === false) {
      return <IconSendLight />;
    }
    return <IconSendLight />;
  };
  return (
    <TouchableOpacity onPress={onPress} style={styles.container(disable)}>
      <Icon />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: disable => ({
    backgroundColor: disable ? colors.disable : colors.tertiary,
    height: 45,
    width: 45,
    borderRadius: 10,
    paddingLeft: 8.09,
    paddingTop: 3.09,
  }),
});
