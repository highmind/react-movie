import { compose, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/reducers'  //导入合并的reducer

export default function configureStore(initialState) {
  //启动redux devtools 工具
  const enhancers = compose(
      window.devToolsExtension ? window.devToolsExtension() : f => f
  );

  const store = createStore(rootReducer, initialState, enhancers);

  if(module.hot) {
    module.hot.accept('./reducers/',() => {
      const nextRootReducer = require('./reducers/index').default;
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
