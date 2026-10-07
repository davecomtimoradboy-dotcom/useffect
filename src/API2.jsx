import { useEffect, useState } from "react";

function Student(){

   const [users, setUsers] = useState([]);
   
 useEffect(()=>{
    async function loadUsers(){
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsers(response.data);
    }
    loadUsers();





   },[]);



    return(
        <div>
            {
            users.map(users=>(
                <div key={users.id}>
                    <h3>{users.name}</h3>
                    <h3>{users.department}</h3>
                </div>
            ))
            }
        </div>
    );
}
export default Student;
