import React from 'react';
import {StyleSheet, View} from 'react-native';
import {DummyDoctor9} from '../../assets';
import {Button, Gap, Header, Profile, ProfileItem} from '../../components';
import {colors} from '../../utils';

export default function DoctorProfile({navigation}) {
  return (
    <View style={styles.page}>
      <Header label="Profile" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <View>
          <Profile
            name="Nairobi Putry Hayza"
            desc="Dokter Anak"
            avatar={DummyDoctor9}
            icon="female"
          />
          <ProfileItem title="Alumnus" desc="Universitas Indonesia, 2020" />
          <ProfileItem
            title="Tempat Praktik"
            desc="Rumah Sakit Umum, Bandung"
          />
          <ProfileItem title="No. STR" desc="000116622081996" />
        </View>
        <View style={styles.action}>
          <Button
            title="Start Consultation"
            onPress={() => navigation.navigate('Chat')}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
  content: {justifyContent: 'space-between', flex: 1},
  action: {padding: 40, paddingTop: 0},
});
