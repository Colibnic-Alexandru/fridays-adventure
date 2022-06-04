import {NavLink, Route, Routes} from "react-router-dom";

export const PATH = {
    LOGIN: '/login',
    REGISTRATION: '/registration',
    RECOVERY_PASSWORD: '/recoveryPassword',
    NEW_PASSWORD: '/newPassword',
    PROFILE: '/profile',
    TEST: '/test',
}

export const RoutesPage = () => {
    return (
        <div>
            <NavLink to={ PATH.LOGIN }>Login</NavLink>-----
            <NavLink to={ PATH.REGISTRATION }>Registration</NavLink>-----
            <NavLink to={ PATH.RECOVERY_PASSWORD }>Recovery password</NavLink>-----
            <NavLink to={ PATH.NEW_PASSWORD }>New password</NavLink>-----
            <NavLink to={ PATH.PROFILE }>Profile</NavLink>-----
            <NavLink to={ PATH.TEST }>Test</NavLink>-----

            <Routes>
                <Route path={PATH.LOGIN} element={<div>Login</div>}/>
                <Route path={PATH.REGISTRATION} element={<div>Registration</div>}/>
                <Route path={PATH.RECOVERY_PASSWORD} element={<div>Recovery password</div>}/>
                <Route path={PATH.NEW_PASSWORD} element={<div>New password</div>}/>
                <Route path={PATH.PROFILE} element={<div>Profile</div>}/>
                <Route path={PATH.TEST} element={<div>Test</div>}/>
            </Routes>
        </div>
    )
}