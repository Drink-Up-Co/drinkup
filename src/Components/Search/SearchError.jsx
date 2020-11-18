import React from 'react';

const SearchError = (props) => {
  
  return (
    <div style={style.text}>
      {'Please type in an ingredient'}
    </div>
  );
}

const style = {
  text: {
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontSize: '0.75rem',
    color: 'red'
  }
};

export default SearchError;