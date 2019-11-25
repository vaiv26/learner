import React from 'react';
import './App.css';

export default class BlogPost1 extends React.Component{
        constructor(props) {
        super(props);
        this.state = {
            post2: []
        };
    }
        componentDidMount()
        {
            fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=3b9b47999dfe42309055b8dab4916124')
                .then(data => data.json())
                .then(data => {
                    console.log(data);
                    this.setState({
                        post2: data.articles[1]
                    });
                })
        }

    render() {
            return (
            <div>
                <img src={this.state.post2.urlToImage} className='textImage'/>
                 <h1>{this.state.post2.title}</h1>
                <p className='text'>{this.state.post2.content}</p>
            </div>


        );
    }
}


