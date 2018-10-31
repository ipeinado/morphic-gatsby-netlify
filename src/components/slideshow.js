import React from "react"
import { css } from "react-emotion"

class SlideMiniature extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      slideNumber: parseInt(this.props.number),
    }
  }

  render() {

    const ariaLabel=`Show slide ${ this.state.slideNumber}`
    const isActive = this.state.slideNumber === this.props.activeSlide

    return (
      <li
        className={css`
          display: inline-block;
          margin: 0 .25rem;
        `}
      >
        <button 
          className={css`
            background-color: yellow;
            border-color: ${ isActive ? `red` : `#eee`};
          `}
          aria-pressed={ isActive }
          onClick={ (e) => this.props.onClick(this.state.slideNumber) }
          aria-label={ ariaLabel }
        >
          { this.props.number }
        </button>
      </li>
    )
  }
}

class Slide extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      number: parseInt(this.props.number),
      active: false,
    }
  }

  render() {
    return (
      <li 
        style={{ 
          backgroundColor: this.props.color, 
          width: `100%`,
          position: `absolute`,
          left: `calc(100% * ${ this.state.number - this.props.currentSlide })`,
          height: 300,
          transition: `left 250ms ease-in-out`,
        }}
      >
        <h2>{ this.props.title }</h2>
        <p>{  this.props.subtitle }</p>
        <p>{ this.props.currentSlide }</p>
      </li>
    )
  }
}

class SlideShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentSlide: 1,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(i) {
    this.setState({
      currentSlide: i,
    })
  }

  render() {
    return (
      <section
        style={{
          width: `100%`,
          overflow: `hidden`,
        }}
      >
        <ul 
          style={{ 
            display: `flex`, 
            listStyleType: `none`,
            margin: 0,
            padding: 0,
            width: `400%`,
            position: `relative`,
            height: 300,
          }}
        >
          <Slide 
            number="1"
            title="Your settings. Instantly. Anywhere" 
            subtitle="Lorem ipsum dolor sit amet consectetur adipiscing elit" 
            color="yellow" 
            currentSlide={ this.state.currentSlide } />
          <Slide 
            number="2"
            title="Lorem dolor sit amet"
            subtitle="Lorem ipsum dolor sit amet consectetur adipiscing elit" 
            color="red" 
            currentSlide={ this.state.currentSlide } />
          <Slide
            number="3"
            title="Lorem dolor sit amet"
            subtitle="Lorem ipsum dolor sit amet consectetur adipiscing elit" 
            color="blue" 
            currentSlide={ this.state.currentSlide } />

          <Slide
            number="4"
            title="Lorem dolor sit amet"
            subtitle="Lorem ipsum dolor sit amet consectetur adipiscing elit" 
            color="green"
            currentSlide={ this.state.currentSlide } />
        
        </ul>

        <ul
          className={css`
            list-style-type: none;
            margin: 1rem 0 0 0;
            padding: 0;
            text-align: center;
          `}
        >
      
          <SlideMiniature 
            number="1" 
            onClick={(i) => this.handleClick(i)}
            activeSlide={ this.state.currentSlide }
          />
        
          <SlideMiniature 
            number="2" 
            onClick={(i) => this.handleClick(i)}
            activeSlide={ this.state.currentSlide }
          />

          <SlideMiniature 
            number="3" 
            onClick={(i) => this.handleClick(i)}
            activeSlide={ this.state.currentSlide }
          />

          <SlideMiniature 
            number="4" 
            onClick={(i) => this.handleClick(i)}
            activeSlide={ this.state.currentSlide }
          />
        </ul>

      </section>
    )
  }
}

export default SlideShow