import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Text, Button, Thumbnail, List, ListItem, Left, Right, Body, Icon } from 'native-base';
import { connect } from 'react-redux';

const mapStateToProps = state => (
    {
        actionPlan: state.Report.assessmentReport.actionPlan
    }
)

const ActionPlan = (props) => {
    return (
        <View style={styles.container}>
            <Text style={{ marginBottom: 10 }}>Suggested Goals</Text>
            <List>
                {props.actionPlan.map((x, i) => (
                    <ListItem thumbnail key={i}>
                        <Left>
                            <Thumbnail square source={x.icon} />
                        </Left>
                        <Body>
                            <Text>{x.Goal}</Text>
                            <Text note>{x.description}</Text>
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
export default connect(mapStateToProps)(ActionPlan);