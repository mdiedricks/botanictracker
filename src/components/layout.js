import React from 'react'
import Header from './header';
import Footer from './footer';
import '../App.css';

export default function Layout({children}) {
    return (
        <div>
            <Header className="App-header"></Header>

            <main >
                'main'
                {children}
            </main>
            <Footer></Footer>
        </div>
    )
}
