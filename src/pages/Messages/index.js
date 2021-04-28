import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {MessageList} from '../../components';
import {colors, fonts} from '../../utils';

export default function Messages() {
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.title}>Messages</Text>
        <MessageList />
        <MessageList />
        <MessageList />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flex: 1,
  },
  title: {
    marginTop: 30,
    marginLeft: 16,
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
});
