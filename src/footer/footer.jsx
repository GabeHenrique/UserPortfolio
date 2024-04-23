import React from "react";
import { Footer, Row, Col } from "react-materialize";
import "./footer.css"; // Importe o arquivo de estilos CSS para o rodapé

const Rodape = () => (
    <Footer className="footer light-blue">
        <div className="container">
            <h5 className="white-text">Redes Sociais</h5>
            <Row>
                <Col s={3}>
                    <a className="grey-text text-lighten-3" href="#!">
                        Facebook
                    </a>
                </Col>
                <Col s={3}>
                    <a className="grey-text text-lighten-3" href="#!">
                        LinkedIn
                    </a>
                </Col>
                <Col s={3}>
                    <a className="grey-text text-lighten-3" href="#!">
                        GitHub
                    </a>
                </Col>
                <Col s={3}>
                    <a className="grey-text text-lighten-3" href="#!">
                        Postman
                    </a>
                </Col>
            </Row>
        </div>
    </Footer>
);

export default Rodape;
