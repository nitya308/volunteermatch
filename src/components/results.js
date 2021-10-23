import { filterInterests } from "./project"

export default function Results(props) {
    const results = filterInterests(props.filters)

    return (
        <div style={{ fontSize: "1.2em" }}>
            <div>
                <a className="exit" href="home">X</a>
            </div>

            <div className="quiz-heading">
                <h1>RESULTS</h1>
                <p>
                    Here are some of the best matching recommendations for you based on your skills, interests and schedules!
                    <br />
                </p>
                {results.map((i) => {

                    return (
                        <div className="resultbox" key={i.name}>
                            <h3 className="name">{i.name}</h3>
                            <div className="descp">
                                {i.descp}
                            </div>
                            <div className="skills">
                                {"Skills needed: " + i.skill}
                            </div>
                            <div className="req">
                                {i.requirements === 1 ? "Time requirements: flexible" : "Time requirements: " + i.requirements + "+ hours per week"}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}