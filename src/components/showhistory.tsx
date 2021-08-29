import { useLocation } from "react-router-dom";
  
  interface prop {
    list : string[]
}

const Showhistory : React.FC<prop> = ({list}) => {

    return(
        <div>
            <ul>
                { list.map(a => 
                    <li className='text-xl'>{a} THB</li> )} 
            </ul>
    </div>
    )
    
}

export default Showhistory