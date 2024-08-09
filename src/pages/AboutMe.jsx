// import { useNavigate } from 'react-router-dom'
import Layout from "../css/Layout.module.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function AboutMe() {
  //let navigate = useNavigate();
  
  return (

      <Container className={" "+ Layout.padcontainer} >
        <Row><Col><h1>About Me</h1></Col></Row>
        <Row><Col>I’ve been interested in computer science since high school. 
        I was initially drawn to it because I love mathematical applications and creating powerful art.
         Since starting my degree I’ve also found that I like creating websites and video games. 
         I taught myself two different game engines and have created multiple websites.
          One thing that I have especially enjoyed about learning computer science is how to make my code more efficient. 
          When I work on a project I look at the whole system and figure out what the potential for improvement is. 
          This mindset has helped me save time and avoid bugs on numerous projects. 
        </Col></Row>
      </Container>
  
  )
}