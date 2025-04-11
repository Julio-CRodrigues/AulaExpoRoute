import { Stack } from "expo-router";

export default function Layout() {
    return (
        <Stack>
            <Stack.Screen name="index"
                options={{
                    headerShown:false               

                }}
            />
            <Stack.Screen name="user" options={{
                title: "TELA USUÁRIO",
                headerStyle: {
                    backgroundColor: 'cyan'
                },
                headerTitleAlign: "center",
                headerTintColor: "green"
            }} />
            <Stack.Screen name="/produtos/[idProdutos]"/>
        </Stack>
    )
}