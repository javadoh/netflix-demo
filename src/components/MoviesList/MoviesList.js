import React from 'react';
import { Container, Box, BoxTitle } from "../../styles/globallist";
import { Div } from './MoviesListStyles';
import PropTypes from 'prop-types';

  function listEstrenos(list, action){
    return (
        <Container>
          {list.map(tile => (
            <Box key={tile.img} cols={tile.cols}>
              <img src={tile.img} alt={tile.title} onClick={() => action(tile)} />
            </Box>
          ))}
        </Container>
    );
  };

export default function renderListMovies(props){
    return <Div>
    <BoxTitle>
        {props.children}
        </BoxTitle>

        {listEstrenos(props.movies, props.action)}
    </Div>
}

renderListMovies.propTypes = {
  listTitle: PropTypes.string,
  movies: PropTypes.array
}
