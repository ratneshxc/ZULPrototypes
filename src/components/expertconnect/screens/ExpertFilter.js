
import FilterHeader from '../components/FilterHeader';
import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import expertListData from '../../../data/expertConnectListData';
class FlatListItem extends Component {

  _onPressButton(e) {

    console.log('Button pressed');

  }

  render() {

    return (

      <View >
        <View style={{ flex: 2, flexDirection: 'column' }}>

          <View style={[{ flexDirection: 'row' }, styles.titleStyle]}>
           <Text style={[styles.textStyle, { fontWeight: 'bold' }]}>{this.props.item.name}</Text>
         </View>

          <View style={[{ flexDirection: 'row' },styles.elemenStyle]}>
          <Text style={styles.textStyle}>{this.props.item.education}</Text>
          </View>
          <View style={[{ flexDirection: 'row' },styles.elemenStyle]}>
          <Text style={styles.textStyle}>{this.props.item.education}</Text>
          </View>

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
            data={expertListData}
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
  titleStyle:{
    backgroundColor:'#dddddd52',
    height:40,
    paddingTop:5,
    paddingLeft:5
   

  },
  elemenStyle:{
    backgroundColor:'#ffffff',
    height:40,
    paddingTop:5,
    paddingLeft:5

  },
  flatListItem: {
    flex: 1,
    backgroundColor: '#dddddd52'
  }

});