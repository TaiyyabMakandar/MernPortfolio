import Analytics from "../components/Analytics";
// import { NavLink } from "react-router-dom";
// import { useAuth } from "../store/auth";

export const About = () => {
    return (<>
        <main>
            <section className="section-hero">
                <div className="container grid grid-two-cols">
                    <div className="hero-content">
                        <p>Welcome, {user ? ` ${user.username} to our website` : `to our website`}</p>
                        <h1>Why Choose Us?</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio minus magni natus consequuntur nam incidunt corrupti fugit iure, maiores fugiat nesciunt qui libero, tempore quod!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quas at vitae tempore fuga odio rem cumque similique? Fuga quisquam totam ratione? Voluptatum eligendi, quidem laboriosam hic rem earum minima.</p>

                    </div>
                </div>
            </section>
        </main>

        <Analytics />
    </>);
};

