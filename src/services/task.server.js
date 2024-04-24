//get token from cookies


import {getToken} from "@/app/(auth)/api/getToken";

export const getAllTaskService = async () => {
    const header = await getToken();
    const res = await fetch("http://110.74.194.123:8989/api/todo/v1/tasks", {
        headers: header
    });
    if (!res.ok) {
        console.error(`HTTP error! status: ${res.status}`);
        return;
    }
    try {
        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Failed to parse JSON:', error);
    }
}