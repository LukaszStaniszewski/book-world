import { createSelector } from 'reselect'

const selectCategory = (state) => state.category;

export const selectCategories = createSelector (
    [selectCategory],
    category => category.categories
)

export const selectCollectionsForPreview = createSelector(
    [selectCategories],
    categories => Object.keys(categories).map(key => categories[key])
)

