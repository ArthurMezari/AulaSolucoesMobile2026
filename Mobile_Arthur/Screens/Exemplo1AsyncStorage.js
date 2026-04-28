
// import { View, Text, TextInput, Button } from 'react-native';
// import { useState, useEffect } from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// export default function Exemplo1AsyncStorage() {


//     const [nome, setNome] = useState('')
//     const [senha, setSenha] = useState('')
//     const [nomeSalvo, setNomeSalvo] = useState()


//     const SalvarPessoa = async () => {
//         const pessoa = {
//             nome: nome,
//             senha: senha
//         }
//         try {
//             const jsonValue = JSON.stringify(pessoa);
//             await AsyncStorage.setItem('@pessoa', jsonValue);
//             alert('pessoa salva! ')
//         } catch (e) {
//             console.log(e)
//         }
//     };

//     const MostrarPessoa = async () => {
//         try {
//             const jsonValue = await AsyncStorage.getItem('@pessoa');
//             if (jsonValue != null) {
//                 const pessoa = JSON.parse(jsonValue)
//                 setNomeSalvo(pessoa)
//             }
//         } catch (e) {
//             console.log(e)
//         }
//     }



// useEffect(() => {
//     MostrarPessoa();
// }, [])



// return (
//     <View>
//         <TextInput
//             placeholder='nome'
//             value={nome}
//             onChangeText={setNome}
//         />

//         <TextInput
//             placeholder='senha'
//             value={senha}
//             onChangeText={setSenha}
//             secureTextEntry={true}
//         />

//         <Button title='Salvar Pessoa' onPress={SalvarPessoa} />



//         <Text>{nomeSalvo?.nome}</Text>
//         <Text>{nomeSalvo?.senha}</Text>
//     </View>
// )
// }



import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Exemplo1AsyncStorage() {

    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const [nomeSalvo, setNomeSalvo] = useState();

    const SalvarPessoa = async () => {
        const pessoa = {
            nome: nome,
            senha: senha
        };

        try {
            const jsonValue = JSON.stringify(pessoa);
            await AsyncStorage.setItem('@pessoa', jsonValue);
            alert('Pessoa salva!');
        } catch (e) {
            console.log(e);
        }
    };

    const MostrarPessoa = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('@pessoa');

            if (jsonValue != null) {
                const pessoa = JSON.parse(jsonValue);
                setNomeSalvo(pessoa);
            }
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        MostrarPessoa();
    }, []);

    return (
        <View style={styles.container}>

            <Text style={styles.titulo}>Cadastro</Text>

            <TextInput
                placeholder='Nome'
                value={nome}
                onChangeText={setNome}
                style={styles.input}
            />

            <TextInput
                placeholder='Senha'
                value={senha}
                onChangeText={setSenha}
                secureTextEntry={true}
                style={styles.input}
            />

            <Button
                title='Salvar Pessoa'
                onPress={SalvarPessoa}
            />

            <Text style={styles.texto}>
                Nome salvo: {nomeSalvo?.nome}
            </Text>

            <Text style={styles.texto}>
                Senha salva: {nomeSalvo?.senha}
            </Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f2f2f2',
    },

    titulo: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },

    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#fff',
        padding: 12,
        marginBottom: 15,
        borderRadius: 10,
        fontSize: 16,
    },

    texto: {
        marginTop: 15,
        fontSize: 16,
        textAlign: 'center',
    }
});
