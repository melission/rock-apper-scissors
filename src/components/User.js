import { settings } from "../configs/game";
import "./User.css";

export const User = ({ userScore, userSelection, trophyIcon, children}) => {
    return (
        <div className="user-card">
            <h1>Player's score: {userScore}</h1>
            {userScore < settings.winTarget ? (
                <>
                <div className="choice-grid">{children}</div>
                <h3>
                    {userSelection === ""
                    ? "Pick one!"
                    : `Your choice: ${userSelection}`}
                </h3>
                </>
            ) : (
                <>
                <img src={trophyIcon} alt="trophy"></img>
                <h3>Victory!</h3>
                </>
            )}
        </div>
    )
}