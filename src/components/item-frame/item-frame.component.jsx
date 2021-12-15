import React from "react";
import { connect } from "react-redux";
import { addItem, toItemDetails } from "../../redux/cart/cart.action";
import { withRouter } from 'react-router-dom';
import './item-frame.styles.scss'



const ItemFrame = ({item, addItem, toItemDetails, history, title, url}) => {

const {image , name , author, price, coverType, bookCover} = item;


const bookCoverType = () => {
if (coverType === undefined) {
    return bookCover
}  return coverType
}
const itemTwo = {title: title, item: item, url: url}
const linkUrl = `${name.toLowerCase().replaceAll('.', '-').replaceAll(' ','-')}-${author.toLowerCase().replaceAll(' ', '-')}`

console.log('link:', linkUrl)

return (
    <div className="items-page__frame">
        <div className='items-page__frame--info' onClick={()=> toItemDetails(itemTwo)}  >
                <img className="items-page__frame--info--image"  onClick={() => history.push(`details/${linkUrl}`)} src={image} alt="" />    
                <div className="items-page__frame--info__item-details">
                    <button className="items-page__frame--info__item-details--button" onClick={() => addItem(item)}>Dodaj do koszyka</button>
                    <h3 className="items-page__frame--info__item-details--title">{name}</h3>
                    <p className="items-page__frame--info__item-details--author">{author}</p>
                    <p className="items-page__frame--info__item-details--book-cover">rodzaj okładki: {bookCoverType()}</p>
                    <p className="items-page__frame--info__item-details--price">{price} zł</p>
                </div>
        </div>
    </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => dispatch(addItem(item)),
    toItemDetails: (item) => dispatch(toItemDetails(item))
})

export default withRouter(connect(null, mapDispatchToProps)(ItemFrame));


