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
            <div class="element-title">Frontend Developer at NXP</div>
            <div class="element-subtitle">
              <i class="fa fa-calendar"></i>
              May 2023 - Current
            </div>
            <div class="element-content">
              As a frontend developer I worked on the main dashboard of our team.
              I completed dozens of Jira tickets with over 300 commits on Bitbucket for features, bug fixes, and refactoring.
              The main tools I used were React, TypeScript, Vite, Python, and AWS.
            </div>
          </div>
          <div class="element">
            <div class="element-title">Programming Trainer at Logiscool</div>
            <div class="element-subtitle">
              <i class="fa fa-calendar"></i>
              October 2022 - July 2023
            </div>
            <div class="element-content">
              As a programming trainer I mainly held Python courses, but also Visual Programming courses.
              The Python courses focused on programming mastery with a touch of game development with Pygame and data cleaning
              with Pandas, while the Visual Programming courses focused on teaching the basics of programming through game development.
            </div>
          </div>
          <div class="spacing" style={{ marginBottom: "40px" }} />
          <div class="header">Projects</div>
          <div class="element">
            <div class="element-title">
              Dashboard for data viewing, and board reservation and management
            </div>
            <div class="element-content">
              <ul>
                <li>
                  Over 300 commits and dozens of tickets completed in the
                  span of a year for new features, bug fixes, and refactoring.
                </li>
                <li>
                  Fully typesafe frontend written in TypeScript with React
                  and Vite. For the backend we used Python with AWS and Serverless.
                </li>
                <li>
                  2 types of authentication with Proprietary SSO and Cognito.
                </li>
                <li>
                  Board inventory - A system for adding, editing, and deleting boards
                  from a database. It contains a board table that is sortable and filterable.
                </li>
                <li>
                  Board reservation - A system for reserving boards that gives users
                  access to them. Board reservations can be scheduled or
                  reserved whenever they are available. It contains a calendar view of the reserved boards.
                </li>
                <li>
                  Metrics pages - Pages that can show multiple charts of selected data from
                  multiple categories of statistics. The charts are interactive, filterable, and sortable.
                </li>
                <li>
                  Config Builder - A way for admin users to extend the dashboard with
                  new pages written in a JSON editor inside the app for other users
                  to fill them in and save the data.
                </li>
                <li>
                  Preferences saving and loading - Sorting, filters, and selections
                  can be saved in the database to be reloaded when the user accesses the page again.
                </li>
                <li>
                  Permission management - Admin users can edit permissions
                  of GET, POST, and DELETE to restrict access to certain
                  pages of the Dashboard for other users.
                </li>
              </ul>
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
              September 2022 – 2025
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
              TypeScript - React - Node - HTML - CSS - Godot
            </div>
            <div class="skill-level">Intermediate</div>
            <div class="skill-contents">
              C# - Git - Python
            </div>
            <div class="skill-level">Starter</div>
            <div class="skill-contents">AWS - Serverless - Unity - Elm</div>
            <div class="skill-level">Languages</div>
            <div class="skill-contents">Romanian - English</div>
          </div>
        </div>
        <div class="container">
          <div class="header">Activities</div>
          <div class="element">
            <div class="element-title">Personal Projects</div>
            <div class="element-content">
              <ul>
                <li>
                  <a href="https://youtu.be/M9Y0Z8xiKIs?si=_n822txSEmuB-Uli">2D Bow Shooting Platformer</a> - Written
                  in C# with Raylib and uses solid OOP principles.
                  It includes systems like sprite animation, keyframe animation,
                  collision detection and resolution,
                  <a href="https://www.youtube.com/watch?v=RsuXcNXFFWQ"> inverse kinematics for procedural animation</a>
                  , <a href="https://www.youtube.com/watch?v=LCc6O_acg2Q">level editor</a>.
                </li>
                <li>
                  <a href="https://www.youtube.com/watch?v=U9Lix_8QkkE">Deliver Bullets </a> - Top Down shooting
                  game where you fight different enemies,
                  find better weapons, explode barrels, and slow time.
                </li>
                <li>
                  <a href="https://vector-editor.netlify.app/">Vector Editor</a> - Written in the functional programming language Elm
                  for the InfoEducatie contest. An app for drawing and editing SVG Images. The files can be saved and loaded as JSON.
                </li>
              </ul>
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
            <div class="element-content">
              <ul>
                <li>
                  <a href="https://maoitsme.itch.io/robot-warfare">GMTK Jam 2020</a> - Plants vs Zombies clone with Robots and Machines.
                </li>
                <li>
                  <a href="https://maoitsme.itch.io/cave-treasuring">Community Game Jam</a> - Top Down game about
                  exploring a cave to find a treasure. On the way you can
                  interact with characters, fight monsters, and find better equipment.
                </li>
                <li>
                  <a href="https://maoitsme.itch.io/santa-giftrun">Discord Jam 3</a> - Hyper Casual game
                  where you play as Santa and jump over buildings to deliver presents.
                </li>
                <li>
                  <a href="https://maoitsme.itch.io/sword-of-steiner">Ludum Dare 46</a> - Top Down sword fighting game.
                </li>
                <li>
                  <a href="https://maoitsme.itch.io/hellgirl">Mini Jam 69</a> - A horror game where you play as a girl that is stuck in a randomly generated labyrinth in search
                  for a weapon that can bring down the monster that's following you.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="spacing" />
      </div>
    </div >
  );
}
