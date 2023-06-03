import React, { useState, useRef } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@mui/material/Button"
import TextField from '@mui/material/TextField';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';

import "./main.css";

function TextBox() {
  const [text, setText] = useState("");
  const [blocks, setBlocks] = useState(['']);
  const [backgroundAudioUrl, setBackgroundAudioUrl] =  useState(null);
  const [speech, setSpeech] = useState();
  const activeBlockRef = useRef(null);


  const handleEnd = () => {
    if (backgroundAudioUrl)
    {
      backgroundAudioUrl.currentTime = 0;
      backgroundAudioUrl.pause();
    }

  }

  const handlePlay = () => {
    if (backgroundAudioUrl)
    {
    backgroundAudioUrl.volume = 0.2;
    backgroundAudioUrl.loop = true;
    backgroundAudioUrl.play();
    }
  }

  const handleBackgroundAudioChange = (event) => {
    setBackgroundAudioUrl(new Audio(URL.createObjectURL(event.target.files[0])));
  };


  const handlePredictClick = () => {
  };

  const deleteBlock = (index) => {
    const updatedBlocks = [...blocks];
    updatedBlocks.splice(index, 1);
    setBlocks(updatedBlocks);
  };

  const handleKeyDown = (event, index) => {
    if (blocks[index] === '' && event.key === 'Delete') {
      setBlocks((prevBlocks) => prevBlocks.filter((_, i) => i !== index));
    }
  };

  const addBlock = () => {
    setBlocks([...blocks, '']); // Add an empty block to the array
  };

  const updateBlock = (index, value) => {
    // Split the text into sentences
    const sentences = value.split('.').map((sentence) => sentence.trim()).filter(Boolean);

    // Update the blocks with the sentences
    const updatedBlocks = [...blocks];
    updatedBlocks.splice(index, 1, ...sentences);
    setBlocks(updatedBlocks);
  };
  return (
      <Grid>
      <Grid className="audio-wrapper">
        <Button value={text} onClick={handlePredictClick} color="inherit"> Play </Button>

        <audio className="custom-audio"
          src={speech}
          controls
          autoPlay
          onPlay={handlePlay}      
          onEnded={handleEnd}
        />
      </Grid>
      <Grid container spacing={0} direction="column" alignItems="center" style={{ minHeight: '100vh' }}>
      {blocks.map((block, index) => (
          <TextField
            type="text"
            className="custom-text"
            placeholder="Hello, I am Max."
            value={block}
            onChange={(e) => updateBlock(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            fullWidth
            InputProps={{ sx: { borderRadius: 5 } }}
            inputRef={(ref) => {
              if (activeBlockRef.current === index) {
                ref.focus();
              }
            }}

          />
      ))}

      <Button className="custom-button" variant="contained" color="primary" onClick={addBlock}>
        Add Block
      </Button>
    </Grid>

      </Grid>
  );
}

const Tts = function () {
  return (
      <TextBox />
  );
};
export default Tts;