import React from 'react';

export class RunCode extends React.Component {
    constructor(props) {
        super(props);
        this.element = React.createRef();
        this.executeCode.bind(this);
    }

    executeCode() {
        while (this.element.current.firstChild) {
            this.element.current.removeChild(this.element.current.firstChild);
        }
        this.props.code(this.element.current);
    }

    render() {
        return (
            <div>
                <div ref={this.element} />
                <button onClick={this.executeCode.bind(this)}>
                    Run demo
                </button>
            </div>
        );
    }
}
