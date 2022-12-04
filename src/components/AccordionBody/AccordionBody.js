import React, { useState, useEffect } from 'react';
import AccordionDetails from '@mui/material/AccordionDetails';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckBox from '../CheckBox/CheckBox';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import './AccordionBody.scss';

const AccordionBody = ({ tasks, expandedGroup, group, handleChange }) => {
  //completedTasksCounter holds the number of tasks that have been completed
  const [completedTasksCounter, setCompletedTasksCounter] = useState(0);
  // tasksComplete will be true if all the tasks under the group are completed, if not it will remain false
  const [tasksComplete, setTasksComplete] = useState(false);
  useEffect(() => {
    //Setting the number of tasks that have been completed
    setCompletedTasksCounter(
      tasks.reduce((counter, task) => {
        if (task.checked) counter++;
        return counter;
      }, 0)
    );
  }, [tasks]);

  //Setting tasksComplete
  useEffect(() => {
    //If all the tasks under the group have been completed, we set tasksComplete to true
    if (completedTasksCounter === tasks.length) {
      setTasksComplete(true);
    } else {
      setTasksComplete(false);
    }
  }, [completedTasksCounter, tasks.length]);

  return (
    <Accordion
      // If group name is equal to the expandedGroup prop that we are setting in AccordionContainer, the panel will be expanded
      expanded={expandedGroup === group.name}
      onChange={handleChange(group.name)}
      disableGutters
    >
      {/* Accordion Summary Component (Material UI Component) */}
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <div className="AccordionSummaryContainer">
          <div className="iconsContainer">
            {/* If the task is complete we show the comlete tasks icon */}
            {tasksComplete ? (
              <AssignmentTurnedInOutlinedIcon
                sx={{
                  color: '#01B797',
                }}
              />
            ) : (
              <AssignmentOutlinedIcon
                sx={{
                  color: 'gray',
                }}
              />
            )}

            <Typography
              sx={{
                color: `${tasksComplete ? '#01B797' : 'gray'}`,
                marginLeft: 2,
              }}
            >
              {group.name}
            </Typography>
          </div>
          <Typography
            sx={{
              color: 'gray',
            }}
          >
            {expandedGroup === group.name ? 'hide' : 'show'}
          </Typography>
        </div>
      </AccordionSummary>
      <AccordionDetails sx={{ ml: 2 }}>
        {tasks.map((task, index) => {
          return (
            // CheckBox component
            <CheckBox
              setCompletedTasksCounter={setCompletedTasksCounter}
              key={index}
              task={task}
            />
          );
        })}
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionBody;
