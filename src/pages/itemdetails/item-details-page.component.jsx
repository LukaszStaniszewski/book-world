import React from "react";
import { connect } from "react-redux";
import './item-details-page.styles.scss'
import { Link} from 'react-router-dom'
import { selectCurrentItem } from "../../redux/cart/cart.selector";
import { addItem } from "../../redux/cart/cart.action";
import ItemOverview from "../../components/item-overview/item-overview.component";


const ItemDetailsPage = ({oneItem, addItem}) => {
    console.log('ItemDetailsPage;' , oneItem)
    const {name, author, image, price, coverType, series, pages} = oneItem;
    // const {linkUrl} = oneItem
    return (
        <section className='item-details-page'>
            
            <div className='item-details-page__links'>
                <Link to='/'>Sklep book-world</Link>
                <span> / </span>
                <Link to='/'>Fantastyka</Link>
            </div>
            
            <div className = 'item-details-page__main'>
                <div className='item-details-page__main__img-container'>
                  <img className='item-details-page__main__img-container--image' 
                  src={image} alt="" />  
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
                            <button className="item-details-page__right__book-price__frame--button" onClick={() => addItem(oneItem)}>Dodaj do koszyka</button>
                            
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
    oneItem: selectCurrentItem(state)
})

const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => dispatch(addItem(item)) 
})

export default  connect(mapStateToProps, mapDispatchToProps)(ItemDetailsPage)