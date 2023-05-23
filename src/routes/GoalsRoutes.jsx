import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 as Icon } from '@expo/vector-icons'
import { useTheme } from 'styled-components';

// Telas
import { HomeScreen } from '../screens/Home';
import { SavedScreen } from '../screens/Saved';
import { SearchScreen } from '../screens/Search';

const { Navigator, Screen } = createBottomTabNavigator();

export const GoalsRoutes = () => {
  const theme = useTheme()

  const navigationOptions = {
    tabBarStyle: {
      paddingTop: 8,
      paddingBottom: 8,
      height: 65
    },
    tabBarShowLabel: false,
    tabBarHideOnKeyboard: true,
    tabBarActiveTintColor: theme.colors.primary,
    headerStyle: {
      backgroundColor: theme.colors.primary
    },
    headerTitle: 'GoalsApp',
    headerTintColor: '#fff',
    headerTitleAlign: "center",
    headerTitleStyle: {
      fontWeight: 'bold',
    }
  }

  const screenOptions = {
    home: {
      tabBarIcon: ({ color, size }) => (
        <Icon name='home' color={color} size={size} />
      ),
      tabBarLabel: 'Início'
    },
    search: {
      tabBarIcon: ({ color, size }) => (
        <Icon name='search' color={color} size={size} />
      ),
      tabBarLabel: 'Pesquisar'
    },
    done: {
      tabBarIcon: ({ color, size }) => (
        <Icon name='check' color={color} size={size} />
      ),
      tabBarLabel: 'Concluídas'
    },
  }

  return (
    <NavigationContainer>
      <Navigator screenOptions={navigationOptions}>
        <Screen
          name="Home"
          component={HomeScreen}
          options={screenOptions.home}
        />
        <Screen
          name="Pesquisar"
          component={SavedScreen}
          options={screenOptions.search}
        />
        <Screen
          name="Concluidas"
          component={SearchScreen}
          options={screenOptions.done}
        />
      </Navigator>
    </NavigationContainer>
  );
}
