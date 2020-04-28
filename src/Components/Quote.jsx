import React, { Component } from 'react'
import './Quote.css'

export default class Quote extends Component {

    renderQuote = () => {
        return (
            <div className='divTextQuote'> 
                <h3 className='quoteText'>"{this.props.quotes[this.props.quoteNumber].text}"</h3>
                <p className='quoteAuthor'>- {this.props.quotes[this.props.quoteNumber].author ? this.props.quotes[this.props.quoteNumber].author : 'Anonymous'}</p>
            </div>
        )
    }
    
    render() {
        return (
            <div className='containerQuote'>
                {this.props.quotes && this.renderQuote()}
            </div>
        )
    }
}
