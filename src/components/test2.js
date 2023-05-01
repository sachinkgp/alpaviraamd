import {useState} from 'react'
import '../App.css'
const MobNavbar = ()=>{
    const [ham,setHam] = useState(true);
    const changeset=()=>{
        setHam(!ham);
    }
    return(
        <div className='mobnav'>
            <a className='hambrbut'>
            {ham? <i class="fa-solid fa-bars" onClick={()=>changeset()}></i> : <i class="fa-solid fa-times" onClick={()=>changeset()}></i>}
            </a>
            <ul id={ham? "monavbarhide":"monavbarshow"}>
                <li><a href="/">Home</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/ourteam">Our Team</a></li>
                <li><a href="aboutus">About US</a></li>
                <li><a href="contactus">Contact US</a></li>
            </ul>
        </div>
    )
}

export default MobNavbar;