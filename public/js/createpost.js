const createPostForm = document.getElementById('create-post-form');

if (createPostForm) { 
    createPostForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const titleInput = document.querySelector('#title');
        const contentInput = document.querySelector('#content');

        if (titleInput && contentInput) { 
            const title = titleInput.value;
            const content = contentInput.value;

            try {
                const response = await fetch('/create-post', {
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
    console.error('Create post form not found.');
}