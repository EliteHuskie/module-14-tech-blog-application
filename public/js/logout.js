const logout = async () => {
    try {
        const response = await fetch('/api/users/logout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            window.location.href = '/';
        } else {
            const errorMessage = 'Logout failed. Please try again later.';
        }
    } catch (error) {
        console.error('Logout error:', error);
    }
};

document.querySelector('#logout').addEventListener('click', logout);