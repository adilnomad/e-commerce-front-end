
import React from 'react';
import { TimelineMax  } from 'gsap';

class AnimationOne extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            status : true
        };
    }

    componentDidMount() {
        new TimelineMax({repeat: 0}).fromTo(this.title, 1, 
            { opacity:0, y: 20 }, { opacity:1, y: 0, delay: 0.2});
    }

    render() {
        return (
            <div ref={div => (this.title = div)}>
                <h4 className="titleBold"> 
                    Welcome to E-commerce Shop.
                </h4>
            </div>
        );
    }
}

export default AnimationOne;