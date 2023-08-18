const createPostForm = document.getElementById('create-post-form');
const toggleFormButton = document.getElementById('toggle-form-button');
const createPostFormContainer = document.getElementById('create-post-form-container');

if (createPostForm && toggleFormButton && createPostFormContainer) {
    toggleFormButton.addEventListener('click', () => {
        // Toggle the visibility of the form container
        createPostFormContainer.style.display = createPostFormContainer.style.display === 'none' ? 'block' : 'none';
    });

    createPostForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const titleInput = document.querySelector('#title');
        const contentInput = document.querySelector('#content');

        if (titleInput && contentInput) {
            const title = titleInput.value;
            const content = contentInput.value;

            try {
                const response = await fetch('api/posts/create-post', {
                    method: 'POST',
                    body: JSON.stringify({ title, content }),
                    headers: { 'Content-Type': 'application/json' },
                });

                if (response.ok) {
                    window.location.reload();
                } else {
                    console.error('Error creating post:', response.statusText);
                }
            } catch (error) {
                console.error('Error creating post:', error);
            }
        } else {
            console.error('Input elements not found.');
        }
    });
} else {
    console.error('Create post form, toggle button, or form container not found.');
}