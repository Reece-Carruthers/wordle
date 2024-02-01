import PropTypes from "prop-types";

export default function RowBox({value}) {

    const boxStyling = "p-5 md:p-6 m-1 sm:m-2 bg-neutral-400 rounded-md drop-shadow-md"

    return (
        <>
            <button className={boxStyling} value={value}>
                {value}
            </button>
        </>
    )
}

RowBox.propTypes = {
    value: PropTypes.string.isRequired
};