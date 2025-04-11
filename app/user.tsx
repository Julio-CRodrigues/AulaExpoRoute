import { Text, StyleSheet, View } from 'react-native'

export default function TelaUsuario() {
    return (
        <View style={style.container}>
            <Text style={{fontSize:30}}>TELA USUÁRIO</Text>
        </View>

    )
}
const style = StyleSheet.create({
    container: {
        backgroundColor: "blue",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})