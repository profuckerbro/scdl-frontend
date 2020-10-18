import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
const axios = require('axios').default;



class ScdlDownload extends React.Component {

    constructor(props) {
        super(props);
        this.state = {url: ''};
    
        this.handleChange = this.handleChange.bind(this);
      }

    handleChange(event) {
       this.setState({url: event.target.value});
    }

    render() {
        return (
            <div>
        
            <form noValidate autoComplete="off" className={this.props.passName}>
                
              <TextField id="outlined-basic" label="Soundcloud URL" variant="outlined" onChange={this.handleChange}/>
              <Button onClick={() => PostRequest(this.state.url)} >Download</Button>
            </form>
        
            </div>
          );
    }
  }






  


function PostRequest(url) {
  

   
    const payload = url
    console.log(payload)
axios({
    url: 'http://localhost:8080/download',
    method: 'POST',
    responseType: 'blob', // important
    data: {
        "Url": payload
        },
  }).then((response) => {
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'file.mp3');
    document.body.appendChild(link);
    link.click();
  });




}

export default ScdlDownload;