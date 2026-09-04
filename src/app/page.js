import Link from "next/link";
import dynamic from "next/dynamic";

const PangasinanMap = dynamic(
  () => import("./components/PangasinanMap"),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <main>

      {/* =========================
          HEADER
      ========================= */}
      <header>
        <nav>
          <h2>Pangasinan Heritage</h2>

          <div className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/heritage/">Heritage</Link>
            <Link href="/destinations/">Destinations</Link>
            <Link href="/faces/">Faces</Link>
          </div>
        </nav>
      </header>


      {/* =========================
          HERO
      ========================= */}
      <section className="hero" id="home">

        <div className="hero-content">

          <p className="hero-label">
            EXPLORE • DISCOVER • EXPERIENCE
          </p>

          <h1>
            Discover the Heritage of Pangasinan
          </h1>

          <p className="hero-description">
            Explore the rich history, beautiful destinations,
            traditions, and culture that make Pangasinan unique.
          </p>

          <Link
            href="/destinations/"
            className="hero-button"
          >
            Explore Pangasinan
          </Link>

        </div>


        <div className="hero-image">
          <img
            src="/tourist/images/hero.jpg"
            alt="Beautiful scenery in Pangasinan"
          />
        </div>

      </section>


      {/* =========================
          DESTINATIONS
      ========================= */}
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
                src="/tourist/images/hundred-island.jpg"
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

              <Link
                href="/destinations/hundred-islands/"
                className="card-link"
              >
                Discover More
              </Link>

            </div>

          </article>


          {/* =========================
              BOLINAO
          ========================= */}
          <article className="card">

            <div className="card-image">
              <img
                src="/tourist/images/bolinao.jpg"
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

              <Link
                href="/destinations/bolinao/"
                className="card-link"
              >
                Discover More
              </Link>

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
                src="/tourist/images/heritage.jpg"
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

              <Link
                href="/heritage/"
                className="card-link"
              >
                Discover More
              </Link>

            </div>

          </article>

        </div>

      </section>


      {/* =========================
          PANGASINAN MAP
          UPDATED ONLY THIS SECTION
      ========================= */}
      <section className="map-section">

        <div className="map-section-header">

          <p className="section-label">
            EXPLORE ON THE MAP
          </p>

          <h2>
            Discover Pangasinan
          </h2>

          <p className="section-description">
            Explore important destinations and cultural places
            across Pangasinan using the interactive map.
          </p>

        </div>

        <div className="map-container">
          <PangasinanMap />
        </div>

      </section>


      {/* =========================
          FACES OF PANGASINAN
      ========================= */}
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

          <Link
            href="/faces/"
            className="faces-button"
          >
            Discover Their Stories
          </Link>

        </div>

      </section>


      {/* =========================
          CALL TO ACTION
      ========================= */}
      <section className="cta">

        <p className="section-label">
          EXPERIENCE PANGASINAN
        </p>

        <h2>
          Every Place Has a Story.
        </h2>

        <p>
          Discover the people, places, traditions,
          and stories that make Pangasinan special.
        </p>

        <a
          href="#home"
          className="cta-button"
        >
          Back to Top
        </a>

      </section>


      {/* =========================
          FOOTER
      ========================= */}
      <footer>

        <div className="footer-content">

          <h2>
            Pangasinan Heritage
          </h2>

          <p>
            Discover the places, people, stories,
            and traditions of Pangasinan.
          </p>

          <div className="footer-links">

            <Link href="/">
              Home
            </Link>

            <Link href="/heritage/">
              Heritage
            </Link>

            <Link href="/destinations/">
              Destinations
            </Link>

            <Link href="/faces/">
              Faces
            </Link>

          </div>

          <p className="copyright">
            © 2026 Pangasinan Heritage. All rights reserved.
          </p>

        </div>

      </footer>

    </main>
  );
}
