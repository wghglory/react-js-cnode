import { useDispatch } from 'react-redux';

import http from '../../utils/axios';

function useGetTopics() {
  const dispatch = useDispatch();

  return (page = 1, tab = 'all') => {
    dispatch({
      type: 'TOPICS_LOAD',
    });
    http.get(`/topics?page=${page}&tab=${tab}&limit=20`).then((res) => {
      dispatch({
        type: 'TOPICS_GET',
        data: res.data.data,
      });
    });
  };
}

function useGetTopic() {
  const dispatch = useDispatch();

  return async (id) => {
    dispatch({
      type: 'TOPIC_LOAD',
    });

    try {
      const res = await http.get(`/topic/${id}`);
      dispatch({
        type: 'TOPIC_GET',
        data: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: 'TOPIC_ERROR',
        errorMsg: err.response.data.error_msg,
      });
    }
  };
}

export { useGetTopics, useGetTopic };
