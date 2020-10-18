import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function DownloadButton() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button>Download</Button>
    
    </div>
  );
}