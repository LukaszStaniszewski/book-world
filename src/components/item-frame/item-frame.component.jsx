import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.action";


import './item-frame.styles.scss'


 
const ItemFrame = ({item, addItem}) => {
console.log('item:', item)
const {image , name , author, price} = item;
// const {addItem} = addItems;
// console.log('addItem', addItem)
return (
    <div className="items-page__frame">
        <div className='items-page__frame--info'>
                <img className="items-page__frame--info--image" src={image} alt="" />    
                <div className="items-page__frame--info__item-details">
                    <button className="items-page__frame--info__item-details--button" onClick={() => addItem(item)}>Dodaj do koszyka</button>
                    <h3 className="items-page__frame--info__item-details--title">{name}</h3>
                    <p className="items-page__frame--info__item-details--author">{author}</p>
                    <p className="items-page__frame--info__item-details--book-cover">rodzaj okładki</p>
                    <p className="items-page__frame--info__item-details--price">{price} zł</p>
                </div>
        </div>
    </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(ItemFrame);


