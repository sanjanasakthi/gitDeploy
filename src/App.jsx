import {Content1, Content2, Content3} from './Content'
import React, { useState } from 'react'
import SetHandleChange from './Handle';
import './App.css'
function App() {

  const [toggle, setToggle] = useState(false);

  const [content, setContent] = useState({
    
           cal:"Calculate",
          mal:"Manipulate",
          val:"Validate"
      
  });

  const Change = () => {
    setContent(oldtext => {
      return  { ...oldtext,
         cal: "Validate",
         mal:"Calculate",
         val:"Manipulate"
         }      
    });
  }

return(
  <div className="container">
    <div className='setbg'>
    <h1 className="text-center p-2">JavaScript</h1>
    <br/>
    </div><br/>

    <div className='row'>
    <div className='col-sm-6'>
      <Content1 pl='Programing Language' />
      <Content2 html='HTML' css='CSS'/>
      <Content3 
      cal={content.cal}  
      mal={content.val}  
      val={content.mal}  />
       
       <button onClick={Change}>Change</button>
    </div>
    <div className='col-sm-6 setJSBG'>
    <button id='setHov'
            onClick={() => setToggle(!toggle)} 
            className="btn container setbg mt-2  ">
          <h4 className='setColor setHov'> Datetypes of JavaScript </h4>
      </button><br/>
       <div className='row'><br/> <br/>
       <div className='col-sm-2'></div>
                <div className='col-sm-5 '>
                  {toggle && ( <h3 className='text-white '><i className="bi bi-1-circle "></i>String</h3> )}
                  {toggle && ( <h3 className='text-white'><i className="bi bi-2-circle "></i>Number </h3> )}
                  {toggle && ( <h3 className='text-white'><i className="bi bi-3-circle"></i>Bigint</h3> )}
                  {toggle && ( <h3 className='text-white'><i className="bi bi-4-circle"></i>Boolean</h3> )}
                </div>
                <div className='col-sm-5'>
                  {toggle && ( <h3 className='text-white'><i className="bi bi-5-circle"></i>Undefined</h3> )}
                  {toggle && ( <h3 className='text-white'><i className="bi bi-6-circle"></i>Null</h3> )}
                  {toggle && ( <h3 className='text-white'><i className="bi bi-7-circle"></i>Symbol</h3> )}
                  {toggle && ( <h3 className='text-white'><i className="bi bi-8-circle"></i>Object</h3 > )}
                </div>
  

     </div>

    </div>
    </div>
            
            <hr/>
            <div>
              <SetHandleChange/>
            </div>



  </div>
)
}
export default App;
