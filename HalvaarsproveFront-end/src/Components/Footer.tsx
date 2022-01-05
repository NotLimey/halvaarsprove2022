import '../Scss/footer.scss'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div>
                    <h3>Kontakt Oss</h3>
                    <h5>Telefon:</h5>
                    <p>62 00 08 80</p>
                    <br />
                    <h5>Åpningstider:</h5>
                    <p>Mandag–fredag kl. 08.00–15.30</p>
                    <br />
                    <h5>E-Post:</h5>
                    <p>kontakt@innlandetIT.no</p>
                </div>
                <div>
                    <h3>Postaddresse</h3>
                    <p>Innlandet fylkeskommune</p>
                    <p>Postboks 4404 Bedriftssenteret</p>
                    <p>2325 Hamar</p>
                    <br />
                    <h5>Organisasjonsnummer:</h5>
                    <p>920 717 152</p>
                </div>
                <div>
                    <h3>Her finner du oss</h3>
                    <h5>Fylkeshuset på Hamar</h5>
                    <p>Parkgata 64</p>
                    <p>2317 Hamar</p>
                    <br />
                    <h5>Fylkeshuset på Lillehammer</h5>
                    <p>Kirkegata 76</p>
                    <p>2609 Lillehammer</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;