import React from 'react';
import axios from 'axios';
import Photo from './Photo.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: [],  
    };
  }


  componentDidMount() {
    console.log(window.location.pathname)
    this.retreivePhotos();
  }

  retreivePhotos = () => {
    let productRoute = `${window.location.pathname}gram`
    axios.get(productRoute)
    .then((response) => {
      this.setState({
        pictures:response.data,
      })
    })
  }

  render() {
    return (
      <div>
        <h2>HOW OTHERS ARE WEARING IT</h2>
        <div>Mention @Nike on Instagram for a chance to have your look featured.</div>
          <div className="container">
            {this.state.pictures.map(photo => {
              return <Photo photo={photo} />
            })}
          </div>
      </div>
    );
  }
}


export default App;
