import {useState, useEffect} from 'react';
import Form from './components/Form';
import Appointment from './components/Appointment';

function App() {

  let initialAppmts = JSON.parse(localStorage.getItem('appmts'));
  if(!initialAppmts){
    initialAppmts = [];
  }

  const [appmts, saveAppmts] = useState(initialAppmts);

  useEffect(() => {
    if(initialAppmts){
      localStorage.setItem('appmts', JSON.stringify(appmts));
    } else {
      localStorage.setItem('appmts', JSON.stringify([]));
    }
  }, [appmts]);

  const createAppmt = appmt =>{
    saveAppmts([...appmts, appmt]);
  }

  const deleteAppmt = id => {
    const updatedAppmts = appmts.filter(appmt => appmt.id !== id);
    saveAppmts(updatedAppmts);
  }

  const title = appmts.length === 0 ? 'No appointments yet' : 'Manage your appointments'

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="one-half column">
          <Form
            createAppmt={createAppmt}
          />
          </div>
        
          <div className="one-half column">
            <h2>{title}</h2>
            {appmts.map(appmt => (
              <Appointment
                key={appmt.id}
                appmt={appmt}
                deleteAppmt={deleteAppmt}
              />
            ))}
          </div>

        </div>
      </div>
    </>
  );
}

export default App;
