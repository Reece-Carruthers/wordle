import PropTypes from "prop-types";

export default function Row({rowBoxes}) {

    return (
        <>
            <div className="flex flex-row">
                {rowBoxes.map((rowBox, index) => {
                    return (
                        <span key={index}>{rowBox}</span>
                    )
                })}
            </div>
        </>
    )
}

Row.propTypes = {
    rowBoxes: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string
    })).isRequired,
};