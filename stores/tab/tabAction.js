export const SELECT_SELECTED_TAB ='SELECT_SELECTED_TAB'

export const setSelectedTabSuccess = (selectedTab) => ({
    type: SELECT_SELECTED_TAB,
    payload: {selectedTab}

})


export function setSelectedTab(selectedTab) {
    return dispatch => {
        dispatch(setSelectedTabSuccess(selectedTab))
    }
}