import "./Round.css"

export const Round = ({ userSelection, round}) => {
    return (
        <h1 className="round">
            {userSelection === '' ? "No round yet!" : `Round: ${round}`}
        </h1>
    )
}