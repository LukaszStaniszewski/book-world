import { createSelector } from 'reselect'

const selectCategory = (state) => state.category;

export const selectCategories = createSelector (
    [selectCategory],
    category => category.categories
)

export const selectCollectionsForPreview = createSelector(
    [selectCategories],
    categories => categories ? Object.keys(categories).map(key => categories[key]) : []

)

export const selectNameAndAuthor = createSelector(
    [selectCollectionsForPreview],
    categories => categories.map(({id, items}) => (items))
)
