const sendRequest = async (url, method, data) => {
    try {
        const response = await fetch(url, {
            method,
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' },
        });

        if (!response.ok) {
            throw new Error(`Request failed with status: ${response.status}`);
        }

        return response;
    } catch (error) {
        console.error('Request error:', error);
        throw error;
    }
};

const loginFormHandler = async (event) => {
    event.preventDefault();
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
        try {
            await sendRequest('/api/users/login', 'POST', { email, password });
            document.location.replace('/');
        } catch (error) {
            const errorMessage = 'Login failed. Please check your credentials.';
            alert(errorMessage); // Display the error message
        }
    }
};

const signupFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const confirmP = document.querySelector('#confirm-password').value.trim();

    if (name && email && password && confirmP) {
        if (password === confirmP) {
            try {
                await sendRequest('/api/users', 'POST', { name, email, password });
                document.location.replace('/');
            } catch (error) {
                const errorMessage = 'Signup failed. Please try again later.';
                alert(errorMessage); // Display the error message
            }
        } else {     
            const errorMessage = 'Password and confirm password do not match.';
            alert(errorMessage); // Display the error message
        }
    }
};

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);