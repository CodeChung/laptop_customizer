import React from 'react';

class Features extends React.Component {
    static defaultProps = {
        name: '',
        options: [],
    }
    render() {
        const { name, options } = this.props
        return (
            <div className="feature">
                <div className="feature__name">{name}</div>
                <ul className="feature__list">
                { options }
                </ul>
            </div>
        )
    }
}

export default Features;