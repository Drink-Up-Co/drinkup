import React, { useState, useRef, useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';


const SearchTag = (props) => {
  
  return (
    <div style={style.wrapper}>
      <div style={style.text}>{props.name}</div>
      <div style={style.btn} onClick={props.deleteTag(props.name)}>X</div>
    </div>
  );
}

const style = {
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#edf0f5',
    border: '1px solid #46484a',
    borderRadius: '10px',
    padding: '5px 5px 5px 5px',
    margin: '5px'
  },
  tag: {
    display: 'inline-block',
    backgroundColor: '#edf0f5',
  },
  btn: {
    border: 'none',
    cursor: 'pointer',
    fontSize: '0.75rem',
    marginLeft: '5px',
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontWeight: 'bold'
  },
  text: {
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontSize: '0.75rem'
  }
};

export default SearchTag;