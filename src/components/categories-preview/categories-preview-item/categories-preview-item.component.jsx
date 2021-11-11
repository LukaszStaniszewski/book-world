import React from "react";
import { withRouter } from 'react-router-dom';

import './categories-preview-item.styles.scss'



const CategoriesPreviewItem = ({title, image, linkUrl, history, match}) => {
    console.log('histroy:', match)
    return(
    <div className="home-page__category-preview__preview-item" onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <h1 className="home-page__category-preview__preview-item--title">
            {title}
        </h1>
       <img className="home-page__category-preview__preview-item--image" src={image} alt="" />
        
    </div>
    )
}

export default withRouter(CategoriesPreviewItem);
