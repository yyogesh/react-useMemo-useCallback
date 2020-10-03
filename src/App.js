import React, { useState, useEffect, useCallback, useMemo } from 'react';
import './App.css';
import Person from './components/Person';
import SignIn from './components/SignIn';


const MemorizedPerson = React.memo(Person);

function slowFunction(num) {
  console.log('calling slow function');
  for (let i = 0; i <= 1000000000; i++) { }
  return num * 2
}

function App() {
  const [toggle, setToggle] = useState(true);
  const [userName, setUserName] = useState('xyz');
  const [number, setNumber] = useState(3);
  useEffect(() => {
    const id = setInterval(() => {
      setToggle(toggle => !toggle);
    }, 2000)
    return () => clearInterval(id);
  }, [])

  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number])

  const singInFn = useCallback(() => {
    console.log('Sing in function')
  }, [userName])

  return (
    <div className="App">
      <Person isMemo={false} firstName='xyz' lastName='abc' />
      <MemorizedPerson isMemo={true} firstName='xyz' lastName='abc' />
      <SignIn userName={userName} onSignIn={singInFn} />
      <div>{doubleNumber}</div>
    </div>
  );
}



export default App;
