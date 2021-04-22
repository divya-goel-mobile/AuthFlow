import {
    SIGN_IN,
    SIGN_OUT,
    RESTORE_TOKEN
  } from '../../redux/actionTypes';
  
  export const authAction = (type, data) => (dispatch) => {
    switch (type) {
      case SIGN_IN:
        dispatch({type: SIGN_IN, data: data});
        break;
      case SIGN_OUT:
        dispatch({type: SIGN_OUT, token: null});
        break;
      case RESTORE_TOKEN:
        dispatch({type: RESTORE_TOKEN, data: data});
        break;
    }
  };
  