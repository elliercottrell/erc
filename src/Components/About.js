import "./About.css";

function About() {
  const onButtonClick = () => {
    const pdfUrl = "Images/model/ERC_catalogue_of_works.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "ERC_catalogue_of_works.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="contactWrap">
      <div className="aboutText">
        <p className="title">Exhibitions and Open Calls</p>
        <p className="highlight">
          March 2025 - Jackson's Art Prize{" "}
          <a
            class="link"
            href="https://www.jacksonsart.com/blog/2025/04/07/see-the-prize-winners-of-jacksons-art-prize-2025/"
          >
            Pastel Award Winner
          </a>
        </p>
        <p>
          January 2025 - The Pastel Society, Mall Galleries, London -
          <em>
            <b> Anthony J Lester Art Critic Award Winner</b>
          </em>
        </p>
        <p>
          December 2024 - Small Works Winter Exhibition, Spring Gallery,
          Cheltenham
        </p>
        <p>
          November 2024 - Cass Art Prize, Copeland Gallery, London -
          <em>
            <b> Drawing Prize Winner</b>
          </em>
        </p>
        <p>October 2024 - The Postcard Show, Sixteen Gallery, Cheltenham</p>
        <p>
          August 2024 - Sixteen Online <i>Summer</i> Group Show, Cheltenham
        </p>
        <br />
        <p className="title">Statement</p>
        <p>
          I'm Ellie Cottrell, a drawer based in Cheltenham. Although doing an
          Art Foundation in 2008 I went on to study graphic design and didn't
          return to a drawing practice until a short time ago.
        </p>
        <p>
          Since then I have continued to move through different mediums,
          currently working in oil pastel on paper exploring the figure and
          natural forms. My journey into this new practice is at its beginning
          and I feel in an experimental stage as I grow and learn with each
          piece. Through the current work I play with themes of human
          interaction, its necessary vulnerabilities and representation of
          thoughts, repeatedly through the interference of nature. Drawn from
          owned photographs or modified found imagery; often rather than a
          portrait, figures and their interaction with their surroundings mean
          to convey a feeling or idea.
        </p>
        <p>
          I am currently working on several series simultaneously. An untiled
          series explores ideas of the inside of <i>our</i> minds, expressing
          how we interact with our own anxieties and countervailing feelings of
          constraint and support, overwhelm and creation, multiplicity and
          duality. Although they aim to be "beautiful" they can also incite a
          sense of unease and tension.
        </p>{" "}
        <p>
          <i>The Rites of Spring</i> is a series inspired by Pina Bausch’s
          version of the ballet, a story of ritual where a woman is chosen to
          dance herself to death. She asks us ”How would you dance if you knew
          you were going to die?” This image uses stills from that ballet to
          think about ritual, collective expression and connection with the
          earth in brief, fleeting moment of dance.
        </p>
        <p>
          <i>Grass</i> is my conversation with mundanity, I am not sure yet
          where it is taking me, as with all the collections, it is a thought in
          progress.
        </p>
        <br />
        <a href="https://www.instagram.com/erc.drawing/">
          <p>INSTAGRAM</p>
        </a>
        <a href="https://www.sixteengallery.com/artists/ellie-cottrell">
          <p>SIXTEEN ONLINE</p>
        </a>
        <button className="download" onClick={onButtonClick}>
          Catalogue of Available works
        </button>
      </div>
    </div>
  );
}

export default About;
