import React from 'react';


const Members = props => {
    return (
        <div>
            {props.membersList.map(member => {    //set a map to push new info
                return (
                    <div className="member" key = {member.id} >  
                        <p>{member.name}</p>  
                        <p>{member.email}</p>
                        <p>{member.role}</p>
                        <button>Edit</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Members;