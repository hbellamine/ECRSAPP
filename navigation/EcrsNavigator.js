import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'
import SplashScreen from '../screens/SplashScreen';
import ChoiceScreen from '../screens/ChoiceScreen';
import TimerScreen from '../screens/TimerScreen'
import EndScreen from '../screens/EndScreen'
import AuthScreen from '../screens/AuthScreen'




const EcrsNavigator = createStackNavigator({
    
    Choice: ChoiceScreen,
    Timer: TimerScreen,
    Splash: SplashScreen,
    End: EndScreen,
});


const AuthNavigator = createStackNavigator(
    {
      Auth: AuthScreen
    }
  );

const MainNavigator = createSwitchNavigator({
    Auth:AuthNavigator,
    Timer:EcrsNavigator
})


export default createAppContainer(MainNavigator);