import { StyleSheet } from "react-native-web"

export const styles = StyleSheet.create({
    container:{
      flex: 1,
      justifyContent: 'center', 
      alignItems: 'center',
      backgroundColor: 'yellow',
      flexDirection: 'row'
  
    },
    txt: {
      fontSize: 30,
      fontWeight: 'bold',
      color: 'black',
    },
    secondView: {
      flex: 1,
      justifyContent: 'center', 
      alignItems: 'center',
      backgroundColor: 'yellow',
      width: '100%',
    },
    thirdView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'blue',
      width: '100%',
      height: '100%'
    },
    caixa : {
      borderWidth: 1,
      fontSize: 25,
      borderRadius: 8,
      marginTop: 10,
      padding: 8,
      color: 'gray',
      width: '90%',
      backgroundColor: 'white',
    },
    button: {
      marginTop: 10,
      padding: 8, 
      width: 100
    }
  })
