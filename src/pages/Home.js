import React from "react";
import {  Text, 
            View,
           StyleSheet,
           TextInput, 
           Platform,
           TouchableOpacity
} from "react-native";


export  default function App() {

  return (
    //  não é necessario colocar o nome Fragment 


    <View styles={styles.conteiner}>
        <Text style={styles.title}> 
              Welcome, Yuri

          </Text>
           <TextInput 
          style={styles.input}
          placeholder="new skill"
          placeholderTextColor="#555"
        />
      <TouchableOpacity 
          style={style.buton}
          activeOpacity={0.8}
          >

  <Text style={style.butonText}>Add</Text>
</TouchableOpacity>
      <Text style={[styles.title],{marginTop:30}}>
        my skill
        </Text>

    </View>
    

  )
}
const styles = StyleSheet.create({
    conteiner: {
      flex: 1, 
      justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121015', //camielcase
  paddingVertical:  70,
  paddingHorizontal: 30,
  },
    title:{
      color: '#fff',
      fontSize: 24,
      fontWeight: 'bold',
    },
    input:{

    backgroundColor: '#1F1E25', //camielcase
    color: '#fff',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15: 10,
    marginTop: 30,
    borderRadius: 10,
    },
    buton:{
      backgroundColor: '#a370f7', //camielcase
      padding:15,
      borderRadius: 8,
      alignItems: 'center',
      marginTop: 20
    },
    butonText:{

    backgroundColor: '#fff',
    fontSize:17,
    fontWeight: 'bold'
    }
  });