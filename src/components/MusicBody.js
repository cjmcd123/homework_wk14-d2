import React from "react";

const MusicBody = (props) => {
  const body = props.music.map((musicItem, index) => {
    return <tr key={index} className={index}>
      <td>{index + 1}.</td>
      <td><img src={musicItem["im:image"][2].label} alt="Album Cover Not Available"/></td>
      <td>{musicItem["im:name"].label}</td>
      <td>{musicItem["im:artist"].label}</td>
      <td>
        <audio controls controlsList="nodownload">
          <source src={musicItem.link[1].attributes.href} type={musicItem.link[1].attributes.type}/>
          Your browser does not support the audio element.
        </audio>
      </td>
    </tr>;
  });

  return (
    <tbody>
      {body}
    </tbody>
  );
}

export default MusicBody;
