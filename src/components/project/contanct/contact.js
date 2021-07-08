import "./contact.scss"
import {Email, MobileFriendly} from '@material-ui/icons/';

export default function contact({xilva , title}) {
    
    return (
        <div className ="formconteiner">
           <div className= {xilva? "contact xilva": "contact"} >
               <p>Contant</p>
               <p>Giorgi Kapanadze</p>
               <div className="mobile">
                   <MobileFriendly />
                   <p>555 778181</p>
               </div>
                <div className="email">
                    <Email/>
                    <p>gkapanadze76@yahoo.com</p>
                </div>
           </div>
           <div className="about">
               <p className="proj">
                {title}
              
               </p>
           </div>
        </div>
    )
}
