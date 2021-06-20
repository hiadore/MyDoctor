import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  DummyDoctor10,
  DummyDoctor11,
  DummyDoctor7,
  DummyDoctor8,
  DummyDoctor9,
} from '../../assets';
import {Header, DoctorList} from '../../components';
import {colors} from '../../utils';

export default function ChooseDoctor({navigation}) {
  return (
    <View style={styles.page}>
      <Header
        label="Pilih Dokter Anak"
        type="dark"
        onPress={() => navigation.goBack()}
      />
      <DoctorList
        profile={DummyDoctor7}
        name="Alexander Jannie"
        desc="Wanita"
        type="next"
        onPress={() => navigation.navigate('Chat')}
      />
      <DoctorList
        profile={DummyDoctor8}
        name="Kakashi Hatake"
        desc="Pria"
        type="next"
      />
      <DoctorList
        profile={DummyDoctor9}
        name="Hinata Hyuga"
        desc="Wanita"
        type="next"
      />
      <DoctorList
        profile={DummyDoctor10}
        name="Sasuke Uchiha"
        desc="Pria"
        type="next"
      />
      <DoctorList
        profile={DummyDoctor11}
        name="Tsunade"
        desc="Wanita"
        type="next"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
});
