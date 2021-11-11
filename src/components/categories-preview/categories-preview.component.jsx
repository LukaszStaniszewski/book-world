import React from "react";
import { connect } from "react-redux";
import './categories-preview.styles.scss';
import { selectCategories } from '../../redux/category/categories.selector'
import CategoriesPreviewItem from "./categories-preview-item/categories-preview-item.component";

const CategoriesPreview = ({category}) => {
    console.log('category:', category)
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
    category: selectCategories(state)
})

export default connect(mapStateToProps)(CategoriesPreview)
