import "./contact.scss"
import {Email, MobileFriendly} from '@material-ui/icons/';

const Dep = ({item})=>{

    return(
        <p>{item}</p>
    )
 }

export default function contact({xilva , title}) {
    const info = title.slice()
    const desc = info.pop()
    
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
               {info.length > 0 ? <span style={{marginLeft:"7px"}}>Dependencies</span>: ""}
               
               <div className ="depWrapper">
               {
                  info.map((item, i)=>{
                      return(
                          <Dep key={i} item={item} />
                      )
                  })
               }
               </div>
               {info.length > 0 ?<span style={{marginLeft:"7px", borderTop:"1px solid whitesmoke"}}
               >About: {desc}</span>: ""}
               
           </div>
        </div>
    )
}
