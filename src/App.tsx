import './App.css';

import {Button, Text,} from './ui';
function App() {


  return (
    <>
     <Text>hellodawd</Text>
     <Button label='Click me' onClick={() => alert("Yoo")} disabled={true}></Button>
    </>
  )
}

export default App
