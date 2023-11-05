
export const HOMEPAGE_RESPONSE = 'AppData/HOMEPAGE_RESPONSE';
export const AppData = (state: Object = {}, action:{type: string, data: any}) => {
    switch (action.type) {
        case HOMEPAGE_RESPONSE:
            return {...state, homePageData: action.data};
        default:
            break;
    }
    return state;
}