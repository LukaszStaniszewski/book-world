import { useNavigate} from 'react-router-dom';
import './categories-preview-item.styles.scss'

const CategoriesPreviewItem = ({title, image, linkUrl}) => {
   const navigate = useNavigate()
   const routerHanlder = () => navigate(`/shop/${linkUrl}`)
   return (
        <div className="home-page__category-preview__preview-item" onClick={routerHanlder}>

            <img className="home-page__category-preview__preview-item--image" src={image} alt={title} />
            <h2 className="home-page__category-preview__preview-item--title">
                {title}
            </h2>

        </div>
    )  
}


export default CategoriesPreviewItem;
