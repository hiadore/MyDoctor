import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILLogo} from '../../assets';
import {Button, Gap, Input, Link} from '../../components';
import {colors, fonts} from '../../utils';

export default function Login({navigation}) {
  return (
    <View style={styles.page}>
      <ILLogo />
      <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
      <Input label="Email Address" />
      <Gap height={24} />
      <Input label="Password" />
      <Gap height={10} />
      <Link text="Forgot My Password" size={12} />
      <Gap height={40} />
      <Button title="Sign In" onPress={() => navigation.replace('MainApp')} />
      <Gap height={30} />
      <Link text="Create New Account" size={16} align="center" />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {padding: 40, backgroundColor: colors.white, flex: 1},
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginVertical: 40,
    maxWidth: 153,
  },
});
