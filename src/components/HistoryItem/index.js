import './index.css'

const HistoryItem = props => {
  const {historyList, deleteSearch} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyList

  const onDelete = () => {
    deleteSearch(id)
  }

  return (
    <li>
      <div className="back">
        <div className="back1">
          <div>
            <p className="para1">{timeAccessed}</p>
          </div>
          <div className="back2">
            <img src={logoUrl} alt="domain logo" className="image" />
            <p className="para3">{title}</p>
            <p className="para">{domainUrl}</p>
          </div>
        </div>
        <button
          type="button"
          onClick={onDelete}
          data-testid="delete"
          className="button"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
