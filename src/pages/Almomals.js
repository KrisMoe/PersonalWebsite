import Canvascard from '../components/canvascard';
import Layout from '../css/Layout.module.css'




export default function Amomals() {
  


        return <>
    
        <div className='container'>
            <div className={Layout.horizontal}>  
                <Canvascard seed =  {1}/>
                <Canvascard seed =  {2}/>
                <Canvascard seed =  {4}/>
            </div>
          
        </div>
        
        </>
}
