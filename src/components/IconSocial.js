export default function IconSocial(props) {

  const {imagen, red, link} = props

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img src={imagen} alt={red} className="icon" />
    </a>
  )
}
