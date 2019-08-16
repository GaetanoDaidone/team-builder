import React, {useState} from "react";

const MembersForm = props => {

    const [member, setMember] = useState("")  //this will be removed with Formik. Sets the state for member.

    const changeHandler = event => {  //this will be removed with Formik. 
      
        setMember({...member, [event.target.name]: event.target.value})   //spreads "member", 
    }

    const submitForm = event => {
        event.preventDefault();   //stops page from reloading which is the default.
        props.addNewMember(member);  //adds a member, if this was a note, I would have to add a spread operator for it to be note plus new note.
 
    }

    return(    //exactly as Dan wrote it. Many will be removed with Formik.
        <form onSubmit = {submitForm}>
            <label htmlFor = "name">  New Member Name </label>
            <input
                type="text"
                name="name"
                placeholder="Type Name Here"
                value={member.name}
                onChange={changeHandler}
                />
             <label htmlFor = "email">  New Member Email </label>    
                 <input
                type="email"
                name="email"
                placeholder="Type Email Here"
                value={member.email}
                onChange={changeHandler}
                />
             <label htmlFor = "role">  New Member Role </label>
                 <input
                type="text"
                name="role"
                placeholder="Type Role Here"
                value={member.role}
                onChange={changeHandler}
                />
            <button type="submit">Submit</button>
        </form>
    )
}
export default MembersForm