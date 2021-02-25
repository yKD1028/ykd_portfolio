const Skill = () => {
    return(
        <div>
            <article className="graph">
                <h3>Skill</h3>
                <section className="innerBar"> 
                    <p>HTML/CSS</p>
                    <span class="htmlbar">90%</span>
                </section>

                <section className="innerBar"> 
                    <p>Javascript</p>
                    <span class="jsbar">50%</span>
                </section>

                <section className="innerBar"> 
                    <p>React</p>
                    <span class="reactbar">40%</span>
                </section>

                <section className="innerBar"> 
                    <p>PHP</p>
                    <span class="phpbar">30%</span>
                </section>
            </article>
        </div>
    )
}

export default Skill;