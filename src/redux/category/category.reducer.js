import { CategoryActionTypes } from "./category.types";

const INITIAL_STATE = {
    
    categories: null
}
// const INITIAL_STATE = {
    
//     categories: {
        
//             fantasy: {
//                 title: 'Fantasy',
//                 id: 1,
//                 image: 'https://i.ibb.co/YZgkV09/fantasy.jpg',
//                 linkUrl: 'fantasy',
//                 items: [
//                     {
//                         id: 1,
//                         name: 'Droga Królów. Archiwum Burzowego Swiatła.',
//                         author: 'Brandon Sanderson',
//                         image: 'https://i.ibb.co/DfhhcXj/Droga-Krolow.jpg',
//                         price: 10
//                     },
//                     {
//                         id: 2,
//                         name: 'Słowa Swiatłości. Archiwum Burzowego Swiatła.',
//                         author: 'Brandon Sanderson',
//                         image: 'https://i.ibb.co/QMgYJHd/Slowa-Swiatlosci.jpg',
//                         price: 10
//                     },
//                     {
//                         id: 3,
//                         name: 'Dawca Przysięgi. Archiwum Burzowego Swiatła. Tom 3. Część 1',
//                         author: 'Brandon Sanderson',
//                         image:'https://i.ibb.co/m42YgSS/Dawca-Przysiegi-cz-1.jpg',
//                         price: 10
//                     },
//                     {
//                         id: 4,
//                         name: 'Dawca Przysięgi. Archiwum Burzowego Swiatła. Tom 3. Część 2',
//                         author: 'Brandon Sanderson',
//                         image:'https://i.ibb.co/jg7wxJq/Dawca-Przysiegi-cz-2.jpg',
//                         price: 10
//                     },  
//                     {
//                         id: 5,
//                         name: 'Rytm Wojny. Archiwum Burzowego Swiatła. Tom 4. Część 1',
//                         author: 'Brandon Sanderson',
//                         image:'https://i.ibb.co/BVzdbQ4/Rytm-Wojny.jpg',
//                         price: 10
//                     },
//                     {
//                         id: 6,
//                         name: 'Rytm Wojny. Archiwum Burzowego Swiatła. Tom 4. Część 2',
//                         author: 'Brandon Sanderson',
//                         image:'https://i.ibb.co/r5YHQJ3/Rytm-Wojny-cz2.jpg',
//                         price: 10
//                     },

//                 ]
//             },
        
        
//             sciencefiction: {
//                 title: 'Science-fiction',
//                 id: 2,
//                 image: 'https://i.ibb.co/FqRQ0xq/science-fiction.jpg',
//                 linkUrl: 'sciencefiction',
//                 items: [
//                     {
//                         id: 10,
//                         name: 'Diuna',
//                         author: 'Frank Herbert',
//                         price: 10, 
//                     },
//                     {
//                         id: 11,
//                         name: 'Dzieci Diuny',
//                         author: 'Frank Herbert',
//                         price: 10, 
//                     },
//                     {
//                         id: 12,
//                         name: 'Mesjasz Diuny',
//                         author: 'Frank Herbert',
//                         price: 10, 
//                     }

//                 ]
//             },
        
            
//            criminal: {
//                 title: 'Kryminał',
//                 id: 3,
//                 image: 'https://i.ibb.co/4W4c64Z/criminal.png',
//                 linkUrl: 'criminal',
//                 items: [
//                     {
//                         id: 21,
//                         name: 'Sherlock Holmes',
//                         author: 'nie wiem',
//                         price: 10,       
//                     }
//                 ]
//             },
        
        
//             romans: {
//                 title: 'Romans',
//                 id: 4,
//                 image: 'https://i.ibb.co/M2xwQZF/romance.jpg',
//                 linkUrl: 'romans',
//                 items: [
//                     {
//                         id: 31,
//                         name: 'Powrót',
//                         author: 'Sparks Nicholas',
//                         price: 10
//                     }
//                 ]
//             },
        
        
        
//             biography: {
//                 title: 'Biografie',
//                 id: 5,
//                 linkUrl: 'biography'
//             },
        
          
        
//             horror: {
//                 title: 'Horror',
//                 id: 6,
//                 image: 'https://i.ibb.co/Bryc7R6/creepy.png',
//                 linkUrl: 'horror'         
//             },     
        
//     },
// }
const categoryReducer = ( state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CategoryActionTypes.UPDATE_CATEGORIES:
            return {
                ...state,
                categories: action.payload,
            };
        default:
           
            return state
    }
}

export default categoryReducer;