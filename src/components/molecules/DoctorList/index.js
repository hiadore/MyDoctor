import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  IconHelp,
  IconLanguage,
  IconNext,
  IconProfile,
  IconRating,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

export default function DoctorList({profile, name, desc, type, onPress, icon}) {
  const Icon = () => {
    if (icon === 'user-profile') {
      return <IconProfile />;
    }
    if (icon === 'language') {
      return <IconLanguage />;
    }
    if (icon === 'rate') {
      return <IconRating />;
    }
    if (icon === 'help') {
      return <IconHelp />;
    }
    return <IconProfile />;
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {icon ? <Icon /> : <Image source={profile} style={styles.avatar} />}

      <View style={styles.text}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.chat}>{desc}</Text>
      </View>
      {type === 'next' && <IconNext />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderColor: colors.border.secondary,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatar: {width: 46, height: 46, borderRadius: 46 / 2},
  text: {marginLeft: 12, flex: 1},
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
