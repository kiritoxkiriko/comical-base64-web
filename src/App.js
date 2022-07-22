//import logo from "logo.png";
import "./App.css";
import { Base64 } from "js-base64";
import * as React from "react";
import { Container, Box, TextField, Typography } from "@mui/material";
import { PropTypes } from "prop-types";


function App(props) {
  const encodedRef = React.useRef();
  const decodedRef = React.useRef();
  
  React.useEffect(() => {
    console.log("props:"+props.encode+props.decode);
    if (props.encoded) {
      encodedRef.current.value = props.encoded;
      handleDecode();
    } else if (props.decoded) {
      decodedRef.current.value = props.decoded;
      handleEncode();
    }
  });

  const decode = (str) => {
    return Base64.decode(str);
  };

  const encode = (str) => {
    return Base64.encode(str);
  };

  const handleEncode = () => {
    let encodeStr = encode(decodedRef.current.value);
    console.log("encode:" + encodeStr);
    encodedRef.current.value = encodeStr;
  };

  const handleDecode = () => {
    let decodeStr = decode(encodedRef.current.value);
    console.log("decode:" + decodeStr);
    decodedRef.current.value = decodeStr;
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
        <Typography variant="h2">Comical Base64 converter</Typography>

          <TextField
            id="decoded"
            inputRef={decodedRef}
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
          inputRef={encodedRef}
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

App.propTypes = {
  encoded: PropTypes.string,
  decoded: PropTypes.string,
}

export default App;
