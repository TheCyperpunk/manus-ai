/** Proof in Motion Contact — reference-led collaboration signal field with verified direct channels and S// structural rails. */
import { ArrowUpRight, Github, Mail, MapPin, Phone } from "lucide-react";
import { AtlasFooter } from "@/components/AtlasPage";

export default function Contact() {
  return <main className="atlas-main atlas-page contact-page">
    <section className="contact-signal" aria-labelledby="contact-title">
      <div className="contact-signal__rail" aria-hidden="true">
        <span>06 / DIRECT CHANNEL</span>
        <i />
        <b>S// <em /><em /><em /><em /></b>
      </div>

      <div className="contact-signal__content">
        <div className="contact-signal__statement">
          <p className="atlas-kicker"><i /> NEXT / COLLABORATION</p>
          <h1 id="contact-title"><span>Bring the</span><span>hard</span><span><em>constraint.</em></span></h1>
        </div>

        <div className="contact-signal__context">
          <p>Working through a product question, an interface system, or a technical edge case? Start with the constraint. The build record is public; the direct channel is here.</p>
          <a className="contact-signal__primary" href="mailto:sangeethkarunakaran16@gmail.com">OPEN THE CHANNEL <ArrowUpRight size={16} /></a>
          <div className="contact-signal__status"><i /> EMAIL ROUTE / AVAILABLE</div>
        </div>
      </div>

      <div className="contact-signal__watermark" aria-hidden="true">S//</div>
    </section>

    <section className="contact-switchboard" aria-labelledby="contact-switchboard-title">
      <header className="contact-switchboard__head">
        <div>
          <p className="atlas-kicker"><i /> CHANNEL SWITCHBOARD</p>
          <h2 id="contact-switchboard-title">Choose the <em>right line.</em></h2>
        </div>
        <p>Four verified paths, arranged for a direct first signal rather than a generic form.</p>
      </header>

      <div className="contact-switchboard__grid">
        <a className="contact-channel contact-channel--email" href="mailto:sangeethkarunakaran16@gmail.com">
          <span className="contact-channel__index">01 / PRIMARY</span>
          <Mail size={22} />
          <strong>Email</strong>
          <b>sangeethkarunakaran16@gmail.com</b>
          <ArrowUpRight className="contact-channel__arrow" size={18} />
        </a>
        <a className="contact-channel contact-channel--phone" href="tel:+919539432154">
          <span className="contact-channel__index">02 / DIRECT</span>
          <Phone size={20} />
          <strong>Phone</strong>
          <b>+91 95394 32154</b>
          <ArrowUpRight className="contact-channel__arrow" size={17} />
        </a>
        <a className="contact-channel contact-channel--github" href="https://github.com/TheCyperpunk" target="_blank" rel="noreferrer">
          <span className="contact-channel__index">03 / SOURCE</span>
          <Github size={20} />
          <strong>GitHub</strong>
          <b>TheCyperpunk</b>
          <ArrowUpRight className="contact-channel__arrow" size={17} />
        </a>
        <div className="contact-channel contact-channel--location">
          <span className="contact-channel__index">04 / BASE</span>
          <MapPin size={20} />
          <strong>Location</strong>
          <b>Sulthan Bathery<br />Wayanad, Kerala</b>
        </div>
      </div>
    </section>
    <AtlasFooter />
  </main>;
}
