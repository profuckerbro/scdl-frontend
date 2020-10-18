import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
const axios = require('axios').default;





export default function ScdlDownload() {


  return (
    <div>

    <form noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Soundcloud URL" variant="outlined" />
      <Button onClick={() => PostRequest()} >Download</Button>
    </form>

    </div>
  );
}

function PostRequest() {
  

   
    const payload = {
    "Url": "https://soundcloud.com/luke-eversfield/sets/industrieanlagen"
    };

    axios.post(`http://localhost:8080/download`, payload )
      .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'some.mp3'); //or any other extension
        document.body.appendChild(link);
        link.click();
     });







}