import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Text, Card, Thumbnail, List, ListItem, Left, Right, Body, Icon } from 'native-base';
import { connect } from 'react-redux';

const mapStateToProps = state => (
    {
        actionPlan: state.Report.assessmentReport.actionPlan
    }
)

const ActionPlan = (props) => {
    return (
        <View>
            <Text style={styles.title}>{'Suggested Goals'.toUpperCase()}</Text>
            <Card style={{ backgroundColor: '#ffffff' }}>
                <List>
                    {props.actionPlan.map((x, i) => (
                        <ListItem thumbnail key={i}>
                            <Left>
                                <Thumbnail source={x.icon} />
                            </Left>
                            <Body>
                                <Text style={{ color: '#3a3a3a' }}>{x.Goal}</Text>
                                <Text note>{x.description}</Text>
                            </Body>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </ListItem>
                    ))}
                </List>
            </Card>
        </View>
    )
}
const styles = StyleSheet.create({
    title: {
        color: '#495057',
        fontSize: 13,
        fontWeight: 'bold',
        paddingTop: 10,
        paddingLeft: 10
    }
})
export default connect(mapStateToProps)(ActionPlan);