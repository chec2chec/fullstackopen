const Filter = ({persons, newFilter, handleFilterChange}) => {
    return (
      <div>
        filter show with: <input
            value={newFilter}
            onChange={handleFilterChange}
        />
      </div>
    )
}

export default Filter