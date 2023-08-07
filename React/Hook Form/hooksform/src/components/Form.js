import React, { useState } from  'react';
    
const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confPassword, setConfPassword] = useState("");  

    
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
                <input type="text" value={firstName} onChange={ (e) => setFirstName(e.target.value) } />
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" value={lastName} onChange={ (e) => setLastName(e.target.value) } />
            </div>
            <div>
                <label>Email: </label> 
                <input type="text" value={email} onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" value={password} onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div>
                <label>Conf Password: </label>
                <input type="text" value={confPassword} onChange={ (e) => setConfPassword(e.target.value) } />
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
