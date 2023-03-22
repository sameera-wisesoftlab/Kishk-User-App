import * as ActionTypes from '../actions/types'
import { restProfileLoyaltyMealsDetailsMapper } from '../lib/helperMethods'


const defaultSupportChatState = {
    isLoading: false,
    resetNavigation: undefined,
    isLoading: false,
    error: undefined,
    selectedLanguage: null,
    supportchatsendsuccessmsg: ''
};

export default function supportChatReducer(state = defaultSupportChatState, action) {
    switch (action.type) {
        case ActionTypes.SUPPORT_CHAT_SERVICE_LOADING:
            return Object.assign({}, state, {
                isLoading: true,
            });
        case ActionTypes.SUPPORT_CHAT_SERVICE_SUCCESS:
            return Object.assign({}, state, {
                
                pullRefresh: action.responseData.success,
                supportchatsendsuccessmsg: action.responseData,
                isLoading: false,
            });
        case ActionTypes.SUPPORT_CHAT_SERVICE_ERROR:
            return Object.assign({}, state, {
                isLoading: false,
                error: action.error
            });
        case ActionTypes.CLEAR_SUPPORT_CHAT_MSG:
            return Object.assign({}, state, {
                isLoading: false,
                resetNavigation: undefined,
                supportchatsendsuccessmsg: '',
                isLoading: false,
                error: undefined,
                selectedLanguage: null,
                
            });
        case ActionTypes.LOGOUT_SUCCESS:
            return {
                ...state,
                isLoading: false,
    resetNavigation: undefined,
    isLoading: false,
    error: undefined,
    selectedLanguage: null,
    supportchatsendsuccessmsg: ''
            };
        default:
            return state;
    }
}
