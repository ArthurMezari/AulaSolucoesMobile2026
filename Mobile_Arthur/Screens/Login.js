import { StyleSheet, TextInput, View, Image, Button, Text } from 'react-native';

export default function Login({navigation}) {
    return (
        <View style={styles.container}>
          
           
            <Image
                source={require('../Sources/gremio.jpg')} //alterar aqui
                style={styles.imagem}
            />

            <Text style={styles.txt_login}>FAÇA SEU LOGIN</Text>

            <View style={styles.view_login}>
                <TextInput
                    placeholder='Digite aqui seu usuário'
                    style={styles.txt_input}
                />

                <TextInput
                    placeholder='Digite aqui sua senha'
                    style={styles.txt_input}
                    secureTextEntry
                />

                <Button
                    title="Fazer Login"
                    color='#000'
                    onPress={() => navigation.navigate('Home')}
                />
                  <Button
                    title="Novas pessoas"
                    color='#000'
                    onPress={() => navigation.navigate('Pessoas')}
                />

                  <Button
                    title="Exemplo Async"
                    color='#000'
                    onPress={() => navigation.navigate('Async')}
                  />

                  <Button
                    title="Produtos SQL"
                    color='#000'
                    onPress={() => navigation.navigate('Produtos')}
                  />

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFA500',
    alignItems: 'center',
    justifyContent: 'center'
  },

  view_login: {
    width: '80%',
    gap: 20,
    marginTop: 20
  },

  txt_input: {
    fontSize: 20,
    color: '#000',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    borderRadius: 10
  },

  imagem: {
    width: 250,
    height: 250,
  },
  txt_login: {
    textAlign: 'center',
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
  }
});