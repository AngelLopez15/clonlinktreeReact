export default function Imagen(props) {
  
  const {imagen, textAlt} = props

  return (
    <img src={imagen} alt={textAlt} className="container-button__imagen" />
  )
}
