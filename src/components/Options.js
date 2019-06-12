import React from 'react';

class Options extends React.Component {
    static defaultProps = {
        item: {},
        featureClass: '',
    }
    render() {
        const { item, featureClass } = this.props;
        return (
            <li className="feature__item">
                <div className={featureClass}
                    onClick={e => this.props.handleClick()}>
                    { item.name }
                    ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                        .format(item.cost) })
                </div>
            </li>
        )
    }
}

export default Options;