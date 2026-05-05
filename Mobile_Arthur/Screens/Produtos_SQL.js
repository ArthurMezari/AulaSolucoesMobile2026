import {View, Text, TextInput, Button} from 'react-native';
import {useState} from 'react';
import 'coi-serviceworker';

import openDB from '../database/db'

const db = openDB();

export default function Produtos(){

    const [nome, setNome] = useState('');
    const [valor, setValor] = useState('');

    const adicionarProduto = async() => {
        try {
            await db.runAsync (
                'INSERT INTO produtos (name, valor) VALUES (? , ?) ', [nome, parseFloat(valor)]
            )
            alert('Produto adiconado! ')
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <View>
            <Text>Produtos</Text>

            <TextInput 
            placeholder='Nome: ' 
            value={nome}
            onChangeText={setNome}/>

            <TextInput 
            placeholder='Valor: ' 
            value={valor}
            onChangeText={setValor}/>

            <Button
            title='Cadastrar'
            onPress={adicionarProduto}/>
            
        </View>
    )
}