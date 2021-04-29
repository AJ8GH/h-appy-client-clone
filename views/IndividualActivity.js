import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  StyleSheet, Text, View, Dimensions, TouchableOpacity, Platform, ScrollView,
} from 'react-native';
import Header from '../components/Header';
import { deleteDataByID, doesActivityNameExist, storeData } from '../src/UserData';
import Grid from '../components/Grid';
import MenuButton from '../components/MenuButton';

const windowWidth = Dimensions.get('window').width;

export default function IndividualActivity({ route }) {
  const { item } = route.params;
  const navigation = useNavigation();

  let menuSection = item.size;
  let isThisAPIData;
  if (menuSection === undefined) {
    isThisAPIData = false;
  } else {
    if (!menuSection.endsWith('s')) { menuSection = `${menuSection}s`; }
    isThisAPIData = !doesActivityNameExist(menuSection, item.name);
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{item.name}</Text>
      </View>

      <View style={styles.descriptionContainer}>
        <View style={styles.textContainer}>
          <ScrollView style={{ width: '100%' }}>
            <Text style={styles.description}>
              {item.description}
            </Text>
          </ScrollView>
        </View>

        <View style={styles.grid}>
          <Grid activity={item} />
        </View>
      </View>
      <TouchableOpacity style={styles.touchable}>
        <AddOrDeleteActivity isThisAPIData={isThisAPIData} menuSection={menuSection} item={item} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchable}>
        <EditUserActivity isThisAPIData={isThisAPIData} menuSection={menuSection} item={item} />
      </TouchableOpacity>
      <MenuButton />
    </View>
  );
}

function EditUserActivity(props) {
  const { item, menuSection, isThisAPIData } = props;
  const buttonText = (isThisAPIData === true) ? 'Edit activity and Add to Favourites' : 'Edit your Activity';

  const navigation = useNavigation();
  return (
    <View style={styles.EditButtonContainer}>
      <Text
        style={styles.deleteButton}
        title={buttonText}
        onPress={() => { navigation.navigate('EditActivity', { item, menuSection, isThisAPIData }); }}
      >
        {buttonText}
      </Text>
    </View>
  );
}
function AddOrDeleteActivity(props) {
  const navigation = useNavigation();
  if (props.isThisAPIData) {
    return (
      <View style={styles.deleteButtonContainer}>
        <Text
          style={styles.deleteButton}
          title="Add to favorites"
          onPress={() => { storeData(props.menuSection, props.item); navigation.navigate('Menu'); }}
        >
          Add to favourites
        </Text>
      </View>
    );
  }
  return (
    <View style={styles.deleteButtonContainer}>
      <Text
        style={styles.deleteButton}
        title="Delete this activity"
        onPress={() => { deleteDataByID(props.item._id); navigation.navigate('Menu'); }}
      >
        Remove from favourites
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#696773',
    height: Dimensions.get('window').height,
    width: windowWidth,
  },
  description: {
    fontSize: 15,
    lineHeight: 25,
    textAlign: 'center',
    padding: 10,
    position: 'absolute',
    top: 5,
    color: '#23252E',
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Courier',
  },
  textContainer: {
    position: 'absolute',
    top: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: windowWidth * 0.9,
    height: '37%',
  },
  descriptionContainer: {
    flex: 0.82,
    marginTop: '40%',
    marginBottom: '11%',
    width: windowWidth * 0.93,
    backgroundColor: '#B1B6A6',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  individualDetail: {
    fontSize: 25,
    padding: 10,
  },
  name: {
    fontSize: 22,
    textAlign: 'center',
    maxWidth: '90%',
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Chalkduster',
    color: 'white',
  },
  nameContainer: {
    flex: 0.2,
    top: 72,
    width: windowWidth * 0.93,
    minHeight: 120,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#363946',
    borderRadius: 7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
  grid: {
    position: 'absolute',
    bottom: 0,
    paddingBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
  deleteButton: {
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Courier',
    color: '#B1B6A6',
  },
  deleteButtonContainer: {
    position: 'absolute',
    bottom: -6,
    backgroundColor: '#353846',
    width: windowWidth * 0.93,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginBottom: 5,
  },
  EditButtonContainer: {
    bottom: -6,
    backgroundColor: '#353846',
    width: windowWidth * 0.93,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  touchable: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
