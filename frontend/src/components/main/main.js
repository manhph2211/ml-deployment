import React, { useState, useRef, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@mui/material/Button"
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import "./main.css";
import Dail from "../dial/dial"

function TextBox() {
  const [text, setText] = useState("");
  const [blocks, setBlocks] = useState([""]);
  const [backgroundAudioUrl, setBackgroundAudioUrl] =  useState(null);
  const [speech, setSpeech] = useState();

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

  const addBlock = () => {
    setBlocks([...blocks, '']); 
  };

  const updateBlock = (index, value) => {
    const updatedBlocks = [...blocks];
    updatedBlocks[index] = value;
    setBlocks(updatedBlocks);
  };

  const handleTextToSpeech = async () => {
    const textToSpeechApiUrl = 'http://localhost:8083/predictions/waveglow_synthesizer'; // Replace with the actual API endpoint
  
    const texts = blocks.filter((block) => block !== ''); // Exclude empty blocks
  
    try {
      const formData = new FormData();
      texts.forEach((text, index) => {
        formData.append(`data${index}`, text);
      });
  
      const response = await fetch(textToSpeechApiUrl, {
        method: 'POST',
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error('Text-to-speech request failed.');
      }
  
      const data = await response.content();
      console.log('Text-to-speech request successful.');
    } catch (error) {
      console.error('Error:', error.message);
    }
  };
  

  return (
      <Box>
      <Box component="span"  sx={{ p: 1, border: '1px solid grey' }} className="audio-wrapper">
        <Button value={text} onClick={handleTextToSpeech} color="inherit"> Play </Button>
        <Button color="inherit" onClick={addBlock}>
        Text
        </Button>
        <audio className="custom-audio"
          src={speech}
          controls
          autoPlay
          onPlay={handlePlay}      
          onEnded={handleEnd}
        />
        <Dail/>
      </Box>
      <Box container spacing={0}  direction="column" alignItems="center" style={{ minHeight: '100vh' }}>
      {blocks.map((block, index) => (
            <TextField
               size="small"
              type="text"
              className="custom-text"
              placeholder={`Sentence ${index + 1}`}

              value={block}
              onChange={(e) => updateBlock(index, e.target.value)}
              fullWidth
              InputProps={{ sx: { borderRadius: 2 } }}

            />
      ))}
    </Box>

      </Box>
  );
}

const Tts = function () {
  return (
      <TextBox />
  );
};
export default Tts;