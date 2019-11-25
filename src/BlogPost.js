import React from 'react';
import './App.css';

export default class Blogpost extends React.Component{
        constructor(props) {
        super(props);
        this.state = {
            post1: []
        };
    }
        componentDidMount()
        {
            fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=3b9b47999dfe42309055b8dab4916124')
                .then(data => data.json())
                .then(data => {
                    console.log(data);
                    this.setState({
                        post1: data.articles[0]
                    });
                })
        }

    render() {
            return (
            <div>
                <img src={this.state.post1.urlToImage} className='textImage'/>
                 <h1>{this.state.post1.title}</h1>
                <p className='text'>{this.state.post1.content}</p>
            </div>
            );
        }
}


