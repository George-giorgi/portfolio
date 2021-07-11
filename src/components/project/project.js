import "./project.scss"
import {useRef, useState, useEffect} from "react"
import Contact from "./contanct/contact"
import { data } from "../../Data"
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export default function Project() {
    const scroll = useRef()
    const [posit, setposit] = useState(0)
    const [contact,setcontact] = useState(false)
    const [title,settitle]= useState([])
    const [clientwidth, setclientwidtn] = useState(true)
    const vp = useRef()
    const responsive = useRef()
    
    const handler = (e)=>{
        const maxrightscroll = scroll.current.scrollWidth - scroll.current.clientWidth
        
        if(e.deltaY>0 && scroll.current.scrollLeft < maxrightscroll){
            setposit(prev=>prev+60)
            scroll.current.scrollLeft= posit
        }else if(e.deltaY<0 && scroll.current.scrollLeft!==0){
            scroll.current.scrollLeft= posit
            setposit(prev=>prev-60)
            
        } 
    }
    const scrollhendler =(e)=>{
        const maxrightscroll = scroll.current.scrollWidth - scroll.current.clientWidth
        const scrolisdashoreba = e.target.scrollLeft
        const length = vp.current.getTotalLength()
        if(scrolisdashoreba>0 && scrolisdashoreba< maxrightscroll){
            vp.current.style.strokeDashoffset= (length - scrolisdashoreba)
        }else if(scrolisdashoreba === 0){
            vp.current.style.strokeDashoffset=length
        }else{
            vp.current.style.strokeDashoffset=length
        }
        if(vp.current.style.strokeDashoffset < length){
            
            setcontact(true)
        }
      
    }
    const hoverhandler = (title)=>{

        settitle(title)
    }
   
    const leavhandler =()=>{
       
        settitle([])
       
    }
    useEffect(()=>{
        const width = responsive.current.clientWidth
        width<768 && setclientwidtn(false)
    },[clientwidth])
    return (
        <>
        <div ref={responsive} className = "conteiner" onWheel={(e)=>handler(e)} onScrollCapture={(e)=>{scrollhendler(e)}} >
            <div className="wrappSlide" ref={scroll}>
                {
                    data.map((item)=>{
                        
                        return(
                            <div 
                            key={item.id} 
                            className="content"
                            onMouseOver={()=>hoverhandler(item.Dep)}
                            onMouseLeave={leavhandler}
                            >    <a href={clientwidth&&item.link} target="_blank" rel="noreferrer">
                                <img src ={item.img} alt="img" />
                                <span className="spanname">{item.name}</span>
                                </a>
                                <a href ={clientwidth == false&& item.link} target="_blank" rel="noreferrer">
                                 <p className="respons"> {clientwidth == false&& "Click and see"}</p>
                                </a>
                            </div>
                        )
                    })
                }
               
            </div>
            <svg id="svg" width="447" height="80" viewBox="0 0 447 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                ref={vp}
                className="path"
                stroke="#C3AED6"
                strokeWidth={3}
                d="M0 79H69L94 48L104 68L121 20L136 79L169 48L185 62L228 2L246 79L291 68L310 79L335 53L366 79H447"/>
            </svg>
            <Contact
            xilva = {contact}
            title = {title}
            />
            <footer>
                <p>Portfolio</p>
                <a className="link" href ="https://www.linkedin.com/in/giorgi-kapanadze-613023176/" target="_blank">
                    <LinkedInIcon className="linkedin" />
                </a>
               
            </footer>
            
        </div>
        </>
        
    )
}
