import React from 'react';
import Head from "next/head";

const Header = ({page}) => {
    return (
        <Head>
        <title>{page}</title>
        <meta name="keywords" content="names, ninjas" />
        </Head>
    );
}

export default Header;
