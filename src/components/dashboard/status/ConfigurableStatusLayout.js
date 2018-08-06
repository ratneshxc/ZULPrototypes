import React from 'react';
import { View, StyleSheet, Modal, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import SortableGrid from 'react-native-sortable-grid'
import { Icon } from 'native-base';

import ConfigurableStatusComponent from './ConfigurableStatusComponent';

const mapStateToProps = state => ({
    wellnessStatusSummary: state.Dashboard.wellnessStatusSummary,
    isConfigurableDashboard: state.Dashboard.isConfigurableDashboard
})

const mapDispatchToProps = dispatch => ({
    showConfigModal: (value) => dispatch({
        type: 'DashboardReducer_ShowConfirationModal',
        payload: value
    })
})

class ConfigurableStatusLayout extends React.Component {

    startDelete = () => {
        this.refs.SortableGrid.toggleDeleteMode()
    }
    closeTutorialModal = () => {
        this.props.showConfigModal(false);
    }
    render() {
        return (
            <Modal
                animationType="fade"
                transparent={true}
                visible={this.props.isConfigurableDashboard}
                onRequestClose={() => {

                }}>
                <View style={{ backgroundColor: '#000000c9', flex: 1 }}>
                    <View style={{ backgroundColor: '#ffffff', flex: 1, margin: 10, borderRadius: 10, padding: 10 }}>
                        <View style={styles.modalHeader}>
                            <View style={{ flex: 1 }}>
                                <Text style={{ fontSize: 20,padding:5 }} >Configuration</Text>
                            </View>
                            <TouchableOpacity
                                style={styles.closeBtn}
                                onPress={this.closeTutorialModal}>
                                <Icon name="times-circle" type="FontAwesome" size={25} />
                            </TouchableOpacity>
                        </View>

                        <SortableGrid
                            blockTransitionDuration={100}
                            activeBlockCenteringDuration={100}
                            itemsPerRow={3}
                            dragActivationTreshold={50}
                            onDragRelease={(itemOrder) => console.log("Drag was released, the blocks are in the following order: ", itemOrder)}
                            onDragStart={() => console.log("Some block is being dragged now!")}
                            onDeleteItem={(item) => console.log("Item was deleted:", item)}
                            ref={'SortableGrid'}
                        >
                            {
                                this.props.wellnessStatusSummary.map((x, i) => (
                                    <View style={styles.section} key={i} ref={'itemref_' + i} onTap={this.startDelete}>
                                        <ConfigurableStatusComponent statusObj={x} />
                                    </View>
                                ))
                            }

                        </SortableGrid>
                        <TouchableOpacity style={{ padding: 10,backgroundColor:'#3f51b5',margin:10 }} onPress={() => this.props.showConfigModal(false)}>
                            <Text style={{textAlign:'center',color:'#ffffff'}}>Save Changes</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column'
    },
    sectionRow: {
        flex: 1,
        flexDirection: 'row'
    },
    section: {
        padding: 5
    },
    closeBtn: {
        padding: 5,
        margin: 3
    },
    modalHeader: {
        flexDirection: 'row'
    },
})
export default connect(mapStateToProps, mapDispatchToProps)(ConfigurableStatusLayout);