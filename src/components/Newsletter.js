import NewsletterForm from "../components/NewsletterForm";

function Newsletter() {
  return (
    <section className="newsletterSec">
      <div className="container">
        <div className="newsletter_content text-center">
          <div className="newsletter">
            <img
              src="/assets/images/envelope.svg"
              className="img-fluid d-block mx-auto"
              alt="Envelope Icon"
            />
            <p className="newsletter_title text-center">Stay in the Stitch.</p>
            <p className="newsletter_text text-center">
              Get early access to drops, exclusive offers, <br />
              and street style edits.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
