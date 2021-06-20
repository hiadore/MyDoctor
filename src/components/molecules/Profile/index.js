import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {IconFemale, IconMale, IconRemovePhoto} from '../../../assets';
import {colors, fonts} from '../../../utils';

export default function Profile({name, desc, avatar, icon}) {
  const Icon = () => {
    if (icon === 'remove') {
      return <IconRemovePhoto style={styles.icon} />;
    }
    if (icon === 'female') {
      return <IconFemale style={styles.icon} />;
    }
    if (icon === 'male') {
      return <IconMale style={styles.icon} />;
    }
    return <IconRemovePhoto style={styles.icon} />;
  };
  return (
    <View style={styles.mainProfile}>
      <View style={styles.borderProfile}>
        <Image source={avatar} style={styles.avatar} />
        {icon && <Icon />}
      </View>
      {name && (
        <View style={styles.text}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.job}>{desc}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  mainProfile: {
    alignSelf: 'center',
    marginTop: 10,
  },
  borderProfile: {
    borderWidth: 1,
    borderColor: colors.border.primary,
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
  },
  icon: {position: 'absolute', right: 8, bottom: 8},
  text: {
    alignItems: 'center',
  },
  name: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 16,
  },
  job: {
    fontSize: 16,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    marginTop: 2,
  },
});
