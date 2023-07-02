import React from 'react';
import PropTypes from 'prop-types';
import {  Item } from './ContactListItem.styled';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const ContactListItem = ({name, number, id, removeContact}) => {
  // console.log(number)
  return (
    <Item>      
      <p>{name}: {number}</p>
      <Button variant="outlined" startIcon={<DeleteIcon />}onClick={() => removeContact(id)} type="button">Delete</Button>
    </Item>
  )
}

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  removeContact: PropTypes.func.isRequired,
};

export default ContactListItem;

