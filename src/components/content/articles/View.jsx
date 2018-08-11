import React from 'react';

function View(props) {
  const { image, heading } = props;

  return (
    <div className="article">
      <img src={image} alt={heading} />
      <div>
        <h5>{heading}</h5>
        <p>The quick brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Jump MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs.</p>
      </div>
    </div>
  )
}

export default View;