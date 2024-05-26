
const { useState } = React;

// questions
const sections = {
    section1: [
        {
            content: (
                <div>
                    <h2>Welcome to Stevenson College!</h2>
                    <img class="stevenson"
                        src="./img/stevensondorms.webp"
                        alt="Stevenson college at UCSC dorms">
                    </img>
                    <p>Congrats on choosing Stevenson College, this college was founded in 1966 and is named after Adali E. Stevenson.
                        Stevenson College’s theme is Self and society, focusing on understanding oneself,
                        actively participating in your community and thinking globally.
                    </p>
                    <h3>Core Course:</h3>
                    <p>There are two required core courses that freshmen must enroll in, one is taught
                        during the fall quarter while the other is taught during the winter quarter. This
                        core course focuses on the relationship between self and society teaching students
                        about diverse historical, cultural, and intellectual traditions. </p>
                    <h3>Environment: </h3>
                    <p>Stevenson College is located in one of the most beautiful places on campus, with
                        the east field nearby and a beautiful view of the ocean. This college is a great
                        hang-out stop. The athletics and recreational fitness center is also located nearby
                        with a large variety of gym equipment, yoga classes, and more! Stevenson’s location is
                        perfect for students who want to hit the gym. Another selling point of this college is
                        the amazing Stevenson Coffee House which sells amazing sandwiches, coffee and so much
                        more! A bustling coffee shop that never fails to impress. Stevenson College has dorms,
                        apartments, and a themed living space, the Rosa Parks African Theme House or R.PAATH.
                        This themed housing is a part of the ABC housing on campus that is predominantly African,
                        Black, and Caribbean students. This housing is great for students who are passionate about
                        political, social, cultural, and environmental issues of African, Black, and Caribbean
                        people. This themed living space is perfect for students who share these interests and wish
                        to be surrounded by peers with the same interests.  </p>
                    <h3>Our Thoughts:</h3>
                    <p>Stevenson has an absolutely beautiful view and an amazing environment, there are many
                        types of people here however there is a large amount of “gym bros” due to how close the gym is. </p>
                </div>
            )
        },
        {
            content: (
                <div>
                    <h2>Next question</h2>
                    <p>Placeholder</p>
                </div>
            )
        },
        {
            content: (
                <div>
                    <h2>Next question</h2>
                    <p>Placeholder</p>
                </div>
            )
        },
    ],
    section2: [
        {
            content: (
                <div>
                    <h2>Welcome to Cowell College!</h2>
                    <img class="cowell"
                        src="./img/cowelldorms.jpg"
                        alt="Cowell College dorms at UCSC">
                    </img>
                    <p>Placeholder</p>
                    <h3>Core Course:</h3>
                    <p>Information about core course placeholder</p>
                    <h3>Environment: </h3>
                    <p>Information about environment placeholder</p>
                    <h3>Our Thoughts:</h3>
                    <p>Information out thoughts placeholder</p>
                </div>
            )
        },
        {
            content: (
                <div>
                    <h2>Next question</h2>
                    <p>Placeholder</p>
                </div>
            )
        },
        {
            content: (
                <div>
                    <h2>Next question</h2>
                    <p>Placeholder</p>
                </div>
            )
        },
    ],
    section3: [
        {
            content: (
                <div>
                    <h2>Welcome to Merrill College!</h2>
                    <img class="merrill"
                        src="./img/"
                        alt="">
                    </img>
                    <p>Placeholder</p>
                    <h3>Core Course:</h3>
                    <p>Information about core course placeholder</p>
                    <h3>Environment: </h3>
                    <p>Information about environment placeholder</p>
                    <h3>Our Thoughts:</h3>
                    <p>Information out thoughts placeholder</p>
                </div>
            )
        },
        {
            content: (
                <div>
                    <h2>Next question</h2>
                    <p>Placeholder</p>
                </div>
            )
        },
        {
            content: (
                <div>
                    <h2>Next question</h2>
                    <p>Placeholder</p>
                </div>
            )
        },
    ],
    section4: [
        {
            content: (
                <div>
                    <h2>Welcome to Crown College!</h2>
                    <img class="crown"
                        src="./img/"
                        alt="">
                    </img>
                    <p>Placeholder</p>
                    <h3>Core Course:</h3>
                    <p>Information about core course placeholder</p>
                    <h3>Environment: </h3>
                    <p>Information about environment placeholder</p>
                    <h3>Our Thoughts:</h3>
                    <p>Information out thoughts placeholder</p>
                </div>
            )
        },
        {
            content: (
                <div>
                    <h2>Next question</h2>
                    <p>Placeholder</p>
                </div>
            )
        },
        {
            content: (
                <div>
                    <h2>Next question</h2>
                    <p>Placeholder</p>
                </div>
            )
        },
    ],
    section5: [
        {
            content: (
                <div>
                    <h2>Welcome to College Nine!</h2>
                    <img class="nine"
                        src="./img/"
                        alt="">
                    </img>
                    <p>Placeholder</p>
                    <h3>Core Course:</h3>
                    <p>Information about core course placeholder</p>
                    <h3>Environment: </h3>
                    <p>Information about environment placeholder</p>
                    <h3>Our Thoughts:</h3>
                    <p>Information out thoughts placeholder</p>
                </div>
            )
        },
        {
            content: (
                <div>
                    <h2>Next question</h2>
                    <p>Placeholder</p>
                </div>
            )
        },
        {
            content: (
                <div>
                    <h2>Next question</h2>
                    <p>Placeholder</p>
                </div>
            )
        },
    ],
    section6: [
        {
            content: (
                <div>
                    <h2>Welcome to John R. Lewis College!</h2>
                    <img class="jrl"
                        src="./img/"
                        alt="">
                    </img>
                    <p>Placeholder</p>
                    <h3>Core Course:</h3>
                    <p>Information about core course placeholder</p>
                    <h3>Environment: </h3>
                    <p>Information about environment placeholder</p>
                    <h3>Our Thoughts:</h3>
                    <p>Information out thoughts placeholder</p>
                </div>
            )
        },
        {
            content: (
                <div>
                    <h2>Next question</h2>
                    <p>Placeholder</p>
                </div>
            )
        },
        {
            content: (
                <div>
                    <h2>Next question</h2>
                    <p>Placeholder</p>
                </div>
            )
        },
    ],
    section7: [
        {
            content: (
                <div>
                    <h2>Welcome to Kresge College!</h2>
                    <img class="kresge"
                        src="./img/"
                        alt="">
                    </img>
                    <p>Placeholder</p>
                    <h3>Core Course:</h3>
                    <p>Information about core course placeholder</p>
                    <h3>Environment: </h3>
                    <p>Information about environment placeholder</p>
                    <h3>Our Thoughts:</h3>
                    <p>Information out thoughts placeholder</p>
                </div>
            )
        },
        {
            content: (
                <div>
                    <h2>Next question</h2>
                    <p>Placeholder</p>
                </div>
            )
        },
        {
            content: (
                <div>
                    <h2>Next question</h2>
                    <p>Placeholder</p>
                </div>
            )
        },
    ],
    section8: [
        {
            content: (
                <div>
                    <h2>Welcome to Porter College!</h2>
                    <img class="porter"
                        src="./img/"
                        alt="">
                    </img>
                    <p>Placeholder</p>
                    <h3>Core Course:</h3>
                    <p>Information about core course placeholder</p>
                    <h3>Environment: </h3>
                    <p>Information about environment placeholder</p>
                    <h3>Our Thoughts:</h3>
                    <p>Information out thoughts placeholder</p>
                </div>
            )
        },
        {
            content: (
                <div>
                    <h2>Next question</h2>
                    <p>Placeholder</p>
                </div>
            )
        },
        {
            content: (
                <div>
                    <h2>Next question</h2>
                    <p>Placeholder</p>
                </div>
            )
        },
    ],
    section9: [
        {
            content: (
                <div>
                    <h2>Welcome to Rachel Carson College!</h2>
                    <img class="rcc"
                        src="./img/"
                        alt="">
                    </img>
                    <p>Placeholder</p>
                    <h3>Core Course:</h3>
                    <p>Information about core course placeholder</p>
                    <h3>Environment: </h3>
                    <p>Information about environment placeholder</p>
                    <h3>Our Thoughts:</h3>
                    <p>Information out thoughts placeholder</p>
                </div>
            )
        },
        {
            content: (
                <div>
                    <h2>Next question</h2>
                    <p>Placeholder</p>
                </div>
            )
        },
        {
            content: (
                <div>
                    <h2>Next question</h2>
                    <p>Placeholder</p>
                </div>
            )
        },
    ],
    section10: [
        {
            content: (
                <div>
                    <h2>Welcome to Oakes College!</h2>
                    <img class="oakes"
                        src="./img/"
                        alt="">
                    </img>
                    <p>Placeholder</p>
                    <h3>Core Course:</h3>
                    <p>Information about core course placeholder</p>
                    <h3>Environment: </h3>
                    <p>Information about environment placeholder</p>
                    <h3>Our Thoughts:</h3>
                    <p>Information out thoughts placeholder</p>
                </div>
            )
        },
        {
            content: (
                <div>
                    <h2>Next question</h2>
                    <p>Placeholder</p>
                </div>
            )
        },
        {
            content: (
                <div>
                    <h2>Next question</h2>
                    <p>Placeholder</p>
                </div>
            )
        },
    ],
};

