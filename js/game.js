
const { useState } = React;

// questions
const sections = {
    section1: [
        { content: (
            <div>
                <h2>Step 1: Introduction to Topic 1</h2>
                <p>This is the first step of Topic 1.</p>
            </div>
        ) },
        { content: (
            <div>
                <h2>Step 2: More details about Topic 1</h2>
                <p>This is the second step of Topic 1.</p>
            </div>
        ) },
        { content: (
            <div>
                <h2>Step 3: Conclusion of Topic 1</h2>
                <p>This is the third step of Topic 1.</p>
            </div>
        ) },
    ],
    section2: [
        { content: (
            <div>
                <h2>Step 1: Introduction to Topic 2</h2>
                <p>This is the first step of Topic 2.</p>
            </div>
        ) },
        { content: (
            <div>
                <h2>Step 2: More details about Topic 2</h2>
                <p>This is the second step of Topic 2.</p>
            </div>
        ) },
        { content: (
            <div>
                <h2>Step 3: Conclusion of Topic 2</h2>
                <p>This is the third step of Topic 2.</p>
            </div>
        ) },
    ],
    section3: [
        { content: (
            <div>
                <h2>Step 1: Introduction to Topic 3</h2>
                <p>This is the first step of Topic 3.</p>
            </div>
        ) },
        { content: (
            <div>
                <h2>Step 2: More details about Topic 3</h2>
                <p>This is the second step of Topic 3.</p>
            </div>
        ) },
        { content: (
            <div>
                <h2>Step 3: Conclusion of Topic 3</h2>
                <p>This is the third step of Topic 3.</p>
            </div>
        ) },
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
                    <button onClick={() => setCurrentSection('section10')}>Oaks College</button>
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