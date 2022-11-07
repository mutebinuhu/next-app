import React from 'react';
export const getStaticPaths = async () =>{
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    const paths = data.map(ninja=>{
        return{
            params: {id: ninja.id.toString()}
        }
    })

    return{
        paths: paths,
        fallback: false
    }
}

export const getStaticProps = async (context) =>{
    const id = context.params.id
    const response = await fetch("https://jsonplaceholder.typicode.com/users/"+id);
    const data = await response.json();
    console.log("hehehe", data)
    return {
        props:{ninja:data}
    }
}
const Id = ({ninja}) => {
    console.log("ninja", ninja)
    return (
        <div>
            <h1>Details page</h1>
            <p>Name:{ninja.name}</p>
            <p>Email:{ninja.email}</p>
            <p>Website:{ninja.website}</p>
            <p>Address:{ninja.address.street}</p>
          

        </div>
    );
}

export default Id;
