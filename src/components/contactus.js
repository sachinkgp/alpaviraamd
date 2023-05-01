import M from 'materialize-css'

const  Contactus = ()=>{
    const submitquery=()=>{
        M.toast({html:"Query Submitted",classes:"#c62828 red darken-3"})
    }

    return(
        <div className="contactusbox">
            <input className="contactusboxinput" placeholder="submit your query here"/>
            <button style={{margin:'10px'}} onClick={()=>{submitquery()}}>SUBMIT </button>
        </div>
    )
}
export default Contactus;