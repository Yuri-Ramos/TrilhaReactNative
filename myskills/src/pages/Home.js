import React from "react";
import { Text, View } from "react-native";


export  default function App() {

  return (
    //  não é necessario colocar o nome Fragment 
<>

    <View style={ {flex: 1, 
      justifyContent: 'center',
    alignItems: 'center', }} >
        <Text> 
              React Native

          </Text>

    </View>
      <Text style={{ alignSelf: 'center',
       marginBottom: 20}}
       >
        Yuri demonstração
       </Text>
    </>

  )
}