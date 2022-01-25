const TitleContent = ({ contents }) => {
  return (
    <div className="column title-content">
    {contents.map((item, idx) => (
      // for key it should be something like id/uuid
      // just using idx here
      <div className="block" key={idx}>
        <p>{item}</p>
      </div>
    ))}
  </div>
  )
}

export default TitleContent;
