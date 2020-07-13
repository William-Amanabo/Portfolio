import React from 'react'
import '../css/Navigation.css'
import content from '../content'



export default function Navigation() {
    return (
        <header>

        <nav className="navbar navbar-fixed-top">

            <div className="container-fluid">

                <div className="portfolio-nav-wrapper">

                    <div className="navbar-header">

                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#portfolio-menu">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                       </button>

                        <a className="navbar-brand" href="#home">
                            <img src="../images/svg/Logo.svg" alt="logo"/>
                        </a>
                    </div>

                    <div className="collapse navbar-collapse" id="portfolio-menu">
                        <ul className="nav navbar-nav">
                            
                            {content.navigation.map((item) =>{return <li key={item.title}><a className="smooth-scroll" href={item.href} >{item.title}</a></li>} )}

                        </ul>
                    </div>

                </div>

            </div>
        </nav>

    </header>
    )
}

// need to check against id="portolio-menu" formerly id="vesco-menu"