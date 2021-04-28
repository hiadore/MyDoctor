import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  IconDoctor,
  IconDoctorInactive,
  IconHospitals,
  IconHospitalsInactive,
  IconMessages,
  IconMessagesInactive,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

export default function TabItem({title, active, onPress, onLongPress}) {
  const Icon = () => {
    if (title === 'Doctor') {
      return active ? <IconDoctor /> : <IconDoctorInactive />;
    }
    if (title === 'Messages') {
      return active ? <IconMessages /> : <IconMessagesInactive />;
    }
    if (title === 'Hospitals') {
      return active ? <IconHospitals /> : <IconHospitalsInactive />;
    }
    return <IconDoctorInactive />;
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {alignItems: 'center'},
  text: active => ({
    fontSize: 10,
    fontFamily: fonts.primary[600],
    color: active ? colors.text.menuActive : colors.text.menuInactive,
    marginTop: 4,
  }),
});
