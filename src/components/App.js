import video from "../data/video.js";
import {useState} from "react"
import Detail from "./Detail.js";
function App() {
  const [upvotes, setUpvotes] = useState(video.upvotes);
  const [downvotes, setDownvotes] = useState(video.downvotes);
  const [showComments, setShowComments] = useState(true);
  const [comments, setComments] = useState(video.comments);
 
  function handleUpVotes() {
    setUpvotes((votes) => votes + 1);
  }

  function handleDownVotes() {
    setDownvotes((votes) => votes + 1);
  }

  function toggleComments() {
    setShowComments((prevShowComments) => !prevShowComments);
  }
  const removeComment = (commentId) => {
    // Filter out the comment with the given ID
    setComments((prevComments) => prevComments.filter((comment) => comment.id !== commentId));
  };
  const sortComments = (order) => {
    // Sort the comments based on the provided order (either "oldest" or "newest")
    setComments((prevComments) => {
      const sortedComments = [...prevComments];
      if (order === "oldest") {
        sortedComments.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
      } else if (order === "newest") {
        sortedComments.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      }   else if (order === "alphabeticalAtoZ") {
        sortedComments.sort((a, b) => a.user.localeCompare(b.user));
      } else if (order === "alphabeticalZtoA") {
        sortedComments.sort((a, b) => b.user.localeCompare(a.user));
      }
      return sortedComments;
    });
  };

  
  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title={video.title}
      />
      <Detail
        title={video.title}
        views={video.views}
        upvotes={upvotes}
        downvotes={downvotes}
        onUpvote={handleUpVotes}
        onDownvote={handleDownVotes}
        showComments={showComments}
        onToggleComments={toggleComments}
        uploded={video.createdAt}
        comments={video.comments}
        onRemoveComment={removeComment}
        onSortChange={sortComments}
    />
    </div>
  );
}

export default App;
