import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignupScreen from "./screens/SignupScreen";
import SigninScreen from './screens/SigninScreen';
import DashboardScreen from './screens/DashboardScreen';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Signin' screenOptions={{headerShown: false}}>
        <Stack.Screen name="Signup" component={SignupScreen}/>
        <Stack.Screen name="Signin" component={SigninScreen}/>
        <Stack.Screen name="Dashboard" component={DashboardScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

