import React, { useState } from  'react';
    
const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confPassword, setConfPassword] = useState("");  
    const [ErrorfirstName, setErrorFirstName] = useState("");
    const [ErrorlastName, setErrorLastName] = useState("");
    const [Erroremail, setErrorEmail] = useState("");
    const [Errorpassword, setErrorPassword] = useState("");  
    const [ErrorconfPassword, setErrorConfPassword] = useState("");  





    const handlefirstName = (e) => {
        setFirstName(e.target.value);
        if(firstName.length < 2) {
            setErrorFirstName("First Name must be at least 2 characters");
        } else {
            
            setErrorFirstName("");
        }
        
        
    }
    const handlelastName = (e) => {
        setLastName(e.target.value);
        if(lastName.length < 2) {
            setErrorLastName("Last Name must be at least 2 characters");
        } else {
            
            setErrorLastName("");
        }
        
        
    }
    const handlepassword = (e) => {
        setPassword(e.target.value);
        if(password.length < 8) {
            setErrorPassword("Password must be at least 8 characters");
        } else {
            
            setErrorPassword("");
        }
        
        
    }
    const handleemail = (e) => {
        setEmail(e.target.value);
        if(email.length < 5) {
            setErrorEmail("Email must be at least 5 characters");
        } else {
            
            setErrorEmail("");
        }
        
        
    }
    const handleconfPassword = (e) => {
        setConfPassword(e.target.value);
        if(confPassword.trim() && confPassword!==password) {
            console.log("********************");
            console.log(password);
            console.log(confPassword);

            setErrorConfPassword("passwords must match");
        } else {
            
            setErrorEmail("");
        }
        
        
    }
   
    const createUser = (e) => {
        e.preventDefault();
        const newUser = {firstName, lastName, email, password ,confPassword};
        setFirstName("")
    	setLastName("");
    	setEmail("");
    	setPassword("");
        setConfPassword("");

    };
    
    return(
        <>
        <form onSubmit={ createUser }>
            <div>
                <label>First Name: </label> 
                <input type="text" value={firstName} onChange={ handlefirstName } />
                {
                    ErrorfirstName ?
                    <p>{ ErrorfirstName }</p> :
                    ''
                    
                }
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" value={lastName} onChange={ handlelastName} />
                {
                    ErrorlastName ?
                    <p>{ ErrorlastName }</p> :
                    ''
                    
                }
            </div>
            <div>
                <label>Email: </label> 
                <input type="text" value={email} onChange={ handleemail } />
                {
                    Erroremail ?
                    <p>{ Erroremail }</p> :
                    ''
                    
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="text" value={password} onChange={ handlepassword } />
                {
                     Errorpassword?
                    <p>{ Errorpassword }</p> :
                    ''
                    
                }
            </div>
            <div>
                <label>Conf Password: </label>
                <input type="text" value={confPassword} onChange={ handleconfPassword } />
                {
                     ErrorconfPassword?
                    <p>{ ErrorconfPassword }</p> :
                    ''
                    
                }
            </div>
           
        </form>

        <div>
            <p>First Name : {firstName}</p>
            <p>Last Name :{lastName}</p>
            <p>Email : {email}</p>
            <p>Password : {password}</p>
            <p>Conf Password : {confPassword}</p>
                

        </div>
        </>
    );
};
    
export default Form;
