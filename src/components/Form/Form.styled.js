import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 400px;
  height: 220px;
  padding: 20px 40px;
  border-radius: 8px;
  background: #F9B8C7; 
  box-shadow: 1px 1px 3px 4px rgba(119,  5,  47, 0.7);
`;

export const Input = styled.input`
  border: 0;
  outline: 0;
  box-shadow: inset 0 2px 2px rgba(0,0,0,0.2), inset 0 1px 2px rgba(0,0,0,0.2);
  width: 300px;
  padding: 12px;
  border-radius: 20px;
  background: #faebd7;
  /* color: #590042;  */
`;

export const LabelForm = styled.label`
  font-size: 20px;
  display: block;
  margin-bottom: 8px; 
  /* color: #590042;  */
`;



