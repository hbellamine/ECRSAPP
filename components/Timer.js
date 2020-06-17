import React from 'react';
import { Text } from 'react-native';
import moment from 'moment';

const Timer = props => {

  const pad = (n) => n < 10 ? '0' + n : n
  const duration = moment.duration(props.interval)
  const centiseconds = Math.floor(duration.milliseconds() / 10)

return (<Text style = {props.style}> 
  {pad(duration.minutes())}:{pad(duration.seconds())}:{pad(centiseconds)}</Text>)
}

export default Timer;
