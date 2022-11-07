import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Ninjas.module.css';
export const getStaticProps = async () =>{
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return{
        props:{ninjas:data}
    }
}
const Index = ({ninjas}) => {
    return (
        <div>
            <h1>Ninjas</h1>
            {ninjas.map(ninja=>(
                <Link key={ninja.id} href={`Ninjas/${ninja.id}`}>
                    <a href="" className={styles.single}>
                        <h3>
                            {ninja.name}
                        </h3>
                    </a>
                </Link>
            ))}
        </div>
    );
}

export default Index;
