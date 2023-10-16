import React from 'react';
import { Button } from './FeaturedButtonStyles';
import PropTypes from 'prop-types';

export default function renderButton(props){
return (

<Button
txtColor={props.txtColor}
bckColor={props.bckColor}
bottom={props.bottom}
left={props.left}
onClick={props.action}>{props.title}
</Button>

)
}

renderButton.propTypes = {
    txtColor: PropTypes.string,
    bckColor: PropTypes.string,
    bottom: PropTypes.string.isRequired,
    left: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired
  }
