import React from "react";
import { withRouter } from 'react-router-dom';

import './categories-preview-item.styles.scss'



const CategoriesPreviewItem = ({title, image, linkUrl, history, match}) =>( 
    <div className="home-page__category-preview__preview-item" onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <img className="home-page__category-preview__preview-item--image" src={image} alt="" />
        <h2 className="home-page__category-preview__preview-item--title">
            {title}
        </h2>
      
        
    </div>
    
)

export default withRouter(CategoriesPreviewItem);
