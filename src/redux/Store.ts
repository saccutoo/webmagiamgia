import TestReducer from "./reducers/Test.Reducers"
import ModalReducer from "./reducers/Modal.Reducers"
import ParamReducer from "./reducers/Param.Reducers"
import MerchantListReducer from "./reducers/MerchantList.Reducers"
import MerchantListDatabaseReducer from "./reducers/MerchantListDatabase.Reducers"
import PromotionReducer from "./reducers/Promotion.Reducers"

import { combineReducers,createStore,applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import logger from "redux-logger";
import rootSaga from '../redux/sagas/RootSaga'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    testReducer: TestReducer,
    modalReducer:ModalReducer,
    paramReducer:ParamReducer,
    merchantListReducer:MerchantListReducer,
    merchantListDatabaseReducer:MerchantListDatabaseReducer,
    PromotionReducer:PromotionReducer
});

//dev
//const store = createStore(rootReducer,applyMiddleware(sagaMiddleware,logger));

//deploy
const store = createStore(rootReducer);

//redux saga
// sagaMiddleware.run(rootSaga)


export default store;

