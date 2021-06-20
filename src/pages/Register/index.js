import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Gap, Header, Input} from '../../components';
import {colors} from '../../utils';

export default function Register({navigation}) {
  return (
    <View style={styles.page}>
      <Header label="Daftar Akun" onPress={() => navigation.goBack()} />
      <Gap height={10} />
      <View style={styles.form}>
        <Input label="Full Name" />
        <Gap height={24} />
        <Input label="Job" />
        <Gap height={24} />
        <Input label="Email Address" />
        <Gap height={24} />
        <Input label="Password" />
        <Gap height={40} />
        <Button
          title="Continue"
          onPress={() => navigation.navigate('UploadPhoto')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
  form: {padding: 40, paddingTop: 0},
});
