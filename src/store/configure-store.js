import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import rootReducer from '../reducer';
import { navigationMiddleware } from '../utils/redux-navigation';

const persistConfig = {
    storage,
    key: 'root',
    stateReconciler: autoMergeLevel2,
    whitelist: ['app'],
};

let enhacers;

// eslint-disable-next-line
if (__DEV__ === true) {
    enhacers = applyMiddleware(
        thunk,
        navigationMiddleware,
        createLogger({ collapsed: true }),
    );
} else {
    enhacers = applyMiddleware(
        thunk,
        navigationMiddleware,
        createLogger({ collapsed: true }),
    );
}

export default function configureStore() {
    const store = createStore(
        persistReducer(persistConfig, rootReducer),
        undefined,
        enhacers,
    );
    const persistor = persistStore(store);
    return { store, persistor };
}