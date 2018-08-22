import React from 'react';
import { View, StyleSheet, ScrollView,TouchableOpacity } from 'react-native';
import { Badge, Text } from 'native-base';
import Image from 'react-native-remote-svg';
import StatusComponent from './StatusComponent';

const IndicatorCategory = (props) => {
    let { dimensionName, dimensionIcon, indicators } = props.indicatorCategory;
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flexDirection: 'row', flex: 1 }}>
                    <Image source={dimensionIcon} style={{ width: 30, height: 30, marginRight: 5 }} />
                    <Text style={{ fontSize: 17, color: '#353535', marginTop: 3 }}>{dimensionName}</Text>
                </View>
                <View style={{ width: 50, flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <Badge primary>
                        <Text>
                            {indicators.length}
                        </Text>
                    </Badge>
                </View>
            </View>
            <ScrollView horizontal={true} style={{ flexDirection: 'row' }}>
                {indicators.map((x, i) => (
                    <TouchableOpacity style={{ flexDirection: 'row' }} onPress={props.goToIndicatorsDetails}>
                        {i > 0 && <View style={{ width: 0.5, backgroundColor: '#ddd', marginVertical: 10 }}></View>}
                        <View style={{ width: 130, padding: 10 }}>
                            <StatusComponent statusObj={x} />
                        </View>
                        <View style={{ width: 0.5, backgroundColor: '#ddd', marginVertical: 10 }}></View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
            <View style={{ backgroundColor: '#ddd', height: 1, marginHorizontal: 15 }}></View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 10
    }
})
export default IndicatorCategory;
