import "./App.css";
import CardWhite from "./CardWhite";
import CardColor from "./CardColor";
import Daniel from "./images/image-daniel.jpg";
import Jonathan from "./images/image-jonathan.jpg";
import Jeanette from "./images/image-jeanette.jpg";
import Patrick from "./images/image-patrick.jpg";
import Kira from "./images/image-kira.jpg";

function App() {
  return (
    <div className="bg-blue min-h-screen xl:flex xl:items-center xl:justify-center">
      <main className="bg-blue p-8 flex flex-col xl:flex-row xl:gap-6 xl:w-[1180px]">

        <section className="xl:w-[80%] xl:flex xl:flex-col xl:gap-6 xl:justify-between">
          <div className="xl:flex xl:flex-row xl:gap-6 xl:h-[50%]">
            <CardColor
              customBackground="flex flex-col justify-center p-8 rounded-lg shadow-lg bg-violet mb-8 xl:mb-0 xl:p-4 bg-hero bg-no-repeat bg-auto bg-right-top bg-origin-content"
              photo={Daniel}
              name="Daniel Clifford"
              title="I received a job offer mid-course, and the subjects I learned were current, if not more so, 
                    in the company I joined. I honestly feel I got every penny’s worth."
              content="“ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a 
                    transition and have heard some people who had an amazing experience here. I signed up 
                    for the free intro course and found it incredibly fun! I enrolled shortly thereafter. 
                    The next 12 weeks was the best - and most grueling - time of my life. Since completing 
                    the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”"
            />
            <CardColor
              customBackground="flex flex-col justify-center p-8 rounded-lg shadow-lg bg-gray mb-8 xl:mb-0 xl:p-4"
              photo={Jonathan}
              name="Jonathan Walters"
              title="The team was very supportive and kept me motivated."
              content="“ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer 
            for a big company. This was one of the best investments I’ve made in myself. ”"/>
          </div>
          <div className="xl:flex xl:flex-row xl:gap-6 xl:h-[50%]">
            <CardWhite
              customBackground="flex flex-col justify-center p-8 mb-8 rounded-lg shadow-2xl bg-white xl:mb-0 xl:p-4"
              photo={Jeanette}
              name="Jeanette Harmon"
              title="An overall wonderful and rewarding experience"
              content="“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living 
            while doing something I love. ”"/>
            <CardColor
              customBackground="flex flex-col justify-center p-8 rounded-lg shadow-lg bg-dark mb-8 xl:mb-0 xl:p-4"
              photo={Patrick}
              name=" Patrick Abrams"
              title="Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and 
            learning from their experiences was easy."
              content="“ The staff seem genuinely concerned about my progress which I find really refreshing. The program 
            gave me the confidence necessary to be able to go out in the world and present myself as a capable 
            junior developer. The standard is above the rest. You will get the personal attention you need from 
            an incredible community of smart and amazing people. ”"/>
          </div>
        </section>
        <section className="xl:w-[20%]">
          <CardWhite
            customBackground="flex flex-col justify-center p-8 rounded-lg shadow-2xl bg-white xl:h-[464px] xl:p-4"
            photo={Kira}
            name="Kira Whittle"
            title="Such a life-changing experience. Highly recommended!"
            content="“ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from 
          professionals who can help me learn programming step by step. I was encouraged to enroll by a former 
          student of theirs who can only say wonderful things about the program. The entire curriculum and staff 
          did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team 
          project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial 
          could ever have. In fact, I’ve often referred to it during interviews as an example of my developent 
          experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 
          100% recommend! ”"/>
        </section>


      </main>
    </div>

  );
}

export default App;
