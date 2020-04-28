import React, { Component } from 'react'
import Button from './Button'
import Quote from './Quote'
import './Template.css'

export default class Template extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lengthArray: null,
            quoteNumber: 0,
            quotes: null,
        }
    }

    randomNumOfTheArray = () => {
        let randomNumer = Math.floor((Math.random() * this.state.lengthArray));
        this.setState({
            quoteNumber: randomNumer
        })
        console.log('El random number:', this.state.quoteNumber)
    }

    callingTheApi = () => {
        fetch('https://type.fit/api/quotes')
            .then( res => res.json())
            .then( data => {
                console.log(data[199].text);
                this.setState({
                    lengthArray: data.length,
                    quotes: data,
                })
                console.log('Estado del lenght:', this.state.lengthArray)
                console.log('Estado de las quotes:', this.state.quotes)
            })
            .catch( err => console.error(err))
    }

    componentDidMount () {
        this.callingTheApi()
    }

    render() {
        return (
            <div className='container'>
                <img className='logo' alt='Logo of Inspire Me' src={require('../img/logo.png')} />
                <h1 className='motto'>Get inspired with a quote and face the day with your best energy.</h1>
                <p className='instructions'>Click the button to get a random quote:</p>
                <Button 
                    title='Click me!'
                    onClick={() => this.randomNumOfTheArray()}
                />
                <Quote 
                    quoteNumber= {this.state.quoteNumber}
                    quotes= {this.state.quotes}
                />        
            </div>
        )
    }
}
