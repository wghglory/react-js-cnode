export function user(
  user = {
    loading: true,
    data: {},
  },
  action,
) {
  switch (action.type) {
    case 'USER_LOADING':
      return {
        loading: true,
        data: {},
      };
    case 'USER_SUCCESS':
      return {
        loading: false,
        data: action.data,
      };
    default:
      return user;
  }
}
