import FrontPicture from "../images/IMG_0447.jpg"
import NasdaqInternship from "../images/Skärmavbild 2022-09-05 kl. 18.43.55.png"
import Nospendo from "../images/Skärmavbild 2022-09-01 kl. 14.19.37.png"
import MentalHealth from "../images/Skärmavbild 2022-09-01 kl. 16.23.16.png"
import LearningDash from "../images/Skärmavbild 2022-08-31 kl. 15.10.05.png"
import Homekey from "../images/Skärmavbild 2022-08-31 kl. 15.08.07.png"
import Fallingfood from "../images/fallingfoodpic-1-507x1024.png"
import Foodiemoodie from "../images/foodiemoodie.png"

function HomeView() {
    return (
<body>
    <div id="container">
        <main>
            <section>
                <div class= 'portraitHome'>
                    <img src={FrontPicture} alt="Me standing on a rooftop" width="300"/>
                </div>
                <article class="home">
                    <h1>LINA BENGTSSON</h1>
                    <h3> M.Sc.Eng. Student in Interactive Media Technology at KTH </h3>
                    <button class="buttonAbout"><a href="/#portfolio">Read my Portfolio</a></button>
                </article>
            </section>
            <section class="sectionPortfolio" id="portfolio">
                <h1>Explore my previous projects</h1>
    
                <article class="articlePortfolio">
                    <div class="article1">
                        <div class='project' >
                            <div class="gallery">
                            <img class="photos" src={NasdaqInternship} alt="Internship project" width="380" />
                            <p class="words"> In my internship at Nasdaq, I created a vision for a future on-demand Help Center. I created User Personas and a wireframe. </p>
                            </div>
                        </div>
                        <div class='project' >
                        <div class="gallery">
                            <img class="photos" src= {Foodiemoodie} alt="Nospendo homepage" width="400" />
                            <p class="words"> Foodie Moodie is a restaurant-browsing application which allows you to login and save your favorite restaurants. You can visit the application without logging in. You can also login as a Restaurant Owner and upload your own restaurants. </p>
                        </div> 
                        </div> 
                        <div class='project' >
                        <div class="gallery">
                            <img class="photos" src={MentalHealth} alt="MentalHealth homepage" width="400" />
                            <p class="words"> Mental Health Guide is a webpage we designed and programmed for THS international (the Student Union at KTH) to get extra points for the exchange studies.</p>
                        </div> 
                        </div>
                    </div>
                    <div class="article2">
                        <div class='project' >
                        <div class="gallery">
                            <img class="photos" src={LearningDash} alt="Learning dashboard" width="400" />
                            <p class="words"> In my bachelor's thesis, we created a visualization of a learning dashboard according to student's opinions. </p>
                        </div> 
                        </div> 
                        <div class='project' >
                        <div class="gallery">
                            <img class="photos" src= {Nospendo} alt="Nospendo homepage" width="400" />
                            <p class="words"> Nospendo is a simulation of a regular shopping webpage, except that the money goes to charity instead. </p>
                        </div> 
                        </div> 
                        <div class='project' >
                        <div class="gallery">
                            <img class="photos" src={Homekey} alt="Homekey homepage" width="110" />
                            <p class="words">HomeKey is a solution for introverts living in student housing who easily wants to meet their friends. </p>
                        </div> 
                        </div> 
                    </div>
                    <div class='project' >
                        <div class="gallery">
                            <img class="photos" src={Fallingfood} alt="Fallingfood homepage" width="110" />
                            <p class="words">Falling Food is a game created with Swift in Xcode to examine the haptic and auditory feedback. </p>
                        </div>
                        </div> 
                </article>
                <footer>
                   <p> </p> 
                </footer>
            </section>                    
        </main>      
    </div>
</body>
    )
  }
export default HomeView;


