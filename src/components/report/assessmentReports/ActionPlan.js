import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Text, Button, Thumbnail } from 'native-base';
import { connect } from 'react-redux';

const mapStateToProps = state => (
    {
        actionPlan: state.Report.assessmentReport.actionPlan
    }
)

const ActionPlan = (props) => {
    let _renderItem = ({ item }) => (
        <View key={item.id} style={{ flexDirection: 'row', marginVertical: 3 }}>
            <Thumbnail small source={item.icon} />
            <Text style={{ flex: 1 }}>{item.Goal}</Text>
            <Button bordered small>
                <Text>Set as goal</Text>
            </Button>
        </View>
    )

    return (
        <View style={styles.container}>
            <Text>Suggested Goals</Text>
            <FlatList
                data={props.actionPlan}
                renderItem={_renderItem}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
    }
})
export default connect(mapStateToProps)(ActionPlan);