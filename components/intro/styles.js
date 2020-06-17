import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F0F0'
  },
  input: {
      height: 50,
      width:310,
      marginBottom: 12,
      borderRadius: 4
  },
  title:{
      fontSize: 25,
      fontStyle: "normal",
      fontWeight: "bold",
      lineHeight: 25,
      color: "#9B9B9B",
      marginBottom: 30
  },
  compra:{

  backgroundColor: "#02CCC0",
  borderRadius: 8,
  height: 50,
  width: 310,
  justifyContent: "center",
  alignItems: "center",
  margin: 4

  },

  venda:{
    
    backgroundColor: "#E03268",
    borderRadius: 8,
    height: 50,
    width: 310,
    justifyContent: "center",
    alignItems: "center",
    margin: 4
    },
  text: {
      color: "white",
      fontWeight: "bold",

  }
});