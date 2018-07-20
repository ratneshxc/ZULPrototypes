import  React, {  Component  }  from  'react';
import  {  View  }  from  'react-native';
import  Progress from  './Progress';
import  Port  from  './Port';
export  default  class  Main  extends  React.Component  {
    render() {
        return  (
            <View>
                <Progress  />
                <Port/>
            </View>
        );
    }
}