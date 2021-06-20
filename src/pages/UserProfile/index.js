import React from 'react';
import {StyleSheet, View} from 'react-native';
import {DummyUser} from '../../assets';
import {CommonList, Header, Profile, Gap} from '../../components';
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
      <CommonList
        name="Edit Profile"
        desc="Last update yesterday"
        type="next"
        icon="user-profile"
        onPress={() => navigation.navigate('EditProfile')}
      />
      <CommonList
        name="Language"
        desc="12 Languages available"
        type="next"
        icon="language"
      />
      <CommonList
        name="Give Us Rate"
        desc="On Google Play Store"
        type="next"
        icon="rate"
      />
      <CommonList
        name="Help Center"
        desc="Read our guidelines"
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
