const Person = ({name, age, hobbies}) =>{
    let vote = age >=18 ? "please go vote!" : "you must be 18";
    let hobbie = hobbies.map(h => <li>{h}</li>)

    return(
        <div>
            <p>Learn some information about the person</p>
            <ul>
                <li>Name: {name.slice(0,6)}</li>
                <li>Age: {age}</li>
                <ul> 
                Hobbies:
                {hobbie}
                </ul>
            </ul>
            <h3> {vote} </h3>
        </div>
        
    )
}