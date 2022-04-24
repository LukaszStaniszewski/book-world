import {useState, useEffect} from "react"
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { selectCategories } from "../../redux/category/categories.selector";

import './items-page.styles.scss'
import ItemFrame from "../../components/item-frame/item-frame.component";

const ItemsPage = ({categories}) => {
    const {category} = useParams()
    const [products, setProducts] = useState(categories[category])
    
    useEffect(() => {
        setProducts(categories[category])
    }, [category, categories])
    
    return(
        <section className='items-page'>
            <div className= 'items-page--title'>
                
            </div>
                {
                    products.items.map(item =>
                        <ItemFrame key={item.id} item={item}/>
                    )
                }
        </section>
    )
  
}

const mapStateToProps = (state) => ({   
    categories: selectCategories(state)  
})

export default connect(mapStateToProps)(ItemsPage);