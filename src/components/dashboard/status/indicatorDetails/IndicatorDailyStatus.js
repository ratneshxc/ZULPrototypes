import React from 'react';
import { View, StyleSheet, SectionList, Text } from 'react-native';
import { Icon } from 'native-base';

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
                        value: '30',
                        unit: 'Km',
                        data: [
                            { day: 'Today', value: '5', unit: 'Km' },
                            { day: 'Wed', value: '3', unit: 'Km' },
                            { day: 'Tue', value: '4', unit: 'Km' },
                            { day: 'Mon', value: '5', unit: 'Km' },
                            { day: 'Sun', value: '2', unit: 'Km' },
                            { day: 'Sat', value: '4', unit: 'Km' },
                            { day: 'Fri', value: '5', unit: 'Km' }
                        ]
                    }, {
                        title: 'Last Week',
                        value: '20',
                        unit: 'Km',
                        data: [
                            { day: 'Thu', value: '3', unit: 'Km' },
                            { day: 'Wed', value: '2', unit: 'Km' },
                            { day: 'Tue', value: '3', unit: 'Km' },
                            { day: 'Mon', value: '4', unit: 'Km' },
                            { day: 'Sun', value: '2', unit: 'Km' },
                            { day: 'Sat', value: '3', unit: 'Km' },
                            { day: 'Fri', value: '5', unit: 'Km' }
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
        <View style={{ flexDirection: 'row', paddingVertical: 5, paddingHorizontal: 20, backgroundColor: 'teal' }}>
            <View style={{ flex: 1 }}>
                <Text style={{ color: '#ffffff' }}>{props.item.title}</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>{props.item.value}</Text>
                <Text style={{ fontSize: 10, color: '#ffffff', fontWeight: 'normal', marginLeft: 5, marginTop: 4 }}>{props.item.unit}</Text>
            </View>
        </View>
    )
}

const SectionItem = (props) => {
    return (
        <View style={styles.itemContainer}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ width: 70 }}>
                    <Text>{props.item.day}</Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Text style={{ fontWeight: 'bold', color: '#353535' }}>{props.item.value}</Text><Text style={{ fontSize: 10, fontWeight: 'normal', marginLeft: 3, marginTop: 4 }}>{props.item.unit}</Text>
                </View>
            </View>
            <View>
                <Icon name="arrow-forward" style={{ color: '#d2d2d2', fontSize: 20 }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 0.5,
        borderColor: '#ddd'
    }
})
export default IndicatorDailyStatus;
