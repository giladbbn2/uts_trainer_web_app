import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserData } from "../services/userService";

export const UserPage = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState(null);

    const fetchUserData = async () => {
        try {
            const data = await getUserData();
            setUserData(data);
        } catch (error) {
            // possible errors: network problems, user is not logged in
            navigate("/login");
        }
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    return (
        <div>
            <h1>User Page</h1>
            <div>{JSON.stringify(userData)}</div>
        </div>
    );
};