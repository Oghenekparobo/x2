import ReactPlayer from "react-player";

const Video = ({ videoID }) => {
  return (
    <div className="h-[50vh] rounded-xl overflow-hidden">
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${videoID}`}
        controls
        width="100%"
        height="100%"
        // playing={true}
      />
    </div>
  );
};

export default Video;
