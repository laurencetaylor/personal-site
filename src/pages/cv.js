import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Container from "../components/container"

export default () => (
  <div>
    <Header headerText='CV' />
    <p>
      <Container>
        <center><a href='#projects'>Projects</a> | <a href='#skills'>Skills</a> | <a href='#education'>Education</a> | <a href='#work-experience'>Work Experience</a></center>
        <h1 id='projects'>Projects</h1>
        <table>
          <tr>
            <th>Project</th>
            <th>Description</th>
            <th>Technologies</th>
            <th>Testing/ Other</th>
          </tr>
          <tr>
            <td><a href='https://github.com/LaurenceTaylor/deep_root' target='_blank'>Deep Root</a></td>
            <td>Final project, working in an agile team for the last week and a half of the course: a self-contained plant monitoring station with touch-screen interface. A single-page desktop app where users can start and stop monitoring, be notified of optimal moisture levels, and view historical data with no interruption in readings</td>
            <td>Raspberry Pi, Adafruit STEMMA, 3.5-inch touch screen; Python, JavaScript, SQLite, Eel, Plotly, HTML/ CSS</td>
            <td>Pytest, ESLint, Pylama, Travis CI</td>
          </tr>
          <tr>
            <td><a href='https://github.com/LaurenceTaylor/GildedRose-Refactoring-Kata' target='_blank'>Gilded Rose</a></td>
            <td>A solution to the Gilded Rose refactoring kata</td>
            <td>Ruby</td>
            <td>RSpec, Rubocop</td>
          </tr>
          <tr>
            <td><a href='https://github.com/LaurenceTaylor/acebook-spacebook' target='_blank'>Spacebook</a></td>
            <td>Our introduction to agile methodologies and Ruby on Rails: a Facebook clone made in two weeks. <a href='https://acebook-spacebook.herokuapp.com/'>Deployed on Heroku</a></td>
            <td>Ruby on Rails, HTML/ CSS</td>
            <td>RSpec, Capybara, Rubocop, Travis CI, Heroku</td>
          </tr>
          <tr>
            <td><a href='https://github.com/LaurenceTaylor/chitter-challenge' target='_blank'>Chitter</a></td>
            <td>A weekend project to build a Twitter clone</td>
            <td>Ruby, Sinatra, Postgresql, HTML/ CSS</td>
            <td>RSpec, Capybara, Rubocop</td>
          </tr>
          <tr>
            <td><a href='https://github.com/LaurenceTaylor/frontend-api-challenge' target='_blank'>Frontend API Challenge</a></td>
            <td>Another weekend project to build a Twitter clone, this time as a single-page app in JavaScript using a RESTful API</td>
            <td>JavaScript, HTML/ CSS, jQuery</td>
            <td>I created a rudimentary testing framework, which I used here!</td>
          </tr>
        </table>

        <h1 id='skills'>Skills</h1>
        <h2>Learning Quickly and Independently</h2>
        <p>
          One of Makers' mottos is 'learning how to learn', and they provide students with the tools and concepts to do so. In week 5 we were tasked with learning the basics of JavaScript within one week, then producing a <a href='https://github.com/LaurenceTaylor/bowling-challenge' target='_blank'>bowling scorecard app</a> on the weekend. This experience built my confidence, and for the <a href='https://github.com/LaurenceTaylor/deep_root' target='_blank'>final project</a> my team and I challenged ourselves to learn something completely new by creating a hardware product.
        </p>

        <p>
          In my previous role I learned a suite of software (Cybersource, Sift Science, Arkowl and more) within weeks, as well as SQL and the entirely unfamiliar field that was fraud prevention. I am pleased to say I became the top performer in terms of targets within three months.
        </p>
        <h2>Communication and Collaboration</h2>
        <p>
          At Makers students either pair every day or work on group projects. This requires regular communication, collaboration, and code reviews. When we were learning about single-page apps and APIs in JavaScript my team and I managed to produce and deploy a simple <a href='https://github.com/LaurenceTaylor/notes_js' target='_blank'>notes app</a> within a few days. This was enabled by frequent knowledge sharing and mobbing, and it was really enjoyable to make breakthroughs in the project together. Working on larger group projects such as <a href='https://github.com/LaurenceTaylor/acebook-spacebook' target='_blank'>Spacebook</a> and <a href='https://github.com/LaurenceTaylor/MakersAirBnB-' target='_blank'>MakersBnB</a> would have been impossible without regular code reviews and good git collaboration.
        </p>
        <h2>Test-Driven Development</h2>
        <p>
          Every project completed at Makers was test driven using a variety of frameworks. I aspire to write isolated tests, which test behaviour and not state, while achieving high coverage. I believe TDD is critical to producing high quality and concise code while avoiding regression.
        </p>
        <h2>Problem Solving and Debugging</h2>
        <p>
          A recent problem my team and I faced was to debug hardware - <a href='https://medium.com/@makers_c_a_c_t_u_s/debugging-hardware-by-ben-82c38ada24bc' target='_blank'>our touch screen stopped working the moment we booted our app</a>, and no errors were thrown to guide our thinking. 'Closing the loop' was our saving grace, and we eliminated possible failures one by one until we found the exact issue.
        </p>

        <h1 id='education'>Education</h1>
        <h3>Makers (April - July 2019)</h3>
        <ul>
          <li>JavaScript, Ruby, Python, SQL, HTML/ CSS</li>
          <li>TDD with Jasmine, RSpec, Capybara, Pytest; 95%+ test coverage, testing in isolation</li>
          <li>Sinatra, Rails, single-page applications</li>
          <li>OOP, MVC, agile, modelling, pairing and mobbing, version control and git collaboration, CI/CD</li>
        </ul>

        <h3>Queen Mary University of London (September 2013 - July 2017)</h3>
        <ul>
          <li>BSc in Geography & Environmental Science: achieved a high 2.1 with a first-class dissertation.</li>
          <li>Modules included modelling with R and data analysis using Excel and SPSS.</li>
          <li>Extracurriculars: PASS senior mentor, language learning scholarship recipient, curator of Visual Arts Collective exhibition, writer for CUB Magazine and The Print, host on Quest Radio.</li>
        </ul>

        <h1 id='work-experience'>Work Experience</h1>
        <p><strong>Viagogo</strong> (November 2017 - January 2019)</p>
        <p><i>Fraud Analyst</i></p>
        <p>Prevented fraudulent transactions by learning a range of specialist software, conducting analysis using Excel and SQL, and presenting business cases. Outperformed all targets including false negatives (by >45%), false positives (by >20%), and productivity (by >50%). Resolved the highest-value transaction in the company's history.</p>
        <p>Communicated regularly with colleagues while sharing and receiving details of the latest fraud trends. Travelled and trained employees in international offices.</p>

        <p><strong>Global Action Plan</strong> (October 2017 - January 2019)</p>
        <p><i>Youth Panel Member</i></p>
        <p>Spoke in one of the keynote theatres of Edie Live 2018, engaged with business leaders at EY in Canary Wharf, and helped to set up a national campaign to reduce food packaging waste.</p>

        <p><strong>Wooland</strong> (February - October 2017)</p>
        <p><i>Team Member</i></p>
        <p>Helped to set up this social enterprise, aiming to improve community cohesion through cultural events in the London Borough of Tower Hamlets. Pitched to a panel of judges and was awarded funding at the East London Social Hack 2017.</p>

        <p><strong>Causarma</strong> (June - July 2017)</p>
        <p><i>Business Group Consultant</i></p>
        <p>Collaborated with a small team while producing a research project on ‘Generation Z’ and the future role of business.</p>

        <p><strong>Stratford Circus Arts Centre</strong> (July - September 2016)</p>
        <p><i>Finance and Accounting Project Leader</i></p>
        <p>Worked independently to a tight deadline while producing a trustee induction pack within two weeks.</p>

        <p><strong>House of MinaLima</strong> (June - September 2016)</p>
        <p><i>Gallery Assistant</i></p>
        <p>Interacted with hundreds of visitors daily while answering customer questions, initiating conversation, and helping to sell prints.</p>

        <center><a href='#projects'>Projects</a> | <a href='#skills'>Skills</a> | <a href='#education'>Education</a> | <a href='#work-experience'>Work Experience</a></center>
      </Container>
    </p>
  </div>
)
