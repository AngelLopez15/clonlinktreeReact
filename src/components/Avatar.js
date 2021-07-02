import Name from '../components/Name'
import Imagen from '../components/Imagen'

export default function Avatar(props) {

  const { name, textColor, imagen, textAlt } = props

  return (
    <header className="container-avatar">
      <div>
        <Imagen imagen={imagen} textAlt={textAlt} />
        <Name name={name} color={textColor} />
      </div>
    </header>
  )
}
