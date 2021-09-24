import React from 'react';
import { ImageSection } from '../components/sections/ImageSection';
import { ServicesSection } from '../components/sections/ServicesSection';
import { SkillsSection } from '../components/sections/SkillsSection';
import { Title } from '../components/Title';
import design  from '../assets/design.svg';
import intelligence  from '../assets/intelligence.svg';
import gamedev  from '../assets/gamedev.svg';

export const AboutPage = () => {
    return (
        <div className="AboutPage">
            <Title title={'About Me'} span={'About Me'} />
            <ImageSection />

            <Title title={'My Skills'} span={'My Skills'} />
            <div className="skillsContainer">
                <SkillsSection skill={"Javascript"} progress={'80'} width={'80%'} />
                <SkillsSection skill={"React Js"} progress={'70'} width={'70%'} />
                <SkillsSection skill={"Css"} progress={'60'} width={'60%'} />
                <SkillsSection skill={"Node Js"} progress={'50'} width={'50%'} />
                <SkillsSection skill={"Typescript"} progress={'40'} width={'40%'} />
                <SkillsSection skill={"React Native"} progress={'30'} width={'70%'} />
            </div>

            <Title title={'Services'} span={'Services'} />
            <div className="servives-container">
                <ServicesSection image={design} title={'Web design'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}/>
                <ServicesSection image={intelligence} title={'Artificial Intelligence'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}/>
                <ServicesSection image={gamedev} title={'Game development'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}/>
            </div>
        </div>
    )
}
