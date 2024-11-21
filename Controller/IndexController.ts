import { useVideoPlayer } from "expo-video";
import { useEffect } from "react";

const IndexController = () => {
  const assets = require("@/assets/videos/intro.mp4");
  const player1 = useVideoPlayer(assets);
  //   to play video when view is mounted
  useEffect(() => {
    if (player1) {
      console.log("playing video------------------->");
      player1.play();
      player1.loop = true;
    }
  }, [player1]);

  return { player1, assets };
};

export default IndexController;
