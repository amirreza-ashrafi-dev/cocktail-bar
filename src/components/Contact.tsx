import { openingHours, socials } from "../constants/index.js";
import { useContact } from "./hooks";

export const Contact = () => {
  useContact();

  return (
    <footer id="contact">
      <img
        src="/images/footer-right-leaf.png"
        alt="leaf-right"
        id="f-right-leaf"
      />
      <img
        src="/images/footer-left-leaf.png"
        alt="leaf-left"
        id="f-left-leaf"
      />

      <div className="content">
        <h2>Locate the Lounge</h2>

        <div>
          <h3>Our Flagship Venue</h3>
          <p>789 Citrus Grove, Suite 10, Miami, FL 33101</p>
        </div>

        <div>
          <h3>Get In Touch</h3>
          <p>(305) 555-0123</p>
          <p>sip@sociallounge.com</p>
        </div>

        <div>
          <h3>Weekly Hours</h3>
          {openingHours.map((time) => (
            <p key={time.day}>
              {time.day} : {time.time}
            </p>
          ))}
        </div>

        <div>
          <h3>Socials</h3>

          <div className="flex-center gap-5">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                <img src={social.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
