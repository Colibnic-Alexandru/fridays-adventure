import {applyMiddleware, combineReducers, createStore} from "redux";
import {LoginReducer} from "../reducers/login-reducer";
import {RegistrationReducer} from "../reducers/registration-reducer";
import {ProfileReducer} from "../reducers/profile-reducer";
import {Error404Reducer} from "../reducers/error404-reducer";
import {RecoverPassReducer} from "../reducers/recoverPass-reducer";
import {EnterNewPassReducer} from "../reducers/enterNewPass-reducer";
import {TestReducer} from "../reducers/test-reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    login: LoginReducer,
    register: RegistrationReducer,
    profile: ProfileReducer,
    error404: Error404Reducer,
    recovery: RecoverPassReducer,
    enterNewPass: EnterNewPassReducer,
    test: TestReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;