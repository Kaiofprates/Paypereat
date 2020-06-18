import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({ 

    imageRecomendations: {
        height:102,
    },
    boxProducts: {
        width: windowWidth-30,
        borderRadius:5,
        borderWidth:1,
        borderColor:'#EEEEEE',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    productText:{
        color:'#000'
    },
    productImage: {
        width:12,
        height:12,
        marginLeft:4,
    },
    starProduct: {
        flexDirection:'row'
    },
    contentIniProduct: {
        flexDirection:'row',
        justifyContent:'space-between',
        width:230,
        paddingTop:10,
        paddingRight:10,
    },
    productDescription: {
        marginTop:5,
        textAlign: 'center',
        width:230,
        paddingRight:4,
    },
    productPrice: {
        width:201,
        textAlign:'right',
        paddingTop:5,
        paddingBottom:8,
        color:'#CECECE'
    },
    containerProduct:  {
        alignItems:'center',
        justifyContent:'center'
    }
});