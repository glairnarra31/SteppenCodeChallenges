const SidebarMenu = ({ titles = [], onSelectedChanged }) => {
  const handleOnSelectedChange = (idx) => () => {
    onSelectedChanged(idx)
  }

  return (
    <div className="column is-one-quarter menu-container">
      <aside className="menu">
        <p className="menu-label">
          Titles
        </p>
        <ul className="menu-list">
          {titles.map((item, idx) => (
            // for key it should be something like id/uuid
            // just using idx here
            // just ignoring a tag because of the layout
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <li onClick={handleOnSelectedChange(idx)} key={idx}><a>{item}</a></li>
          ))}
        </ul>
      </aside>
    </div>
  )
}

export default SidebarMenu;
