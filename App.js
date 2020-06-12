import React,{useState} from 'react';
import { Platform,StyleSheet, Text, View,ScrollView, TouchableOpacity, RefreshControl, TextInput } from 'react-native';
import moment from 'moment';
import Modal from 'react-native-modalbox'
import Button from 'react-native-button'


const ModalTask = props => {

  const [Newtasktitle, SetNewtasktitle] = useState('hey')
  
  
  return (
    <Modal 
      ref = {'myModal'}  
      style= {{
      justifyContent: 'center',
      borderRadius: Platform.OS === 'ios' ? 30 : 0,
      shadowRadius: 10,
      width: 120,
      height: 280,
       }}
       position = 'center'
       backdrop={true}
       onClosed= {()=>{
         alert('Modal closed');
       }}>
         <Text style = {{
           fontSize: 16,
           fontWeight: 'bold',
           textAlign: 'center',
           marginTop: 40
         }}> Add Task title</Text>
         
         <TextInput style= {{
           height:40,
           borderBottomColor:'gray',
           marginLeft: 30,
           marginRight: 30,
           marginTop: 20,
           marginBottom: 10,
           borderBottomWidth: 1
         }}
         placeholder="Enter task title"
         value= {Newtasktitle}
         onChangeText={(text)=>SetNewtasktitle(text)} />

         <Button 
         style= {{
           fontSize: 18, color: 'white'
         }}
         containerStyle= {{
           padding:8,
           marginLeft: 70,
           marginRight: 70,
           height: 40,
           borderRadius: 6,
           backgroundColor: 'mediumseagreen'
         }}
         onPress= {()=> {
           if (Newtasktitle.length ==0) {
             alert ('Please entre a task title')
             return;
           }
         return Newtasktitle }
           } >
           Save
         </Button>

         
    </Modal>

  )
          }


const Timer = props => {

  const pad = (n) => n < 10 ? '0' + n : n
  const duration = moment.duration(props.interval)
  const centiseconds = Math.floor(duration.milliseconds() / 10)

return (<Text style = {props.style}> 
  {pad(duration.minutes())}:{pad(duration.seconds())}:{pad(centiseconds)}</Text>)
}


const RoundButton = props =>{
  let disabled = false
  return(
    <TouchableOpacity 
      onPress= {props.onPressHandler} 
      style = {[styles.button,{backgroundColor: props.background}]}
      activeOpacity= {disabled? 1.0 : 0.7}>
      
      <View style={styles.buttonBorder}>
        <Text style= {[styles.buttonTitle,props.color]}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  )
}


const Lap = props =>{
  
  const lapStyle= [styles.laptext, props.slowest && styles.slowest]
  
  return (
    <View style = {styles.lap}>
      <Text style={lapStyle}> {props.tasktitle} </Text>
      <Timer style={lapStyle} interval={props.interval} />
    </View>
  )
}





const LapsTable = props =>{

  const finishedLaps = props.laps
  let min= Number.MAX_SAFE_INTEGER
  let max= Number.MIN_SAFE_INTEGER 

  if (finishedLaps.length >= 2) {
    finishedLaps.forEach(lap => {
      if (lap.duration<min) min = lap.duration
      if (lap.duration>max) max = lap.duration
    })
  }

  return (
    <ScrollView style={styles.scrollView}> 
      {finishedLaps.map((lap,index) => 
      <Lap  
        tasktitle={lap.tasktitle} 
        interval ={index ===0? props.timer + lap.duration: lap.duration} 
        key={index}
        slowest = {lap.duration === min}
        />
      )}
    
    </ScrollView>
  )

}



const ButtonsRow = props => {

  return (
    <View style = {styles.buttonsRow}>{props.children}</View>
  )
}

export default function App() {


  const [Start,setStart]=useState(0)
  const [Now, setNow]= useState(0)
  const [Laps,setLaps] = useState([])

  

  let timer = Now - Start

const onPressStart = () => { 


      const Now = new Date().getTime()
        setStart(Now)
        setLaps([{tasktitle: 'Current Task', duration: 0}])
        timer = setInterval(() => {  setNow(new Date().getTime())}, 80)
}


const OnPressSave = () => {
  const timestamp = new Date().getTime()
  const [firstLap, ...other] = Laps
  // console.log(firstLap.duration)
  // console.log(Now)
  // console.log(Start)
  console.log(Laps)
  const durationNew = firstLap.duration + Now - Start
  
  //const NewTask =  <ModalTask Showmodal= {true} />
  
  setLaps([...Laps, {tasktitle:'Newtask',duration:durationNew}]);
  setStart(timestamp)
  setNow(timestamp)


}

const onPressStop = () => {
}

  return (
  
    <View style={styles.container}>
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
  );
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

  lap: {
    color: '#FFFFFF',
    flexDirection: 'row',
    justifyContent:'space-between',
    borderColor: 'lightgreen',
    borderTopWidth: 1,
    paddingVertical:10,

  },
 
  laptext: {

    color: '#FFFFFF',
    fontSize: 18,

  },

  interval: {

    color: '#FFFFFF',

  },
  scrollView: {
    alignSelf:'stretch'

  },

  slowest: {
    color: 'yellow'
  },

  button: {
    width:100,
    height:100,
    borderRadius:50,
    justifyContent:'center',
    alignItems:'center',
    
  },
  buttonTitle: {

    fontSize: 18,
  },

  buttonBorder: {
    width:96,
    height:96,
    borderRadius: 48,
    borderWidth:2,
    justifyContent:'center',
    alignItems:'center'
  },
  buttonsRow: {
    flexDirection:'row',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    marginTop: 80,
    marginBottom:30
  }
});
