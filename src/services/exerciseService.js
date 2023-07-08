import { isUserLoggedIn } from "./userService";

let userExercises = [];

export const getUserExercises = async () => {
    // mock

    // fetch exercises for the logged in user

    if (!isUserLoggedIn()) {
        return Promise.reject();
    }

    return new Promise((res, rej) => {
        setTimeout(() => {
            if (userExercises.length === 0) {
                userExercises = [{
                    id: "dd6fbc40c0fcdaf693b18d905b8cb0c5",
                    title: "exercise title 1",
                    description: "exercise 1 will help you orient yourself with ultrasound",
                    isCompleted: true
                }, {
                    id: "188746b757a0d6dd141412016117919b",
                    title: "exercise title 2",
                    description: "exercise 2 will help you orient yourself with ultrasound",
                    isCompleted: false
                }, {
                    id: "06fd70cf72bc57e56a3561202c1fc509",
                    title: "exercise title 3",
                    description: "this exercise is the thoughest one you'll encouter!",
                    isCompleted: false
                }];
            }

            res(userExercises);
        }, 250);
    });
};

export const submitExerciseAnswer = async (exerciseId, answers) => {
    // mock

    // send answers to server and get back feedback if the answers were correct or not

    if (!isUserLoggedIn()) {
        return Promise.reject();
    }

    let isFound = false;
    let exerciseArrId = 0;
    for (let i = 0; i < userExercises.length; i++) {
        if (userExercises[i].id === exerciseId) {
            isFound = true;
            exerciseArrId = i;
            break;
        }
    }

    if (!isFound) {
        return Promise.reject("exercise id not found");
    }

    if (userExercises[exerciseArrId].isCompleted) {
        return Promise.reject("user already answered this exercise");
    }

    return new Promise((res, rej) => {
        setTimeout(() => {
            if (Math.random() < 0.5) {
                // answered correctly

                userExercises[exerciseArrId].isCompleted = true;

                res(true);
            } else {
                // answered incorrectly

                res(false);
            }
        }, 250);
    });
};