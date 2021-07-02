export default function Imagen(props) {

  const { imagen, textAlt } = props

  return (
    <div className="over">
      <img src={imagen} alt={textAlt} className="container-avatar__imagen" />
    </div>
  )
}
