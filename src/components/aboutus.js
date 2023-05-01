import { abtus,shreya,khusnuma } from "./teamdata";
import '../App.css'

const  Aboutus = ()=>{
    return(
        <div className='abtusbox'>
            <h1>Alpaviraam-Our Story</h1>  
            
          <div className="abtus2">
              {abtus}
              {shreya}
              {khusnuma}
          </div>
        </div>
    )
}

export default Aboutus;