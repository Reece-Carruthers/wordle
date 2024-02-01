import PropTypes from "prop-types";

export default function Grid({rows}) {

    return (
        <>
            <div className="flex flex-col">
                {rows.map((row, index) => (
                    <span key={index}>{row}</span>
                ))}
            </div>
        </>
    )
}

Grid.propTypes = {
    rows: PropTypes.arrayOf(PropTypes.element).isRequired,
};