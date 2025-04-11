import { Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function IdProduto(){
    const{idProduto} = useLocalSearchParams()
    return(
        <Text>Id do produto:{idProduto}</Text>
    )
}