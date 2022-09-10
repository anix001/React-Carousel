
const Image = require("../../assests/images/slider1.jpg")

const SliderTabOne = () => {
  return (
    <div className='slider-tab'>
      <div className="slider-background-image-section">
        <img src={Image} alt='slider'/>
      </div>
      <div className="slider-contents">
        <div className="slider-title">
            <h2>I am slider one.</h2>
        </div>
        <div className="slider-description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio iusto quibusdam autem nesciunt 
                porro! Consequatur enim consectetur ex magni voluptatibus.</p>
        </div>
        <div className="slider-tab-buttons">
            <button type='button'>Just a Button</button>
        </div>
      </div>
    </div>
  )
}

export default SliderTabOne