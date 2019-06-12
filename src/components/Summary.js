import React from 'react';

class Summary extends React.Component {
    static defaultProps = {
        name: '',
        selected: {}
    }
    render() {
        const name = this.props.name;
        return (
            <div className="summary__option">
                <div className="summary__option__label">{name}  </div>
                <div className="summary__option__value">{this.props.selected[name].name}</div>
                <div className="summary__option__cost">
                    { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                        .format(this.props.selected[name].cost) }
                    </div>
            </div>
            
        )
    }
}

export default Summary;