import React, { Component } from 'react'
import Button from './Button'
import Quote from './Quote'
import './Template.css'

export default class Template extends Component {

    render() {
        return (
            <div className='container'>
                <img className='logo' alt='Logo of Inspire Me' src={require('../img/logo.png')} />
                <h1 className='motto'>Get inspired with a quote and face the day with your best energy.</h1>
                <p className='instructions'>Click the button to get a random quote</p>
                <Button 
                    title='Click me!'
                />
                <Quote />        
            </div>
        )
    }
}
