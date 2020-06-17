import React, {useState} from 'react';
import {Text,StyleSheet, View, Button} from 'react-native'
import GanttChart from 'react-native-gantt-chart'


const SplashScreen = props => {
    const [Tasks,setTasks] = useState([
        { _id: "1", name: "Task 1", "start": new Date(2020, 0, 1), "end": new Date(2020, 0, 5), progress: 0.25 },
        { _id: "2", name: "Task 2", "start": new Date(2020, 0, 3), "end": new Date(2020, 0, 4), progress: 1 },
        { _id: "3", name: "Task 3", "start": new Date(2020, 0, 5), "end": new Date(2020, 0, 90), progress: 0.5 }
        ])


    return(
        <GanttChart 
                data={Tasks}
                numberOfTicks={5}
                onPressTask={task => alert(task.name)}
                gridMin={new Date(2020, 0, 1).getHours()}
                gridMax={new Date(2020, 0, 5).getTime()}
                colors={{
                    barColorPrimary: '#0c2461',
                    barColorSecondary: '#4a69bd',
                    textColor: '#fff',
                    backgroundColor: '#82ccdd'
                }}
                />
    )
}



export default SplashScreen;
