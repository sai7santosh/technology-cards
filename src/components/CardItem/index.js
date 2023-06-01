// Write your code here.
import './index.css'

const EachCardDetails = props => {
  const {eachCourseDetails} = props
  const {title, description, className, imgUrl} = eachCourseDetails
  return (
    <li className={className}>
      <h1 className="heading">{title}</h1>
      <p className="description">{description}</p>
      <img src={imgUrl} alt={title} className="image-position" />
    </li>
  )
}
export default EachCardDetails
