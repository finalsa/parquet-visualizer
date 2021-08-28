import {useEffect, useState } from 'react'
import {Loading} from 'finalsa-react-components'

function App() {
  const [start,setState] = useState(false);
  useEffect(()=>{
    let timer = setInterval(()=>{
      if(!!window.ipcRenderer) {
        clearInterval(timer);
        setState(true);
      }
    },1000);
  })
  if(!start){
    return (
      <Loading></Loading>
    );
  }
  return (
    <></>
  );
}

export default App;
