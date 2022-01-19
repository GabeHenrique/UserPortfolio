// Importantando o React
import React from "react";
// Importando os components necessárias da lib react-materialize
import { Navbar, NavItem, Row, Icon, } from 'react-materialize';
import "./estilo.css"

const Header = () => (
    <Row>
        <Navbar className="light-blue darken-6 navbar--left-aligned-links"
            brand={<div className="logo right-align" id="logotipo" href="/">Portfólio Dev</div>}
            id="mobile-nav"
            options={{
                draggable: true,
                edge: 'left',
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd:null ,
                onOpenStart: null,
                outDuration: 200,
                preventScrolling: true
            }}
        >
            <NavItem onClick={function noRefCheck(){}}>Home</NavItem>
            <NavItem href="/contact">Contato</NavItem>
        </Navbar>
    </Row>
);

export default Header;