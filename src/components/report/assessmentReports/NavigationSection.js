import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { Thumbnail, Text, Icon, List, ListItem, Left, Right, Body } from 'native-base';

const mapStateToProps = state => (
    {
        next: state.Report.assessmentReport.next
    }
)

const NavigationSection = (props) => {
    return (
        <View>
            <Text style={styles.title}>{'What Next?'.toUpperCase()}</Text>
            <View style={{backgroundColor:'#ffffff'}}>
                <List>
                    {props.next.map((x, i) => (
                        <ListItem thumbnail key={i}>
                            <Left>
                                <Thumbnail small source={x.icon} />
                            </Left>
                            <Body>
                                <Text>{x.title}</Text>
                            </Body>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </ListItem>
                    ))}
                </List>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    title: {
        color: '#495057',
        fontSize: 13,
        fontWeight: 'bold',
        padding: 10
    }
})
export default connect(mapStateToProps)(NavigationSection);