import React from "react";
import { connect } from "react-redux";
import './item-details-page.styles.scss'
import { Link} from 'react-router-dom'
import { selectCurrentItem, selectHiddenStatusOfImage } from "../../redux/cart/cart.selector";
import { addItem, toggleHiddenImage } from "../../redux/cart/cart.action";


const ItemDetailsPage = ({oneItem, addItem, hiddenImage, toggleHiddenImage}) => {

    const {name, author, image, price, coverType, series, pages} = oneItem.item;
    
    return (
        <section className='item-details-page'>
            
            <div className='item-details-page__links'>
                <Link to='/'>Sklep book-world</Link>
                <span> / </span>
                <Link to={`/${oneItem.url}`}>{oneItem.title}</Link>
            </div>
            
            <div className = {hiddenImage ? 'item-details-page__main hidden-active' : 'item-details-page__main'}>
                <div className='item-details-page__main__img-container' onClick={toggleHiddenImage}>
                  <img className='item-details-page__main__img-container--image'
                  src={image} alt=""  />  
                </div>
                <div className='item-details-page__main__info'>
                   <div className= 'item-details-page__main__info--title'>{name}</div>
                    <div className= 'item-details-page__main__info--author '><span>Autor:</span> <span>{author}</span></div> 
                    <div className= 'item-details-page__main__info--series '><span>Seria:</span> <span>{series}</span></div> 
                    <div className= 'item-details-page__main__info--pages' ><span>Liczba Stron:</span> <span>{pages}</span></div> 
                </div>
            </div>
            
            <div className='item-details-page__right'>
                <div className='item-details-page__right__book-price'>
                        <div className='item-details-page__right__book-price--cover-type'>
                            okładka {coverType}
                        </div>
                        <div  className='item-details-page__right__book-price__frame'>
                            <div className="item-details-page__right__book-price__frame--price">
                                    {price} zł
                            </div>
                            <span className='item-details-page__right__book-price__frame--span-1'>Odbiór w salonie: 0zł</span>
                            <span className='item-details-page__right__book-price__frame--span-2'>Darmowa dostawa od 40zł</span>
                            <span className='item-details-page__right__book-price__frame--span-3'>Wysyłamy w 24 godziny</span>
                            <button className="item-details-page__right__book-price__frame--button" onClick={() => addItem(oneItem.item)}>Dodaj do koszyka</button>
                            
                        </div>
                </div>

            </div>
            
            <div className='item-details-page__description'>
                <h3>Opis</h3>
                <p>Lorem ipsum dolor sit amet.</p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, doloremque quo tempora sed ex molestias dolores cum, ad in eligendi atque incidunt consequuntur, velit animi porro error dolore laborum! Corporis.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, labore harum. Omnis illum expedita fugiat. Consequatur voluptatem modi temporibus velit, nam reiciendis delectus? Voluptas facilis nostrum est incidunt quasi aliquam!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis eligendi iste est accusamus saepe voluptatum, similique laborum placeat, odio inventore facilis, accusantium distinctio tempora? Eos adipisci voluptate laudantium tempore rerum!
            </div>
                  
        </section>
    )
}

const mapStateToProps = (state) => ({
    hiddenImage:  selectHiddenStatusOfImage(state),
    oneItem: selectCurrentItem(state)
})

const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => dispatch(addItem(item)), 
    toggleHiddenImage: () => dispatch(toggleHiddenImage())
})

export default  connect(mapStateToProps, mapDispatchToProps)(ItemDetailsPage)