import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserExercises } from "../services/exerciseService";

export const UserExercisesPage = () => {
    const navigate = useNavigate();
    const [userExercises, setUserExercises] = useState([]);

    const fetchUserExercises = async () => {
        try {
            const data = await getUserExercises();
            setUserExercises(data);
        } catch (error) {
            // possible errors: network problems, user is not logged in
            navigate("/login");
        }
    };

    useEffect(() => {
        fetchUserExercises();
    }, []);

    return (
        <div>
            <h1>User Exercises</h1>
            <div>{JSON.stringify(userExercises)}</div>
        </div>
    );
};