import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { PrestadorServicoLogin } from '../screens/Login/PrestadorServico';
import { Home } from '../screens/Home';

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
    return (

        <Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Screen
                name='TelaInicial'
                options={{
                    headerShown: false
                }}
                component={Home}
            />
            <Screen
                name='LoginPrestadorServico'
                component={PrestadorServicoLogin}
            />

        </Navigator>
    )
}