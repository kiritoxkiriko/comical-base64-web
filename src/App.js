//import logo from "logo.png";
import "./App.css";
import { Base64 } from "js-base64";
import * as React from "react";
import { Container, Box, TextField, Typography } from "@mui/material";

function App() {
  const encodeRef = React.useRef();
  const decodeRef = React.useRef();

  const decode = (str) => {
    return Base64.decode(str);
  };

  const encode = (str) => {
    return Base64.encode(str);
  };

  const handleEncode = (event) => {
    let encodeStr = encode(decodeRef.current.value);
    console.log("encode:" + encodeStr);
    encodeRef.current.value = encodeStr;
  };

  const handleDecode = (event) => {
    let decodeStr = decode(encodeRef.current.value);
    console.log("decode:" + decodeStr);
    decodeRef.current.value = decodeStr;
  };

  return (
    <Container>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 2, width: "40ch" },
          center: { textAlign: "center" },
        }}
        noValidate
        autoComplete="off"
        center
      >
        <Typography variant="h2">Simple Base64 converter</Typography>

          <TextField
            id="decoded"
            inputRef={decodeRef}
            label="Decoded"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            onBlur={handleEncode}
          />

        
        <TextField
          id="encoded"
          //value={decodeVal}
          inputRef={encodeRef}
          label="Encoded"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
          onBlur={handleDecode}
        />
        
      </Box>
    </Container>
  );
}

export default App;
