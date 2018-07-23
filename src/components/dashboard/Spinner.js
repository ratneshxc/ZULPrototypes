import React,{Component} from 'react';
import {View,Image,Text} from 'react-native';
import AnimatedCircularProgress from 'react-native-circular-progress'
import ProgressCircle from 'react-native-progress-circle';
export default class Spinner extends React.Component{
    render(){
        return(
            <View style={{alignItems:'center'}}>
<ProgressCircle
            percent={30}
            radius={50}
            borderWidth={8}
            color="#3399FF"
            shadowColor="#999"
            bgColor="#fff"
        >
      <Image style={{width:80,height:80,borderRadius:50}} source={require('../../assests/images/suresh.png')} />
    </ProgressCircle>
    <Text style={{ fontSize: 14,fontWeight:'bold',color:'#000000' }}>{'30%'}</Text>  
  </View>



        )
    }
}