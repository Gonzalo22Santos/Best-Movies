import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElement';
import { HeroContainer, HeroBg,
         VideoBg, HeroContent, 
         HeroH1, HeroP, HeroBtnWrapper,
         ArrowForward, ArrowRight} from './HeroElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }


    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src= {Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>You will never get tired of watching these movies</HeroH1>
                <HeroP>

                
                        
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="start" onMouseEnter={onHover} onMouseLeave={onHover}
                    onMouseLeave={onHover}
                    primary="true"
                    dark="true"
                    >
                        Get started {hover ? <ArrowForward /> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;
