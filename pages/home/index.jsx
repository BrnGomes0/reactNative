import React, {useState} from 'react'
import {View, Text, TextInput, Image, Button} from 'react-native'
import { styles } from './style'

export default function App() {

  const [valor, setValor] = useState(0) // Mudar o estado das variáveis. SetValor -> Para mudar o valor da variável
  const [olho, setOlho] = useState(true)

  return(
    <View style={styles.container}>
      <View style={styles.secondView}>
      <Text style={styles.txt}>
        Piu-Piu
      </Text>
      <View>
        <Image source={require('../../assets/piu.png')} style={{width: 150, height: 150}}/>
      </View>
      </View>
      <View style={styles.thirdView}>
        <Text style={styles.txt}>
          Login
        </Text>
        <View style={{padding: 20}}>
        <TextInput placeholder='User'
          style={styles.caixa}
        />
        <TextInput placeholder='Password'
          style={styles.caixa}
        />
        <View style={{marginTop: 20, width: 270}}>
          <Button 
            title='Aumentar'
            onPress={() => {setValor(valor + 1)}}
          />
        </View>
        <View style={{marginTop: 20, width: 270}}>
          <Button 
            title='Resultado'
            onPress={() => {setValor(valor + 1)}}
          />
        </View>
      </View>
      </View>
    </View>
  )
}


