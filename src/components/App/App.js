import React, { useEffect } from 'react';
import AccordionContainer from '../AccordionContainer/AccordionContainer';
import ProgressBar from '../ProgressBar/ProgressBar';
import { useSelector, useDispatch } from 'react-redux';
import { getGroups } from '../../features/groupSlice';
import './App.scss';
const App = () => {
  //Getting the values of groups and progress from the store
  const dispatch = useDispatch();
  const groups = useSelector((state) => state.groups.groups);
  const progress = useSelector((state) => state.progress.progress);
  useEffect(() => {
    dispatch(getGroups());
  }, [dispatch]);

  return (
    <div className="app">
      {/* Progress Bar Component */}
      <ProgressBar progress={progress} />
      {/* Accordion Container component which holds the body of Accordion */}
      <AccordionContainer groups={groups} />
    </div>
  );
};

export default App;
