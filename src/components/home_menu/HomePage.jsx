import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useError } from '../common/ErrorDisplay';
import ApiService from '../../services/ApiService';


const HomePage = () => {

    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();
    const { ErrorDisplay, showError } = useError();

    useEffect(() => {

        const fetchCategories = async () => {
            try {
                const response = await ApiService.getAllCategories();
                if (response.statusCode === 200) {
                    setCategories(response.data)
                } else {
                    showError(response.message);
                }

            } catch (error) {
                showError(error.response?.data?.message || error.message);

            }
        };

        fetchCategories();
    }, []);


    const handleCategoryClick = (categoryId) => {
        navigate(`/menu?category=${categoryId}`);
    }

    return (
        <div className="home-page">

            <ErrorDisplay />

            <header className="home-hero-section">
                <div className="home-hero-content">

                    {/* LEFT CONTENT */}
                    <div className="home-hero-text">
                        <span className="home-hero-badge">
                            Fast • Fresh • Delicious
                        </span>

                        <h1 className="home-hero-title">
                            The art of <br /> Speed & Quality
                        </h1>

                        <p className="home-hero-subtitle">
                            Order fresh, hygienic, and tasty meals from your favorite restaurants
                            and get them delivered hot to your doorstep in minutes.
                        </p>

                        <div className="home-hero-actions">
                            <button
                                className="home-explore-button"
                                onClick={() => navigate("/menu")}
                            >
                                Explore Menu
                            </button>

                            <p className="">
                                ⭐ 4.8 Rating • 10,000+ Happy Customers
                            </p>
                        </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="home-hero-image">
                        <img
                            src="/images/food.png"
                            alt="Delicious Food"
                        />
                    </div>

                </div>
            </header>



            <section className="home-featured-categories">
                <h2 className="home-section-title">Featured Categories</h2>
                <p className="p-featured-categories"> Discover delicious meals, fresh ingredients, and popular food categories curated just for you.</p>
                <div className="home-category-carousel">
                    {categories.map((category) => (
                        <div key={category.id}
                            className="home-category-card"
                            onClick={() => handleCategoryClick(category.id)}>
                            <h3 className="home-category-name">{category.name}</h3>
                            <p className="home-category-description">{category.description}</p>
                        </div>
                    ))
                    }
                </div>
            </section>

            <section className="home-call-to-action">
                <div className="home-cta-content">
                    <h2 className="home-cta-title">Ready to Order?</h2>
                    <p className="home-cta-text">
                        Browse our menu and place your order now!
                    </p>
                    <button
                        className="home-order-now-button"
                        onClick={() => navigate('/menu')}
                    >
                        Order Now
                    </button>
                </div>
            </section>

            
            <section class="about-area bg-white fade-anim delay-1">
                <div class="content-wrap">
                    <h2>About Us</h2>
                    <p>
                        We deliver high-quality services with customer satisfaction as our top priority.
                    </p>

                    <div class="counter-wrap">
                        <div class="counter-item fade-anim delay-2">
                            <h3>20,123</h3>
                            <span>Happy Clients</span>
                        </div>
                        <div class="counter-item fade-anim delay-3">
                            <h3>1,400</h3>
                            <span>Projects Completed</span>
                        </div>
                        <div class="counter-item fade-anim delay-4">
                            <h3>13,560</h3>
                            <span>Customer Reviews</span>
                        </div>
                    </div>
                </div>
            </section>

           
            <section class="review-area bg-white">
                <div class="content-wrap">
                    <h2 class="fade-anim delay-1">Customer Reviews</h2>

                    <div class="review-wrap">
                        <div class="review-box fade-anim delay-2">
                            <p>"Outstanding service and great support!"</p>
                            <h4>John Doe</h4>
                            <span>⭐⭐⭐⭐⭐</span>
                        </div>

                        <div class="review-box fade-anim delay-3">
                            <p>"Professional team and fast delivery."</p>
                            <h4>Sarah Smith</h4>
                            <span>⭐⭐⭐⭐⭐</span>
                        </div>

                        <div class="review-box fade-anim delay-4">
                            <p>"Highly recommend their services."</p>
                            <h4>Alex Brown</h4>
                            <span>⭐⭐⭐⭐⭐</span>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )





}
export default HomePage;