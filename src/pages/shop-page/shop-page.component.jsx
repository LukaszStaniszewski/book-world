import { Routes, Route } from "react-router-dom"
import ItemsPage from "../itemspage/items-page.component"
import ItemDetailsPreview from "../item-details-preview/item-details-preview.component"

const Shop = () => {
  return (
        <Routes>
            <Route path=":category" element={<ItemsPage/>}/>
            <Route path="details/:linkUrl" element={<ItemDetailsPreview/>}/>
        </Routes>
  )
}

export default Shop