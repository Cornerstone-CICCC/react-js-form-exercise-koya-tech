import React, { useState } from "react";
import "./App.css";

const App = () => {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        age: "",
        favoriteFoods: [] as string[],
    });

    const [greeting, setGreeting] = useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            favoriteFoods: checked
                ? [...prev.favoriteFoods, value]
                : prev.favoriteFoods.filter((food) => food !== value),
        }));
    };

    const handleDisplayUser = () => {
        const { firstname, lastname, age, favoriteFoods } = formData;
        if (firstname && lastname && age) {
            setGreeting(
                `Hello ${firstname} ${lastname}. You are ${age} years old and your favorite foods are: ${favoriteFoods.join(
                    ", "
                )}.`
            );
        } else {
            setGreeting("Please fill out all fields.");
        }
    };

    const handleClear = () => {
        setFormData({
            firstname: "",
            lastname: "",
            age: "",
            favoriteFoods: [],
        });
        setGreeting("");
    };

    return (
        <div>
            <h1>User Form</h1>
            <form>
                <div>
                    <label htmlFor="firstname">First Name:</label>
                    <input
                        type="text"
                        id="firstname"
                        name="firstname"
                        value={formData.firstname}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="lastname">Last Name:</label>
                    <input
                        type="text"
                        id="lastname"
                        name="lastname"
                        value={formData.lastname}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="age">Age:</label>
                    <input
                        type="number"
                        id="age"
                        name="age"
                        value={formData.age}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Favorite Foods:</label>
                    <div>
                        <input
                            type="checkbox"
                            id="chicken"
                            name="favoriteFoods"
                            value="Chicken"
                            checked={formData.favoriteFoods.includes("Chicken")}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor="chicken">Chicken</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="beef"
                            name="favoriteFoods"
                            value="Beef"
                            checked={formData.favoriteFoods.includes("Beef")}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor="beef">Beef</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="vegetables"
                            name="favoriteFoods"
                            value="Vegetables"
                            checked={formData.favoriteFoods.includes(
                                "Vegetables"
                            )}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor="vegetables">Vegetables</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="dessert"
                            name="favoriteFoods"
                            value="Dessert"
                            checked={formData.favoriteFoods.includes("Dessert")}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor="dessert">Dessert</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="pork"
                            name="favoriteFoods"
                            value="Pork"
                            checked={formData.favoriteFoods.includes("Pork")}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor="pork">Pork</label>
                    </div>
                </div>
            </form>

            <button type="button" onClick={handleDisplayUser}>
                Display User
            </button>
            <button type="button" onClick={handleClear}>
                Clear
            </button>

            <div className="output">{greeting}</div>
        </div>
    );
};

export default App;
