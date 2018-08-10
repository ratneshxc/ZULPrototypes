import React from 'react';
import { View, StyleSheet, SectionList, Text } from 'react-native';

const IndicatorDailyStatus = (props) => {
    return (
        <View style={styles.container}>
            <SectionList
                renderItem={({ item, index, section }) => <SectionItem item={item} />}
                renderSectionHeader={({ section }) => (
                    <SectionHeader item={section} />
                )}
                sections={[
                    {
                        title: 'This Week',
                        value: '505 Km',
                        data: [
                            { day: 'Thu', value: '50 Km' },
                            { day: 'Wed', value: '30 Km' },
                            { day: 'Tue', value: '80 Km' },
                            { day: 'Mon', value: '80 Km' },
                            { day: 'Sun', value: '80 Km' },
                            { day: 'Sat', value: '80 Km' },
                            { day: 'Fri', value: '80 Km' }
                        ]
                    }
                ]}
                keyExtractor={(item, index) => item + index}
            />
        </View>
    )
}

const SectionHeader = (props) => {
    return (
        <View>
            <Text>{props.item.title}</Text>
            <Text>{props.item.value}</Text>
        </View>
    )
}

const SectionItem = (props) => {
    return (
        <View>
            <Text>{props.item.day}</Text>
            <Text>{props.item.value}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    }
})
export default IndicatorDailyStatus;
