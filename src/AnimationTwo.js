import React from 'react';
import { TimelineMax  } from 'gsap';

class AnimationTwo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            status : true
        };
    }

    componentDidMount() {
        new TimelineMax({repeat: 0}).fromTo(this.title, 1, 
            { opacity:0, y: 20 }, { opacity:1, y: 0, delay: 1});
    }

    render() {
        return (
            <div ref={div => (this.title = div)}>
                <p>
                    Wide variety of products. Seamless shopping experience.
                </p>
            </div>
        );
    }
}

export default AnimationTwo;