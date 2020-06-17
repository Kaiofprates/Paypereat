import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF'
  },
  
  content: {
    alignItems:'center',
    justifyContent: 'space-between',
    width:windowWidth,
    height:windowHeight-100,
  },  
  input: {
    paddingLeft:15,
    backgroundColor:'#FFF',
    width:windowWidth-15,
    height: 50,
    width: windowWidth - 50,
    marginBottom: 20,
    borderRadius: 4,
    borderWidth:1,
    borderColor:'#CCC'
  },
  title: {
    fontSize: 30,
    fontStyle: "normal",
    fontWeight: "bold",
    color: "#9B9B9B"
  },
  button: {

    backgroundColor: "#2BB673",
    borderRadius: 8,
    height: 55,
    width: windowWidth-50,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontWeight: "bold",

  }
});