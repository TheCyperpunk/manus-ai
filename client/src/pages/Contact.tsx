/** Proof in Motion Contact redirect — preserves existing direct links while consolidating the interaction into Overview. */
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    window.location.replace("/#contact-switchboard");
  }, []);

  return null;
}
