// Write your code here
import './index.css'

const PlanetItem = props => {
  const {planetItem} = props
  const {name, imageUrl, description} = planetItem
  return (
    <div className="card">
      <img src={imageUrl} alt={`planet ${name}`} className="planetImg" />
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  )
}

export default PlanetItem
