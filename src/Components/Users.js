import React from "react";
import { Card, Button} from "react-bootstrap";

const Users = (props) => {
    console.log(props.users)
    return (
        <>
           {
               props.users.map((user, index) =>{
                   return (
                       <Card style={{ width: "100"}} className="mt-5" key={index +1}>
                           <Card.Body>
                               <Card.Title>User Details</Card.Title>

                               <h5>Name : {user.name}</h5>
                               <h5>Email : {user.email}</h5>
                               <h5>Gen : {user.gen}</h5>

                               <Button variant="primary">Edit</Button>
                               <Button variant="danger">Delete</Button>

                            </Card.Body>
                       </Card>
                   );
               }

               )
           }
        
        
        </>
    );
};
export default Users;