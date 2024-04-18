import Analytics from "../components/Analytics";

export const Home = () => {
    return (
        <>
            <main>
                <section id="hero">
                    <div class="container">
                        <div class="hero-image-animate-animated animate-bounceInLeft">
                            <img src="images/two.png" alt="" />
                        </div>
                        <div class="hero-content">
                            <h1>
                                <span class="hi-text">Hi</span>, I am
                                <span class="name-text">Taiyyab Makandar</span>
                            </h1>
                            <h2>Frontend Developer</h2>
                        </div>
                    </div>
                </section>

                <section id="project">
                    <h2>PROJECT</h2>
                    <div class="container">
                        <div class="project-container">
                            <div class="grid-item">
                                <div class="card">
                                    <img src="images/project1.png" alt="" />
                                    <a href="#"></a>
                                    <div class="card-content">
                                        <h3>Tribute Website</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="grid-item">
                                <div class="card">
                                    <img src="images/Project10.png" alt="" />
                                    <a href="#"></a>
                                    <div class="card-content">
                                        <h3>Job Application</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="grid-item">
                                <div class="card">
                                    <img src="images/project3.png" alt="" />
                                    <a href="#"></a>
                                    <div class="card-content">
                                        <h3>Parallax Website</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="grid-item">
                                <div class="card">
                                    <img src="images/project4.png" alt="" />
                                    <a href="#"></a>
                                    <div class="card-content">
                                        <h3>Landing Page</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="grid-item">
                                <div class="card">
                                    <img src="images/project5.png" alt="" />
                                    <a href="#"></a>
                                    <div class="card-content">
                                        <h3>Restaurant Website</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="grid-item">
                                <div class="card">
                                    <img src="images/project6.png" alt="" />
                                    <a href="#"></a>
                                    <div class="card-content">
                                        <h3>Music Website</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="grid-item">
                                <div class="card">
                                    <img src="images/project7.png" alt="" />
                                    <a href="#"></a>
                                    <div class="card-content">
                                        <h3>Youtube Clone</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="grid-item">
                                <div class="card">
                                    <img src="images/project8.png" alt="" />
                                    <a href="#"></a>
                                    <div class="card-content">
                                        <h3>Documentation Website</h3>
                                    </div>
                                </div>
                            </div>

                            <div class="grid-item">
                                <div class="card">
                                    <img src="images/project9.png" alt="" />
                                    <a href="#"></a>
                                    <div class="card-content">
                                        <h3>Blog Website</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="contact">
                    <div class="container">
                        <h2>Let's work together...</h2>
                        <div class="top-contact">
                            <div class="contact-way">
                                <i class="fab fa-linkedin"></i>
                                <h3>Linkedin</h3>
                            </div>
                            <div class="contact-way">
                                <i class="fab fa-twitter"></i>
                                <h3>Twitter</h3>
                            </div>
                            <div class="contact-way">
                                <h3>@ Send Mail</h3>
                            </div>
                        </div>
                        <div class="bottom-contact">
                            <div class="contact-way">
                                <i class="fab fa-github"></i>
                                <h3>Github</h3>
                            </div>
                            <div class="contact-way">
                                <i class="fa fa-mobile"></i>
                                <h3>Mobile</h3>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}