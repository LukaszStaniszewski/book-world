import { useEffect, useState, Fragment } from "react"
import { connect } from "react-redux"
import { useParams } from "react-router-dom"

import { selectCollectionsForPreview } from "../../redux/category/categories.selector"
import ItemDetailsPage from "../itemdetails/item-details-page.component"

const itemDefault = {
    item: {},
    url: "",
    title: "",
}

const ItemDetailsPreview = ({categories}) => {
    const {linkUrl} = useParams()
    const [item, setItem] = useState(itemDefault)
  
    useEffect(() => {
       setItem(findItem)
    }, [ categories, linkUrl])

    const findItem = () => {
        const correctItem = categories.map(category => {
            return {item: category.items.find(value => value.linkUrl === linkUrl ), title: category.title, url: category.linkUrl}
               
         })
         return correctItem.filter(value => value.item !== undefined)[0]
    }
    return(
        <Fragment>
            <ItemDetailsPage item={item}/>
        </Fragment>
    )
}

const mapStateToProps = (state) => ({   
    categories: selectCollectionsForPreview(state)  
})


export default connect(mapStateToProps)(ItemDetailsPreview)