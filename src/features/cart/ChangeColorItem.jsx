import {React} from 'react';
import {useDispatch} from 'react-redux';
import {changeColor} from '../products/productsSlice.js';

const ChangeColorItem=(props)=>{
    const dispatch=useDispatch();
    console.log(props.colors);
    const changeColorButtons=props.colors.map((element) => {
        <button onClick={()=>dispatch(changeColor({id:props.id,color:element}))}>{element}</button>
    });

return(
    <>
    <div>
        {changeColorButtons}
    </div>
    
    </>


)

}

export default ChangeColorItem;