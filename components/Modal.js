import React,{useState} from 'react';
import { View } from "react-native";
import Dialog from "react-native-dialog";
import firebase from 'firebase';

const config = {
  databaseURL: "https://ecrs-bbfdf.firebaseio.com/",
  projectId: "ecrs-bbfdf",
};
firebase.initializeApp(config);

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
const ModalTask = props => {

  const [NewTask,setNewTask]=useState('')
  const [Comment, setComment]= useState('')

  const cancel =() =>{
    props.setModalVisible(false)
  }
 
 
  const save =()=>{
    const endhour = props.StartHour + props.duration
    props.setLaps([...props.Laps,{SessionNumber: props.SessionNumber, NameOp:props.NameOp, StartHour: props.StartHour, EndHour: endhour,tasktitle:NewTask,comment: Comment, duration:props.duration}])
    props.setTotalTime(props.duration+props.TotalTime)
    fetchSessionData([...props.Laps,{SessionNumber: props.SessionNumber, NameOp:props.NameOp, StartHour: props.StartHour, EndHour: endhour, tasktitle:NewTask, comment: Comment,duration:props.duration}],props.SessionNumber)
    // writeUserData([...props.Laps,{SessionNumber: props.SessionNumber,tasktitle:NewTask,duration:props.duration}],props.SessionNumber)
    props.setModalVisible(false)
    props.setStartHour(endhour)
  }
  fetchSessionData = (Laps,SessionNumber) => {
    firebase.database().ref(SessionNumber).once('value').then(function(snapshot) {
      const existingData=(snapshot.val())
      //console.log(existingData.NewLaps)
      writeUserData(existingData,Laps,SessionNumber)
    
    }).catch( ()=> {
      const existingData= {Newlaps:[]} 
      writeUserData(existingData,Laps,SessionNumber)
    });
  }
  

  
    


  writeUserData=(existingData,Laps,SessionNumber)=>{
    console.log(existingData)
    let NewLaps = ''
    if (existingData == null){
       NewLaps= [...Laps]
    } else {
       NewLaps = [...existingData.NewLaps,Laps[Laps.length - 1]]
       
    }

 
    

    
    firebase.database().ref(SessionNumber).set({
       NewLaps
    }).then((data)=>{
        //success callback
        //console.log('data ' , data)
    }).catch((error)=>{
        //error callback
        console.log('error ' , error)
    })
}
  


  return (
    <View>
           <Dialog.Container visible={props.ModalVisible}>
          
          <Dialog.Input 
          style={{  
              
            margin: 10,
            height: 40,
            borderColor: '#7a42f4',
            borderWidth: 0.5}}
          //value={Newtasktitle}
          placeholder={'Task Tile'}
          onChangeText={text=>setNewTask(text)}>
            
          </Dialog.Input>

         
          <Dialog.Input 
          style={{    
            margin: 10,
            height: 40,
            borderColor: '#7a42f4',
            borderWidth: 0.5}}
        
          placeholder={'Write a Comment'}
          onChangeText={text=>setComment(text)}>
            
          </Dialog.Input>
          
          <Dialog.Button label="Cancel" onPress={cancel} />
          <Dialog.Button label="Save" onPress={save} />
        </Dialog.Container>
      </View>
  )
          }

          export default ModalTask;