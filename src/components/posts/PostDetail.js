export const PostDetail = (props) => {

    // This function fires when the Save button is clicked
    const confirmDelete = () => {

        // Confirm deletion
        userConfirmed = confirm("You are about to delete your post!\nIf you are sure you want to continue, click \"Ok\".");

        if (userConfirmed) {
            // After confirmation, delete from database and redirect to <PostList>
            deletePost()    // pass in props.history.id OR post.id or something?
            props.history.push('/posts')
        }
        else {
            // Pass
        }

    }


    return (
        <div style={{ margin: "0rem 3rem" }}>
            <h1>Post Details</h1>


            <button onClick={() => {
                confirmDelete()
            }}> Delete Post </button>

        </div>
    )
}