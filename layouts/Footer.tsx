import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <footer className="bg-gray-900 px-4 md:px-8">
            <div className="footer-container text-white md:text-2xl flex min-h-[12rem] py-4 flex-col">
                <div className="links flex justify-center gap-12 mb-8 md:mb-12">
                    <a href="https://github.com/aytuncdemr/worldwide-wonders/tree/main#readme">
                        About
                    </a>

                    <a href="https://www.linkedin.com/in/aytun%C3%A7-demir-70339723a/">
                        Contact
                    </a>

                    <a href="https://github.com/aytuncdemr/worldwide-wonders">
                        Source Code
                    </a>
                </div>
                <div className="logos text-2xl  flex items-center gap-4 mb-4 justify-center">
                    <a href="https://github.com/aytuncdemr/">
                        <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                    </a>
                    <a href="https://www.linkedin.com/in/aytun%C3%A7-demir-70339723a/">
                        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                    </a>
                </div>
                <p className="text-center text-sm xl:text-lg mt-auto">
                    Worldwide Wonders <br />
                    @2023
                </p>
            </div>
        </footer>
    );
}
