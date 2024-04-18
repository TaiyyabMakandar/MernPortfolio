import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const URL = "http://localhost:5000/api/auth/register";

export const Register = () => {

    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
        password: "",
    });


    const navigate = useNavigate();
    const { storeTokenInLS } = useAuth();

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        // const name = e.target.name;
        // const value = e.target.value;
        setUser({
            ...user,
            [name]: value,
        });
    };

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

            // console.log(response);
            const res_data = await response.json();
            console.log("res from server", res_data.extraDetails);
            // console.log("Response from server:", res_data);

            if (response.ok) {

                storeTokenInLS(res_data.token);
                setUser({ username: "", email: "", phone: "", password: "" });
                // localStorage.setItem("token", res_data);
                toast.success("Registration Successfully");
                navigate("/");

            } else {
                toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
            }


            // // Fetch user data after successful registration
            // const userResponse = await fetch('http://localhost:5000/api/auth/user', {
            //     method: 'GET',
            //     headers: {
            //         'Authorization': `Bearer ${res_data.token}`, // Include the token in the request headers
            //     },
            // });

            // const userData = await userResponse.json();

            // // Handle the fetched user data
            // console.log("User Data:", userData);

        } catch (error) {
            // console.log("Error during registration:", error);
            toast.error("Failed to register. Please try again later.");
        }

    };


    return (
        <>
            <section>
                <main>
                    <div className="section-registration">
                        <div className="container grid grid-two-cols">
                            <div className="registration-image">
                                <img src="/images/contact.svg" alt="" width={500} height={500} />
                            </div>

                            <div className="registration-form">
                                <h1 className="main-heading mb-3">registration form</h1>
                                <br />
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="username">username</label>
                                        <input type="text" name="username" placeholder="username" id="username"
                                            required autoComplete="off"
                                            value={user.username}
                                            onChange={handleInput}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email">email</label>
                                        <input type="email" name="email" placeholder="email" id="email"
                                            required autoComplete="off"
                                            value={user.email}
                                            onChange={handleInput} />
                                    </div>

                                    <div>
                                        <label htmlFor="phone">phone</label>
                                        <input type="number" name="phone" placeholder="phone" id="phone"
                                            required autoComplete="off"
                                            value={user.phone}
                                            onChange={handleInput} />
                                    </div>

                                    <div>
                                        <label htmlFor="password">password</label>
                                        <input type="password" name="password" placeholder="password" id="password"
                                            required autoComplete="off"
                                            value={user.password}
                                            onChange={handleInput} />
                                    </div>
                                    <br />
                                    <button type="submit" className="btn btn-submit">Register Now</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        </>
    )
}