import { useEffect } from "react";

export default function AudioPlayer() {
  useEffect(() => {
    const audioElement = document.getElementById("audio");

    const playAudio = () => {
      audioElement.play().catch((error) => {
        console.log("Autoplay was prevented:", error);
      });
    };

    window.addEventListener("click", playAudio);

    return () => {
      window.removeEventListener("click", playAudio);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <audio
        id="audio"
        src="/lagu_kemerdekaan.mp3"
        loop
        controls
        controlsList="nodownload"
        type="audio/mp3"
      />
    </div>
  );
}
