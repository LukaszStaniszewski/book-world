import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addItem} from "../../redux/cart/cart.action";
import './item-frame.styles.scss'


const ItemFrame = ({item, addItem}) => {

const {image , name , author, price, coverType, bookCover, linkUrl} = item;

const bookCoverType = () => {
if (coverType === undefined) {
    return bookCover
}  return coverType
}

return (
    <div className="items-page__frame">
        <div className='items-page__frame--info' >
                <Link className="items-page__frame--info--image"  style={{backgroundImage: `url(${image})`}}  to = {`/shop/details/${linkUrl}`} src={image} alt={name} />    
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
})

export default connect(null, mapDispatchToProps)(ItemFrame);


