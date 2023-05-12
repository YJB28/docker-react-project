import { Link } from 'react-router-dom';

export function  Home(){
    return(
        <>
        <div className="text-center pt-4" style={{marginTop:"5%",fontSize:"1rem"}}>
        <h1>Welcome Student Registration...</h1>
        <Link to="/RegistrationFormDocker">Click to Register</Link>

        </div>
        
           
        </>
    )
}