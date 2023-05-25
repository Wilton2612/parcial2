

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LogoIniciSesion from "../../assets/login.jpg";
import { Link, useNavigate } from 'react-router-dom';

const API_URL = 'http://localhost:3000';

const { useEffect, useState } = require("react");

export default function FormLogin()
{

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
  if (!email) errors.email = "El usuario es requerido";
  if (!password) errors.password = "La contraseña es requerida";
  if (password.length < 6) errors.password = "La contraseña debe tener al menos 6 caracteres";
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
      sessionStorage.setItem('token', rol);
      console.log("Por Dios bendito: ", rol);
      navigate('/books');

    } catch (error) {
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
            <Container >
              <Image src={LogoIniciSesion} alt="Logo" className="logo_inicio_sesion img-fluid" />
              <p className="texto_inicio_sesion">Inicio de sesión </p>
              <Form onSubmit={handleSubmit} className='formulario'>
                <Form.Group controlId="usuario" className='entrada'>
        
                  <Form.Control 
                    type="email"
                    placeholder="Ingrese su usuario"
                    value={email}
                    onChange={(e) => setUser(e.target.value)}
                  />
                  {errors.email && <span>{errors.email}</span>}
                </Form.Group>
        
                <Form.Group controlId="password" className='entrada'>
        
                  <Form.Control 
                    type="password"
                    placeholder="Ingrese su contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {errors.password && <span>{errors.password}</span>}
                </Form.Group>
        
        
                <Row className='fila'>
                  <Button className='form__account' id='bt' type="submit">
                    Iniciar sesión
                  </Button>
                </Row>
        
                <Row className="form__help" >
                  <Link to="/books" id='redireccionar'>¿No te has registrado? Hazlo aquí</Link>
                </Row>
              </Form>
            </Container>
          );

}