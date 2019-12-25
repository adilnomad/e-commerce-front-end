import React from 'react';
import { TimelineMax  } from 'gsap';
import './App.css';
import person from './staticAssets/person.png';

class AnimationThree extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            status : true
        };
    }

    componentDidMount() {
        
        new TimelineMax({repeat: 0}).fromTo(this.title, 1, 
            { opacity:0, x: 0 }, { opacity:1, x: 20, delay: 2});
    }

    render() {
        return (
            <div ref={div => (this.title = div)}  className="personAnim">
                <img alt='animation' src={person} width={150} height={200} />
            </div>
        );
    }
}

export default AnimationThree;