const Person = (props) => {
    let voteMsg  = props.age >= 18? "Go Vote!" : "You must be 18"
    let hobbies = props.hobbies.map(hobby => <li>{hobby}</li>);

    return (
        <div>
            <p> Learn some information about this person:</p>
            <ul>
                <li> Name: {props.name.slice(0,6)}</li>
                <li> Name: {props.age}</li>
            
                <ul>
                    Hobbies:
                    {hobbies}
                </ul>
            </ul>
            <h3>{voteMsg}</h3>
        </div>
    )
}