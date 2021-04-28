import video from "../data/video.js";
import CommentList from "./CommentList";
import VideoArea from "./VideoArea";

function App() {
  console.log("Here's your data:", video);


  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameborder="0"
        allowfullscreen
        title="Thinking in React"
      />
      <VideoArea title={video.title} views={video.views} date={video.createdAt} 
          upvotes= {video.upvotes} downvotes = {video.downvotes} />
      <CommentList comments = {video.comments} />
    </div>
  );
}

export default App;

