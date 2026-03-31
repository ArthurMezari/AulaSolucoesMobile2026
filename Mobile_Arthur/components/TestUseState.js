import {View, Text, StyleSheet} from 'react-native';
import { Button } from 'react-native-paper';
import { useState } from 'react';


export default function TesteUseState() {

  const [mensagem, setMensagem] = useState('Olá Mundo!')

  function TrocaMsg(){
    if (mensagem == 'Olá Mundo!'){
      setMensagem('Olá Lua!')
    }
    else {
      setMensagem('Olá Mundo!')
    }
  }

  const [numero, setNumero] = useState(0)

  function Contador(){
    setNumero(numero + 1)
  }

  function Zerar(){
    setNumero(0)
  }


  function Diminuir(){
    if (numero > 0){
    setNumero(numero - 1)
    }
  }

  return (
    <View style={styles.container}>

      <Text style={styles.txt}>{mensagem}</Text>

      {/* <Button 
      title='Clique aqui' 
      color={'#ffa600ff'}
      onPress={TrocaMsg}
      /> */}

      <Button 
      buttonColor={'#ffa600ff'}
      textColor='#ffff'
      mode='contained'
      onPress={TrocaMsg}>
        Clique Aqui
      </Button>

      <Text style={styles.txt}>{numero}</Text>

      <View style={styles.row}>

        <Button 
          buttonColor={'#2500faff'}
          textColor='#ffff'
          mode='container'
          onPress={Diminuir}>
          Menos
        </Button>

        <Button 
          buttonColor={'#ff2600ff'}
          textColor='#ffff'
          mode='container'
          onPress={Contador}>
          Mais
        </Button>

        <Button 
          buttonColor={'#666666ff'}
          textColor='#ffff'
          mode='container'
          onPress={Zerar}>
          Zerar
        </Button>

        {/* <Button 
        title='Mais' 
        color={'#ff2600ff'}
        onPress={Contador}
        />

        <Button 
        title='Menos' 
        color={'#2500faff'}
        onPress={Diminuir}
        /> */}

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffffff',
        gap: 20
    },
    txt: {
      fontSize: 30,
    },
    row:{
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-around',
    }
})