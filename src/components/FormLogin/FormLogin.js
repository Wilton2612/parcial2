

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LogoIniciSesion from "../../assets/login.jpg";
import { Link, useNavigate } from 'react-router-dom';
import { FormattedMessage, useIntl } from 'react-intl';

  

const API_URL = 'http://localhost:3000';

const { useEffect, useState } = require("react");

export default function FormLogin() {
  const intl = useIntl();
  const [email, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length === 0) {

      console.log("Enviar datos de registro", { email, password });
      sendData();
    } else {
      setErrors(errors);
    }
  };


  const validate = () => {
    const errors = {};
    if (!email) errors.email = <FormattedMessage id="email_required" />;
    if (!password) errors.password = <FormattedMessage id="password_required" />;
    if (password.length < 6) errors.password = <FormattedMessage id="password_length" />;
    return errors;
  };



  const sendData = async () => {
    if (email !== "" && password !== "") {

      if (password.length < 6) {
        setErrors({ password: "La contraseña debe tener al menos 6 caracteres" });
        return;
      }

      try {


        const datosEnviados = { email, password };

        const response = await fetch(`${API_URL}/login`, {
          method: 'POST',
          body: JSON.stringify(datosEnviados),
          headers: {
            'Content-Type': 'application/json'
          }
        })


        if (!response.ok) {

          throw new Error("La red no responde");

        }

        const rol = await response.json();
        sessionStorage.setItem('token', rol.rol);
        console.log("Por Dios bendito: ", rol.rol);
        navigate('/books');

      } catch (error) {
        console.log(error)
        console.error("Tenemos un problema con el inicio de sesión:", error);
      }
    }
  }

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      console.log("Ya hay un usuario logueado")
      navigate("/books");
    }
  }, []);

  return (
    <Container>
      <Row>
        <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
          <Image src={LogoIniciSesion} alt="Logo" className="logo_inicio_sesion img-fluid" />
        </Col>
        <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
          <Form onSubmit={handleSubmit} className="formulario">
            <Form.Group controlId="usuario" className="entrada" style={{ margin: "30px" }}>
              <Form.Control
                type="email"
                placeholder= {intl.formatMessage({ id: 'enter_user' })}
                value={email}
                onChange={(e) => setUser(e.target.value)}
              />
              {errors.email && <span>{errors.email}</span>}
            </Form.Group>
            <Form.Group controlId="password" className="entrada" style={{ margin: "30px" }}>
              <Form.Control
                type="password"
                placeholder= {intl.formatMessage({ id: 'enter_password' })}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && <span>{errors.password}</span>}
            </Form.Group>
            <Row className="fila">
              <Button className="form__account" id="bt" type="submit" style={{ margin: "30px" }}>
                  <FormattedMessage id="sesion" />
              </Button>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );

}