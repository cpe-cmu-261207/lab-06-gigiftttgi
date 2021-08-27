import { Curprice } from "../Hook/currentprice"



const CurTem = () => {
  
  const {curprice,curtime,selected, setSelected} = Curprice()
  
  return(

    <div className='text-center space-y-3'>
    <p className='text-2xl font-semibold'>Current price</p>

    {curprice === null ? <p className='text-2xl'>Loading ...</p> : 
    <p className='text-2xl'> {curprice} THB</p> }
    
    {curprice === null ? <p></p>: 
    <p> (Last updated {curtime}) </p> }

  </div>
  )
}

export default CurTem