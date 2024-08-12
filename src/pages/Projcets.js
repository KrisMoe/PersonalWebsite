// import { useNavigate } from 'react-router-dom'
import Layout from "../css/Layout.module.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Ballotbotchart from '../assets/ballotbotchart.png'
import Projectdescription from '../components/projectdescription';
import Projectooutputs from '../assets/Screenshot 2024-07-31 144624.png';
import RecipeEdit from '../assets/edit recipe.png';
import Foodpage from '../assets/foodpage.png';
import Gamplay from '../assets/gameplay.png';
import Pause from '../assets/pause menu.png'
import Firstlevel from '../assets/firstlevel.png';
import Mancalapic from '../assets/mancala.png';
import Mancalagameover from '../assets/gameover.png';
// import Pantrypage from '../assets/what you have.png';
export default function Projects() {
  //let navigate = useNavigate();
  let ballotbotinfo = {
    "discription":"This was a group project for my Software Engineering class. We were required to create a program that calculated and output the results from an election based on a CSV file with information about the election. The project was separated into two parts, One where our team worked using the waterfall method and on using the Agile Scrum. To ensure that our program worked we used the google test suite to test our program. ",
    "result":"We were able to create a program that was able to calculate election results for CPL OPL MPO and MV election. It also supported multiple files for one election for all types. ",
    "reflection":"This project went really well.  During the second half we were able to complete all the requirements well ahead of our budgeted time. The hardest part of this project was creating all the tests to ensure that our project worked. Our group was able to leverage our strengths to work very efficiently.  "
  }
  let letmecookinfo ={
    "discription":
    'I worked in a group of five to create the website Let Me Cook.  This website allowed users to log what food is in their pantry as well as a place to store recipes.This allows users to easily tell what recipes they have enough food to make. Users can also make a queue of recipes that let them plan recipes for the future',
    "result":'You can vist the website here:',
    "link":<a href=" https://kind-tree-0e95d6c0f.5.azurestaticapps.net ">Let me cook</a>,
    "reflection":"We were able to complete most of the features we wanted. The biggest issue we ran into with this project was units. I think that we could have created a solution to this problem by creating a dictionary with the unit conversions if we had more time. We finished all of the main features including searching an api for foods and recipes. We compleated all of our feature on time "
  }
  let pigeoninfo = {
    "discription":
    "I created a small puzzle game where you play as a pigeon that needs to get enough food to lay an egg. You compete with mice-like enemies that use the boids algorithm to move.I created all the assets and code for this project. I wanted a small project that would teach me how to use godot as well as how to publish a game on itch.io. ",
    "result":'You can vist the website here:',
    "link":<a href="https://raininight.itch.io/pigeon-game ">Let me cook</a>,
    "reflection":"I learned a lot about how godot works. I started this project at the start of July 2024 and was able to finish 3 weeks later. When I started I knew nothing about the godot engine nor the GDscript language. I also believe that this project is expandable, and that I was able to complete a project without suffering significant feature creep.  "
  }
  let mancalainfo = {
    "discription":"I wanted to create a simple project to get back into coding in C# after graduation. I had done some work with unity in the summer of 2023 and I wanted to get back into it. I’ve seen a lot of people recreating classic board games, and Mancala was one of my favorites as a kid. I also thought the game was complicated enough where I could use OOP principles to optimize my project. ",
    "result":"I was able to create both the basic game along with two different algorithms to play against. One played randomly and the other played the space with the most pisces.",
    "reflection":"Overall I was really pleased with how I created the player system. It was easy to set up human vs algorithm or algorithm vs algorithm" 
  }

  return (
    <div className={Layout.contentbox}>
    <Container>
      <div  id="Ballotbot">
      <Row>
        <Col className={Layout.center}> 
          <div className="project-title">
            <h1> BallotBot 5000</h1>
            <img src ={Projectooutputs} alt = "text display of the project"className={Layout.imageM}></img>
          </div>
        </Col>
        <Col className={Layout.center}>
          <div className='slideshow'>
          < Projectdescription info = {ballotbotinfo}> </Projectdescription>
          </div>
         
        </Col>
      </Row>
      <Row>
       <Col className={Layout.center}>
        <img src ={Ballotbotchart} alt ="Uml diagram of project"className={Layout.imageL}></img>
       </Col>
     
      </Row>
    </div>

    
   <br></br>
   <br></br>
   <br></br>
   <br></br>


    <div id="Let Me Cook">

    <Row>
      <Col>
        <h1>
          Let Me Cook
        </h1>
        <img src ={Foodpage} alt ="main page of projet" className={Layout.imageML}></img>
      </Col>
      <Col>
      <div className='slideshow'>
          < Projectdescription info = {letmecookinfo}> </Projectdescription>
          
      </div>
      <img src ={RecipeEdit} alt = "shows how to edit recipe"className={Layout.imageM}></img>
      </Col>
    </Row>
    <Row></Row>
    <Row></Row>
    </div>

    
    
   <br></br>
   <br></br>
   <br></br>
   <br></br>


    <div id="Godot">

    <Row>
    <Col>
      <div className='slideshow'>
          < Projectdescription info = {pigeoninfo}> </Projectdescription>
          
      </div>
      
      </Col>
      <Col>
        <h1>
          Pigeon Game
        </h1>
        <img src ={Firstlevel} alt ="first level of game"className={Layout.imageMML}></img>
      </Col>
      
    </Row>
    <Row>
      <Col> <img src ={Pause} alt = "game level paused"className={Layout.imageMML}></img> </Col>
      <Col> <img src ={Gamplay} alt = "gameplay" className={Layout.imageMML}></img> </Col>
    </Row>
    <Row></Row>
    </div>


    
    
    
   <br></br>
   <br></br>
   <br></br>
   <br></br>


    <div id="Unity">

    <Row>
  
      <Col>
        <h1>
          Mancala game
        </h1>
        <img src ={Mancalagameover} alt= "Game over" className={Layout.imageM}></img>
      </Col>
      <Col>
      <div className='slideshow'>
          < Projectdescription info = {mancalainfo}> </Projectdescription>
          
      </div>
      
      </Col>
    </Row>
    <Row>
      <Col> <img src ={Mancalapic } alt = "mancala game" className={Layout.imageMML}></img> </Col>
    </Row>
    <Row></Row>
    </div>


    </Container>
    
   
    </div>
  )
}