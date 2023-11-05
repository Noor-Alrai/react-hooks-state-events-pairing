import React ,{useState} from "react";
function Comment({ comment, onUpvote, onDownvote, onRemove }) {
  const [upvotes, setUpvotes] = useState(comment.upvotes);
  const [downvotes, setDownvotes] = useState(comment.downvotes);

  const handleUpvote = () => {
    setUpvotes((votes) => votes + 1);
    onUpvote();
  };

  const handleDownvote = () => {
    setDownvotes((votes) => votes + 1);
    onDownvote();
  };

  const handleRemove = () => {
    onRemove();
  };

  return (
    <div>
      <p>
        <strong>{comment.user}:</strong> {comment.comment}
      </p>
      <button onClick={handleUpvote}>👍 {upvotes}</button>
      <button onClick={handleDownvote}>👎 {downvotes}</button>
      <button onClick={handleRemove}>Remove Comment</button>
    </div>
  );
}

function Detail({
    title,
    views,
    uploded,
    upvotes,
    downvotes,
    onUpvote,
    onDownvote,
    showComments,
    onToggleComments,
    comments,
    onRemoveComment,
    onSortChange
   
  
  }) 
{ const [userName , setUserName] = useState("")
const [sortOrder, setSortOrder] = useState("oldest");
  const filteredComments = comments.filter((comment) =>
    comment.user.toLowerCase().includes(userName.toLowerCase())
  );
  if (sortOrder === "oldest") {
    filteredComments.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
  } else if (sortOrder === "newest") {
    filteredComments.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }else if (sortOrder === "alphabeticalAtoZ") {
    filteredComments.sort((a, b) => a.user.localeCompare(b.user));
  } else if (sortOrder === "alphabeticalZtoA") {
    filteredComments.sort((a, b) => b.user.localeCompare(a.user));}
  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
    onSortChange(e.target.value);
  };
 
    return (
      <div>
        <h2>{title}</h2>
        <p>{views} views | uploded {uploded} </p>
        <button onClick={onUpvote}>👍 {upvotes}</button>
        <button onClick={onDownvote}>👎 {downvotes}</button>
        
        <div><button onClick={onToggleComments}>
          {showComments ? "Hide Comments" : "Show Comments"}
        </button>
        {showComments && (
          <div>
           
            <h3>Comments</h3>
            <input type="text" value={userName} onChange={(e)=> setUserName(e.target.value)} />
            <label>
            Sort by:
            <select value={sortOrder} onChange={handleSortChange}>
              <option value="oldest">Oldest</option>
              <option value="newest">Newest</option>
              <option value="alphabeticalAtoZ">A to Z</option>
              <option value="alphabeticalZtoA">Z to A</option>
            </select>
          </label>
            <ul>
              {filteredComments.map((comment) => (
                <li key={comment.id}>
                  <Comment
                  comment={comment}
                  onUpvote={onUpvote}
                  onDownvote={onDownvote}
                  onRemove={() => onRemoveComment(comment.id)} />
                </li>
              ))}
            </ul>
          </div>
        )}</div>
      </div>
    );
              
              }
export default Detail;