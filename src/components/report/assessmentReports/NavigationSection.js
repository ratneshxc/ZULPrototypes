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
        <View style={styles.container}>
            <Text style={{ marginBottom: 10 }}>What Next?</Text>
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
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: 2,
        padding: 10,
        backgroundColor: '#ffffff'
    }
})
export default connect(mapStateToProps)(NavigationSection);