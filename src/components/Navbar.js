import React,{useState} from 'react';

const Navbar = ()=>{
    const [ham,setHam] = useState(true)
    const changeset = ()=>{
        setHam(!ham);
    }
    return(
        <nav>
            <a href="/home">
                <img src="./alplogo.png" style={{width:'40px',padding:"10px 50px"}}/>
            </a>
            <ul className="navbar">
                <li><a href="/">Home</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/ourteam">Our Team</a></li>
                <li><a href="aboutus">About US</a></li>
                <li><a href="contactus">Contact US</a></li>
            </ul>
            <a className='hambrbut'>
                {ham? <i class="fa-solid fa-bars" onClick={()=>changeset()}></i> : <i class="fa-solid fa-times" onClick={()=>changeset()}></i>}
            </a>
        </nav>
    )
}


export default Navbar