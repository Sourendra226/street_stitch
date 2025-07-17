import HeroSlider from "./HeroSlider";

function HeroSection() {
    return (
        <section className="hero">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 px-0">
                        <HeroSlider />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
