import React, { useState } from 'react';

let UserContext = React.createContext();

export default UserContext;

const UsersData = [
    {
        id: 1,
        name: "Person 1",
        age: 25,
        email: 'person1@gmail.com',
        imgurl: 'https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem corrupti sapiente mollitia velit eaque molestias ut voluptatibus odit, rem incidunt."
    },
    {
        id: 2,
        name: "Person 2",
        age: 38,
        email: 'person2@gmail.com',
        imgurl: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur laboriosam asperiores nihil, ipsa voluptatibus quos'
    }
]

export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState(UsersData)
    return (
        <UserContext.Provider value={{ userData, setUserData }}>
            {children}
        </UserContext.Provider>
    )
}