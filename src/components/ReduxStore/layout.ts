export const TOGGLE_THEME = 'LayoutReducer/TOGGLE_THEME';
export const TOGGLE_SIDENAV = 'LayoutReducer/TOGGLE_SIDENAV';
export const TOGGLE_USER_DETAILS = 'LayoutReducer/TOGGLE_USER_DETAILS';

const LayoutReducer = (state: object = {}, action: {type: string, data: any}) => {
    switch (action.type) {
        case TOGGLE_THEME:
            return { ...state, activeTheme: action.data };
        case TOGGLE_SIDENAV:
            return { ...state, isSideNavOpen: action.data };
        case TOGGLE_USER_DETAILS:
            return { ...state, openUserModal: action.data };
        default:
            break;
    }
    return state;
}
export default LayoutReducer;