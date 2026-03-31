


import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import { Button, Card } from 'react-native-paper';
import {pessoas} from '../data/Pessoa';




export default function Pessoas() {

  // const motorista = drivers[0]

  return (

    <ScrollView style={{flex:1}}>
    <View style={styles.container}>
      <Text style={styles.txt}>TITULO</Text>

      {pessoas.map((pessoas) => (
      <Card>

        <Card.Cover source={{ uri: pessoas.foto}}/>
        <Card.Content style={styles.card}>

          {/* <Image style={styles.img} source={require('./Sources/grêmio.jpg')}/> */}

          
          <Text style={styles.txt}>{pessoas.nome}</Text>
          <Text style={styles.txt}>{pessoas.idade}</Text>
          <Text style={styles.txt}>{pessoas.cidade}</Text>
          <Text style={styles.txt}>{pessoas.profissao}</Text>
          

        </Card.Content>
      </Card>

      ))}

    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffffff',
        gap: 20
    },
    txt: {
      fontSize: 20,
      textAlign: 'justify'
    },
    img:{
      width: 200,
      height: 200
    },
    card:{
      alignItems: 'center',
      
    }
})

