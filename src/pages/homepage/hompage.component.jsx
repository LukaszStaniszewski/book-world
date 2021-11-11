import React from "react";
import './hompage.styles.scss'

import CategoriesPreview from "../../components/categories-preview/categories-preview.component";


const HomePage = () => {
    
    return (
    <section className='home-page'>
        <CategoriesPreview></CategoriesPreview>
    </section>
    )
}


export default HomePage;