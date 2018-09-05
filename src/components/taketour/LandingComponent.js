import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';
import WallpaperAnimation from '../animations/WallpaperAnimation';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => (
    {
        hideZula: () => dispatch({
            type: 'ZulaReducer_Access',
            payload: false
        }),
        setAssessmentType: (data) => dispatch({
            type: 'AssessmentReducer_SelectAssessmentType',
            payload: data
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
        }, 5000);
    }
    componentWillUnmount() {
        clearInterval(this.backInterval);
    }
    goRegister = () => {
        this.props.navigation.navigate('Register');
    }
    goLogIn = () => {
        this.props.navigation.navigate('LogIn');
    }

    selectAssessment = () => {
        this.props.setAssessmentType("Wholesomeness");
        this.props.navigation.navigate("AssessmentInfo", { title: "Wholesomeness" });
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
                        <Text style={{ fontSize: 25, textAlign: 'center', color: '#fff' }}>Re-Discover Yourself</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <Text style={{ fontSize: 30, textAlign: 'center', color: '#fff' }}>20,083</Text>
                        <Text style={styles.statement}>People have already taken assessments</Text>
                        <TouchableOpacity style={styles.takeAssessmentBtn} onPress={this.selectAssessment}>
                            <Text style={styles.textWhite}>{'Check Your Wellness'.toUpperCase()}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, paddingBottom: 10, justifyContent: 'center' }}>
                        <View style={{ flexDirection: 'row' }}>
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
        position: 'absolute',
        top: 20,
        bottom: 20,
        left: 10,
        right: 10
    },
    statement: {
        fontSize: 25,
        color: '#ffffff',
        textAlign: 'center',
    },
    textWhite: {
        color: '#ffffff',
        fontSize: 15,
        fontWeight: 'bold'
    },
    takeAssessmentBtn: {
        backgroundColor: '#80399d',
        marginHorizontal: 20,
        alignItems: 'center',
        paddingVertical: 15,
        borderRadius: 10
    },
    registerBtn: {
        backgroundColor: '#2980b9',
        alignItems: 'center',
        paddingVertical: 15,
        width: 130,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10
    },
    logInBtn: {
        backgroundColor: '#27ae60',
        alignItems: 'center',
        paddingVertical: 15,
        width: 130,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
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