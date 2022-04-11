// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize


// importando a foto do usuário (note que depois podemos usa-la facilmente chamando apenas avatar ao invés do caminho completo)
import avatar from '../../images/avatar.jpeg';

const UserProfile = () => (
    <Card className="cartao_perfil">
        <Row>
            <Col s={8} m={10} offset="s3 m1">
                <img src={avatar} className="circle responsive-img" alt={"Imagem de Perfil"} />
            </Col>
        </Row>
        <Row className="center-align">
            <h5 >Gabriel Rodrigues</h5>
            <p className="blue darken-6 white-text">Estagiário de P&D</p>
        </Row>
    </Card>
);

export default UserProfile;