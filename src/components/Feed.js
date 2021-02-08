import React from "react";
import Tweet from "./Tweet";

const tweetList = [
  {
    userName: 'Donald Trump',
    tweet: 'Windmills are the greatest threat in the US to both bald and golden eagles. Media claims fictional ‘global warming’ is worse.'
  },
  {
    userName: '6ix9nine',
    tweet: 'in 2017 you guys thought you would have flying cars right? Instead you got ME ;)'
  },
  {
    userName: 'Ryan Reynolds',
    tweet: 'Id walk through fire for my daughter. Well not FIRE, because its dangerous. But a super humid room. But not too humid, because my hair'
  },
  {
    userName: 'KANYE WEST',
    tweet: 'IM SO HYPE RIGHT NOW  EVERYTHING HAS CHANGED... HAVE TALL EVER SEEN TRON? THE END OF TRON WHERE EVERYTHING LIGHT UP!!!!'
  },
  {
    userName: 'Sweatpants Cher',
    tweet: 'after 10 months out of school, the very first day of in-person learning, what do they do? after everything ive been through. they give my son a recorder to take home.'
  }
];

function Feed() {
  return (
    <React.Fragment>
      <hr/>
      {tweetList.map((tweet, index) =>
        <Tweet userName=
      )}
    </React.Fragment>
  );
}

export default Feed;