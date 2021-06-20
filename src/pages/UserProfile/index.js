import React from 'react';
import {StyleSheet, View} from 'react-native';
import {DummyUser} from '../../assets';
import {DoctorList, Header, Profile, Gap} from '../../components';
import {colors} from '../../utils';

export default function UserProfile({navigation}) {
  return (
    <View style={styles.page}>
      <Header label="Profile" onPress={() => navigation.goBack()} />
      <Profile
        name="Melisa Elvadira"
        desc="Graphic Designer"
        avatar={DummyUser}
      />
      <Gap height={30} />
      <DoctorList
        name="Edit Profile"
        desc="Last update yesterday"
        type="next"
        icon="user-profile"
        onPress={() => navigation.navigate('EditProfile')}
      />
      <DoctorList
        name="Language"
        desc="Last update yesterday"
        type="next"
        icon="language"
      />
      <DoctorList
        name="Give Us Rate"
        desc="Last update yesterday"
        type="next"
        icon="rate"
      />
      <DoctorList
        name="Help Center"
        desc="Last update yesterday"
        type="next"
        icon="help"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
