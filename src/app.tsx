import "./app.css";

function Commented(props: any) {
  return <> </>;
}

export function App() {
  return (
    <div id="root">
      <div class="cell" id="name-cell">
        <div id="big-name">Mario Marin</div>
      </div>
      <div class="cell" id="contact">
        <div class="contact-icon">
          <i class="fa fa-phone"></i>
        </div>
        <a>
          +40 746 335 996
        </a>
        <div class="contact-icon">
          <i class="fa fa-envelope"></i>
        </div>
        <a href="mailto:marin.mario.alexandru@gmail.com">marin.mario.alexandru@gmail.com</a>
        <div class="contact-icon">
          <i class="fa fa-github"></i>
        </div>
        <a href="https://github.com/MarinMario">
          github.com/MarinMario
        </a>
        <div class="contact-icon">
          <i class="fa fa-youtube-play"></i>
        </div>
        <a href="https://www.youtube.com/@MaoDev/videos">
          youtube.com/@MaoDev
        </a>
      </div>
      <div class="cell">
        <div class="container">
          <div class="header">Work experience</div>
          <div class="element">
            <div class="element-title">Tools Developer at NXP</div>
            <div class="element-subtitle">
              <i class="fa fa-calendar"></i>
              May 2023 - Current
            </div>
            <div class="element-content">
              I created a centralized dashboard for team and management usage.
              <br />
              My main tools were React, TypeScript, Vite, Python, PyTest, and AWS.
              <br />
              For version control we used Git with Bitbucket and
              Jira for managing tickets.
            </div>
          </div>
          <div class="element">
            <div class="element-title">Programming Trainer at Logiscool</div>
            <div class="element-subtitle">
              <i class="fa fa-calendar"></i>
              October 2022 - July 2023
            </div>
            <div class="element-content">
              I worked as a teacher for high school and middle school students.
              <br />
              My classes were focused on programming basics for Python and Game Development.
            </div>
          </div>
          <div class="spacing" style="margin-bottom: 1rem;" />
          <div class="header">Projects</div>
          <div class="element">
            <div class="element-title">
              Centralized Dashboard for Team Usage
            </div>
            <div class="element-content">
              A CRUD SPA that features a fully typesafe frontend written in TypeScript with React and Vite.
              For the backend we used Python with AWS and Serverless.
              <br />
              It features systems for authentication, inventory management, board reservation, usage metrics,
              access management, a DSL for extending the dashboard, and much more.
            </div>
            <div class="element-title">
              API Integration Testing
            </div>
            <div class="element-content">
              Designed and executed automated test cases to verify API endpoints, response accuracy, and performance using Python and PyTest.
            </div>
            <div class="element-title">
              Board Inventory System
            </div>
            <div class="element-content">
              A page for managing boards. The data is inputted by the user and saved in a DynamoDB table.
              A JSON configuration file is used to generate the input fields so that the frontend doesn't need to be updated
              every time a new field is needed.
            </div>
            <div class="element-title">
              Board Reservation System
            </div>
            <div class="element-content">
              A page for managing board reservations. The board data is taken from the same table and configuration file as
              the inventory system. It features instant reservations and scheduled reservations. Instant reservations start from the
              moment the board is free to use while scheduled reservations feature a calendar view where you can choose only
              valid timeframes.
            </div>
            <div class="element-title">
              Metrics Builder
            </div>
            <div class="element-content">
              A page for viewing data about server and board usage. It features a system for creating charts and chart containers
              that can be shared with other people.
            </div>
            <div class="element-title">
              Config Builder
            </div>
            <div class="element-content">
              A page for creating configuration file schemas that can be filled in by users.
              It features a JSON based Domain-Specific Language for generating pages,
              a text editor, and a result view for instant feedback on the page creation.
            </div>
          </div>
          <Commented>
            <div class="element">
              <div class="element-title">
                <a href="https://github.com/lunarcast/lunarbox">Template Project</a>
              </div>
              <div class="element-content">
                Template Project Description
              </div>
            </div>
          </Commented>
        </div>
      </div>
      <div class="cell">
        <div class="container" id="education">
          <div class="header">Education</div>
          <div class="element">
            <div class="element-title">Computer Science and Economics</div>
            <div class="element-subtitle">
              <i class="fa fa-calendar"></i>
              September 2023 – 2026
            </div>
            <div class="element-content">
              Academy of Economic Studies of Bucharest. Faculty of Cibernetics, Computer Science, and Statistics.
              Department of Computer Science and Economics.
            </div>
          </div>
        </div>
        <div class="container">
          <div class="header">Skills</div>
          <div id="skills">
            <div class="skill-level">Proeficient</div>
            <div class="skill-contents">
              TypeScript - React - HTML - CSS - JavaScript - Godot
            </div>
            <div class="skill-level">Intermediate</div>
            <div class="skill-contents">
              C# - ASP.NET - Git - Python - PyTest - Node
            </div>
            <div class="skill-level">Starter</div>
            <div class="skill-contents">AWS - Serverless - Unity</div>
            <div class="skill-level">Languages</div>
            <div class="skill-contents">Romanian - English</div>
          </div>
        </div>
        <div class="container">
          <div class="header">Activities</div>
          <div class="element">
            <div class="element-title margin-left">Personal Projects</div>
            <div class="element-content">
              <div class="bold">
                <a href="https://verset.info">Verset</a>
              </div>
              <div>
                A social media app for creating and sharing lyrics.
              </div>
              <div>
                As on any social media app you can like, comment on, and create your own posts,
                but it also features tools for creating lyrics like integration with the Dexonline.ro API for fetching definitions, synonyms,
                and antonyms.
              </div>
              <div>
                I used TypeScript and React for the frontend, C# with ASP.Net for the backend, and SQLite for database.
              </div>
              <div class="margin-bottom">
                It features SSO Google Authentication, and the backend is hosted on my personal server at home. It is exposed to the internet
                through a Cloudflared tunnel.
              </div>
              <div class="bold">
                <a href="https://youtu.be/M9Y0Z8xiKIs?si=_n822txSEmuB-Uli">2D Bow Shooting Platformer</a>
              </div>
              <div>
                Written in C# with Raylib using OOP principles.
              </div>
              <div class="margin-bottom">
                It includes systems like sprite animation, keyframe animation,
                collision detection and resolution,
                <a href="https://www.youtube.com/watch?v=RsuXcNXFFWQ"> inverse kinematics for procedural animation</a>
                , <a href="https://www.youtube.com/watch?v=LCc6O_acg2Q">level editor</a>.
              </div>
              <div class="bold">
                <a href="https://www.youtube.com/watch?v=U9Lix_8QkkE">Deliver Bullets </a>
              </div>
              <div>
                Top Down shooting
                game where you fight different enemies,
                find better weapons, explode barrels, and slow time.
              </div>
            </div>
          </div>
          {/* <div class="element">
            <div class="element-title">Infoeducatie 2019</div>
            <div class="element-content">
              <ul>
                <li>
                  National contest for high school students.
                </li>
                <li>
                  <a href="https://vector-editor.netlify.app/">
                    I made an app for editing SVG images.
                  </a>
                </li>
              </ul>
            </div>
          </div> */}
          <div class="element">
            <div class="element-title">Game Jams</div>
            <div class="element-content margin-left">
              <div class="bold">
                <a href="https://maoitsme.itch.io/robot-warfare">GMTK Jam 2020</a>
              </div>
              <div class="margin-bottom">
                Plants vs Zombies clone with Robots and Machines.
              </div>
              <div class="bold">
                <a href="https://maoitsme.itch.io/santa-giftrun">Discord Jam 3</a>
              </div>
              <div class="margin-bottom">
                Hyper Casual endless runner.
              </div>
              <div class="bold">
                <a href="https://maoitsme.itch.io/sword-of-steiner">Ludum Dare 46</a>
              </div>
              <div class="margin-bottom">
                Top Down sword fighting game.
              </div>
              <div class="bold">
                <a href="https://maoitsme.itch.io/hellgirl">Mini Jam 69</a>
              </div>
              <div class="margin-bottom">
                Top Down Horror game with procedurally generated maps.
              </div>
            </div>
          </div>
        </div>
        <div class="spacing" />
      </div>
    </div >
  );
}
