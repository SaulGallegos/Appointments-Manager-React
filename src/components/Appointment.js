

const Appointment = ({appmt, deleteAppmt}) => {

     const {pet, owner, date, time, symp} = appmt

     return (
          <div className="cita">
               <p>Pet: <span>{pet}</span></p>
               <p>Owner: <span>{owner}</span></p>
               <p>Date: <span>{date}</span></p>
               <p>Time: <span>{time}</span></p>
               <p>Symptoms: <span>{symp}</span></p>

               <button
                    className="button eliminar u-full-width"
                    onClick={() => deleteAppmt(appmt.id)}
               >Eliminar &times;</button>
          </div>
     );
}
 
export default Appointment;