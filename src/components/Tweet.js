import React from "react";
import PropTypes from "prop-types";

function Tweet(props){
  return(
    <React.Fragment>
      <h3>{props.userName}</h3>
      <p><em>{props.tweetBody}</em></p>
      <hr />
    </React.Fragment>
  );
}

Tweet.propTypes = {
  userName: PropTypes.string.isRequired,
  tweet: PropTypes.string.isRequired
};

export default Tweet;