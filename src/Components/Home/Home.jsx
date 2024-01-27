import Weather from "./Weather";
import quotes from "../../assets/quotes";

function Home(){


    return (
        <>
            
        {/*Randomly generated quote*/}
        <div className="topContainer">
            <quotes />
        </div>
        {/*
            <div className="quoteContainer">
                “Understand this well: there is something holy, something divine, hidden in the most ordinary situations, and it is up to each one of you to discover it. There is no other way. Either we learn to find our Lord in ordinary, everyday life, or else we shall never find Him."
                -St. JoseMaria Escriva
            </div>
        </div>*/}
        <div className="homeContainer">
  
            
            <div className="leftContainer">
                <Weather />
            </div>

            <div className="centerContainer">
                <div className="weatherHeading">
                    <h2>Daily Habits</h2>
                </div>
                <div className="weatherContainer">
                    <form className="plan">
                        <span>
                            <label>Morning Offering
                                <input type="checkbox" />
                            </label>
                        </span>
                        <span>
                        <label>Mental Prayer
                            <input type="checkbox" />
                        </label>
                        </span>
                        <label>Holy Mass
                            <input type="checkbox" />
                        </label>
                        <label>Golden Hour
                            <input type="checkbox" />
                        </label>
                        <label>Fasting
                            <input type="checkbox" />
                        </label>
                        <label>Visit to Blessed Sacrament
                            <input type="checkbox" />
                        </label>
                        <label>Rosary
                            <input type="checkbox" />
                        </label>
                        <label>Mid-Day Examen
                            <input type="checkbox" />
                        </label>
                        <label>End-Day Examen
                            <input type="checkbox" />
                        </label>
                        <label>Work Out
                            <input type="checkbox" />
                        </label>
                        <label>Eat Well
                            <input type="checkbox" />
                        </label>
                        <label>Leisure Reading
                            <input type="checkbox" />
                        </label>
                        <label>Family Time
                            <input type="checkbox" />
                        </label>
                    </form>
                </div>
            </div>
            <div className="rightContainer">
                <div className="weatherHeading">
                    <h2>Workout</h2>
                </div>
                <div className="weatherContainer"></div>
            </div>

            {/*To Do List*/}
            {/*Goals for this month*/}
            </div>
        </>
        )
}

export default Home;