export default function Faces() {
  return (
    <section
      className="faces"
      id="faces"
    >

      <div className="faces-image">

        <img
          src="/tourist/images/heritage.jpg"
          alt="People and heritage of Pangasinan"
        />

      </div>


      <div className="faces-content">

        <p className="section-label">
          THE PEOPLE BEHIND THE STORY
        </p>

        <h2>
          Faces of Pangasinan
        </h2>

        <p>
          Pangasinan is more than beautiful destinations.
          It is a place shaped by the people who live,
          work, create, and preserve its traditions.
        </p>

        <p>
          From local artisans and farmers to fishermen,
          food makers, artists, and community members,
          every person has a story that contributes to
          the identity of Pangasinan.
        </p>

        <a
          href="#heritage"
          className="faces-button"
        >
          Discover Their Stories
        </a>

      </div>

    </section>
  );
}