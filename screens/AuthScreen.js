import React from 'react'
import {ScrollView,
    View,
     KeyboardAvoidingView,
      StyleSheet,
    Button} from 'react-native'
import Input from '../components/Input'
import Card from '../components/Card'
import {LinearGradient} from 'expo-linear-gradient'
// need an input component
// need Card 
const AuthScreen = props => {
    return (
        <KeyboardAvoidingView 
            behavior ='padding'
            keyboardVerticalOffset={50}
            style = {styles.screen}
            >
              <LinearGradient colors = {['#ffedff','#ffe3ff']} style = {styles.gradient}>
                <Card style = {styles.authContainer}>
                    <ScrollView>
                        <Input id='email' 
                                label = 'E-Mail' 
                                keyboardType= 'email-adress'
                                required
                                email
                                autoCapitalize="none"
                                errorMessage='Please enter a valid Email Adress'
                                onInputChange={()=>{}}
                                initialValue='' />

                        <Input id='password' 
                                label = 'Password' 
                                keyboardType= 'email-adress'
                                secureTextEntry
                                required
                                minLength={5}
                                autoCapitalize="none"
                                errorMessage='Please enter a valid Password'
                                onInputChange={()=>{}}
                                initialValue='' /> 
                        <View style= {styles.buttonContainer}><Button title='Login' onPress={()=>{}}/></View>
                        <View style= {styles.buttonContainer}><Button title='Switch to Sign Up' onPress={()=>{}}/></View>    
                    </ScrollView>
                </Card>
                </LinearGradient>  
        </KeyboardAvoidingView>
    )
};

AuthScreen.navigationOptions = {
    headerTitle: 'Authenticate'
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },

    buttonContainer: {marginTop:10},


    gradient: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    authContainer: {
        width:'80%',
        maxWidth: 400,
        maxHeight:400,
        padding:20

    }
})

export default AuthScreen;
