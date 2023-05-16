import React from 'react';
import { Section } from '../../styles/RecycleStyles';
import { Main_container } from '.';
import MainImage from '../../assets/images/main.gif'

const Main = () => {
  return (
    <Section>
    <Main_container>
        <div className="main_image">
            <img src={MainImage} alt="mainImg.." />
        </div>
    </Main_container>
    </Section>
  );
};

export default Main;
