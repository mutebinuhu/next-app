import React from 'react';
import Link from 'next/link';
import Image from "next/image";

const Navbar = () => {
    return (
       <nav>
            <div className='logo'>
                <Image src="/ninja.png" width={120} height={77} alt="ninja"/>
            </div>
            <Link href="/"><a href="">Home</a></Link>
            <Link href="/about"><a href="">About</a></Link>
            <Link href="/contact"><a>Contact</a></Link>
            <Link href="/Ninjas"><a>Ninjas</a></Link>
       </nav>
    );
}

export default Navbar;
