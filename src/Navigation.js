import React from 'react'
import './App.css'

export default class Navigation extends React.Component{
	constructor(props) {
    super(props);
    this.state = {
      items: [],

    };
  }
  componentDidMount(){
    this.getnews();
    this.interval = setInterval(()=>{this.getnews();},5000);
  }
  getnews(){

	 fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=3b9b47999dfe42309055b8dab4916124')
.then(data => data.json())
.then(data => {
  console.log(data);
  this.setState({
    items:data.articles
  });
})
  }
  render(){
    return(
    <nav>
      <p><a href="/">Homepage</a></p>
      {
        this.state.items.map((data,i) => {
          return(
            <div key={i}>
               <img src={data.urlToImage} />
               <p>Title:{data.title}</p>
            </div>
          );
        })
      }
    </nav>);
  }
}
