import { filterInterests } from "./project"

export default function Results(props) {
    const results = filterInterests(props.filters)

    document.body.style.backgroundColor = "#F0FDE5";

    return (
        <section style={{ fontSize: "1.3em" }}>
            <div>
                <a className="exit" href="home">X</a>
            </div>

            <div className="quiz-heading">
                <h1>RESULTS</h1>
                <p>
                    Here are some of the best matching recommendations for you based on your skills, interests and schedules!
                    <br />
                </p>
            </div>

            {/* Return try again message if no matching opportunities are found */}
            {results.length === 0? <div className="msg">Sorry, we currently couldn't find any matching projects for you. But we're always adding new oppurtunities, so try checking back in a few weeks!</div>: <></>}

            {results.map((i) => {
                return (
                    <div className="resultbox" key={i.name}>
                        <h3 className="name" style={{ fontWeight: "500" }}>{i.name}</h3>
                        <div className="descp">
                            {i.descp}
                        </div>
                        <div className="skills">
                            {"Skills needed: " + i.skill}
                        </div>
                        <div className="req">
                            {i.requirements === 1 ? "Time requirements: flexible" : "Time requirements: " + i.requirements + "+ hours per week"}
                        </div>
                        <a href={i.contactLink} target="_blank" rel="noreferrer" className="contact">
                            {"Contact:" + i.contact}
                        </a>
                    </div>
                )
            })}
        </section>
    )
}