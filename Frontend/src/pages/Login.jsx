import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";


const URL = "http://localhost:5000/api/auth/login";

export const Login = () => {

    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();
    const storeTokenInLS = useAuth();

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setUser({
            ...user,
            [name]: value,
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // alert(user);
        try {
            const response = await fetch(URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });

            console.log("login form", response);

            const res_data = await response.json();

            if (response.ok) {
                // alert("Login Successful");
                storeTokenInLS(res_data.token);
                // localStorage.setItem("token", res_data);
                setUser({ email: "", password: "" });
                toast.success("Login Successfully");
                navigate("/");

            } else {
                // alert("invalid credential");
                toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
                console.log("invalid credential");
            }
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <>
            <section>
                <main>
                    <div className="section-registration">
                        <div className="container grid grid-two-cols">
                            <div className="registration-image">
                                <img src="/images/contact.svg" alt="" height={500} width={500} />
                            </div>

                            <div className="registration-form">
                                <div className="main-heading mb-3">
                                    <h1>login form</h1>
                                    <br />
                                    <form onSubmit={handleSubmit}>
                                        <div>
                                            <label htmlFor="email">email</label>
                                            <input type="email" name="email" placeholder="email" id="email"
                                                required autoComplete="off"
                                                value={user.email}
                                                onChange={handleInput} />
                                        </div>

                                        <div>
                                            <label htmlFor="password">password</label>
                                            <input type="password" name="password" placeholder="password" id="password"
                                                required autoComplete="off"
                                                value={user.password}
                                                onChange={handleInput} />
                                        </div>

                                        <button type="login" className="btn btn-submit">
                                            Login
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        </>
    );
}
