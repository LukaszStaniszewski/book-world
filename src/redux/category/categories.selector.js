import { createSelector } from 'reselect'

const selectCategory = (state) => state.category;

export const selectCategories = createSelector (
    [selectCategory],
    category => category.categories
)

// const tyringhard = fantasy => {createSelector (
//     [selectCategories],
//     categories => categories[fantasy]
// )
// }
export const selectCollectionsForPreview = createSelector(
    [selectCategories],
    categories => Object.keys(categories).map(key => categories[key])

)

export const selectCollection = categoryUrlParam => {
    
    console.log('categoryUrlParam', categoryUrlParam)
    return(
    createSelector(
        [selectCategories],
        categories => categories[categoryUrlParam]            
    )
    )
}

