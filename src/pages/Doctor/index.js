import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {JSONCatDoctor} from '../../assets';
import {Gap} from '../../components';
import {
  DoctorCategory,
  DoctorRating,
  HomeProfile,
  NewsItem,
} from '../../components';
import {colors, fonts} from '../../utils';

export default function Doctor({navigation}) {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Gap height={30} />
          <View style={styles.sectionWrapper}>
            <HomeProfile />
            <Text style={styles.welcome}>
              Mau konsultasi dengan siapa hari ini?
            </Text>
          </View>
          <View style={styles.wrapperScroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.category}>
                <Gap width={32} />
                {JSONCatDoctor.data.map(item => {
                  return (
                    <DoctorCategory
                      key={item.id}
                      category={item.category}
                      onPress={() => navigation.navigate('ChooseDoctor')}
                    />
                  );
                })}
                <Gap width={22} />
              </View>
            </ScrollView>
          </View>
          <View style={styles.sectionWrapper}>
            <Text style={styles.sectionlabel}>Top Rated Doctors</Text>
            <DoctorRating />
            <Gap height={16} />
            <DoctorRating />
            <Gap height={16} />
            <DoctorRating />
          </View>
          <View style={styles.sectionWrapper}>
            <Text style={styles.sectionlabel}>Good News</Text>
            <NewsItem />
            <NewsItem />
            <NewsItem />
          </View>
          <Gap height={14} />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  container: {
    // paddingHorizontal: 16,
    paddingVertical: 0,
    backgroundColor: colors.white,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  welcome: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    maxWidth: 209,
    lineHeight: 24,
    marginTop: 30,
    marginBottom: 16,
  },
  category: {
    flexDirection: 'row',
  },
  wrapperScroll: {
    marginHorizontal: -16,
  },
  sectionWrapper: {
    paddingHorizontal: 16,
  },
  sectionlabel: {
    marginTop: 30,
    marginBottom: 16,
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
});
