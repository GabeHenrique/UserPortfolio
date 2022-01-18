import React from "react";
import { Row, Col, Card } from 'react-materialize';
import UserProfile from '../user_profile/user_profile'
import Experience from '../experience/experience'
import company_avatar from '../../images/uno.jpg';

const Home = () => (
    <Row>
        <Col m={3} s={12}>
             <UserProfile />
        </Col>
        <Col m={8} s={12}>
            <h5 className="subtitle">Sobre Mim</h5>
            <Card>
                <div>
                    <p><b>Lorem</b></p>
                    <p>Sou apaixonado por tecnologia, estou sempre em busca de mais conhecimento. Já participei de inúmeros trabalhos voluntários na minha comunidade, sempre querendo fazer o bem para todos ao meu redor.</p>
                </div>
            </Card>
            <h5 className="subtitle">Experiências</h5>


            {/* Passando os parâmetros title, company, description e avatar para o component Experience */}
            <Experience title="Estágiário de Pesquisa e Desenvolvimento"
                        company="UNO Soluções Integradas"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laborevoluptate velit esse cillum dolore eu fugiat id est laborum."
                        avatar={company_avatar}
            />
        </Col>
    </Row>
);

export default Home;