const Header = () => {
    return (
        <div>
            <div
                className="hero md:h-[650px] p-20 bg-no-repeat  mt-10 space-y-5 rounded-3xl text-white"
                style={{
                    backgroundImage:
                        "url(https://i.postimg.cc/WbSxX9wN/Rectangle-1.png)",
                }}
            >
                
                <div className="hero-content text-center">
                    <div className="">
                        <h1 className="mb-5 md:text-6xl text-2xl font-bold">Discover an exceptional cooking <br /> class tailored for you!</h1>
                        <p className="mb-5">
                        Each recipe is presented on its own dedicated page, containing detailed information about the dish. This information typically includes the recipe name, ingredients, step-by-step instructions, preparation time, and sometimes user reviews or ratings.
                        </p>
                        <div className="flex flex-col md:flex-row justify-center gap-2">
                        <button className="btn bg-green-500 border-none rounded-full md:text-lg font-semibold">Explore Now</button>
                        <button className="btn rounded-full md:text-lg font-semibold">Our Feedback</button>
                        </div>
                       
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Header;
