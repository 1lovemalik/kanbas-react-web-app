export default function Lab1() {
  return (
    <>
      <div id="wd-lab1">
        <h2>Lab 1</h2>
        <p>This is a practice for lab 1.</p>
        <section>
          <h3>HTML Examples</h3>
          <h4>Heading Tags</h4>
          <p>
            Text documents are often broken up into several sections and subsections. Each section is usually
            prefaced with a short title or heading that summarizes the topic of the section it precedes. For instance,
            this paragraph is preceded by the heading "Heading Tags." The font of the section headings is usually larger
            and bolder than their subsection headings. This document uses headings to introduce topics such as HTML
            Documents, HTML Tags, Heading Tags, etc. HTML heading tags can be used to format plain text so that it renders
            in a browser as large headings. There are 6 heading tags for different sizes: h1, h2, h3, h4, h5, and h6.
            Tag h1 is the largest heading and h6 is the smallest heading.
          </p>
        </section>

        <section>
          <h4>Paragraph Tags</h4>
          <p>
            This is the first paragraph. The paragraph tag is used to format vertical gaps between long pieces of text
            like this one.
          </p>
          <p id="wd-p-3">
            This is the second paragraph. Even though there is a deliberate white gap between the paragraph above and
            this paragraph, by default browsers render them as one contiguous piece of text as shown here on the right.
          </p>
          <p id="wd-p-4">
            This is the third paragraph. Wrap each paragraph with the paragraph tag to tell browsers to render the
            gaps.
          </p>
        </section>

        <section id="wd-lists">
          <h4>List Tags</h4>
          <h5>Ordered List Tag</h5>
          <p>How to make pancakes:</p>
          <ol id="wd-pancakes">
            <li>Mix dry ingredients.</li>
            <li>Add wet ingredients.</li>
            <li>Stir to combine.</li>
            <li>Heat a skillet or griddle.</li>
            <li>Pour batter onto the skillet.</li>
            <li>Cook until bubbly on top.</li>
            <li>Flip and cook the other side.</li>
            <li>Serve and enjoy!</li>
          </ol>

          <h5>My favorite recipe</h5>
          <p>How to make steak!</p>
          <ol id="wd-steak">
            <li>Pick out your favorite type of Steak - I like New York Strip!</li>
            <li>Salt your steak!</li>
            <li>Get your pan ripping hot. Preferably stainless steel or cast iron.</li>
            <li>Sear your steak on both sides.</li>
            <li>Remember to have your thermometer to get your favorite temp.</li>
            <li>Take your steak off the pan and let it rest.</li>
            <li>Enjoy your steak!</li>
          </ol>

          <h5>Unordered List Tag</h5>
          <p>My favorite books (in no particular order):</p>
          <ul id="wd-your-books">
            <li>One Piece</li>
            <li>Berserk</li>
            <li>Naruto</li>
            <li>The Fire Next Time</li>
          </ul>
        </section>

        <section id="wd-tables">
          <h4>Table Tag</h4>
          <table border={1} style={{ width: "100%" }}>
            <thead>
              <tr>
                <th>Quiz</th>
                <th>Topic</th>
                <th>Date</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Q1</td>
                <td>HTML</td>
                <td>2/3/21</td>
                <td>85</td>
              </tr>
              <tr>
                <td>Q2</td>
                <td>CSS</td>
                <td>2/10/21</td>
                <td>90</td>
              </tr>
              <tr>
                <td>Q3</td>
                <td>JavaScript</td>
                <td>2/17/21</td>
                <td>95</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={3}>Average</td>
                <td>90</td>
              </tr>
            </tfoot>
          </table>
        </section>

        <section id="wd-images">
          <h4>Image Tag</h4>
          <p>Loading an image from the internet:</p>
          <img id="wd-starship" width="400" src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg" alt="Starship" />
          <p>Loading a local image:</p>
          <img id="wd-teslabot" src="Downloads/teslabot.jpg" height="200" alt="Teslabot" />
        </section>

        <section id="wd-forms">
          <h4>Form Elements</h4>
          <form id="wd-text-fields">
            <h5>Text Fields</h5>
            <label htmlFor="wd-text-fields-username">Username:</label>
            <input id="wd-text-fields-username" placeholder="jdoe" type="text" /> <br />
            <label htmlFor="wd-text-fields-password">Password:</label>
            <input type="password" id="wd-text-fields-password" /> <br />
            <label htmlFor="wd-text-fields-first-name">First name:</label>
            <input type="text" id="wd-text-fields-first-name" title="John" /> <br />
            <label htmlFor="wd-text-fields-last-name">Last name:</label>
            <input type="text" id="wd-text-fields-last-name" placeholder="Doe" title="The last name" /> <br />
          </form>
        </section>

        <section>
          <textarea placeholder="Biography" title="tooltip">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae condimentum elit, eget mattis diam. Fusce dignissim, ipsum eu vestibulum vulputate, purus justo vestibulum elit, at susgit.
          </textarea>
        </section>

        <section>
          <h5 id="wd-buttons">Buttons</h5>
          <button id="wd-all-good" onClick={() => alert("Love how you live!!!")} type="button">
            Press Me!
          </button>
        </section>

        <section>
          <h5>File upload</h5>
          <input id="wd-upload" type="file" />
        </section>
      </div>
      <div>
        <input type="radio" name="NAME1" value="OPTION1" />
        <input type="radio" name="NAME1" value="OPTION2" />
      </div>
      <div>
        <h5 id="wd-radio-buttons">Radio buttons</h5>

        <label>Favorite movie genre:</label><br />

        <input type="radio" name="radio-genre" id="wd-radio-comedy" value="comedy" />
        <label htmlFor="wd-radio-comedy">Comedy</label><br />

        <input type="radio" name="radio-genre" id="wd-radio-drama" value="drama" />
        <label htmlFor="wd-radio-drama">Drama</label><br />

        <input type="radio" name="radio-genre" id="wd-radio-scifi" value="scifi" />
        <label htmlFor="wd-radio-scifi">Science Fiction</label><br />

        <input type="radio" name="radio-genre" id="wd-radio-fantasy" value="fantasy" />
        <label htmlFor="wd-radio-fantasy">Fantasy</label>
      </div>

      <div>
        <label> Pick 3 numbers from the list. </label>
        <input type="checkbox" name="NAME2" value="OPTION1" />
        <input type="checkbox" name="NAME2" value="1" />
        <input type="checkbox" name="NAME2" value="OPTION3" />
      </div>

      <div>
        Please

        <a id="wd-lipsum-1" href="https://www.lipsum.com"> click here </a>
        to get dummy text<br />

        <a id="wd-lipsum-2" href="https://github.com/1lovemalik/kanbas-react-web-app"> Code Repository </a>
        on Github
      </div>
    </>
  );
}
