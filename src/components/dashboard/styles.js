const React = require("react-native");

const { StyleSheet,Dimensions } = React;
const windowObj = Dimensions.get('window');
const halfwidth = windowObj.width/5;
export default {
  flexRow:{
    flex:1,
    flexDirection:'row'
  },
  filter:{
    flex:1,
    flexDirection:'row',
    marginRight:5,
    alignItems: "center",
    justifyContent: "center",
  },
  scoreCard:{
    marginLeft:halfwidth,
    marginRight:halfwidth,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom:10,
    padding:10
  },
  score:{
    flex:1,
    marginLeft:5,
    alignItems: "center",
    justifyContent: "center",
  },
  //unused styles
  container: {
    backgroundColor: "#FFF"
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 1,
    justifyContent: "center",
    marginTop: 10
  },
  mb15: {
    marginBottom: 20
  },
  mt15: {
    marginTop: 15
  },
  mb20: {
    marginBottom: 20
  },
  iconButton: {
    color: "#007aff"
  },
  margin: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#FFF"
  },
  mf: {
    flexGrow: 1,
    alignSelf: "center",
    alignItems: "center"
  }
};
