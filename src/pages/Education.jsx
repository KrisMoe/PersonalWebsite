

import { useNavigate } from 'react-router-dom'
import Layout from "../css/Layout.module.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function AboutMe() {
  //let navigate = useNavigate();
  
  return (

      <Container className={" "+ Layout.padcontainer} >
        <Row><Col>
        <h1>Education</h1>
        </Col></Row>
        <Row><Col>
        Throughout my life I’ve had a deep love of learning. This started out as a strong interest in math. 
        In sixth grade I got into the University of Minnesota Talented Youth Math Program (UMTYMP). 
        By eighth grade I had started taking calculus classes. 
        That year I attended a talk by a disney animator about how they used multivariable calculus to animate the snow in Frozen. 
        I knew by then that I wanted to do something related to math, and I kept that talk in mind as I started to consider what I wanted to pursue in college. 
        I finished the UMTYMP program in 10th grade and by that point I wanted more than what the traditional 7 hour school day had on offer.
        Because I had had Great grades and had already completed UMTYMP I was accepted by the  University of Minnesota to pursue Post Secondary Enrollment Options there.
        I knew that I  wanted to explore ways to apply all the math I had learned up until that point.  
        After evaluating my options I decided that Computer Science would be most aligned with my interests.
        I felt like it had the most potential to give me the opportunities to solve interesting problems, which was what I enjoyed the most about my Math coursework.
        I choose my PSEO coursework very carefully to fulfill both my High School requirements as well as the requirements for a Computer Science BS. 
        Because I was able to take the equivalent of two years of High School English in one semester my Junior Year, I was able to finish all the important requirements for High School a year early. 
        This meant that I was free to focus on the course work for my Bachelors degree My senior year of highschool. By the time I was officially a student at the University of Minnesota I had met all the degree requirements to be admitted into my major.
        I was then in the strange position of being a freshman in terms of ‘college experience’ but a Junior in terms of coursework.
        As I completed my degree I realized just how much I continued to enjoy studying computer science. 
        I learned a lot about how to create code that is efficient, reusable and scale-able. 
        During my last semester all of my classes involved group projects which were very valuable experiences that taught me a lot about how to work effectively with a team.

        </Col></Row>
      </Container>
  
  )
}