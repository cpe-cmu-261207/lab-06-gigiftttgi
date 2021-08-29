import { useLocation } from "react-router-dom";
  
  interface prop {
    list : string[]
}
  
const Showhistory : React.FC<prop> = ({list}) => {
 
    function useQuery() {
      return new URLSearchParams(useLocation().search);
    }
  let query = useQuery();
    
  return(
        <div>
            <p className='text-xl font-semibold'> ( From {query.get("start")} To {query.get("end")})</p>
            <ul>
                { list.map(a => 
                    <li className='text-xl'>{a}</li> )} 
            </ul>
    </div>
    )
    
}

export default Showhistory