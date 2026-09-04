export default function Heritage() {
  return (
    <main className="heritage-page">

      <style>{`
        /* =========================
           GLOBAL
        ========================= */

        .heritage-page {
          min-height: 100vh;
          background: #f5f7f2;
          color: #1f2933;
        }

        .heritage-page * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
        }


        /* =========================
           HEADER
        ========================= */

        .heritage-header {
          background: #ffffff;
          border-bottom: 1px solid #e5e7eb;
          padding: 20px 60px;
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .heritage-nav {
          max-width: 1200px;
          margin: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .heritage-logo {
          color: #14532d;
          font-size: 24px;
          font-weight: 700;
          text-decoration: none;
        }

        .heritage-links {
          display: flex;
          align-items: center;
          gap: 30px;
        }

        .heritage-links a {
          color: #374151;
          text-decoration: none;
          font-size: 15px;
          font-weight: 500;
          transition: color 0.2s ease;
        }

        .heritage-links a:hover {
          color: #15803d;
        }


        /* =========================
           HERO
        ========================= */

        .heritage-hero {
          max-width: 1280px;
          margin: auto;
          padding: 80px 60px 70px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .heritage-label {
          color: #15803d;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2px;
          margin: 0 0 18px;
        }

        .heritage-hero h1 {
          color: #14532d;
          font-size: 56px;
          line-height: 1.05;
          margin: 0 0 22px;
          font-weight: 700;
        }

        .heritage-description {
          color: #6b7280;
          font-size: 18px;
          line-height: 1.8;
          margin: 0 0 30px;
        }

        .heritage-hero-button {
          display: inline-block;
          background: #14532d;
          color: #ffffff;
          padding: 14px 24px;
          border-radius: 8px;
          text-decoration: none;
          font-size: 15px;
          font-weight: 700;
          transition: all 0.2s ease;
        }

        .heritage-hero-button:hover {
          background: #166534;
          transform: translateY(-2px);
        }

        .heritage-hero-image {
          width: 100%;
          height: 520px;
          overflow: hidden;
          border-radius: 24px;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
        }

        .heritage-hero-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }


        /* =========================
           HISTORY
        ========================= */

        .heritage-history {
          background: #ffffff;
          padding: 90px 60px;
        }

        .heritage-history-inner {
          max-width: 1200px;
          margin: auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .heritage-history-image {
          width: 100%;
          height: 500px;
          overflow: hidden;
          border-radius: 24px;
        }

        .heritage-history-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .heritage-section-label {
          color: #15803d;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2px;
          margin: 0 0 15px;
        }

        .heritage-history-content h2 {
          color: #14532d;
          font-size: 40px;
          line-height: 1.15;
          margin: 0 0 22px;
        }

        .heritage-history-content p {
          color: #6b7280;
          font-size: 17px;
          line-height: 1.8;
          margin: 0 0 18px;
        }


        /* =========================
           CULTURE
        ========================= */

        .heritage-culture {
          max-width: 1200px;
          margin: auto;
          padding: 90px 60px;
          text-align: center;
        }

        .heritage-culture h2 {
          color: #14532d;
          font-size: 40px;
          margin: 0 0 18px;
        }

        .heritage-section-description {
          max-width: 750px;
          margin: 0 auto 50px;
          color: #6b7280;
          font-size: 17px;
          line-height: 1.8;
        }

        .heritage-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
          text-align: left;
        }

        .heritage-card {
          background: #ffffff;
          border-radius: 16px;
          padding: 30px;
          box-shadow: 0 7px 25px rgba(0, 0, 0, 0.06);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .heritage-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.09);
        }

        .heritage-card-label {
          color: #15803d;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1.5px;
          margin: 0 0 14px;
        }

        .heritage-card h3 {
          color: #14532d;
          font-size: 22px;
          margin: 0 0 14px;
        }

        .heritage-card p {
          color: #6b7280;
          font-size: 15px;
          line-height: 1.7;
          margin: 0;
        }


        /* =========================
           FESTIVALS
        ========================= */

        .heritage-festivals {
          background: #ffffff;
          padding: 90px 60px;
        }

        .heritage-festivals-inner {
          max-width: 1200px;
          margin: auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .heritage-festivals-content h2 {
          color: #14532d;
          font-size: 40px;
          line-height: 1.15;
          margin: 0 0 22px;
        }

        .heritage-festivals-content p {
          color: #6b7280;
          font-size: 17px;
          line-height: 1.8;
          margin: 0 0 18px;
        }

        .heritage-festivals-image {
          width: 100%;
          height: 450px;
          overflow: hidden;
          border-radius: 24px;
        }

        .heritage-festivals-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }


        /* =========================
           CTA
        ========================= */

        .heritage-cta {
          background: #dcfce7;
          padding: 85px 30px;
          text-align: center;
        }

        .heritage-cta-inner {
          max-width: 850px;
          margin: auto;
        }

        .heritage-cta h2 {
          color: #14532d;
          font-size: 40px;
          margin: 0 0 20px;
        }

        .heritage-cta p {
          color: #4b5563;
          font-size: 17px;
          line-height: 1.8;
          margin: 0 auto 30px;
        }

        .heritage-cta-button {
          display: inline-block;
          background: #14532d;
          color: #ffffff;
          padding: 14px 24px;
          border-radius: 8px;
          text-decoration: none;
          font-size: 15px;
          font-weight: 700;
          transition: all 0.2s ease;
        }

        .heritage-cta-button:hover {
          background: #166534;
          transform: translateY(-2px);
        }


        /* =========================
           FOOTER
        ========================= */

        .heritage-footer {
          background: #14532d;
          color: #ffffff;
          padding: 60px 30px;
          text-align: center;
        }

        .heritage-footer-content {
          max-width: 1200px;
          margin: auto;
        }

        .heritage-footer h2 {
          color: #ffffff;
          font-size: 26px;
          margin: 0 0 15px;
        }

        .heritage-footer-description {
          color: #dcfce7;
          line-height: 1.7;
          margin: 0;
        }

        .heritage-footer-links {
          display: flex;
          justify-content: center;
          gap: 25px;
          flex-wrap: wrap;
          margin-top: 25px;
        }

        .heritage-footer-links a {
          color: #ffffff;
          text-decoration: none;
          font-size: 15px;
        }

        .heritage-footer-links a:hover {
          color: #bbf7d0;
        }

        .heritage-copyright {
          color: #bbf7d0;
          font-size: 14px;
          margin: 30px 0 0;
        }


        /* =========================
           TABLET
        ========================= */

        @media (max-width: 900px) {

          .heritage-header {
            padding: 20px 30px;
          }

          .heritage-hero {
            padding: 70px 30px;
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .heritage-hero h1 {
            font-size: 48px;
          }

          .heritage-hero-image {
            height: 450px;
          }

          .heritage-history {
            padding: 70px 30px;
          }

          .heritage-history-inner {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .heritage-history-image {
            height: 450px;
          }

          .heritage-culture {
            padding: 70px 30px;
          }

          .heritage-cards {
            grid-template-columns: 1fr;
          }

          .heritage-festivals {
            padding: 70px 30px;
          }

          .heritage-festivals-inner {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .heritage-festivals-image {
            height: 450px;
          }

        }


        /* =========================
           MOBILE
        ========================= */

        @media (max-width: 600px) {

          .heritage-header {
            padding: 18px 20px;
          }

          .heritage-nav {
            flex-direction: column;
            gap: 18px;
          }

          .heritage-logo {
            font-size: 21px;
          }

          .heritage-links {
            gap: 15px;
            flex-wrap: wrap;
            justify-content: center;
          }

          .heritage-links a {
            font-size: 14px;
          }

          .heritage-hero {
            padding: 55px 20px 60px;
          }

          .heritage-hero h1 {
            font-size: 38px;
          }

          .heritage-description {
            font-size: 16px;
          }

          .heritage-hero-image {
            height: 300px;
            border-radius: 18px;
          }

          .heritage-history {
            padding: 65px 20px;
          }

          .heritage-history-image {
            height: 300px;
            border-radius: 18px;
          }

          .heritage-history-content h2 {
            font-size: 32px;
          }

          .heritage-history-content p {
            font-size: 16px;
          }

          .heritage-culture {
            padding: 65px 20px;
          }

          .heritage-culture h2 {
            font-size: 32px;
          }

          .heritage-section-description {
            font-size: 16px;
          }

          .heritage-card {
            padding: 25px;
          }

          .heritage-festivals {
            padding: 65px 20px;
          }

          .heritage-festivals-content h2 {
            font-size: 32px;
          }

          .heritage-festivals-content p {
            font-size: 16px;
          }

          .heritage-festivals-image {
            height: 300px;
            border-radius: 18px;
          }

          .heritage-cta {
            padding: 65px 20px;
          }

          .heritage-cta h2 {
            font-size: 32px;
          }

          .heritage-cta p {
            font-size: 16px;
          }

          .heritage-footer {
            padding: 50px 20px;
          }

        }
      `}</style>


      {/* =========================
          HEADER
      ========================= */}

      <header className="heritage-header">

        <nav className="heritage-nav">

          <a
            href="/"
            className="heritage-logo"
          >
            Pangasinan Heritage
          </a>

          <div className="heritage-links">

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

        </nav>

      </header>


      {/* =========================
          HERO
      ========================= */}

      <section className="heritage-hero">

        <div>

          <p className="heritage-label">
            HISTORY • CULTURE • TRADITION
          </p>

          <h1>
            The Heritage of Pangasinan
          </h1>

          <p className="heritage-description">
            Discover the history, traditions, food, languages,
            celebrations, and cultural identity that have shaped
            Pangasinan through generations.
          </p>

          <a
            href="#history"
            className="heritage-hero-button"
          >
            Explore Heritage
          </a>

        </div>


        <div className="heritage-hero-image">

          <img
            src="/images/heritage.jpg"
            alt="Pangasinan heritage and culture"
          />

        </div>

      </section>


      {/* =========================
          HISTORY
      ========================= */}

      <section
        className="heritage-history"
        id="history"
      >

        <div className="heritage-history-inner">

          <div className="heritage-history-image">

            <img
              src="/images/heritage.jpg"
              alt="Historical and cultural heritage of Pangasinan"
            />

          </div>


          <div className="heritage-history-content">

            <p className="heritage-section-label">
              A RICH HISTORY
            </p>

            <h2>
              History of Pangasinan
            </h2>

            <p>
              Pangasinan has a long and diverse history shaped by
              communities, trade, agriculture, fishing, and
              cultural exchange.
            </p>

            <p>
              Its location along the western coast of Luzon has
              connected its people with different parts of the
              Philippines and beyond.
            </p>

            <p>
              Over generations, Pangasinan developed a distinctive
              identity reflected in its language, traditions,
              communities, food, architecture, and celebrations.
            </p>

          </div>

        </div>

      </section>


      {/* =========================
          CULTURE
      ========================= */}

      <section
        className="heritage-culture"
        id="culture"
      >

        <p className="heritage-section-label">
          CULTURAL IDENTITY
        </p>

        <h2>
          Culture & Traditions
        </h2>

        <p className="heritage-section-description">
          The culture of Pangasinan can be seen in the everyday
          lives of its people, from language and traditional food
          to celebrations, crafts, and community practices.
        </p>


        <div className="heritage-cards">


          {/* LANGUAGE */}

          <a
            href="/heritage/language"
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "block"
            }}
          >

            <article className="heritage-card">

              <p className="heritage-card-label">
                LANGUAGE
              </p>

              <h3>
                Pangasinan Language
              </h3>

              <p>
                The Pangasinan language is an important part of
                the province's cultural identity and continues to
                connect communities and generations.
              </p>

            </article>

          </a>


          {/* FOOD */}

          <a
            href="/heritage/localfood"
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "block"
            }}
          >

            <article className="heritage-card">

              <p className="heritage-card-label">
                LOCAL CUISINE
              </p>

              <h3>
                Pangasinan Food
              </h3>

              <p>
                Pangasinan is known for local delicacies and
                traditional dishes that reflect the province's
                agricultural and coastal communities.
              </p>

            </article>

          </a>


          {/* FESTIVALS */}

          <a
            href="/heritage/festival"
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "block"
            }}
          >

            <article className="heritage-card">

              <p className="heritage-card-label">
                TRADITIONS
              </p>

              <h3>
                Living Traditions
              </h3>

              <p>
                Family traditions, community gatherings,
                celebrations, crafts, music, and local practices
                continue to preserve Pangasinan's cultural identity.
              </p>

            </article>

          </a>


        </div>

      </section>


      {/* =========================
          FESTIVALS
      ========================= */}

      <section className="heritage-festivals">

        <div className="heritage-festivals-inner">


          <div className="heritage-festivals-content">

            <p className="heritage-section-label">
              CELEBRATING CULTURE
            </p>

            <h2>
              Festivals of Pangasinan
            </h2>

            <p>
              Festivals bring communities together and provide
              an opportunity to celebrate local history,
              traditions, food, music, arts, and the achievements
              of the people of Pangasinan.
            </p>

            <p>
              These celebrations help preserve cultural traditions
              while introducing them to younger generations and
              visitors.
            </p>

          </div>


          <div className="heritage-festivals-image">

            <img
              src="/images/festival.jpg"
              alt="Cultural destination in Pangasinan"
            />

          </div>

        </div>

      </section>


      {/* =========================
          CTA
      ========================= */}

      <section className="heritage-cta">

        <div className="heritage-cta-inner">

          <p className="heritage-section-label">
            PRESERVE THE STORY
          </p>

          <h2>
            Heritage Lives Through People.
          </h2>

          <p>
            The heritage of Pangasinan continues through the
            people who preserve its stories, traditions, food,
            language, crafts, and culture.
          </p>

          <a
            href="/faces"
            className="heritage-cta-button"
          >
            Meet the People
          </a>

        </div>

      </section>


      {/* =========================
          FOOTER
      ========================= */}

      <footer className="heritage-footer">

        <div className="heritage-footer-content">

          <h2>
            Pangasinan Heritage
          </h2>

          <p className="heritage-footer-description">
            Discover the places, people, stories,
            and traditions of Pangasinan.
          </p>


          <div className="heritage-footer-links">

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


          <p className="heritage-copyright">
            © 2026 Pangasinan Heritage. All rights reserved.
          </p>

        </div>

      </footer>

    </main>
  );
}