import React from "react";
import "./button.css";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";

function Button({ play, isPlaying }) {
  return (
    <section className="btn-container">
      <div onClick={play} className="btn">
        {isPlaying ? (
          <AiFillPauseCircle size="5rem" cursor="pointer" color="var(--blue)" />
        ) : (
          <AiFillPlayCircle size="5rem" cursor="pointer" color="var(--blue)" />
        )}
      </div>
    </section>
  );
}
export default Button;
