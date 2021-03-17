import { useDispatch } from 'react-redux';

import http from '../../utils/axios';

// 获取用户详情
function useGetUser() {
  let dispatch = useDispatch();
  return async (username) => {
    dispatch({
      type: 'USER_LOADING',
    });
    try {
      const res = await http.get(`/user/${username}`);
      dispatch({
        type: 'USER_SUCCESS',
        data: res.data.data,
      });
    } catch (err) {}
  };
}

export { useGetUser };
