import {ModalPresenter, FrontPicture, NasdaqInternship, Nasdaq1, Nasdaq2, Nasdaq3, Foodiemoodie, 
    Foodiemoodie1, Foodiemoodie2, Foodiemoodie3, MentalHealth, MentalHealth1, MentalHealth2, MentalHealth3, TidyUp, Tidy1, Tidy2,
    Tidy3, Designp, Designp1, Designp2, Designp3, LearningDash, LearningDash2, LearningDash3, Nospendo, Homekey, Fallingfood
    } from './importsHomeView.js'

const HomeView = ({ modalShow, setModalShow, title, setTitle,
    image1, setImage1, image2, setImage2, image3, setImage3,
    text, setText, file, setFile, buttonName, setButtonName}) => {

    return (

    <div id="container">
        <main>
            <section>
                <div class= 'portraitHome'>
                    <img src={FrontPicture} alt="Me standing on a rooftop" width="300"/>
                </div>
                <article class="home">
                    <h1>LINA BENGTSSON</h1>
                    <h3> M.Sc.Eng. Student in Interactive Media Technology at KTH </h3>
                    <button class="buttons"><a href="/#portfolio">Read my portfolio</a></button>
                </article>
            </section>
            <section class="sectionPortfolio" id="portfolio">
                <h1>Explore my previous projects</h1>
                <h3> (aside from this portfolio) </h3>
                <article class="articlePortfolio">
                    <div class="article1">

                        {/* NASDAQ */}
                        <div className='project' >
                            <div class="gallery">
                            <img class="photos" src={NasdaqInternship} alt="Internship project" width="380" />
                            <p class="words"> In my internship at Nasdaq, I created a vision for a future on-demand Help Center. 
                            I created User Personas and a wireframe based on interviews. &nbsp;
                            <a class="readMore"
                                onClick={() => {setModalShow(true)
                                                setTitle("Nasdaq Summer Internship 2022")
                                                setImage1(Nasdaq1)
                                                setImage2(Nasdaq2)
                                                setImage3(Nasdaq3)
                                                setText("During the summer of 2022, I did an internship at Nasdaq where I created a vision for a future on-demand Help Center. I gathered inspiration from other Help Centers. I had meetings with people at Nasdaq, who has great knowledge in the needs of the customers, to create User Personas. I interviewed people internally and externally to understand their view of how a successful Help Center may look. Finally, I summarized highlights and, based on what I have learned, I created a wireframe in Figma of how a future Help Center can look. If you are interested in knowing more, please read the attached PDF below where I have inserted my wireframe with explanations of every decision, and I have also included my user personas at the end. ")
                                                setFile("https://drive.google.com/file/d/1PQKfqL29BbFiqOsBWIVCpmXhG-EncusG/view?usp=sharing")
                                                setButtonName("View PDF")}}>
                                Read More <i class="bi bi-chevron-right"></i>
                            </a></p>
                            </div>
                        </div>

                        {/* FOODIE MOODIE */}
                        <div class='project' >
                        <div class="gallery">
                            <img class="photos" src= {Foodiemoodie} alt="Nospendo homepage" width="400" />
                            <p class="words"> Foodie Moodie is a restaurant-browsing application which allows you to login and save 
                            your favorite restaurants. You can visit the application without logging in. You can also login as a 
                            Restaurant Owner and upload your own restaurants. &nbsp;
                            <a class="readMore"
                                onClick={() => {setModalShow(true)
                                    setTitle("Foodie Moodie 2022")
                                    setImage1(Foodiemoodie1)
                                    setImage2(Foodiemoodie2)
                                    setImage3(Foodiemoodie3)
                                    setText("Foodie Moodie is a restaurant-browsing application which we developed during a course in my master. Me and a friend took responsibility over the frontend programming and the application is mostly written in Typescript and SCSS. Foodie Moodie is a restaurant-browsing application which allows you to login and save your favorite restaurants. You can visit the application without logging in; however, you need to be logged in to be able to save your favorite restaurants. The applications has two kinds of users: Regular User and Owner. Foodie Moodie also has dark mode available. ")
                                    setFile("0")
                                    setButtonName("0")}}>
                                Read More <i class="bi bi-chevron-right"></i>
                            </a></p>                      
                        </div> 
                        </div> 

                        {/* MENTAL HEALTH */}
                        <div class='project' >
                        <div class="gallery">
                            <img class="photos" src={MentalHealth} alt="MentalHealth homepage" width="400" />
                            <p class="words"> Mental Health Guide is a webpage we designed and programmed for THS international 
                            (the Student Union at KTH) to get extra points for the exchange studies. &nbsp;
                            <a class="readMore"
                                onClick={() => {setModalShow(true)
                                    setTitle("Mental Health Guide 2021")
                                    setImage1(MentalHealth1)
                                    setImage2(MentalHealth2)
                                    setImage3(MentalHealth3)
                                    setText("Mental Health Guide is a webpage created in 2021 in Javascript by me and a friend. We got a chance to receive a higher mean grade score before our exchange studies if we created this webpage for THS international (the Student Union at KTH), which we gladly did. Our focus was to create a calming webpage design. Please have a look at the code at Github by pressing the button below. Through Github you can reach the webpage through the link on the right.  ")
                                    setFile("https://github.com/johannanilsen/Mental-Health-Guide?fbclid=IwAR177rhiyQSR5g3e2IC5kQYUCeclylkQabIdUG3LDsnFE2vOXRX_aaTXI_0")
                                    setButtonName("Open Github with link to webpage")}}>
                                Read More <i class="bi bi-chevron-right"></i>
                            </a></p> 
                        </div> 
                        </div>
                    </div>

                    <div class="article2">

                        {/* TIDY UP */}
                        <div class='project' >
                        <div class="gallery">                         
                            <img class="photos" src={TidyUp} alt="TidyUp homepage" width="110" />
                            <p class="words">Tidy Up is an extension to the iPhone photo album which helps people to delete their
                            images and videos. The goal was to design for sustainable data and minimize the dark data. &nbsp;
                            <a class="readMore"
                                onClick={() => {setModalShow(true)
                                    setTitle("Tidy Up 2023")
                                    setImage1(Tidy1)
                                    setImage2(Tidy2)
                                    setImage3(Tidy3)
                                    setText("Tidy Up helps people delete their photos and movies. Instead of being its own application, it is an extension to the iPhone Photo Album to make it easily accessible and trustworthy. This was a solo project where my goal was design for sustainable data and minimize the unnecessary dark data. I created a questionnaire to understand what people think of the process of deleting photos on their phone and what could help them do it more often. Focus was to understand their motivation to delete photos. I then created a wireframe, which I got feedback on. I then created another wireframe according to the feedback and later an interactive prototype. If you are interested, please take a look at the Figma file to see the process. ")
                                    setFile("https://www.figma.com/file/glXkVpCBi86l72QGwmf5z6/UX-Design-%26-Evaluation?node-id=0%3A1&t=IiFEJ9gRqb00ziKR-1")
                                    setButtonName("View Figma")}}>
                                Read More <i class="bi bi-chevron-right"></i>
                            </a></p>
                        </div> 
                        </div> 

                        {/* DESIGN PORTFOLIO */}
                        <div class='project' >
                        <div class="gallery">
                            <img class="photos" src= {Designp} alt="Design portfolio" width="400" />
                            <p class="words"> We receive a few design challanges in a group of three, which were all compiled after they had been finished 
                            into a design portfolio. &nbsp;
                            <a class="readMore"
                                onClick={() => {setModalShow(true)
                                    setTitle("Tidy Up 2023")
                                    setImage1(Designp1)
                                    setImage2(Designp2)
                                    setImage3(Designp3)
                                    setText("In the course UX design and evaluation did we work together in a group of three and had to create solutions for a few design challenges. Our result were compiled into a design portfolio, which allows the user to scroll through the different design challenges and our solutions. ")
                                    setFile("0")
                                    setButtonName("0")}}>
                                Read More <i class="bi bi-chevron-right"></i>
                            </a></p>
                        </div> 
                        </div> 

                        {/* LEARNING DASHBOARD */}
                        <div class='project' >
                        <div class="gallery">
                            <img class="photos" src={LearningDash} alt="Learning dashboard" width="400" />
                            <p class="words"> In my bachelor's thesis, me and a friend created a visualization of a learning dashboard according 
                            to student's opinions. Students was invited to take part of a workshop, where they got to discuss and paint 
                            their ideas together. &nbsp;
                            <a class="readMore"
                                onClick={() => {setModalShow(true)
                                    setTitle("Bachelor's thesis 2021")
                                    setImage1(LearningDash)
                                    setImage2(LearningDash2)
                                    setImage3(LearningDash3)
                                    setText("In my Bachelor’s Thesis did me and a friend examine how students think a Learning Dashboard should be designed and if they would find that helpful. Our design process contained a workshop, creation of an interactive prototype and an interview. The workshop was held with other students, where they could discuss and paint their ideas. The result of the workshop can be seen in the second and third image above. The interactive prototype is based on the student’s wishes.  The Learning Dashboard was considered to be helpful if it would have been realized. To read our bachelor’s thesis, please click on the link below.")
                                    setFile("http://www.diva-portal.org/smash/record.jsf?dswid=2304&pid=diva2%3A1582910&c=6&searchType=SIMPLE&language=sv&query=learning+dashboard&af=%5B%5D&aq=%5B%5B%5D%5D&aq2=%5B%5B%5D%5D&aqe=%5B%5D&noOfRows=50&sortOrder=author_sort_asc&sortOrder2=title_sort_asc&onlyFullText=false&sf=all")
                                    setButtonName("View Bachelor's Thesis")}}>
                                Read More <i class="bi bi-chevron-right"></i>
                            </a></p> 
                        </div> 
                        </div> 
                    </div>

                    <div class="article3">
                        <div class='project' >
                        <div class="gallery">
                            <img class="photos" src= {Nospendo} alt="Nospendo homepage" width="400" />
                            <p class="words"> Nospendo is a simulation of a regular shopping webpage, except that the money goes to charity instead.
                            In a group of four, we created our first webpage with Javascript, HTML and CSS. </p>
                        </div> 
                        </div> 
                        <div class='project' >
                        <div class="gallery">
                            <img class="photos" src={Homekey} alt="Homekey homepage" width="110" />
                            <p class="words">HomeKey is a solution for introverts living in student housing who easily wants to meet their friends. The 
                            application contains a key function, which allows your friends for a limited time have access to open the door to your
                            student house. </p>
                        </div> 
                        </div> 
                        <div class='project' >
                            <div class="gallery">
                                <img class="photos" src={Fallingfood} alt="Fallingfood homepage" width="110" />
                                <p class="words">Falling Food is a game created with Swift in Xcode to examine the haptic and auditory feedback. Four 
                                different version with different combinations of haptic and auditory feedback was created, and then we tested the different
                                versions on people to see which they prefered. </p>
                            </div>
                        </div> 
                        <ModalPresenter 
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                                title={title}
                                image1={image1}
                                image2={image2}
                                image3={image3}
                                text={text}
                                file={file}
                                buttonName={buttonName}
                        />                      
                    </div>
                </article>
                <footer>
                   <p> </p> 
                </footer>
            </section>                    
        </main>      
    </div>

    )
  }
export default HomeView;


