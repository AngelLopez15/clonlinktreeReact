export default function Name(props) {

  const {name, color}= props

  return (
    <h1 className="container-avatar__name" style={{color: color}}>{name}</h1>
  )
}
