import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const QuoteMaker = (props) => (
  <Card>
    <CardContent>
      <Typography id="text">
        {props.selectedQuote.quote} - <span id="author">{props.selectedQuote.author}</span>
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" onClick={props.assignNewQuoteIndex} id="new-quote">Next Quote</Button>
      <IconButton
      target="_blank" 
      href={encodeURI(`https://twitter.com/intent/tweet?text=${props.selectedQuote.quote}`)}
      id="tweet-quote"
      >
        <FontAwesomeIcon icon={faTwitter} size="md"></FontAwesomeIcon>
      </IconButton>
    </CardActions>
  </Card>
)

export default QuoteMaker;