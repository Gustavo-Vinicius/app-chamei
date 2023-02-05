import { StatusBar } from 'react-native';
import { Home } from './src/screens/Home';
import { NativeBaseProvider } from 'native-base';
import { Routes } from './src/routes';

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <Routes/>
    </NativeBaseProvider>
  );
}

