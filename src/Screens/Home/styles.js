import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    container: {
    marginTop:20,
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFF'
  },
  content:{
      alignItems:'center',
  },

  search: {
      width:windowWidth-50,
      height:50,
      borderRadius:50,
      borderColor:'#8E8E93',
      paddingLeft:30,
      borderWidth:1,
      marginBottom:20,
  },
  scroll: {
      width:windowWidth,
  },
  sugestionText: {
     padding:20,
     fontSize:16,
    textAlign:'left',
    paddingLeft:20
  },    
  boxRecomendations: {
    alignItems:'center',
    justifyContent:'space-between',    
    width: 157,
    height: 147,
    marginLeft:20,
    marginRight:20,
    borderWidth:1,
    borderColor:'#EEEEEE',
    borderRadius:5,

  },
  imageRecomendations: {
    width:157,
    borderTopRightRadius:5,
    borderTopLeftRadius:5,
  },
  recomendationsText: {
      color:'#000',
      fontSize:14,
      marginBottom:12,
  },

  scrollProducts:{
      width:windowWidth,
      alignItems:'center'    
  },
  productInitialText: {
    width:windowWidth,
    textAlign:'left',
    padding:20,
  }
});