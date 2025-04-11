import { Text, StyleSheet, View,Button } from 'react-native'
import { Link,router } from 'expo-router'

export default function TelaInicial() {
    const num = 2
    return (
        <View style={style.container}>
            <Text style={{fontSize:30}}>TELA INICIAL</Text>
            <Link href="/user">IR PARA TELA DO USUÁRIO</Link>
            <Button 
                title='Enviar'
                onPress={()=>router.push(`/produtos/${num}`)}
            />
            <Link href={`/produtos/${num}`}>Enviar código 20 do produto</Link>
        </View>

    )
}
const style = StyleSheet.create({
    container: {
        backgroundColor: "orange",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})