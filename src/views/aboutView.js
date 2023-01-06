import imageCV from "../images/Jag_CVbild.jpg"

function AboutView() {
    return (
<body>
    <div id="container">
        <main>
            <section class="sectionAbout">
                
                <div class='imgAbout'>
                    <img class="portraitAbout" src={imageCV} alt="Close-up of me" width="350"/>   
                </div>

                <article class="articleAbout">

                    <h1>Welcome to my portfolio! </h1>
                    <p>My name is Lina and I am a M.Sc.Eng. Student in Interactive Media Technology at KTH. 
                        I am curious about User Experience and Frontend programming, which is why I have chosen to focus on Human-Computer Interaction in my Master.
                        One of my interests is to travel because I like to learn about other cultures. 
                        This spring I went on an exchange study to Hong Kong, and the images on my Home page and Contact page is from my time abroad. 
                        I also like to spend time with friends and family, read a book or watch a great tv-serie. </p>
                    <p>I will graduate in June 2023 after written my master thesis at Nasdaq.
                        You can read my CV if you want to know more about me, or you can also contact me!</p>
                    <button class="buttons"> <a href="https://drive.google.com/file/d/1xBFdSxb0cEMxaYBSZiizTPUmxtjDJbS1/view?usp=sharing" target="_blank">Read my CV</a></button>
                </article>
                <footer>
                    
                </footer>
            </section>                 
        </main>      
    </div>
</body>
    )
  }
export default AboutView;