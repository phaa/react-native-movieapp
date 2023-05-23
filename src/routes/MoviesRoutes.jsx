import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Telas
import { HomeScreen } from '../screens/Home';

const { Navigator, Screen } = createBottomTabNavigator();

export const MovieRoutes = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Home" component={HomeScreen} />
      </Navigator>
    </NavigationContainer>
  );
}