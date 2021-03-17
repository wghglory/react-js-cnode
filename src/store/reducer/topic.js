export function topic(
  topic = {
    loading: true,
    data: {},
    errorMsg: '',
  },
  action,
) {
  switch (action.type) {
    case 'TOPIC_LOAD': // 当前正在请求数据
      return {
        loading: true,
        data: {},
        errorMsg: '',
      };
    case 'TOPIC_GET': // 获取到数据
      return {
        loading: false,
        data: action.data,
        errorMsg: '',
      };
    case 'TOPIC_ERROR': // ERROR
      return {
        loading: false,
        data: {},
        errorMsg: action.errorMsg,
      };
    default:
      return {
        ...topic,
        loading: false,
      };
  }
}
