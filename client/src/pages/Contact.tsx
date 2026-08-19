/** Proof in Motion Contact — reference-led collaboration signal field with verified direct channel and S// structural rails. */
import { ArrowUpRight } from "lucide-react";
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
    <AtlasFooter />
  </main>;
}
