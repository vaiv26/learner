import React from 'react';
import './App.css';

export default class BlogPost3 extends React.Component{
        constructor(props) {
        super(props);
        this.state = {
            post3: []
        };
    }
        componentDidMount()
        {
            fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=3b9b47999dfe42309055b8dab4916124')
                .then(data => data.json())
                .then(data => {
                    console.log(data);
                    this.setState({
                        post3: data.articles[2]
                    });
                })
        }
        render() {
            return (
            <div>
                <img src={this.state.post3.urlToImage} className='textImage'/>
                 <h1>{this.state.post3.title}</h1>
                <p >text:{this.state.post3.content}</p>
            </div>
        );
    }
}


