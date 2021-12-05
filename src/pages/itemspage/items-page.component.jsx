import React from "react";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/category/categories.selector";

import './items-page.styles.scss'
import ItemFrame from "../../components/item-frame/item-frame.component";

const ItemsPage = ({match, category}) => {
    console.log('category-itemsPage', category)
    console.log('Items page match:', match)
    console.log('CategoryId:', match.params.collectionId);
    const {items} = category
    return(
        <section className='items-page'>
            <div className= 'items-page--title'>
                {category.title}
            </div>
           
                
                
                    {
                        items.map((item) =>(
                           <ItemFrame key={item.id} item={item}></ItemFrame> 
                        ))
                    }
                    
            
          
        </section>
    )
  
}

const mapStateToProps = (state, ownProps) => ({   
    category: selectCollection(ownProps.match.params.categoryId)(state)  
})

export default connect(mapStateToProps)(ItemsPage);