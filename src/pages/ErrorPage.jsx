import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function ErrorPage() {
  let navigate = useNavigate();
  
  return (
    <div className="errorPage">
      <Container>
        <Row><Col>Link Not Found!</Col></Row>
        <Row><Col><Button onClick={() => navigate('/')}>Back to Home</Button></Col></Row>
      </Container>
    </div>
  )
}