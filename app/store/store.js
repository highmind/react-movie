import { compose, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/reducers'  //导入合并的reducer

export default function configureStore(initialState) {
  //启动redux devtools 工具
  let enhancers;  //定义一个全局变量，
  //当node环境变量为生成环境时,不引入redutx devtools工具
  if(process.env.NODE_ENV == 'production'){
    enhancers = compose(f=>f);
  }else{
    enhancers = compose(
        window.devToolsExtension ? window.devToolsExtension() : f => f
    );

  }
  console.log(process.env.NODE_ENV)
  console.log(enhancers);
  const store = createStore(rootReducer, initialState, enhancers);

  if(module.hot) {
    module.hot.accept('./reducers/',() => {
      const nextRootReducer = require('./reducers/index').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
