/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import CollapsibleView from '@eliav2/react-native-collapsible-view';
import {
  StyleSheet, Text, View, TouchableOpacity, Alert, FlatList, Dimensions, LogBox,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../components/Header';
import getUserData from '../src/UserData';
import { badNetworkApiData } from '../stockData';
import FetchActivities from '../src/FetchActivities';
import IndividualActivityButton from '../components/IndividualActivityButton';
import AboutButton from '../components/AboutButton';

function pressHandler() {
  Alert.alert('No Network connection', "We can't fetch suggestions. Please try again later.");
}

function MenuTitle() {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.menuTitle}>
        Acitivity Menu
      </Text>
    </View>
  )
}

export default function MainMenu() {
  const [userData] = useState(getUserData());
  const navigation = useNavigation();

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <MenuTitle />

      <View style={styles.menuContainer}>
        <ScrollView>
          <Menu userData={userData} style={styles.menu} />
        </ScrollView>
      </View>

      <AboutButton />
      <StatusBar />
    </View>
  );
}

function Item(item) {
  if (item.item._id !== 'noConnection') {
    return (
      <View style={styles.item}>
        <Text style={styles.itemText}>
          {item.item.name}
          {' '}
        </Text>
        <IndividualActivityButton style={styles.individualButton} item={item.item} />
      </View>
    );
  }
  return (
    <View style={styles.item}>
      <Text style={styles.itemText}>
        {item.item.name}
        .
      </Text>
      <TouchableOpacity
        style={{ paddingTop: 10 }}
        onPress={pressHandler}
      >
        <Ionicons name="help" size={15} color="black" />
      </TouchableOpacity>
    </View>
  );
}

function MenuSection(props) {
  const { section, subText, userData } = props;
  let { apiData } = props;
  const navigation = useNavigation();
  apiData = apiData || badNetworkApiData;

  return (
    <CollapsibleView
      title={<Text style={styles.menuSection}>{section}</Text>}
      style={styles.menuCollapsible}
      noArrow
    >
      <FlatList
        ListHeaderComponent={<Text style={styles.menuSubText}>{subText}</Text>}
        data={userData}
        renderItem={Item}
        keyExtractor={(item) => item._id}
      />
      <View style={styles.border} />
      <FlatList
        ListHeaderComponent={<Text style={styles.menuSubText}>Chef's Specials</Text>}
        data={apiData}
        renderItem={Item}
        keyExtractor={(item) => item._id}
        navigation={props.navigation}
      />
    </CollapsibleView>
  );
}

function Menu(props) {
  const { userData } = props;
  const apiData = FetchActivities();

  return (
    <View>
      <MenuSection
        section="Nibbles"
        subText="Bitesized activities, for the short of time"
        apiData={apiData.nibbles}
        userData={userData.nibbles}
      />
      <MenuSection
        section="Appetisers"
        subText="very tasty small things"
        apiData={apiData.appetisers}
        userData={userData.appetisers}
      />
      <MenuSection
        section="Mains"
        subText="very tasty medium things"
        apiData={apiData.mains}
        userData={userData.mains}
      />
      <MenuSection
        section="Desserts"
        subText="pudding"
        apiData={apiData.desserts}
        userData={userData.desserts}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8f9d4',
  },
  menu: {
  },
  titleContainer: {
    flex: 0.1,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuTitle: {

  },
  menuContainer: {
    overflow: 'scroll',
    flex: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuCollapsible: {
    width: 250,
    fontSize: 50,
    borderRadius: 25,
    borderColor: '#240037',
  },
  menuSubText: {
    textAlign: 'center',
    fontSize: 20,
  },
  menuSection: {
    fontSize: 30,
    fontFamily: 'Didot',
  },
  name: {
    fontSize: 25,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Didot',
  },
  item: {
    margin: 3,
    padding: 6,
    fontSize: 15,
    backgroundColor: 'black',
    borderRadius: 5,
    flexDirection: 'column',
    alignItems: 'center',
  },
  itemText: {
    color: '#fff',
    fontFamily: 'Chalkduster',
    textAlign: 'center',
    fontSize: 17,
  },
  border: {
    height: 5,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  individualButton: {
    alignSelf: 'flex-end',
  },
});
