import {useState} from 'react';
import Form from './components/Form';

function App() {

  const [appmts, saveAppmts] = useState([]);

  const createAppmt = appmt =>{
    saveAppmts([...appmts, appmt]);
  }

  return (
    <>
      <div className="container">
        <div className="one-half column">
          <Form
            createAppmt={createAppmt}
          />
        </div>
        <div className="one-half column">
          2
        </div>
      </div>
    </>
  );
}

export default App;
