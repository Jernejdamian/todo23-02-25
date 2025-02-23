import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) => (
    <div className="section__buttons">
        {
            tasks.length > 0 && (
                <>
                    <button
                        className="section__buttons--button">
                        {hideDoneTasks ? "Pokaż" : "Ukryj"}ukończone
                    </button>
                    <button
                        className="section__buttons--button"
                        disabled={`tasks.every(({ done }) => done)`}>
                        Ukończ wszystkie
                    </button>
                </>
            )
        }
    </div>
)

export default Buttons;