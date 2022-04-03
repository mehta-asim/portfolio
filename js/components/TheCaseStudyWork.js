export default{
    name: "TheCaseStudyWork",

    template:`
    <section class='caseStudyWork'>
                <h2 class='hidden'>Case Study Section</h2>
                <section id='caseStudySelect'>
                    <h3 class="hidden">Case Study Select Section</h3>
                    <ul>
                        <li id='work-link' @click='caseStudyWork'>WORK</li>
                        <li id='personal-link' @click='caseStudyPersonal'>PERSONAL</li>
                    </ul>
                </section>

                <section id='caseStudyDesc'>
                    <h3 class="hidden">Case Study Description</h3>
                    <section id='caseStudyBrief'>
                        <h4 class="hidden">Case Study Brief</h4>
                        <section id='briefIntro'>
                            <h5>Amazon Prime Music Pitch</h5>
                            <img src="images/prime-music-logo.png" alt="logo of prime music">
                        </section>
                        <p>The <span id='boldWord'>brief</span> was to create a new marketing strategy for their Indian
                            Property to drive more users towards using the app and making their default music streaming
                            app.</p>
                    </section>

                    <section id="caseStudySolution">
                        <h4 class="hidden">Case Study Solution Section</h4>
                        <p>Our <span id='boldWord'>solution</span> was to think of interactive and engaging ideas for
                            social media platforms like
                            Instagram, Facebook, Twitter which would convert followers into users.</p>
                        <img src="images/prime-solution.svg" alt="logo of prime music with the text happy sharing">
                    </section>

                    <section id="caseStudyExecution">
                        <h4 class="hidden">Case Study Execution Section</h4>
                        <img id='executionImage' src="images/prime-execution.svg"
                            alt="logo of prime music with the text happy sharing">

                        <section id="executionDesc">
                            <p>Our <span id='boldWord'>execution</span> focused mainly on using different languages to
                                show the different genres of music available on the app.</p>

                            <ul>
                                <li><img src="images/char-a.svg" alt="image of an alphabet A "></li>
                                <li><img src="images/char-k-devanagri.svg"
                                        alt="image of the K character in devanagri script"></li>
                                <li><img src="images/char-tamil.svg" alt="image of a character in tamil script"></li>
                            </ul>
                        </section>
                    </section>

                    <section id="caseStudyWork">
                        <h4 class='hidden'>Case Study Work Samples Section</h4>
                        <h5>work samples</h5>
                        <section id="workSamples">
                            <video controls>
                                <source src='videos/prime-work-1.mp4'>
                            </video>
                            <video controls>
                                <source src='videos/prime-work-2.mp4'>
                            </video>
                            <video controls>
                                <source src='videos/prime-work-3.mp4'>
                            </video>

                        </section>
                    </section>


                </section>

            </section>
    `,
    methods:{
        caseStudyWork(){
            console.log('clicked work');


          },
          caseStudyPersonal(){
            document.querySelector('.caseStudyPersonal').style.display="flex";
            document.querySelector('.caseStudyWork').style.display="none";
            document.querySelector('#personal-link').style.backgroundColor = "black";
            document.querySelector('#personal-link').style.color = "white";
            document.querySelector('#work-link').style.backgroundColor = "none";
            document.querySelector('#work-link').style.color = "black";
            

          },
        
    } 
};