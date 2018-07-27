import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight,Image, View,Dimensions, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Icon } from 'native-base';
import { Card, CardTitle } from 'react-native-material-cards';

const mapStateToProps = state => ({
    isTutorialVisible: state.Tutorial.isTutorialVisible,
    currentQuestion:state.Assessment.currentQuestion
})

const mapDispatchToProps = dispatch => ({
    closeTutorialModal: () => dispatch({
        type: 'TutorialReducer_TutorialVisible',
        payload: false
    })
})
const windowObj = Dimensions.get('window');
const screenwidth = windowObj.width;
const screenheight = windowObj.height / 5;
const infowidth = windowObj.width *9/ 10;

class TutorialModal extends Component {
    render() {
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={this.props.isTutorialVisible}
                onRequestClose={() => {
                  
                }}>
                <View style={styles.tutorialModal}>
                    <View style={styles.tutorial}>
                        <View style={styles.modalHeader}>
                        <Text style={{ width: 100,fontSize:16, height: 30, right:100,top:10,fontWeight:'bold'}} >Question info</Text>
                        <Image style={{ width: 30, height: 30, left:125,top:6}} source={require('../../assests/images/WHO.jpg')}></Image>
                        <Text style={{right:33,top:10}}>Suggested By: WHO</Text>
                        
                            <TouchableHighlight
                                style={styles.closeBtn}
                                onPress={this.props.closeTutorialModal}>
                                <Icon name="times-circle" type="FontAwesome" size={25} />
                            </TouchableHighlight>
                        </View>
                        <View style={styles.modalBody}>
                        <Card style={{ width: screenwidth ,right:10 }} >
                        <CardTitle
              title="What do you do on a daily basis to ensure that you stay healthy?"
              style={{width: screenwidth, height: 30, bottom:20}}
            />
            
            <Image style={{ right:5 ,width: screenwidth-46, height: screenheight,  alignSelf: 'center', bottom:70}} source={require('../../assests/images/health-image.png')}></Image>
         
             <Text style={{ width: infowidth, alignSelf: 'center', bottom:70}}>Many of us search the world to find those that can help us achieve the health that we desire and  yet very few of us realize the ability to achieve health awaits us in our own back yard. Last month Pure Core Nourishment ran a workshop for our clients about how our own subconscious inbuilt programming can impact our health. And without question, the results for everyone who attended were phenomenal. Most of us do not realize that our ingrained Core Beliefs about who and what we are are formed in the first 5 years of life. These first five years are entirely controlled by our subconscious which controls development and reasoning and of course can be attested to by any parent. And because of that fact, our core inbuilt programming also operates very much like a 5 year old child, very literal and very much lovingly built to please. Therefore if you are focused on what is wrong with your health, 'I am sick, I am unwell..' your subconscious is only more than happy to prove you are right Transforming our health always at some point becomes about transforming our own internal conversation. Your intentions will always assist you in taking greater control of the health you desire.</Text>
         
          </Card>
          <Text style={{ width: infowidth, left:5, bottom:5,fontWeight:'bold'}}>37 Views</Text>
                        </View>
                    </View>
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    tutorialModal: {
        padding: 10,
        flex: 1,
        backgroundColor: '#00000066'
    },
    tutorial: {
        backgroundColor: '#ffffff',
        flex: 1,
        borderRadius: 10
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    modalBody: {
        flex: 1
    },
    closeBtn: {
        padding: 5,
        margin: 3
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(TutorialModal);
