import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';
import WallpaperAnimation from '../animations/WallpaperAnimation';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => (
    {
        hideZula: () => dispatch({
            type: 'ZulaReducer_Access',
            payload: false
        })
    }
)

class LandingComponent extends React.Component {
    constructor() {
        super();
        this.wallpaperPaths = [
            { path: require('../../assests/images/loginwallpapers/img01.png') },
            { path: require('../../assests/images/loginwallpapers/img02.png') },
            { path: require('../../assests/images/loginwallpapers/img03.png') },
            { path: require('../../assests/images/loginwallpapers/img04.png') },
            { path: require('../../assests/images/loginwallpapers/img05.png') }]
        this.state = {
            imageURL: this.wallpaperPaths[0].path
        }
    }

    componentDidMount() {
        this.props.hideZula();
        let i = 1;
        this.backInterval = setInterval(() => {
            this.setState({
                imageURL: this.wallpaperPaths[i].path
            })
            i === 4 ? i = 0 : i++;
        }, 20000);
    }
    componentWillUnmount() {
        clearInterval(this.backInterval);
    }

    takeAssessment = () => {
        this.props.navigation.navigate('Assessment');
    }

    goRegister = () => {
        this.props.navigation.navigate('Register');
    }
    goLogIn = () => {
        this.props.navigation.navigate('LogIn');
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <WallpaperAnimation>
                    <Image style={styles.loginContainer} resizeMode="cover" source={this.state.imageURL}>
                    </Image>
                </WallpaperAnimation>
                <View style={styles.loginInnerContainer}>
                    <View style={styles.logoContainer}>
                        <Image style={styles.loginLogo} source={require('../../assests/images/zul.png')} />
                    </View>
                    <Text style={{ fontSize: 35, textAlign: 'center', color: '#fff', marginBottom: 100 }}>Re-Discover Yourself</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 30, textAlign: 'center', color: '#fff' }}>78,20,083</Text>
                    <Text style={styles.statement}> People have already taken assessments</Text>
                    <TouchableOpacity style={styles.takeAssessmentBtn} onPress={this.takeAssessment}>
                        <Text style={styles.textWhite}>{'Check Your Wellness'.toUpperCase()}</Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', marginTop: 90 }}>
                        <View style={{ flex: 1 }}>
                            <TouchableOpacity style={styles.registerBtn} onPress={this.goRegister}>
                                <Text style={styles.textWhite}>{'Sign Up'.toUpperCase()}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'flex-end', flexDirection: 'row' }}>
                            <TouchableOpacity style={styles.logInBtn} onPress={this.goLogIn}>
                                <Text style={styles.textWhite}>{'Log In'.toUpperCase()}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    loginContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    loginInnerContainer: {
        backgroundColor: '#00000054',
        width: Dimensions.get('window').width - 20,
        height: Dimensions.get('window').height - 60,
        position: 'absolute',
        marginLeft: 10,
        marginTop: 20
    },
    statement: {
        fontSize: 25,
        color: '#ffffff',
        textAlign: 'center',
    },
    textWhite: {
        color: '#ffffff'
    },
    takeAssessmentBtn: {
        backgroundColor: '#80399d',
        marginHorizontal: 20,
        alignItems: 'center',
        padding: 10,
        marginTop: 20
    },
    registerBtn: {
        backgroundColor: '#2980b9',
        alignItems: 'center',
        padding: 10,
        width: 130
    },
    logInBtn: {
        backgroundColor: '#27ae60',
        alignItems: 'center',
        padding: 10,
        width: 130
    },
    loginLogo: {
        height: 150,
        width: 150
    },
    logoContainer: {
        alignItems: 'center'
    },
})

export default connect(null, mapDispatchToProps)(LandingComponent);