import React, { useState } from "react";
import forCard from './assets/images/Question.jpg'
function SetHandleChange() {

    const [name, setName] = useState("")

    const send = () =>{
        alert("We Recived Your question, We will Reach You Soon With the Answer")
    }
//     const [content, deleteContent] = useState({
    
//       cal:"Calculate",
//      mal:"Manipulate",
//      val:"Validate"
 
// });

// const deleteit = (content) => {
//   deleteContent(content.splice((content) => content.cal !== cal));
// };


    function handleChange(e) {
        setName(e.target.value);
        document.getElementById("getValue").innerHTML= name
         }
  return (

   <div >
    <div className="row">
      <div className="col-sm-4">

      </div>
    <div className="col-sm-4">
    <div class="card" id="setWidth" >
  <img class="card-img-top" src={forCard} alt="Card"/>
  <div class="card-body">
  <h3>Type Your questions:</h3>
     <input
      type="text"
      name="firstName"
      onChange={handleChange}
    value={name}
    /><br/>
 <span className="">
    <span id="getValue"></span>
   </span> 
</div>
<button onClick={send}>enter</button>  
   
</div>
    
   
   </div>
   <div className="col-sm-4">

    {/* <div className="row">
        
              <div className="col-sm-4">
              <b className="h1">
                {content.cal}
                </b>
                </div>
                <div className="col-sm-4">
                <b className="h1">
                {content.mal}
                </b>
              </div>
              <div className="col-sm-4">
              <b className="h1"> 
                {content.val}
                </b>
              </div>
    </div> <br/>     
       <button onClick={deleteit}>Delete</button> */}
    </div>
    </div>

   </div>
  );
}

export default SetHandleChange;