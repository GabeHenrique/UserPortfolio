import React from "react";
import {Footer, Row, Col} from "react-materialize"

const Rodape = () => (
    <Footer
        className="footer light-blue"
        copyrights="Todos os direitos reservados"
        moreLinks={<a className="grey-text text-lighten-4 right" href="#!">More Links</a>}
    >
        <h5 s={12} className="white-text">
            Redes Sociais
        </h5>
        <Row>
            <Col s={3}><a className="grey-text text-lighten-3" href="#!">Facebook</a></Col>
            <Col s={3}><a className="grey-text text-lighten-3" href="#!">LinkedIn</a></Col>
            <Col s={3}><a className="grey-text text-lighten-3" href="#!">GitHub</a></Col>
            <Col s={3}><a className="grey-text text-lighten-3" href="#!">Postman</a></Col>
        </Row>
    </Footer>
);
export default Rodape
