import {React} from 'react';
import {useDispatch} from 'react-redux';
import {changeColor} from '../products/productsSlice.js';
import './style.css'

const ChangeColorItem=(props)=>{
    const dispatch=useDispatch();
    
    const changeColorButtons=props.variantsColor.map((element,index) =>{
    if(element==props.selectedColor)
        return <button className='colorSelected' key={index} onClick={()=>dispatch(changeColor({id:props.id,color:element}))}>{element}</button>;
    return <button key={index} onClick={()=>dispatch(changeColor({id:props.id,color:element}))}>{element}</button>;
})

return(
    <>
    <div>
        {changeColorButtons}
    </div>
    
    </>


)

}

export default ChangeColorItem;