import React, { Component } from 'react';
import SummaryList from './components/SummaryList';
import Features from './components/Features';
import './App.css';
import Options from './components/Options';
import Receipt from './components/Receipt';
import MainForm from './components/MainForm';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      selected: {
        Processor: {
            name: '17th Generation Intel Core HB (7 Core with donut spare)',
            cost: 700
          },
        "Operating System": {
            name: 'Ubuntu Linux 16.04',
            cost: 200
          },
        "Video Card":{
            name: 'Toyota Corolla 1.5v',
            cost: 1150.98
          },
        Display: {
            name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
            cost: 1500
          }
      }
    }
  }

  updateFeature(feature, newValue) {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  }

  render() {
    const summary = Object.keys(this.state.selected)
          .map(selectedOption => <SummaryList key={selectedOption} name={selectedOption} selected={this.state.selected}/>)

    const total = Object.keys(this.state.selected)
          .reduce((acc, curr) => acc + this.state.selected[curr].cost, 0);    


    const features = Object.keys(this.props.features)
          .map(key => {
            const options = this.props.features[key].map((item, index) => {
              const selectedClass = item.name === this.state.selected[key].name ? 'feature__selected' : '';
              const featureClass = 'feature__option ' + selectedClass;
              return <Options key={index} item={item} name={key}  featureClass={featureClass} handleClick={() => this.updateFeature(key, item)}/>
            });

            return <Features key={key} name={key} options={options}/>
          });      

    return (
      <div className="App">
        <header>
          <h1>ELF Computing</h1>
          <h3>Laptops</h3>
          <h5>Customize your laptop</h5>  
        </header>      
        <main>
          <MainForm features={features}/>
          <Receipt summary={summary} total={total}/>
        </main>
      </div>
    );
  }
}

export default App;  
