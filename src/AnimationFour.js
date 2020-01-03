import React from 'react';
import { TimelineMax  } from 'gsap';
import fashon from './staticAssets/fashon.png'

class AnimationFour extends React.Component {

    componentDidMount() {
        new TimelineMax({repeat: 0}).fromTo(this.title, 1, 
            { opacity:0, y: 20 }, { opacity:1, y: 0, delay: 1.85});
    }

    render() {
        return (
            <div ref={div => (this.title = div)}  className="fashonAnim">
                <img alt='animation' src={fashon} width={400} height={360} />
            </div>
        );
    }
}

export default AnimationFour;