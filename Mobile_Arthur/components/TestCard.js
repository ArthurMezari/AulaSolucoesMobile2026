import {View, Text, StyleSheet, Image} from 'react-native';
import { Button, Card } from 'react-native-paper';


export default function TestCard() {


  return (
    <View style={styles.container}>
      <Text style={styles.txt}>TITULO</Text>
      <Card>

        <Card.Cover source={{ uri: 'https://cdn.esbrasil.com.br/wp-content/uploads/2026/02/gremio-vence-juventude-final-gauchao-1920x1280.jpg'}}/>
        <Card.Content style={styles.card}>

          {/* <Image style={styles.img} source={require('./Sources/grêmio.jpg')}/> */}

          <Text style={styles.txt}>
            If a dedicated prop for a specific color is not available or the style prop does not
            allow color modification, you can customize it using the theme prop. It allows to override
            any color, within the component, based on the table above.</Text>

        </Card.Content>
      </Card>
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