import {useState} from 'react';
import uuid from 'react-uuid'

const Form = ({createAppmt}) => {

     const [appmt, updateAppmt] = useState({
          pet: '',
          owner: '',
          date: '',
          time: '',
          symp: '',
     });

     const [error, setError] = useState(false);

     const handleChange = e => {
          updateAppmt({
               ...appmt,
               [e.target.name] : e.target.value
          });
     }

     const { pet, owner, date, time, symp } = appmt;

     const submitAppmt = e => {
          e.preventDefault();

          if(pet.trim() === '' || owner.trim() === '' || date.trim() === '' || time.trim() === '' || symp.trim() === ''){
               setError(true);
               return;
          }

          setError(false);

          appmt.id = uuid();

          createAppmt(appmt);

          updateAppmt({
               pet: '',
               owner: '',
               date: '',
               time: '',
               symp: '',
          });
     }

     return ( 
          <>
          <h1>Make Appointment</h1>

          <form
               onSubmit={submitAppmt}
          >
               <label>Pet Name</label>
               <input
                    type="text"
                    name="pet"
                    className="u-full-width"
                    placeholder="Pet Name"
                    onChange={handleChange}
                    value={pet}
               />

               <label>Owner Name</label>
               <input
                    type="text"
                    name="owner"
                    className="u-full-width"
                    placeholder="Owner Name"
                    onChange={handleChange}
                    value={owner}
               />

               <label>Date</label>
               <input
                    type="date"
                    name="date"
                    className="u-full-width"
                    onChange={handleChange}
                    value={date}
               />

               <label>Time</label>
               <input
                    type="time"
                    name="time"
                    className="u-full-width"
                    onChange={handleChange}
                    value={time}
               />

               <label>Symptoms</label>
               <textarea
                    className="u-full-width"
                    name="symp"
                    onChange={handleChange}
                    value={symp}
               ></textarea>

               {error ? <p className="alerta-error">All fields are required</p> : null}

               <button
                    type="submit"
                    className="u-full-width button-primary"
               >Make Appointment</button>
          </form>
          </>
     );
}
 
export default Form;