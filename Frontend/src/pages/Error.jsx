
import { NavLink } from 'react-router-dom';

const Error = () => {
    return (
        <>
            <section id="error-page">
                <div className="container content">
                    <h2 className="header">
                        404
                    </h2>
                    <h4>Sorry! page not found</h4>

                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim accusamus tenetur voluptas, qui, impedit tempore sed quisquam, dicta expedita minima aut nesciunt.</p>
                    <div className="btns">
                        <NavLink to="/">return home</NavLink>
                        <NavLink to="/contact">report problem</NavLink>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Error