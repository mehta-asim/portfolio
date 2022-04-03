export default{
    name: "TheCaseStudyPersonal",

    template:`
    <section class='caseStudyPersonal'>
                <h2 class='hidden'>Case Study Section</h2>
                <section id='caseStudySelect'>
                    <h3 class="hidden">Case Study Select Section</h3>
                    <ul>
                        <li id='work-link' @click='caseStudyWork'>WORK</li>
                        <li id='personal-link'>PERSONAL</li>
                    </ul>
                </section>

                <section id='caseStudyDesc'>
                    <h3 class="hidden">Case Study Description</h3>
                    <section id='caseStudyBrief'>
                        <h4 class="hidden">Case Study Brief</h4>
                        <section id='briefIntro'>
                            <h5>Personal Work: Fluid Art</h5>
                            <img id='personalLogo' src="images/personal-logo.gif" alt="my logo used in the video">
                        </section>
                        <p>The <span id='boldWord'>idea</span> was to create something in a meme format but also not like
                        the regular memes, something visually different. Something that no one have ever tried before.</p>
                    </section>

                    <section id="caseStudySolution">
                        <h4 class="hidden">Case Study Solution Section</h4>
                        <p>My <span id='boldWord'>solution</span> was to use start from a base design or image and expand on it with turbulent displacement
                        ,fluid art, kaleidoscope and text overlays.</p>
                        <img src="images/personal-solution.svg" alt="comparison before and after photo of 2 frames in the video">
                    </section>

                    <section id="caseStudyExecution">
                        <h4 class="hidden">Case Study Execution Section</h4>
                        <img id='executionImage' src="images/personal-execution.svg"
                            alt="one of the frame from the video which has text Go Corona">

                        <section id="executionDesc">
                            <p>My <span id='boldWord'>execution</span> focused mainly on using all these different effects and compose something
                            which looks one. A union of all different assets conveying one meaning.</p>
                        </section>
                    </section>

                    <section id="caseStudyWork">
                        <h4 class='hidden'>Case Study Work Samples Section</h4>
                        <h5>work samples</h5>
                        <section id="workSamples">
                            <video controls>
                                <source src='videos/personal-work-1.mp4'>
                            </video>
                            <video controls>
                                <source src='videos/personal-work-2.mp4'>
                            </video>
                            <video controls>
                                <source src='videos/personal-work-3.mp4'>
                            </video>

                        </section>
                    </section>


                </section>

            </section>
    `,

    methods:{
        caseStudyWork(){
            document.querySelector('.caseStudyWork').style.display="flex";
            document.querySelector('.caseStudyPersonal').style.display="none";
            document.querySelector('#work-link').style.backgroundColor = "black";
            document.querySelector('#work-link').style.color = "white";
            document.querySelector('#personal-link').style.backgroundColor = "white";
            document.querySelector('#personal-link').style.color = "black";
            


          },
          caseStudyPersonal(){
            console.log('personal clicked');
          },
        
    }
};