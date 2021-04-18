import { StatusBar } from 'expo-status-bar';
import React from 'react';
import CollapsibleView from '@eliav2/react-native-collapsible-view';
import {
  StyleSheet, Text, View, TouchableOpacity, FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import { badNetworkApiData, userData } from '../stockData';
import FetchActivities from '../src/FetchActivities';
import IndividualActivityButton from '../components/IndividualActivityButton';

export default function MainMenu() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header />
      <TouchableOpacity onPress={() => navigation.navigate('About')}>
        <Text>About this App</Text>
      </TouchableOpacity>
      <Menu userData={userData} />
      <StatusBar />
    </View>
  );
}

function Item(item) {
  return (
    <View style={styles.item}>
      <Text>
        {item.item.name}
        <IndividualActivityButton id={item.item._id}/>
      </Text>
    </View>
  );
}

function MenuSection(props) {
  const { section } = props;
  const { subText } = props;
  let { apiData } = props;
  const { userData } = props;
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
        ListHeaderComponent={<Text style={styles.menuSubText}>Chefs Specials</Text>}
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
    backgroundColor: '#ffff99',
    borderRadius: 20,
  },
  border: {
    height: 5,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
});
