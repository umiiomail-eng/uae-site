import "../styles/page.css";
import SEO from "../components/SEO";
import {
    Mail,
    MapPin
} from "lucide-react";

function Contact() {
    return (
        <>
            <SEO
                title="تواصل معنا | منصة شكاوى الإمارات"
                description="تواصل مع فريق منصة شكاوى الإمارات عبر البريد الإلكتروني للاستفسارات والدعم."
                url="https://moetshakwa-uae.com/contact"
            />

            <section className="page-section">
                <div className="page-container">
                    <h1>تواصل معنا</h1>
                    <p className="page-intro">
                        للاستفسارات المتعلقة بالخدمة أو الدعم الفني، يمكنك التواصل معنا عبر البريد الإلكتروني التالي.
                    </p>

                    <div className="contact-box">
                        <div>
                            <Mail />

                            <a href="mailto:moetshakawi-uae@gmail.com">
                               moetshakawi-uae@gmail.com
                            </a>
                        </div>

                        <div>
                            <MapPin />

                            <span>
                                الإمارات العربية المتحدة
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;