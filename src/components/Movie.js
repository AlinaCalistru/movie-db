import React from "react";

export default function Movie(props) {
  return (
    <div className="movie">
      <img src={props.item.image} className="movie-image" />
      <div className="movie-details">
        <p>
          ⭐<span className="">({props.item.imDbRating}) </span> out of{" "}
          <span>{props.item.imDbRatingVotes}</span> votes
        </p>
        <p>
          <span className="">{props.item.runtimeStr}</span> length
        </p>
      </div>
      <p className="movie-title">
        {props.item.title} <span className="">{props.item.description}</span>
      </p>
      <p>
        <span className="">{props.item.genres}</span>
      </p>
    </div>
  );
}
