"use server";

import {registerService} from "@/services/registerService";

export default async function signupAction(currentState) {
    const newUser = {
        firstname: currentState.firstname,
        lastname: currentState.lastname,
        gender: currentState.gender,
        email: currentState.email,
        password: currentState.password
    };
    console.log("test:", newUser)
    await registerService(newUser);
}