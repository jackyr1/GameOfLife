
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
                    <p>Stevenson has an absolutely beautiful view and an amazing environment, there are many types 
                        of people here however there is a large amount of “gym bros” due to how close the gym is. 
                        It is a pretty social college and is also located near the Stevenson/Cowell dining hall. The 
                        two Stevenson core classes were a little intense, with a lot of reading, but it did count for 
                        a Textual analysis GE. The dorms are a little cramped, but the apartments have a lot of room. 
                        It’s in a great location that has the most beautiful views of the ocean. The college is pretty 
                        rowdy and many people stay up late so if you're looking for a quiet place Stevenson probably 
                        isn't for you.
</p>
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
                    <p>Congrats on choosing Cowell College, this college was founded in 1965, and named after Henry Cowell 
                        and his family, who lived on the land that is now UCSC. Cowell was the first residential college of
                        UCSC and unlike the other residence halls, Cowell has not a theme but a motto: “The Pursuit of Truth 
                        in the Company of Friends” Cowell’s sister college is Stevenson College, meaning the college are very 
                        close to each other with similar or complementary themes and often do events together.  </p>
                    <h3>Core Course:</h3>
                    <p>Cowell’s Core Course is Imagining Justice Past and Present. It focuses on understanding concepts of 
                        justice throughout time and examines how theorists, artistic media, and societies themselves define what 
                        is just. The course encourages students to examine their own definition of justice and compare it to 
                        questions of justice historically and contemporarily.</p>
                    <h3>Environment: </h3>
                    <p>CCowell College, located next to Stevenson has some of the best views on campus as it overlooks Eastfield 
                        and the bay of Santa Cruz. Like Stevenson, Cowell is also known for its proximity to the gym, which is a 
                        big plus for any students wanting easy access to the facilities offered by the rec center. Cowell also 
                        shares the Cowell and Stevenson dining hall and are known as one of the best dining halls on campus. 
                        This college has a lot of places to hang out and enjoy the view, or get some studying done. The Cowell 
                        Library is a favorite of these locations called the Page Smith Library, which is named after the first 
                        Cowell Provost. It also is the home to the Eloise Pickard Smith Gallery which focuses on art within the 
                        central coast and creates exhibits that focus on subjects that are pertinent to the College. The Cowell 
                        dorms are located close to the dining hall and Cowell cafe which is free for all students who check-in, 
                        the food there is organic and locally sourced! so it's very convenient for easy meals. Cowell offers a 
                        variety of dorm rooms and apartments, and themed floors in each residence hall. Cowell is also known for 
                        its close proximity to Quarry Plaza, the center of campus, which is great for students who want to feel 
                        connected to campus life and events. Cowell is also close to the Philosophy department and the Language 
                        departments and is located near the Humanities building meaning a lot of students with these passions 
                        choose this college.</p>
                    <h3>Our Thoughts:</h3>
                    <p>Cowell College is in a beautiful location, close to the center of campus, and known for its sense of community. 
                        Cowell is known for having affiliates that are in Fraternities as well as frequent gym goers. If you are a 
                        fan of high-energy people and want to have a great time Cowell would be a great place for you!</p>
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
                    <p>Congrats on choosing Merrill College, this college was founded in 1968 and was named after Charles E. 
                        Merrill Jr., who was an educator and philanthropist. Merrill College is known for its strong emphasis 
                        on social justice, diversity, and global awareness. Merril’s sister college is Crown College, meaning 
                        the colleges are very close to each other with similar or complementary themes and often do events 
                        together. Its theme is cultural identities and global consciousness and highlights interdisciplinary 
                        approaches to understanding societal issues and encourages students to engage with their local and global 
                        communities. Merrill is located on top of a steep incline hill, so living in Merrill will definitely build 
                        those “UC sexy calves.” </p>
                    <h3>Core Course:</h3>
                    <p>Merrill’s core course is called Cultural Identities and Global Consciousness, it focuses on studying people's 
                        struggles to preserve their cultural identities while also working on social change all over the world. The 
                        course encourages students to become more globally conscious and further their understanding while being a student. </p>
                    <h3>Environment: </h3>
                    <p>The environment within Merrill is very community-based and fun. You have to be somewhat athletic to live here 
                        because of the steep hill that you have to climb to get to the college. It is not the most social of the colleges, 
                        but it does have a pretty active nightlife. There is a really cool forest spot near Merrill called the Tuck, which 
                        hosts forest raves and forest events from time to time. Merrill shares a dining hall with its sister college, Crown, 
                        however, they also have one of the most delicious and popular late-night dining services, Banana Joe’s located right 
                        next to the dining hall. Banana Joe’s is always bustling and many UCSC students love to go here for a late-night snack, 
                        even ones not in the area. Merrill also has the Merrill Pottery Co-op, an amazing pottery studio that provides many 
                        pottery supplies! The KZSC radio station is also located nearby and is super popular for interested students! Merrill 
                        also has a cultural center that holds theater performances, lectures, and other large-scale events. </p>
                    <h3>Our Thoughts:</h3>
                    <p>Merrill has a lot of fun stuff to do however it is still filled with “quit nerds” as many have put it. Many people are 
                        super nice and love living there however a lot of the dorms are pretty small. Even with the hill we still find ourselves 
                        going up and spending time going to Banana Joes, the Pottery Co-op or just hanging out! </p>
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
                    <p>Congrats on choosing Crown College, this college was founded in 1967 and was the third of the residential colleges 
                        to be built on campus. Crown’s theme is Exploring Ethics in Emerging Science and Technology which emphasizes a 
                        focus on ethical and inclusive living and learning. Crown’s sister college is Merrill College, meaning the colleges 
                        are very close to each other with similar or complementary themes and often do events together.</p>
                    <h3>Core Course:</h3>
                    <p>Crown’s core course,  Ethical and Political Implications in Emerging Technologies, lasts one quarter and builds on 
                        Crown's theme. This course is meant to be an introduction to university discourse and will cover topics surrounding 
                        ethics and the transformation of the world due to new technologies.  </p>
                    <h3>Environment: </h3>
                    <p>Located on a hill deemed Cardiac Hill at the very top of campus, Crown is guaranteed to give students substantial leg 
                        muscles by the end of their first year. Crown is surrounded by forest making it very beautiful, it is known to be a 
                        relatively quiet community seeing as many of its residents are game design or computer programming majors. Crown is 
                        only a short distance from Merrill Market and the quad surrounding it, the market is a great place to get snacks, 
                        cooking ingredients, or even coffee from its small cafe area. The quad itself is a very nice place to study or hang 
                        out with friends, with its sunny lawn area and a few tables surrounding it. Crown is also very close to Banana Joe’s, 
                        the only place on campus that stays open until 11 PM and serves some very tasty burgers, fries, pizzas, and desserts. 
                        Aside from Cardiac Hill Crown’s only other downside is the fact that there is only one bus stop located right at the 
                        bottom of the hill, if you happen to be on the wrong side of the road on your bus ride you will have to walk from the 
                        College Nine or Stevenson bus stop to get back to Crown.	</p>
                    <h3>Our Thoughts:</h3>
                    <p>Overall, Crown is a good place for someone looking for a chill environment to live in and comes with the perks of 
                        having a market and a late-night place to get food easily. Although it does have the downside of one bus stop and the 
                        hill, you are still guaranteed to have amazing legs, and good food while living in the dorms. If you are someone who 
                        majors in computer science or game design or just someone who enjoys those topics then Crown would definitely be great 
                        for you and you'd be able to make some friends with similar interests. </p>
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
                    <p>Congrats on choosing College Nine! This college was founded in 2000 making it one of the newest 
                        residential halls on campus. Its theme is International and Global Perspectives, which 
                        emphasizes the importance of cultural competency and focuses on issues such as economic 
                        globalization, environmental degradation, human rights, and international and ethnic conflicts. 
                        College Nine’s sister college is John R Lewis meaning the colleges are very close to each other 
                        with similar or complementary themes and often have events together.  </p>
                    <h3>Core Course:</h3>
                    <p>College Nine’s core course, International and Global Issues, combines the teaching of writing, 
                        reading, and critical thinking skills while expanding on the college’s theme of cultural understanding 
                        by analyzing and discussing contemporary global issues.</p>
                    <h3>Environment: </h3>
                    <p>College Nine is located at the top of campus and is known as the international student housing at UCSC. 
                        As with everywhere on campus, College Nine is surrounded by redwoods and wildlife sightings are common. 
                        Being located at the top of campus, College Nine is flanked by the redwood forest, which provides close 
                        hiking trails, and even forest raves! Tree Nine is one of the most well-known locations of UCSC’s famed 
                        forest raves and is only a short walk into the woods from College Nines residence halls. College Nine also 
                        has one of the only dining halls to offer late-night dining every day of the week including weekends. It’s 
                        also one of the dining halls with the most options in terms of variety of food. Being located at the top of 
                        campus, walking anywhere on campus from college nine is guaranteed to be downhill which makes for an easy 
                        time getting to class. However, coming back is guaranteed to be all uphill, but this can be avoided by taking 
                        the bus to the college nine stop which saves you most of the uphill walk. As for study spots, College Nine has 
                        two lounges located near its residence halls, one even has a vending machine. There is also a little cafe located 
                        above the dining hall which has a nice inside area as well as a sunny outside patio. Both are very nice places to study.</p>
                    <h3>Our Thoughts:</h3>
                    <p>College Nine is overall a very chill place to live aside from the raves, there are many chill places to study and the 
                        dining hall is deemed one of the best on campus. The people there are super inclusive and friendly and, as mentioned, 
                        there are a lot of hiking trails! The trails from college nine are absolutely amazing and super beautiful, 
                        even non-affiliated students should check them out.</p>
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
                    <p>Congrats on choosing John R. Lewis College which is also known as JRL and College 10! This college was founded in 
                        2002 and has a theme of Social Justice and Community. JRL’s sister college is College Nine meaning the colleges 
                        are very close to each other with similar or complementary themes and often do events together. </p>
                    <h3>Core Course:</h3>
                    <p>JRL’s core course expands on its theme the goal of promoting and understanding social justice in communities around 
                        the world. It is also meant to improve students' writing, reading, critical thinking, and presenting skills.</p>
                    <h3>Environment: </h3>
                    <p>JRL is located at the top of campus and shares a dining hall with College Nine. It is known as a community of students
                        passionate about social issues and offers a variety of opportunities to engage in social justice practices such as 
                        volunteering abroad or locally. JRL is located just steps away from the student-run Terry Frietas Cafe, which is an 
                        excellent place to study or hang out with friends, and often hosts club gatherings and events. In addition to the 
                        Terry Frietas Cafe JRL’s shared dining hall is one of the only dining halls to offer late-night dining every day 
                        of the week including weekends. It’s also one of the dining halls with the most options in terms of variety of food. 
                        Like College Nine, JRL is also located pretty close to infamous rave spots such as Tree Nine, which is a bit of a walk 
                        into the forest behind c9 and JRL. </p>
                    <h3>Our Thoughts:</h3>
                    <p>JRL is fairly quiet and you do not meet a lot of people who live here but it is super cute and everyone is so nice. 
                        Being next to College Nine and being in the center of everything has a lot of advantages. The trails in those areas are 
                        amazing and work checking out! </p>
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
                    <p>Congrats on choosing Kresge College, this college was founded in 1971. Here they are known for their writing and 
                        theme of Power and Representation, which explores the ways we represent ourselves as individuals in relation to 
                        communities, focusing on representations of class, ethnicity, sexual orientation, gender, and race. Kresge’s sister 
                        college is Porter, unlike other colleges, they’re a little longer distance away from each other.</p>
                    <h3>Core Course:</h3>
                    <p>The core course at Kresge, Power and Representation, is a course in the literature of individual and collective struggles 
                        for social justice, with an emphasis on dialogues about gender identity, anti-racism movements, documentation status, 
                        and immigrants' rights.</p>
                    <h3>Environment: </h3>
                    <p>Kresge is one of our most beautiful and modern colleges here at UCSC. Although all the new is a main attraction to everyone 
                        it is still under construction, meaning it’s very noisy and can be really bothersome but shold be done by at the end of 
                        spring semester 2025! Aside from that, Kresge has a brand new cafe called Owl’s Nest where students can find a yummy vegan 
                        bar filled with many choices, combining to their desire. One of the locations closest to this is Science Hill, a place where 
                        every student is bound to go so it can be pretty convenient being here at Kresge. Like many other places on UCSC you are 
                        surrounded by red woods and beautiful forests and paths. </p>
                    <h3>Our Thoughts:</h3>
                    <p>If you are interested in modern interiors and a lot of natural light, Kresge is definitely one of the nicest colleges here to 
                        dorm in. Within the buildings, they have a lot of chill places to hangout that including couches and even a ping pong table. 
                        As for the people there, they’re surprisingly harder to find/meet around campus, almost like they’re not real. With such pretty 
                        views, interior and exterior this place would be great for someone who really cares about a great environment, but be weary of 
                        the construction! </p>
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
                    <p>Congrats on choosing Porter College, this college was founded in 1969 and was named after the Porter-Sesnon family who donated 
                        a grant. The theme relies on people to express themselves through a creative outlet as it’s one of education's key components 
                        to a happy life. Porter’s sister college is Kresge, both are not located as close to each other as other colleges. </p>
                    <h3>Core Course:</h3>
                    <p>As a Porter affiliate, you are required to take the Porter Core class that lasts just for one quarter. Here you will learn about 
                        the different social and political issues in our world through different media of literature. The course is fairly engaging but 
                        is located in a weird classroom under the dining hall that is hard to find. </p>
                    <h3>Environment: </h3>
                    <p>A glimpse of the ocean can be seen here at Porter where the famous red Porter Squiggle sculpture is located, Porter is actually 
                        the only college with an official mascot. There’s never a dull quiet moment at this college, the places to visit range from our 
                        Koi fish pond to the Porter Meadows with its hidden gem hangout places such as the witches' circle! Porter is also known for their 
                        artsy individuals as it’s one of the closest colleges to the art department buildings and has the History of Art and Visual Culture 
                        department inside! Their theme revolves around creative expressions, whether it be through writing, painting, filming, and more. 
                        Many people here love to show their creativity and expression through art, clothes, interests, and more! Porter is super fun all 
                        the time and has many events. The dining hall is pretty good but is a lot smaller than others and sadly closes at 7:00 PM. Porter 
                        is also home to the transfer community so many transfer students decide to go here! There are also many lounges to study at. One of 
                        the coolest parts of Porter College is the Mary Porter Sesnon Art Gallery, a beautiful art gallery on campus that gives many internships 
                        to students! </p>
                    <h3>Our Thoughts:</h3>
                    <p>This college is perfect for those who would rather spend their time out in the sun with friends or reconnect with Mother Nature. Many 
                        known events are held here at Porter like the first rain run, Porter Palooza, and a special occasion during April of the spring quarter. 
                        As for dorms, all the first years are located in a single building rather than multiple spread out. They’re also a little outdated with 
                        not-so-good bright lighting compared to other colleges. The people at Porter are super nice and are always holding doors open for you and 
                        complimenting outfits! Porter is super social and you are guaranteed to make friends here!</p>
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
                    <p>Congrats on choosing Rachel Carson College also known as RCC, this college was founded in 1972. Its theme is Environment and Society, 
                        which focuses on the environmental issues of the current era within a social, scientific, and political context. RCC is the sister 
                        college of Oaks College meaning the colleges are very close to each other with similar or complementary themes and often do events 
                        together.  </p>
                    <h3>Core Course:</h3>
                    <p>RCC’s core course expands on its theme, focusing on California specifically, and aims to strengthen students' understanding of the 
                        connections between the current environmental crisis and contemporary social systems. </p>
                    <h3>Environment: </h3>
                    <p>Located near the base of campus, RCC is known for its views and its gorgeous dining hall. Its dining hall, shared with oaks, is one 
                        of the only dining halls to offer late-night options every day of the week. It's also the newest dining hall on campus and therefore 
                        quite a sight to see along with its spectacular views of the bay. RCC has a lot of stairs, however, located halfway down these stairs 
                        is a little quad that sometimes hosts arts and crafts events and is a nice place to sit and hang out with friends. It also has a variety 
                        of different spots around the residence halls that have amazing views and benches where students can study or simply watch the sunset. 
                        RCC also has its own indoor volleyball and basketball courts as well as outdoor tennis courts which are a great way to spend time with friends. </p>
                    <h3>Our Thoughts:</h3>
                    <p>RCC is a gorgeous college with a lot to do and fun people however many are known to be in a sorority. The amazing dining hall offers many options 
                        and has a very modern design. The college is very residential looking and gives a lot of students a sense of ease and homeyness. The people at RCC 
                        are also nice and always seem super happy!</p>
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
                    <p>Congrats on choosing Oakes College, this college was founded in 1972 and is located at the base of campus. Its theme is Communicating 
                        Diversity for a Just Society. Oakes' sister college is Rachel Carson, so close they blend and you won’t tell which is which.</p>
                    <h3>Core Course:</h3>
                    <p>The Oakes core course introduces students to the major intellectual, cultural, social, and political themes. It is designed to help 
                        students find their voices and join the ongoing scholarly conversation here at UCSC.</p>
                    <h3>Environment: </h3>
                    <p>Oakes is one of the furthest colleges away from everything on campus but it is super gorgeous. This college is located on the lower side 
                        of campus, which is easy to get to going downhill but a dread when you’re leaving. There’s a beautiful, flat scenic path that goes 
                        straight to the art department buildings. As well as good chill places on the lower and upper lawns found in their college that hold 
                        events like OakesChella and the Multicultural Festival. Oakes is known for their Oakes Cafe, where you can get a variety of scrumptious 
                        sandwiches, Baja Blast, and amazing chicken tenders! The cafe is one of the most popular on campus and many students go there for lunch, 
                        breakfast, or even dinner.</p>
                    <h3>Our Thoughts:</h3>
                    <p>You’ll have the opportunity to walk a lot to get anywhere here at Oakes! If you think dorming on campus feels like a long sleepover or summer 
                        camp, you’ll for sure feel that at Oakes. It is super peaceful with a great environment and friendly people!</p>
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