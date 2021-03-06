import {
  Text, View, StyleSheet, FlatList, Dimensions, Platform,
} from 'react-native';
import React from 'react';

const windowWidth = Dimensions.get('window').width;
const numColumns = 2;
const gridWidth = windowWidth / numColumns - 30;
const gridHeight = gridWidth / 2;

export default function Grid(props) {
  const { activity } = props;

  if (!activity.categories) { activity.categories = []; }
  const categories = activity.categories.join('\n');
  const data = [
    { id: 'header0', value: 'Size' },
    { id: 'header1', value: 'Categories' },
    { id: 'size', value: activity.size },
    { id: 'categories', value: categories },
    { id: 'header2', value: 'Cost' },
    { id: 'header3', value: 'Acccessibility' },
    { id: 'cost', value: '£ '.repeat(activity.cost) || 'Free :)' },
    { id: 'accessibility', value: `${activity.accessibility}/10` },
  ];

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <View style={containerStyle(item)}>
          <Text style={[styles.item, itemStyle(item)]}>{item.value}</Text>
        </View>
      )}
      keyExtractor={(item) => item.id}
      numColumns={numColumns}
    />
  );
}

function containerStyle(item) {
  const itemContainer = {
    width: gridWidth,
    height: gridHeight,
  };

  if (item.id.includes('header')) {
    return {
      width: gridWidth,
      height: gridWidth / 4,
    };
  }
  return itemContainer;
}

function itemStyle(item) {
  if (item.id.includes('header')) {
    return {
      textDecorationLine: 'underline',
      marginTop: 15,
      paddingTop: 5,
      marginBottom: -10,
      zIndex: 999,
      lineHeight: 20,
    };
  }
  return {
    paddingTop: '12%',
  };
}

const styles = StyleSheet.create({
  itemContainer: {
    width: gridWidth,
    height: gridWidth,
    flexDirection: 'row',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    flex: 1,
    marginLeft: 3,
    marginRight: 3,
    fontSize: 18,
    backgroundColor: '#353746',
    textAlign: 'center',
    color: '#fff',
    borderRadius: 4,
    overflow: 'hidden',
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Chalkduster',
  },
});
