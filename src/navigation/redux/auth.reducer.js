import {
    SIGN_IN,
    SIGN_OUT,
    RESTORE_TOKEN,
  } from '../../redux/actionTypes';
import AsyncStorage from '@react-native-community/async-storage';

const initialState = {
    isLoading: true,
    isSignout: false,
    userToken: null,
  };

const saveAccessToken = async (token) => {
     await AsyncStorage.setItem("AUTH_TOKEN", token);
};

const removeAccessToken = async () => {
    await AsyncStorage.removeItem("AUTH_TOKEN")
};

const auth = (state = initialState, action = {}) => {
    switch (action.type) {
      case SIGN_IN:
        saveAccessToken(action.data);
        return {
          ...state,
          isSignout: false,
          userToken: action.data,
          isLoading: false,
        };
      case SIGN_OUT:
        removeAccessToken()
        return {
          ...state,
          isSignout: true,
          userToken: null,
          isLoading: false,
        };
        case RESTORE_TOKEN:
            return {
                ...state,
                userToken: action.data,
                isLoading: false,
              };
      default:
        return state;
    }
};
export default auth;