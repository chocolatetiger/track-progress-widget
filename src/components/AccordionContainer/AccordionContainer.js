import React, { useState } from 'react';
import AccordionBody from '../AccordionBody/AccordionBody';
import './AccordionContainer.scss';

const AccordionContainer = ({ groups }) => {
  //expandedGroup
  const [expandedGroup, setExpandedGroup] = useState('');
  // handleChange is called when an accordion panel is clicked
  const handleChange = (panel) => (event, isExpanded) => {
    setExpandedGroup((expGroup) => (isExpanded ? panel : ''));
  };
  return (
    <div className="accordion-container">
      {groups.map((group, index) => {
        return (
          //AccordionBody Component
          <AccordionBody
            handleChange={handleChange}
            tasks={group.tasks}
            expandedGroup={expandedGroup}
            group={group}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default AccordionContainer;
