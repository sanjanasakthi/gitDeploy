
import './App.css'
const Content1 = (props) =>{

    return(
        <div>
            <h2>What is JavaScript ?</h2>
            <h4>JavaScript is the <b>{props.pl}</b>  for the Web.</h4>
        </div>
    )
}

// export default Content1;

const Content2 = (props)=>{
    return(
        <div>
        <h4>JavaScript can update and change both <b>{props.html}</b> and <b>{props.css}</b>.</h4>

        </div>
    )
}

const Content3 = (props) => {
    return(
        <div>
            <h4 onClick={props.click}>JavaScript can <b className="setColor1">{props.cal}</b>,<b className="setColor2">{props.mal}</b>  and <b className="setColor3">{props.val}</b> data.</h4>
        </div>
    )
}

export  {Content1, Content2, Content3}