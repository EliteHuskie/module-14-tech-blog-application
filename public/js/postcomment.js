const commentForm = document.querySelector('.login-form');

if (commentForm) {
    commentForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const commentInput = document.querySelector('#comment');
        const comment = commentInput.value;

        try {
            const response = await fetch('/api/comments/create-comment', {
                method: 'POST',
                body: JSON.stringify({ comment }),
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.ok) {
                window.location.reload();
            } else {
                console.error('Error creating comment:', response.statusText);
            }
        } catch (error) {
            console.error('Error creating comment:', error);
        }
    });
}