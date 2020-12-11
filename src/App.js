import React, {Component} from 'react'
import './App.css'





export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      click: false,
      click2: false,
      bg: "gray",
    }
  }


  render() {

  
    const getImages = (e) => {
      e.preventDefault()
      this.setState({isLoading: true})

      fetch("https://kill-me-6.herokuapp.com/a")
      .then(res => res.json())
      .then(
        (result) => {
            this.setState({
            img1: result[0].img1,
            img2: result[0].img2,
            img3: result[0].img3,
            img4: result[0].img4,
            img5: result[0].img5,
            img6: result[0].img6,
            img7: result[0].img7,
            img8: result[0].img8,
            img9: result[0].img9,
            img10: result[0].img10,
            img11: result[0].img11,
            img12: result[0].img12,
            click: true,
            activeImage: this.state.img1,
            isLoading: false
            })
          })
    }

    
    
    const animateImages = () => {
      if (this.state.activeImage === this.state.img1) {
        setTimeout(() => {
          this.setState({activeImage: this.state.img2})
        },366)
        }
      else if (this.state.activeImage === this.state.img2) {
        setTimeout(() => {
          this.setState({activeImage: this.state.img3})
        },366)
      }
      else if (this.state.activeImage === this.state.img3) {
        setTimeout(() => {
          this.setState({activeImage: this.state.img4})
        },366)
      }
      else if (this.state.activeImage === this.state.img4) {
        setTimeout(() => {
          this.setState({activeImage: this.state.img5})
        },366)
      }
      else if (this.state.activeImage === this.state.img5) {
        setTimeout(() => {
          this.setState({activeImage: this.state.img6})
        },366)
      }
      else if (this.state.activeImage === this.state.img6) {
        setTimeout(() => {
          this.setState({activeImage: this.state.img7})
        },366)
      }
      else if (this.state.activeImage === this.state.img7) {
        setTimeout(() => {
          this.setState({activeImage: this.state.img8})
        },366)
      }
      else if (this.state.activeImage === this.state.img8) {
        setTimeout(() => {
          this.setState({activeImage: this.state.img9})
        },366)
      }
      else if (this.state.activeImage === this.state.img9) {
        setTimeout(() => {
          this.setState({activeImage: this.state.img10})
        },366)
      }
      else if (this.state.activeImage === this.state.img10) {
        setTimeout(() => {
          this.setState({activeImage: this.state.img11})
        },366)
      }
      else if (this.state.activeImage === this.state.img11) {
        setTimeout(() => {
          this.setState({activeImage: this.state.img12})
        },366)
      }
      else {
          setTimeout(() => {
            this.setState({activeImage: this.state.img1})
          }, 366)
          }
      setTimeout(animateImages, 0)
    }

    const open = () => {
      this.setState({click2: true})
    }

    const changeBackground = () => {
      if(this.state.bg === "gray")
      {this.setState({bg:"lightpink"})}
      else {
        this.setState({bg:"gray"})
      }
    }

    return (
      <div className="App">
        <br />
        <button onClick={getImages}>open</button>
        <br />
        <br />
        <div style={{display:this.state.isLoading ? 'block' : 'none'}}>
          <p>loading...</p>
        </div>
        <div style={{display: this.state.click ? 'block' : 'none' }}>
          <button onClick={() => {
            open()
            animateImages()
            }}>start
          </button>

          <div id="bg" className="background" style={{backgroundColor: this.state.bg}} />
          
          <div  style={{display: this.state.click2 ? 'block' : 'none' }}>
            <img 
              alt=""
            className="super"
            src= {this.state.activeImage}
            />
          <button onClick={changeBackground}>change background</button>
            <p>animation png files hosted at aws s3<br />
            via psql database<br />
            server hosted at heroku<br />
            client side app deployed via vercel<br />
          </p>

          </div>

        </div>
        
        
      </div>
    )
  }
}

