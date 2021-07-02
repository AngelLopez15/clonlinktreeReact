import ImagenButton from "./ImagenButton"

export default function Button(props) {

  const {link, imagen, textAlt, textButton, bgColor, textColor} = props

  return (
    <div className="container-button" style={{backgroundColor:bgColor}} >
      <a href={link} target="_blank" rel="noopener noreferrer" className="container-button__link">
        <div className="container-button__content">
          <div className="container-button__content-imagen">
            <ImagenButton imagen={imagen} textAlt={textAlt} />
          </div>
          <div className="container-button__content-text">
            <p className="container-button__text" style={{color:textColor}}>{textButton}</p>
          </div>
        </div>
      </a>
    </div>
  )
}
