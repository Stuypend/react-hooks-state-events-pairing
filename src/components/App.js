import video from "../data/video.js";
import CommentList from "./CommentList";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameborder="0"
        allowfullscreen
        title="Thinking in React"
      />
      <CommentList comments = {video.comments} />
    </div>
  );
}

export default App;

