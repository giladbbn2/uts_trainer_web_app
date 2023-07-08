
import { fetchUserExercises } from "./exerciseService";

let userData = null;

export const loginEmail = async (email, password) => {
    // mock

    let isLogin = false;

    if (email === "giladbbn2@gmail.com" && password === "123456") {
        isLogin = true;
    }

    deleteLocalSession();

    return new Promise((res, rej) => {
        setTimeout(() => {
            if (isLogin) {
                userData = {
                    id: "85456d7368eb3db759523198791be025",
                    firstName: "Gilad",
                    lastName: "Babin"
                };

                res(true);
            } else {
                res(false);
            }
        }, 200);
    });
}

export const logout = async () => {
    // mock

    deleteLocalSession();

    return new Promise((res, rej) => {
        setTimeout(() => {
            res(true);
        }, 200);
    });
};

const deleteLocalSession = () => {
    userData = null;
};

export const getUserData = async () => {
    // mock
    
    if (!isUserLoggedIn()) {
        return Promise.reject();
    }

    return new Promise((res, rej) => {
        setTimeout(() => {
            res(userData);
        }, 250);
    }); 
};

export const isUserLoggedIn = () => {
    // mock

    return userData != null;
};