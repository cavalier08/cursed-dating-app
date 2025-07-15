
const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export async function fetchFromDjango(endpoint: string) {
    const response = await fetch(`${BASE_URL}/${endpoint}/`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    });
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    console.log("hello");
    return response.json();
}

export async function postToDjango(endpoint: string, body: {}) {
    const response = await fetch(`${BASE_URL}/${endpoint}/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
    });
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    return response.json();
    // testing branch shenanigans
}