
import FilterHeader from '../components/FilterHeader';
import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import expertFilterData from '../../../data/expertFilterData';
class FlatListItem extends Component {

  _onPressButton(e) {

    console.log('Button pressed');

  }

  render() {
    const filterItems = [];
    for (var i = 0; i < this.props.item.options.length; i++) {
      filterItems.push(
        <View style={[{ flexDirection: 'row' }, styles.elemenStyle]}>
          <Text style={styles.textStyle}>{this.props.item.options[i]}</Text>
        </View>
      );
    }
    return (

      <View >
        <View style={{ flex: 2, flexDirection: 'column' }}>

          <View style={[{ flexDirection: 'row' }, styles.titleStyle]}>
            <Text style={[styles.textStyle, { fontWeight: 'bold' }]}>{this.props.item.heading}</Text>
          </View>
          {
            filterItems
          }


        </View>
      </View>

    );

  }

}
export default class ExpertFilter extends Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <FilterHeader />
        <View style={[styles.flatListItem]}>
          <FlatList
            data={expertFilterData}
            renderItem={({ item, index }) => {
              return (
                <FlatListItem item={item} index={index}>

                </FlatListItem>);

            }}

          >
          </FlatList>

        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  titleStyle: {
    backgroundColor: '#dddddd52',
    height: 40,
    paddingTop: 5,
    paddingLeft: 5


  },
  elemenStyle: {
    backgroundColor: '#ffffff',
    height: 40,
    paddingTop: 5,
    paddingLeft: 5

  },
  flatListItem: {
    flex: 1,
    backgroundColor: '#dddddd52'
  }

});
console.disableYellowBox = true;