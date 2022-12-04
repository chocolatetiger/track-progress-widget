import React, { useState, useEffect } from 'react';
import {
  FormGroup,
  FormControlLabel,
  Checkbox as MUICheckBox,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { addProgress, subtractProgress } from '../../features/progressSlice';

const CheckBox = ({ task, setCompletedTasksCounter }) => {
  //Checked indicates whether a checkbox is checked or not
  const [checked, setChecked] = useState(task.checked);
  const dispatch = useDispatch();
  //updateProgress the progress on click of checkbox
  const updateProgress = () => {
    if (!checked) {
      dispatch(addProgress(task.value));
    } else {
      dispatch(subtractProgress(task.value));
    }
    setChecked(!checked);
  };
  //Updating the number of completed tasks
  useEffect(() => {
    if (checked) {
      setCompletedTasksCounter((counter) => counter + 1);
    } else {
      setCompletedTasksCounter((counter) => counter - 1);
    }
  }, [checked]);

  return (
    // FormGroup and FormControlLabel are Material UI Components
    <FormGroup>
      <FormControlLabel
        sx={{
          color: 'gray',
        }}
        control={
          <MUICheckBox
            sx={{
              '&.Mui-checked': {
                color: '#01B797',
              },
            }}
            checked={checked}
            onChange={updateProgress}
          />
        }
        label={task.description || task.name}
      />
    </FormGroup>
  );
};

export default CheckBox;
