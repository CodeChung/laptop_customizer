import React from 'react';

function MainForm(props) {
    const { features } = props;
    return (
        <section className="main__form">
            <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
            { features }
        </section>
    )
}

export default MainForm;