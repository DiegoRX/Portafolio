import React from 'react';
import { useState } from 'react';
import '../../styles/expandingCards.scss';
import ExpandingCardsContainer from '../../components/expandingCards/ExpandingCardsContainer';
import Panel from '../../components/expandingCards/Panel';
import {panels} from '../../API/infoPanel.json';

function ExpandingCards() {

  const [expandend, setExpanded] = useState('Explore The World');

  const handleExpanded = (pExpanded) => {
    setExpanded(pExpanded);
    
  };

return (
      <ExpandingCardsContainer>
        {panels.map((panel) => (
        <Panel className={panel.className} 
              backgroundImg={panel.url}
              title={panel.title}
              key={panel.url}
              visible={expandend}
              handleExpanded={handleExpanded}/>)
              )}     
      </ExpandingCardsContainer>
  );
}

export default ExpandingCards;
