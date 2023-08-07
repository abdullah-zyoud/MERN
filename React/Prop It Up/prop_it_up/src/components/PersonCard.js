import React ,{useState} from 'react';
    
const PersonCard = (props) => {
    const [birthday,setBirthday] =useState(props.age)
    const { firstName, lastName,age,hairColor} = props; 
    return (
        <div>
                <h1>{firstName}, {lastName} </h1>
                <p>Age :{age}</p>
                <p>Hair Color :{hairColor}</p>
                <p>Birthday : {birthday}</p>
                <button  onClick={(event)=>setBirthday(birthday+1)}>Birthday</button>
           
        </div>
    );
}
export default PersonCard;