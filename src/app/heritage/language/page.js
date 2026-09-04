export default function Language() {
  return (
    <main className="heritage-detail-page">

      <style>{`
        .heritage-detail-page {
          min-height: 100vh;
          background: #f5f7f2;
          color: #1f2933;
        }

        .heritage-detail-page * {
          box-sizing: border-box;
        }

        .detail-header {
          background: #ffffff;
          border-bottom: 1px solid #e5e7eb;
          padding: 20px 60px;
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .detail-nav {
          max-width: 1200px;
          margin: auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .detail-logo {
          color: #14532d;
          font-size: 24px;
          font-weight: 700;
          text-decoration: none;
        }

        .detail-links {
          display: flex;
          gap: 30px;
        }

        .detail-links a {
          color: #374151;
          text-decoration: none;
          font-size: 15px;
          font-weight: 500;
        }

        .detail-links a:hover {
          color: #15803d;
        }

        .detail-hero {
          max-width: 1280px;
          margin: auto;
          padding: 80px 60px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .detail-label {
          color: #15803d;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2px;
          margin: 0 0 15px;
        }

        .detail-hero h1 {
          color: #14532d;
          font-size: 56px;
          line-height: 1.05;
          margin: 0 0 25px;
        }

        .detail-intro {
          color: #6b7280;
          font-size: 18px;
          line-height: 1.8;
          margin: 0;
        }

        .detail-location {
          margin-top: 25px;
          color: #374151;
          font-weight: 600;
        }

        .detail-hero-image {
          width: 100%;
          height: 500px;
          object-fit: cover;
          border-radius: 24px;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
        }

        .detail-content {
          background: #ffffff;
          padding: 90px 60px;
        }

        .detail-content-inner {
          max-width: 1000px;
          margin: auto;
        }

        .detail-content h2 {
          color: #14532d;
          font-size: 38px;
          line-height: 1.2;
          margin: 0 0 22px;
        }

        .detail-content h3 {
          color: #14532d;
          font-size: 24px;
          margin: 35px 0 12px;
        }

        .detail-content p {
          color: #6b7280;
          font-size: 17px;
          line-height: 1.8;
          margin: 0 0 18px;
        }

        .detail-highlights {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
          margin-top: 50px;
        }

        .highlight-card {
          background: #f5f7f2;
          padding: 28px;
          border-radius: 16px;
        }

        .highlight-card h3 {
          color: #14532d;
          font-size: 20px;
          margin: 0 0 12px;
        }

        .highlight-card p {
          font-size: 15px;
          margin: 0;
        }

        .detail-back {
          background: #dcfce7;
          padding: 75px 20px;
          text-align: center;
        }

        .detail-back h2 {
          color: #14532d;
          font-size: 36px;
          margin: 0 0 25px;
        }

        .back-button {
          display: inline-block;
          background: #14532d;
          color: #ffffff;
          padding: 14px 24px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 700;
        }

        .back-button:hover {
          background: #166534;
        }

        .detail-footer {
          background: #14532d;
          color: #ffffff;
          text-align: center;
          padding: 55px 20px;
        }

        .detail-footer h2 {
          margin: 0 0 15px;
          color: #ffffff;
        }

        .detail-footer p {
          color: #dcfce7;
          margin: 0;
        }

        @media (max-width: 900px) {
          .detail-hero {
            grid-template-columns: 1fr;
          }

          .detail-highlights {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 600px) {
          .detail-header {
            padding: 18px 20px;
          }

          .detail-nav {
            flex-direction: column;
            gap: 18px;
          }

          .detail-logo {
            font-size: 21px;
          }

          .detail-links {
            gap: 15px;
            flex-wrap: wrap;
            justify-content: center;
          }

          .detail-links a {
            font-size: 14px;
          }

          .detail-hero {
            padding: 55px 20px 65px;
          }

          .detail-hero h1 {
            font-size: 40px;
          }

          .detail-intro {
            font-size: 16px;
          }

          .detail-hero-image {
            height: 300px;
            border-radius: 18px;
          }

          .detail-content {
            padding: 65px 20px;
          }

          .detail-content h2 {
            font-size: 32px;
          }

          .detail-content p {
            font-size: 16px;
          }

          .detail-back h2 {
            font-size: 32px;
          }
        }
      `}</style>

      <header className="detail-header">
        <nav className="detail-nav">

          <a href="/" className="detail-logo">
            Pangasinan Heritage
          </a>

          <div className="detail-links">
            <a href="/">Home</a>
            <a href="/heritage">Heritage</a>
            <a href="/destinations">Destinations</a>
            <a href="/faces">Faces</a>
          </div>

        </nav>
      </header>

      <section className="detail-hero">

        <div>

          <p className="detail-label">
            CULTURE • LANGUAGE • HISTORY
          </p>

          <h1>
            Pangasinan Language
          </h1>

          <p className="detail-intro">
            Discover the history of the Pangasinan language,
            a language that has helped communities express
            their identity, traditions, stories, and everyday
            life across generations.
          </p>

          <p className="detail-location">
            📍 Pangasinan, Philippines
          </p>

        </div>

        <img
          src="/images/heritage.jpg"
          alt="Cultural heritage of Pangasinan"
          className="detail-hero-image"
        />

      </section>

      <section className="detail-content">

        <div className="detail-content-inner">

          <p className="detail-label">
            A LANGUAGE WITH HISTORY
          </p>

          <h2>
            The History of the Pangasinan Language
          </h2>

          <p>
            Pangasinan is one of the major languages of
            northern Luzon and has long been spoken by
            communities throughout the province of Pangasinan.
            The language developed alongside the communities
            that settled, traded, farmed, and built their lives
            throughout the region.
          </p>

          <p>
            Over time, Pangasinan communities came into contact
            with other peoples and languages through trade,
            migration, education, religion, and political
            changes. These interactions influenced the way
            people communicated while the Pangasinan language
            continued to serve as an important part of local
            identity.
          </p>

          <p>
            The language has traditionally been passed from
            parents and elders to younger generations. Stories,
            expressions, songs, conversations, and everyday
            practices helped preserve words and ways of speaking
            that connect present communities with their past.
          </p>

          <h3>
            Language and Cultural Identity
          </h3>

          <p>
            A language is more than a means of communication.
            It carries local expressions, memories, traditions,
            values, and ways of understanding the community.
            For many Pangasinan families, speaking the language
            can therefore be a way of maintaining a connection
            with their cultural roots.
          </p>

          <div className="detail-highlights">

            <div className="highlight-card">
              <h3>
                🗣️ Oral Tradition
              </h3>

              <p>
                Stories, conversations, songs, and expressions
                have helped pass cultural knowledge from one
                generation to another.
              </p>
            </div>

            <div className="highlight-card">
              <h3>
                👨‍👩‍👧 Generations
              </h3>

              <p>
                Families and communities play an important role
                in continuing the use of the Pangasinan language.
              </p>
            </div>

            <div className="highlight-card">
              <h3>
                🌿 Identity
              </h3>

              <p>
                The language remains connected to the history,
                culture, and identity of Pangasinan communities.
              </p>
            </div>

          </div>

        </div>

      </section>

      <section className="detail-back">

        <h2>
          Continue Exploring Pangasinan Heritage
        </h2>

        <a
          href="/heritage"
          className="back-button"
        >
          Back to Heritage
        </a>

      </section>

      <footer className="detail-footer">

        <h2>
          Pangasinan Heritage
        </h2>

        <p>
          Discover the places, people, stories, and traditions
          of Pangasinan.
        </p>

      </footer>

    </main>
  );
}