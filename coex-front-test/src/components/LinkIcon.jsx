export default function LinkIcon ({ symbol, children, titleChange }) {
  return (
    <h3 onClick={() => titleChange(children)} className="iconLink"><span className="material-symbols-outlined">{symbol}</span>{children}</h3>
  )
}