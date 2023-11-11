export const TOGGLE_USER_DETAILS = 'LayoutReducer/TOGGLE_USER_DETAILS';
export const HOME_PAGE_SEARCHBY = 'LayoutReducer/HOME_PAGE_SEARCHBY';

const LayoutReducer = (state: object = {}, action: {type: string, data: any}) => {
    switch (action.type) {
        case TOGGLE_USER_DETAILS:
            return { ...state, openUserModal: action.data };
        case HOME_PAGE_SEARCHBY:
            return { ...state, searchBy: action.data };
        default:
            break;
    }
    return state;
}
export default LayoutReducer;