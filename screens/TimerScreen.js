import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, Alert} from 'react-native';
import ModalTask from '../components/Modal'
import Timer from '../components/Timer'
import RoundButton from '../components/RoundButton'
import LapsTable from '../components/LapsTable'
import ButtonsRow from '../components/ButtonsRow'
import moment from 'moment';
import SplashScreen from '../screens/SplashScreen'


const TimerScreen = props => {
const [StartHour, setStartHour] = useState('');
  const [Start,setStart]=useState(0)
  const [Now, setNow]= useState(0)
  const [Laps,setLaps] = useState([])
  const [ModalVisible,setModalVisible] = useState(false)
  const [duratNew,setduratNew]=useState()
  const [TotalTime,setTotalTime]=useState(0)
  const [SessionNumber,setSessionNumber]=useState(0)
  const [NameOp,setNameOp]=useState('')

  let timer = Now - Start

const onPressStart = () => { 
      const Now = new Date().getTime()
        setStart(Now)
        setLaps([{SessionNumnber: SessionNumber,NameOp: NameOp, Starthour: StartHour,comment: 'New', tasktitle: 'Current Task', duration: 0}])
        timer = setInterval(() => {  setNow(new Date().getTime())}, 80)
         
}

const OnPressSave = () => {
  const timestamp = new Date().getTime()
  const [firstLap, ...other] = Laps

  setduratNew(firstLap.duration + Now - Start)
  setModalVisible(true)  
  setStart(timestamp)
  setNow(timestamp)
}

const onPressStop = () => {
    props.navigation.navigate({ 
        routeName:'Splash'
    })
}

useEffect(() => {
    setStartHour(new Date().getTime())
  const Randomnumber = props.navigation.getParam('SessionNum')
  setNameOp(props.navigation.getParam('Name'))
  setSessionNumber(Randomnumber)
}, []);


    return (
    <View style={styles.container}>
    {ModalVisible && <ModalTask
                    ModalVisible={ModalVisible} 
                    setModalVisible={setModalVisible}
                    StartHour={StartHour}
                    setStartHour={setStartHour}
                    NameOp={NameOp}
                    Laps={Laps}  
                    setLaps={setLaps}
                    duration = {duratNew}
                    TotalTime={TotalTime}
                    SessionNumber= {SessionNumber}
                    setTotalTime={setTotalTime}/> }
    
    <Text style={{fontSize:21,color:'yellow'}}>Session Number: {SessionNumber}</Text>  
    <Text style={{fontSize:21,color:'white'}}>Total Time <Timer interval={TotalTime}/></Text>             
    <Timer interval = {timer} style= {styles.timer}/>
      {Laps.length === 0 && (<ButtonsRow>
        <RoundButton title='Reset' color ='#FFFFF' background='red'/>
        <RoundButton 
          title='Start' 
          color ='black' 
          background='yellow'
          onPressHandler = {onPressStart}/>
      </ButtonsRow> ) } 

      {Start > 0 && (<ButtonsRow>
        <RoundButton 
          title='Save Task' 
          color ='white' 
          background='green'
          onPressHandler = {OnPressSave}/>
          
        <RoundButton 
          title='Stop' 
          color ='black' 
          background='red'
          onPressHandler = {onPressStop}/>
      </ButtonsRow> )}  
      

      <LapsTable laps={Laps} timer = {timer} />
  </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0D0D0D',
      alignItems: 'center',
      paddingTop: 130,
      paddingHorizontal:20,
    },
    timer: {
      color : '#FFFFFF',
      fontSize: 76,
      fontWeight: '200',
      
    },
    interval: {
      color: '#FFFFFF',
    },
  
  });

  export default TimerScreen;
