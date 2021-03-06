import React,{useState} from 'react';
import {Text,StyleSheet, View, Button, Modal,Image} from 'react-native'
import Dialog from "react-native-dialog";
import img from '../assets/picturetimer.jpg'

const ModalSession = props => {

    const [SessionNum,setSessionNum]=useState('')
    const [Name,setName] = useState('')

    const join = () => {
        props.setVisible(false)
        props.navigation.navigate({ 
            routeName:'Timer',
            params:{
                SessionNum: SessionNum,
                Name: Name
            }
        })
       
    }

    const cancel = () => {
        props.setVisible(false)
    }

    return( 

        <View>
        <Dialog.Container visible={props.Visible}>
            <Dialog.Input 
            style={{      
                margin: 15,
                height: 40,
                borderColor: '#7a42f4',
                borderWidth: 1}}
            //value={Newtasktitle}
            placeholder={'Enter the session number'}
            onChangeText={text=>setSessionNum(text)}>
            </Dialog.Input>

            <Dialog.Input 
            style={{      
                margin: 15,
                height: 40,
                borderColor: '#7a42f4',
                borderWidth: 1}}
            placeholder={'Operators Name'}
            onChangeText={text=>setName(text)}>
            </Dialog.Input>

       <Dialog.Button label="Cancel" onPress={cancel} />
       <Dialog.Button label="Join" onPress={join} />
       
     </Dialog.Container>
   </View>

     )
}

const ModalNewSession = props => {

    const [Name,setName] = useState('')

    const cancel = () => {
        props.setVisible(false)
    }
    
    const joinnew = () => {
        
        const RandNumber = Math.floor(Math.random()*90000) + 10000
        
       


        props.setVisible(false)
    props.navigation.navigate({ 
        routeName:'Timer',
        params:{
            SessionNum: RandNumber,
            Name: Name
        }
    })
    }
    return(
        <View>
        <Dialog.Container visible={props.Visible}>

            <Dialog.Input 
            style={{      
                margin: 15,
                height: 40,
                borderColor: '#7a42f4',
                borderWidth: 1}}
            placeholder={'Operators Name'}
            onChangeText={text=>setName(text)}>
            </Dialog.Input>

       <Dialog.Button label="Cancel" onPress={cancel} />
       <Dialog.Button label="Join" onPress={joinnew} />
       
     </Dialog.Container>
   </View>    

    )

}



const ChoiceScreen = props => {

    const [JoinVisible,setJoinVisible]=useState(false)
    const [NewVisible,setNewVisible] =useState(false)
  

    const calljoinmodal= () => {
        setJoinVisible(true);
    }

    const callnewmodal =()=> {
        setNewVisible(true)
    }



    return(
        
        <View style={{marginTop:10}}>
        
                 <Image
                    style={styles.stretch}
                    source={require('../assets/picturetimer.jpg')}
                />
            <View style={{margin:20,justifyContent:'space-evenly'}}>
               
                <Text style={{fontSize:20, textAlign:'center'}} >The ECRS App is based on ECRS methodoly (Eliminate / Combine / Reduce / Simplify)</Text>
            </View>
            <View style={{margin:20, display:'flex', flexDirection:'row',justifyContent:'space-around' }}>
                <Button color='blue' title='Start a New Session' onPress={callnewmodal}>Start a new Session</Button>
                <Button color='gray' title='Join a Session' onPress={calljoinmodal}>Join a new session</Button>

                {JoinVisible && <ModalSession navigation={props.navigation} Visible= {JoinVisible} setVisible={setJoinVisible}/>}
                {NewVisible && <ModalNewSession navigation = {props.navigation} Visible={NewVisible} setVisible= {setNewVisible} />}
            </View>
        </View>
    )
}

ChoiceScreen.navigationOptions = {
    headerTitle: 'Welcome to ECRS App',
    headerStyle: {
        backgroundColor:'gray',
    },
    headerTintColor:'white',
}


const styles = StyleSheet.create({
    container: {
      //paddingTop: 10,
    },
    stretch: {
      width: 'auto',
      height: '50%',
      borderRadius:5,
      margin:10,
      resizeMode: 'stretch',
    },
  });

export default ChoiceScreen;
