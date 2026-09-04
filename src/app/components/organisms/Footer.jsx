export default function Footer() {
  return (
    <>
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

            <a href="#home">
              Home
            </a>

            <a href="#heritage">
              Heritage
            </a>

            <a href="#destinations">
              Destinations
            </a>

            <a href="#faces">
              Faces
            </a>

          </div>

          <p className="copyright">
            © 2026 Pangasinan Heritage. All rights reserved.
          </p>

        </div>

      </footer>
    </>
  );
}