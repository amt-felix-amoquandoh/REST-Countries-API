import "./styles.css"

export const SearchInput = () => {
    return (
        <section className="inputArea">
            <input type="text" placeholder="Search by Country"/>
            <select>
                <option value="Filter by Region" disabled selected>Filter by Region</option>
            </select>
        </section>
    )
}