

import { useNavigate } from 'react-router-dom'
import Layout from "../css/Layout.module.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function AboutMe() {
  //let navigate = useNavigate();
  
  return (

      <Container className={Layout.center+" "+ Layout.padcontainer} >
        <Row><Col>Education</Col></Row>
      </Container>
  
  )
}