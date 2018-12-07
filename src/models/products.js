export default {
  namespace: 'products',
  state: {
    productsList: [
      { name: 'dva', id: 1 ,uniqueKey:1},
      { name: 'antd', id: 2 ,uniqueKey:2},
    ],
  },
  reducers: {
    delete(state, { payload: id }) {
      return {
        ...state,
				productsList:state.productsList.filter(item => item.id !== id)
      }
    },
  },
};