// this is the game (patrick helped with react state)
function Game() {
    // keep track of current question
    const [currentSection, setCurrentSection] = useState(null);
    const [currentStep, setCurrentStep] = useState(0);

    // moving to next question
    const handleNext = () => setCurrentStep((prev) => prev + 1);

    // going back to main menu
    const handleBack = () => {
        setCurrentSection(null);
        setCurrentStep(0);
    };

    return (
        <div class="minor-section">
            {currentSection === null ? (
                // main menu
                <div>
                    <p>Here at UCSC we all have to make an important decision... What college you are in! We have ten
                        awesome colleges to choose from. When picking your college keep in mind that not only is this a
                        place for you to live you will also be taking a course dedicated to your college!</p>
                    <p> With that in mind, What college will you pick?</p>
                    <button onClick={() => setCurrentSection('section1')}>Stevenson College</button>
                    <button onClick={() => setCurrentSection('section2')}>Cowell College</button>
                    <button onClick={() => setCurrentSection('section3')}>Merrill College</button>
                    <button onClick={() => setCurrentSection('section4')}>Crown College</button>
                    <button onClick={() => setCurrentSection('section5')}>College Nine</button>
                    <button onClick={() => setCurrentSection('section6')}>John R. Lewis College</button>
                    <button onClick={() => setCurrentSection('section7')}>Kresge College</button>
                    <button onClick={() => setCurrentSection('section8')}>Porter College</button>
                    <button onClick={() => setCurrentSection('section9')}>Rachel Carson College</button>
                    <button onClick={() => setCurrentSection('section10')}>Oakes College</button>
                </div>
            ) : (
                // buttons! (patrick helped) 
                <div>
                    <button onClick={handleBack}>Back</button>
                    <div>{sections[currentSection][currentStep].content}</div>
                    {currentStep < sections[currentSection].length - 1 && (
                        <button onClick={handleNext}>Next</button>
                    )}
                </div>
            )}
        </div>
    );
}


ReactDOM.render(<Game />, document.getElementById('game-root'));