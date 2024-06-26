import axios from 'axios';
import {
  SERVICE_LIST_REQUEST,
  SERVICE_LIST_SUCCESS,
  SERVICE_LIST_FAIL,
  SERVICE_DETAILS_REQUEST,
  SERVICE_DETAILS_SUCCESS,
  SERVICE_DETAILS_FAIL,
  SERVICE_DELETE_REQUEST,
  SERVICE_DELETE_SUCCESS,
  SERVICE_DELETE_FAIL,
  SERVICE_CREATE_REQUEST,
  SERVICE_CREATE_SUCCESS,
  SERVICE_CREATE_FAIL,
  SERVICE_UPDATE_REQUEST,
  SERVICE_UPDATE_SUCCESS,
  SERVICE_UPDATE_FAIL,
  SERVICE_CREATE_REVIEW_REQUEST,
  SERVICE_CREATE_REVIEW_SUCCESS,
  SERVICE_CREATE_REVIEW_FAIL,
  SERVICE_TOP_REQUEST,
  SERVICE_TOP_SUCCESS,
  SERVICE_TOP_FAIL,
} from '../constants/serviceConstants';

export const listServices =
  (keyword = '', pageNumber = '') =>
  async dispatch => {
    try {
      dispatch({ type: SERVICE_LIST_REQUEST });
      console.log(keyword);

      // const { data } = await axios.get(
      //   `/api/services?keyword=${keyword}&pageNumber=${pageNumber}`
      // );

      dispatch({ type: SERVICE_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: SERVICE_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const listServiceDetails = id => async dispatch => {
  try {
    dispatch({ type: SERVICE_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/services/${id}`);

    dispatch({ type: SERVICE_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: SERVICE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteService = id => async (dispatch, getState) => {
  try {
    dispatch({ type: SERVICE_DELETE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.delete(`/api/services/${id}`, config);

    dispatch({ type: SERVICE_DELETE_SUCCESS });
  } catch (error) {
    dispatch({
      type: SERVICE_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createService = () => async (dispatch, getState) => {
  try {
    dispatch({ type: SERVICE_CREATE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(`/api/services/`, {}, config);

    dispatch({ type: SERVICE_CREATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: SERVICE_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateService = service => async (dispatch, getState) => {
  try {
    dispatch({ type: SERVICE_UPDATE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      `/api/services/${service._id}`,
      service,
      config
    );

    dispatch({ type: SERVICE_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: SERVICE_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

