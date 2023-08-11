// menu.js
export function createMenuPage() {
    const menuPage = document.createElement('div');
    menuPage.innerHTML = `    
    <section class="container my-5">
    <h2 class="text-center">Our Menu</h2>
    <div class="row">
        <div class="col-md-6 col-lg-4">
            <div class="card mb-4">
                <img src=https://source.unsplash.com/270x250.1/?burgers, cheeseburgers class="card-img-top" alt="Burger 1">
                <div class="card-body">
                    <h5 class="card-title">Turkey burger</h5>
                    <p class="card-text">Our signature Turkey burger with all the Turkey burger fixings.</p>
                    <p class="card-price text-danger">$5.99</p>
                    <a href="#" class="btn btn-primary btn-block">Add to Cart</a>
                </div>
            </div>
        </div>
        <div class="col-md-6 col-lg-4">
            <div class="card mb-4">
                <img src=https://source.unsplash.com/270x250.2/?burgers, cheeseburgers class="card-img-top" alt="Burger 1">
                <div class="card-body">
                    <h5 class="card-title">Portobello mushroom burger</h5>
                    <p class="card-text">Our signature Portobello mushroom burger with all the Portobello mushroom burger fixings.</p>
                    <p class="card-price text-danger">$7.99</p>
                    <a href="#" class="btn btn-primary btn-block">Add to Cart</a>
                </div>
            </div>
        </div>
        <div class="col-md-6 col-lg-4">
            <div class="card mb-4">
                <img src=https://source.unsplash.com/270x250.3/?burgers, cheeseburgers class="card-img-top" alt="Burger 1">
                <div class="card-body">
                    <h5 class="card-title">Classic Veggie burger</h5>
                    <p class="card-text">Our signature Veggie burger with all the classic fixings.</p>
                    <p class="card-price text-danger">$11.99</p>
                    <a href="#" class="btn btn-primary btn-block">Add to Cart</a>
                </div>
            </div>
        </div>
        <div class="col-md-6 col-lg-4">
            <div class="card mb-4">
                <img src=https://source.unsplash.com/270x250.4/?burgers, cheeseburgers class="card-img-top" alt="Burger 1">
                <div class="card-body">
                    <h5 class="card-title">Classic Wild salmon burger</h5>
                    <p class="card-text">Our signature Wild salmon burger with all the classic fixings.</p>
                    <p class="card-price text-danger">$3.99</p>
                    <a href="#" class="btn btn-primary btn-block">Add to Cart</a>
                </div>
            </div>
        </div>
        <div class="col-md-6 col-lg-4">
            <div class="card mb-4">
                <img src=https://source.unsplash.com/270x250.5/?burgers, cheeseburgers class="card-img-top" alt="Burger 1">
                <div class="card-body">
                    <h5 class="card-title">Classic Bean burger</h5>
                    <p class="card-text">Our signature Bean burger with all the classic fixings.</p>
                    <p class="card-price text-danger">$8.99</p>
                    <a href="#" class="btn btn-primary btn-block">Add to Cart</a>
                </div>
            </div>
        </div>
        <div class="col-md-6 col-lg-4">
            <div class="card mb-4">
                <img src=https://source.unsplash.com/270x250.6/?burgers, cheeseburgers class="card-img-top" alt="Burger 1">
                <div class="card-body">
                    <h5 class="card-title">Classic Cheeseburger</h5>
                    <p class="card-text">Our signature cheeseburger with all the classic fixings.</p>
                    <p class="card-price text-danger">$6.99</p>
                    <a href="#" class="btn btn-primary btn-block">Add to Cart</a>
                </div>
            </div>
        </div>
        <div class="col-md-6 col-lg-4">
            <div class="card mb-4">
                <img src=https://source.unsplash.com/270x250.7/?burgers, cheeseburgers class="card-img-top" alt="Burger 1">
                <div class="card-body">
                    <h5 class="card-title">Classic Cheeseburger</h5>
                    <p class="card-text">Our signature cheeseburger with all the classic fixings.</p>
                    <p class="card-price text-danger">$7.49</p>
                    <a href="#" class="btn btn-primary btn-block">Add to Cart</a>
                </div>
            </div>
        </div>
        <div class="col-md-6 col-lg-4">
            <div class="card mb-4">
                <img src=https://source.unsplash.com/270x250.8/?burgers, cheeseburgers class="card-img-top" alt="Burger 1">
                <div class="card-body">
                    <h5 class="card-title">Classic Kubie Burger</h5>
                    <p class="card-text">Our signature Kubie Burger with all the classic fixings.</p>
                    <p class="card-price text-danger">$9.99</p>
                    <a href="#" class="btn btn-primary btn-block">Add to Cart</a>
                </div>
            </div>
        </div>
        <div class="col-md-6 col-lg-4">
            <div class="card mb-4">
                <img src=https://source.unsplash.com/270x250.9/?burgers, cheeseburgers class="card-img-top" alt="Burger 1">
                <div class="card-body">
                    <h5 class="card-title">Classic Poached Burger</h5>
                    <p class="card-text">Our signature Poached Burger with all the classic fixings.</p>
                    <p class="card-price text-danger">$8.99</p>
                    <a href="#" class="btn btn-primary btn-block">Add to Cart</a>
                </div>
            </div>
        </div>
        <!-- Repeat similar structure for more menu items -->
    </div>
    </section>
`;    
    return menuPage;
}
