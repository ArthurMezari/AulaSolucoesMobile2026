import { View, Image, StyleSheet } from 'react-native';

export default function Images(){
    return (
        <View style={styles.view_image}>
            <Image style={styles.imagem} source={require('../Sources/gremio.jpg')}></Image>
            <Image style={styles.imagem} source={require('../Sources/fazenda.jpg')}></Image>
        </View>
        
    )
}

const styles = StyleSheet.create({
    view_image: {
        flexDirection: 'row',
        gap: 30,
        alignContent: 'space-around'
    },
    imagem: {
        height: 150,
        width:175
    }
})