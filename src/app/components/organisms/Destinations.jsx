import DestinationCard from "../molecules/DestinationCard";

export default function Destinations() {
  return (
    <section
      className="destinations"
      id="destinations"
    >

      <p className="section-label">
        PLACES TO DISCOVER
      </p>

      <h2>
        Explore Pangasinan
      </h2>

      <p className="section-description">
        Discover the beautiful places and cultural treasures
        of Pangasinan.
      </p>

      <div className="cards">

        {/* =========================
            HUNDRED ISLANDS
        ========================= */}
        <article className="card">

          <div className="card-image">
            <img
              src="/images/hundred-island.jpg"
              alt="Hundred Islands in Pangasinan"
            />
          </div>

          <div className="card-content">

            <p className="card-location">
              ALAMINOS, PANGASINAN
            </p>

            <h3>
              Hundred Islands
            </h3>

            <p>
              Discover the iconic islands and natural beauty
              of Alaminos, Pangasinan.
            </p>

            <a
              href="#faces"
              className="card-link"
            >
              Discover More →
            </a>

          </div>

        </article>


        {/* =========================
            BOLINAO
        ========================= */}
        <article className="card">

          <div className="card-image">
            <img
              src="/images/bolinao.jpg"
              alt="Bolinao, Pangasinan"
            />
          </div>

          <div className="card-content">

            <p className="card-location">
              BOLINAO, PANGASINAN
            </p>

            <h3>
              Bolinao
            </h3>

            <p>
              Explore beaches, waterfalls, caves, and the
              coastal heritage of Bolinao.
            </p>

            <a
              href="#faces"
              className="card-link"
            >
              Discover More →
            </a>

          </div>

        </article>


        {/* =========================
            HERITAGE & CULTURE
        ========================= */}
        <article
          className="card"
          id="heritage"
        >

          <div className="card-image">
            <img
              src="/images/heritage.jpg"
              alt="Pangasinan heritage and culture"
            />
          </div>

          <div className="card-content">

            <p className="card-location">
              PANGASINAN
            </p>

            <h3>
              Heritage & Culture
            </h3>

            <p>
              Learn about the traditions, history, food,
              and cultural identity of Pangasinan.
            </p>

            <a
              href="#faces"
              className="card-link"
            >
              Discover More →
            </a>

          </div>

        </article>

      </div>

    </section>
  );
}