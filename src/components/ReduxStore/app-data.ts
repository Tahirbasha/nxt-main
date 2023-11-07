
export const SAVED_VIDEOS = 'AppData/SAVED_VIDEOS';
export const AppData = (state: Object = {}, action:{type: string, data: any}) => {
    switch (action.type) {
        case SAVED_VIDEOS:
            return {...state, savedVideos: action.data};
        default:
            break;
    }
    return state;
}