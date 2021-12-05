import React from "react";
import './hompage.styles.scss'
import { Route} from 'react-router-dom'

import CategoriesPreview from "../../components/categories-preview/categories-preview.component";
import ItemsPage from "../itemspage/items-page.component";


const HomePage = ({match}) => {
    console.log('match:', match)
    return (
    <section className='home-page'>
        
           
        <Route exact path='/' component={CategoriesPreview}></Route>
        <Route path={`${match.path}:categoryId`} component={ItemsPage}></Route>
            
        
    </section>
    )
}


export default HomePage;