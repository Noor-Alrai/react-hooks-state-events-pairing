import React , {useState} from "react";
import video from "../data/video";

function Votes({upVotesComment, downVotesComments , up, down }){
      const [upVotesComment , setUpvotesComment] = useState(0)
      const [downVotesComments , setDownVotesComment] = useState(0)

return <div>
     <button onClick={upVotesComment}>`{up} 👍`</button>
     <button onClick={downVotesComments}>`{down} 👎`</button>
      </div>

}
export default Votes