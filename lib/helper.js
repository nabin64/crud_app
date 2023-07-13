const BASE_URL = "http://localhost:3000"
// returns all users
export const getUsers = async () => {

    const response = await fetch(`${BASE_URL}/api/users`)
    const data = await response.json()
    return data;

}

// returns single user
export const getUser = async (userId) => {
    const response = await fetch(`${BASE_URL}/api/users/${userId}`)
    const data = await response.json()
    if (data) return data;
    return {};
}

// posting a new user

export async function addUser(formData) {
    try {
        const Options = {
            method: 'POST',
            headers: { 'Content-Type': "application/json" },
            body: JSON.stringify(formData)

        }
        const response = await fetch(`${BASE_URL}/api/users`, Options)
        const data = await response.json()
        return data;
    } catch (error) {
        return error;
    }
}

// Updating a  User 
export async function updateUser(userId, formData) {
    try {
        const Options = {
            method: 'PUT',
            headers: { 'Content-Type': "application/json" },
            body: JSON.stringify(formData)

        }
        const response = await fetch(`${BASE_URL}/api/users/${userId}`, Options)
        const data = await response.json()
        return data;
    } catch (error) {
        return error;
    }
}

// Delete a user

export async function deleteUser(userId) {
    try {
        const Options = {
            method: 'DELETE',
            headers: { 'Content-Type': "application/json" },


        }
        const response = await fetch(`${BASE_URL}/api/users/${userId}`, Options)
        const data = await response.json()
        return data;
    } catch (error) {
        return error;
    }

}