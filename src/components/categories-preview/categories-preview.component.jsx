import React from "react";
import { connect } from "react-redux";
import './categories-preview.styles.scss';
import { selectCollectionsForPreview} from '../../redux/category/categories.selector'
import CategoriesPreviewItem from "./categories-preview-item/categories-preview-item.component";

const CategoriesPreview = ({category}) => {
    
    return (
    <div className ='home-page__category-preview'>
        {
            category.map(({id, ...otherProps}) => (
                <CategoriesPreviewItem key={id} {...otherProps}></CategoriesPreviewItem>
            ))
        }
    </div>
    )
} 


const mapStateToProps = (state) => ({
    category: selectCollectionsForPreview (state)
})

export default connect(mapStateToProps)(CategoriesPreview)
