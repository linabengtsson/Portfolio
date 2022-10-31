import Stockholm from "../images/location5.png"
import phone from "../images/phone3.png"
import email from "../images/email.png"
import linkedin from "../images/linkedin.png"
import github from "../images/github.png"
import photoMe from "../images/IMG_1212.jpg"
import arrow from "../images/img_98761.png"

function ContactView() {
    return (
<body>
    <div id="container">
        <main>
            <section>
                <h1>Contact me</h1>
                <div class='portrait'>
                    <img src={photoMe} alt="Me with Hong Kong in the background" width="350"/> 
                </div>

                <article class="articleContact">
                    <img class="picture" src={Stockholm} alt="Location logo" width="33"/>
                    <p> Stockholm, Sweden </p>
                    <img class="picture2" src={phone} alt="Phone logo" width="35"/>
                    <p> Phone: +46 722 098306 </p>
                    <img class="picture2" src={email} alt="Email logo" width="35"/>
                    <p> Email: linabengtsson98@hotmail.com </p>
                    <img class="picture2" src={linkedin} alt="LinkedIn logo" width="30"/>
                    <p> <a href="https://www.linkedin.com/in/lina-bengtsson-921704174/" target="_blank"> My LinkedIn</a> <img src={arrow} alt="Me with Hong Kong in the background" height="10px"/> </p>
                    <img class="picture2" src={github} alt="Github logo" width="30"/>
                    <p> <a href="https://github.com/linabengtsson" target="_blank"> My Github </a> <img src={arrow} alt="Arrow" height="10px"/> </p>
                </article>
                <footer>
                    
                </footer>
            </section>                 
        </main>      
    </div>
</body>
    )
  }
export default ContactView;