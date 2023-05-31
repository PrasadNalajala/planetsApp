// Write your code here
import Slider from 'react-slick'

import './index.css'

import PlanetItem from '../PlanetItem'

const PlanetSlider = props => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  const {planetsList} = props
  return (
    <div className="bg" data-testid="planets">
      ><h1 className="h1">PLANETS</h1>
      <Slider {...settings}>
        {planetsList.map(each => (
          <PlanetItem planetItem={each} key={each.id} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetSlider
