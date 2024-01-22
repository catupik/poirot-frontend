import {useSelector, useDispatch} from 'react-redux';
import { getSelectedCategory, filterCategory } from '../../redux/servicesSlice';


const Filter = ({category})=> {
    const dispatch = useDispatch();
    const selectedCategory = useSelector(getSelectedCategory)

    return(
        
           <p onClick={() => {dispatch(filterCategory(category))}} className={selectedCategory === category ? 'selectedCategory' : 'category'}> {category}</p>
       
    )
}
export default Filter;