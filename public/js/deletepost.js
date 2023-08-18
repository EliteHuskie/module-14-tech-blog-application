const deleteButtons = document.querySelectorAll('.delete-post');

if (deleteButtons) {
    deleteButtons.forEach((button) => {
            button.addEventListener('click', async (event) => {
                event.preventDefault();

                const postId = button.getAttribute('data-post-id');

                try {
                    const response = await fetch(`/api/posts/${postId}`, {
                        method: 'DELETE',
                        headers: { 'Content-Type': 'application/json' },
                    });

                    if (response.ok) {
                        window.location.reload();
                    } else {
                        console.error('Error deleting post:', response.statusText);
                    }
                } catch (error) {
                    console.error('Error deleting post:', error);
                }
            });
        });
}