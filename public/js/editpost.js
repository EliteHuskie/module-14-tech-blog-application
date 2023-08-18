// Add an event listener to handle edit post button clicks
document.addEventListener('click', async (event) => {
    if (event.target.matches('.edit-post')) {
        const postId = event.target.getAttribute('data-post-id');
        const cardBody = event.target.closest('.card-body');
        const postContent = cardBody.querySelector('.post-content');
        const editForm = cardBody.querySelector('.edit-form');
        
        // Hide post content and show edit form
        postContent.style.display = 'none';
        editForm.style.display = 'block';

        const editTitleInput = editForm.querySelector('#edit-title');
        const editContentInput = editForm.querySelector('#edit-content');

        // Add event listener to handle form submission
        editForm.addEventListener('submit', async (event) => {
            event.preventDefault();
            
            const updatedTitle = editTitleInput.value;
            const updatedContent = editContentInput.value;

            try {
                const response = await fetch(`/api/update/${postId}`, {
                    method: 'PUT',
                    body: JSON.stringify({ title: updatedTitle, content: updatedContent }),
                    headers: { 'Content-Type': 'application/json' },
                });

                if (response.ok) {
                    // Refresh the page or update the UI as needed
                    window.location.reload();
                } else {
                    console.error('Error updating post:', response.statusText);
                }
            } catch (error) {
                console.error('Error updating post:', error);
            }
        });

        // Add event listener to cancel edit
        const cancelEditButton = editForm.querySelector('.cancel-edit');
        cancelEditButton.addEventListener('click', () => {
            // Show post content and hide edit form
            postContent.style.display = 'block';
            editForm.style.display = 'none';
        });
    }
});