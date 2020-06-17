import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'
import SplashScreen from '../screens/SplashScreen';
import ChoiceScreen from '../screens/ChoiceScreen';
import TimerScreen from '../screens/TimerScreen'
import EndScreen from '../screens/EndScreen'


const EcrsNavigator = createStackNavigator({
    
    Choice: ChoiceScreen,
    Timer: TimerScreen,
    Splash: SplashScreen,
    End: EndScreen,
});


export default createAppContainer(EcrsNavigator);