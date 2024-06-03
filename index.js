import { AppRegistry } from 'react-native';
import App from "./app.tsx" // Certifique-se de que o caminho está correto
import { name as appName } from './app.json'; // Certifique-se de que você tem o arquivo app.json na raiz do projeto

AppRegistry.registerComponent(appName, () => App);
