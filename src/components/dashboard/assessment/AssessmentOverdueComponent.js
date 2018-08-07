import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Card } from 'native-base';
const AssessmentOverdueComponent = (props) => {
    return (
        <Card style={styles.container}>
            <View>
                <Text style={{color:'#353535'}}>{props.assessObj.title}</Text>
            </View>
            <View>
                <Text style={{fontSize:20,color:'#353535'}}>{props.assessObj.overdue}</Text>
                <Text style={{textAlign:'center',fontSize:10}}>days overdue</Text>
            </View>
        </Card>
    )
}
const styles = StyleSheet.create({
    container: {
        padding:10
    }
})
export default AssessmentOverdueComponent;
