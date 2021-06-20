import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Gap, Header} from '../../components';
import ChatInput from '../../components/molecules/ChatInput';
import ChatItem from '../../components/molecules/ChatItem';
import {colors, fonts} from '../../utils';

export default function Chat({navigation}) {
  return (
    <View style={styles.page}>
      <Header
        type="dark-profile"
        label="Nairobi Putri Hayza"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <Text style={styles.chatDate}>Senin, 21 Maret 2020</Text>
        <ChatItem isMe />
        <ChatItem />
        <ChatItem isMe />
      </View>
      <ChatInput />
      <Gap height={10} />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
  content: {flex: 1},
  chatDate: {
    fontFamily: fonts.primary[400],
    fontSize: 11,
    color: colors.text.secondary,
    marginVertical: 20,
    alignSelf: 'center',
  },
});
