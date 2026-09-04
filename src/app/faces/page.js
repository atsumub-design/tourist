import "./faces.css";

export default function Faces() {
  return (
    <main className="faces-site">

      {/* =========================================================
          HEADER
      ========================================================= */}

      <header className="faces-header">
        <nav className="faces-nav">

          <a href="/" className="faces-logo">
            Pangasinan Heritage
          </a>

          <div className="faces-nav-links">
            <a href="/">Home</a>
            <a href="/heritage">Heritage</a>
            <a href="/destinations">Destinations</a>
            <a href="/faces">Faces</a>
          </div>

        </nav>
      </header>


      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="faces-hero">

        <div className="faces-hero-grid">

          <div>

            <p className="faces-label">
              PEOPLE • STORIES • COMMUNITY
            </p>

            <h1>
              Faces of
              <br />
              Pangasinan
            </h1>

            <p className="faces-hero-description">
              Meet the people whose stories, traditions, skills,
              and everyday lives help shape the identity of
              Pangasinan.
            </p>

            <a
              href="#people"
              className="faces-button"
            >
              Meet the People
            </a>

          </div>


          <div className="faces-hero-image">

            <img
              src="/images/community.jpg"
              alt="Community members of Pangasinan"
            />

          </div>

        </div>

      </section>


      {/* =========================================================
          INTRODUCTION
      ========================================================= */}

      <section className="faces-intro">

        <div className="faces-intro-inner">

          <h2>
            The People Behind the Heritage
          </h2>

          <p>
            Pangasinan's heritage is not only found in historic
            places and cultural traditions. It also lives in the
            people who work, create, teach, celebrate, and pass
            their knowledge from one generation to another.
          </p>

        </div>

      </section>


      {/* =========================================================
          PEOPLE
      ========================================================= */}

      <section
        className="people-section"
        id="people"
      >

        <div className="section-heading">

          <p className="section-label">
            PEOPLE OF PANGASINAN
          </p>

          <h2>
            Stories, Skills & Traditions
          </h2>

          <p>
            Different communities contribute to the unique
            cultural identity of Pangasinan through their work,
            traditions, and everyday lives.
          </p>

        </div>


        <div className="people-grid">


          {/* =====================================================
              FARMERS
          ===================================================== */}

          <article className="person-card">

            <div className="person-image">

              <img
                src="/images/farmers.jpg"
                alt="Farmers in Pangasinan"
              />

            </div>

            <div className="person-content">

              <p className="person-category">
                AGRICULTURE
              </p>

              <h3>
                The Farmers
              </h3>

              <p>
                Farmers play an important role in Pangasinan's
                communities, supporting local livelihoods and
                preserving agricultural traditions passed down
                through generations.
              </p>

              <a
                href="/faces/farmers"
                className="person-button"
              >
                Discover Their Story 
              </a>

            </div>

          </article>


          {/* =====================================================
              FISHERMEN
          ===================================================== */}

          <article className="person-card">

            <div className="person-image">

              <img
                src="/images/fishermen.jpg"
                alt="Fishermen in Pangasinan"
              />

            </div>

            <div className="person-content">

              <p className="person-category">
                COASTAL COMMUNITIES
              </p>

              <h3>
                The Fishermen
              </h3>

              <p>
                Coastal communities have long depended on the
                sea for their livelihoods while maintaining
                knowledge and traditions connected to fishing.
              </p>

              <a
                href="/faces/fishermen"
                className="person-button"
              >
                Discover Their Story 
              </a>

            </div>

          </article>


          {/* =====================================================
              ARTISANS
          ===================================================== */}

          <article className="person-card">

            <div className="person-image">

              <img
                src="/images/local-artisan.jpg"
                alt="Local artisan in Pangasinan"
              />

            </div>

            <div className="person-content">

              <p className="person-category">
                CRAFTS
              </p>

              <h3>
                Local Artisans
              </h3>

              <p>
                Local artisans preserve traditional skills through
                handmade crafts, creative work, and techniques that
                reflect the cultural character of Pangasinan.
              </p>

              <a
                href="/faces/artisans"
                className="person-button"
              >
                Discover Their Story 
              </a>

            </div>

          </article>


          {/* =====================================================
              FOOD MAKERS
          ===================================================== */}

          <article className="person-card">

            <div className="person-image">

              <img
                src="/images/food-makers.jpg"
                alt="Local food makers in Pangasinan"
              />

            </div>

            <div className="person-content">

              <p className="person-category">
                LOCAL CUISINE
              </p>

              <h3>
                Food Makers
              </h3>

              <p>
                Local food makers help preserve Pangasinan's
                culinary heritage by preparing traditional foods
                and delicacies enjoyed by families and visitors.
              </p>

              <a
                href="/faces/food"
                className="person-button"
              >
                Discover Their Story 
              </a>

            </div>

          </article>


          {/* =====================================================
              COMMUNITY LEADERS
          ===================================================== */}

          <article className="person-card">

            <div className="person-image">

              <img
                src="/images/community.jpg"
                alt="Community members in Pangasinan"
              />

            </div>

            <div className="person-content">

              <p className="person-category">
                COMMUNITY
              </p>

              <h3>
                Community Leaders
              </h3>

              <p>
                Community members and local leaders help bring
                people together through events, programs,
                celebrations, and activities that strengthen
                local communities.
              </p>

              <a
                href="/faces/community"
                className="person-button"
              >
                Discover Their Story 
              </a>

            </div>

          </article>


          {/* =====================================================
              LOCAL ARTISTS
          ===================================================== */}

          <article className="person-card">

            <div className="person-image">

              <img
                src="/images/dinagadia-localartist.jpg"
                alt="Local artist from Pangasinan"
              />

            </div>

            <div className="person-content">

              <p className="person-category">
                ARTS & CULTURE
              </p>

              <h3>
                Local Artists
              </h3>

              <p>
                Artists and cultural workers express Pangasinan's
                identity through creativity, performances, visual
                arts, and other forms of cultural expression.
              </p>

              <a
                href="/faces/localartist"
                className="person-button"
              >
                Discover Their Story 
              </a>

            </div>

          </article>

        </div>

      </section>


      {/* =========================================================
          COMMUNITY
      ========================================================= */}

      <section className="community-section">

        <div className="community-grid">

          <div className="community-image">

            <img
              src="/images/community.jpg"
              alt="People and communities of Pangasinan"
            />

          </div>


          <div className="community-content">

            <p className="section-label">
              STRONGER TOGETHER
            </p>

            <h2>
              Heritage Lives Through Community
            </h2>

            <p>
              Cultural heritage becomes meaningful when it is
              practiced and shared by communities. Families,
              workers, artists, farmers, fishermen, and local
              organizations all contribute to keeping Pangasinan's
              traditions alive.
            </p>

            <p>
              By learning from one another and sharing these
              stories with younger generations, communities help
              ensure that Pangasinan's identity continues into
              the future.
            </p>

          </div>

        </div>

      </section>


      {/* =========================================================
          CTA
      ========================================================= */}

      <section className="faces-cta">

        <div className="faces-cta-inner">

          <p className="section-label">
            DISCOVER MORE
          </p>

          <h2>
            Discover the Places They Call Home.
          </h2>

          <p>
            Explore the destinations, landscapes, and cultural
            places that connect the people of Pangasinan with
            their history and heritage.
          </p>

          <a
            href="/destinations"
            className="faces-button"
          >
            Explore Destinations
          </a>

        </div>

      </section>


      {/* =========================================================
          FOOTER
      ========================================================= */}

      <footer className="faces-footer">

        <div className="faces-footer-content">

          <h2>
            Pangasinan Heritage
          </h2>

          <p>
            Discover the places, people, stories,
            and traditions of Pangasinan.
          </p>

          <div className="faces-footer-links">

            <a href="/">
              Home
            </a>

            <a href="/heritage">
              Heritage
            </a>

            <a href="/destinations">
              Destinations
            </a>

            <a href="/faces">
              Faces
            </a>

          </div>

          <p className="faces-copyright">
            © 2026 Pangasinan Heritage. All rights reserved.
          </p>

        </div>

      </footer>

    </main>
  );
}