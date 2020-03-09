/** @jsx jsx */

import React, {useState} from 'react';

import AllComponents from './AllComponents';
import CreateNotification from './Notification.service';
import { copyToClipBoard, getRandomInt, Colors } from './loaders/utilities';

import * as Styles from './styles/styles';
import { css, jsx } from '@emotion/core';


const breakpoints: number[] = [780];
const mq = breakpoints.map(
    bp => `@media (max-width: ${bp}px)`
);



const App = () => {
  const [openCopiedModal, setOpenCopiedModal] = useState(false); 

  const toggleCopiedModal = () => {
    setOpenCopiedModal(!openCopiedModal)
  };

  if (openCopiedModal) {
    setTimeout(() => {
      setOpenCopiedModal(false);
    }, 3000)
  }

  const npmBtnAction = () => {
    copyToClipBoard('npm i --save react-loaders-kit', toggleCopiedModal)
  }

  const copiedModal = () => {
    const CopiedModal = CreateNotification('Copied to clipboard!!',openCopiedModal);
    return CopiedModal;
  }

  return(
    <div>
      <Styles.AppWrapper>
        {copiedModal()}
        <Styles.Title>
          <span>React-Loaders-Kit</span>
          <p>Simple yet robust and highly customizable loading kit for designers & developers</p>
        </Styles.Title>
        <Styles.ButtonWrapper>
          <Styles.GithubButton href="https://github.com/Seimodei/react-loaders-kit-examples">github</Styles.GithubButton>
          {Styles.NpmButton(npmBtnAction)}
        </Styles.ButtonWrapper>
        <Styles.LoadersWrapper>
          {AllComponents.map((card, index) => {
            return (
              <Styles.Card 
                key={index} 
                css={css`
                  grid-row: span ${getRandomInt(2, 4)};

                  ${mq[0]} {
                    grid-row: span 2;
                  }
                `}
                onClick={() => copyToClipBoard(card.code, toggleCopiedModal)}
              >
                {card.component}
                <div className="name">{card.name}</div>
              </Styles.Card>
            )
          })}
        </Styles.LoadersWrapper>
      </Styles.AppWrapper>
      <Styles.FooterInfo>
        React-Loaders-Kit was inspired by the brilliant designers, developers, and experimenters on codepen.
      </Styles.FooterInfo>
      <Styles.Footer>
        <svg viewBox="0 0 1440 320"><path fill={Colors.Main} fillOpacity="1" d="M0,288L10,272C20,256,40,224,60,213.3C80,203,100,213,120,202.7C140,192,160,160,180,138.7C200,117,220,107,240,90.7C260,75,280,53,300,42.7C320,32,340,32,360,64C380,96,400,160,420,192C440,224,460,224,480,234.7C500,245,520,267,540,266.7C560,267,580,245,600,245.3C620,245,640,267,660,272C680,277,700,267,720,250.7C740,235,760,213,780,202.7C800,192,820,192,840,165.3C860,139,880,85,900,58.7C920,32,940,32,960,53.3C980,75,1000,117,1020,122.7C1040,128,1060,96,1080,122.7C1100,149,1120,235,1140,245.3C1160,256,1180,192,1200,192C1220,192,1240,256,1260,277.3C1280,299,1300,277,1320,250.7C1340,224,1360,192,1380,176C1400,160,1420,160,1430,160L1440,160L1440,320L1430,320C1420,320,1400,320,1380,320C1360,320,1340,320,1320,320C1300,320,1280,320,1260,320C1240,320,1220,320,1200,320C1180,320,1160,320,1140,320C1120,320,1100,320,1080,320C1060,320,1040,320,1020,320C1000,320,980,320,960,320C940,320,920,320,900,320C880,320,860,320,840,320C820,320,800,320,780,320C760,320,740,320,720,320C700,320,680,320,660,320C640,320,620,320,600,320C580,320,560,320,540,320C520,320,500,320,480,320C460,320,440,320,420,320C400,320,380,320,360,320C340,320,320,320,300,320C280,320,260,320,240,320C220,320,200,320,180,320C160,320,140,320,120,320C100,320,80,320,60,320C40,320,20,320,10,320L0,320Z"></path></svg>
      </Styles.Footer>
    </div>
  )
}


export default App;
