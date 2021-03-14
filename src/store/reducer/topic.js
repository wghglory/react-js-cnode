function topic(
  topic = {
    loading: true,
    data: {},
  },
  action,
) {
  switch (action.type) {
    case 'TOPIC_LOAD': // 当前正在请求数据
      return {
        loading: true,
        data: {},
      };
    case 'TOPIC_GET': // 获取到数据
      return {
        loading: false,
        data: action.data,
      };
    default:
      return {
        ...topic,
        loading: false,
      };
  }
}

export default topic;
