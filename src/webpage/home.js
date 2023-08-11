export function createHomePage(goToMenu) {
    const homePage = document.createElement('div');
    homePage.className = 'container';
    homePage.innerHTML = `
    <!-- Hero Section -->
<header class="jumbotron text-center">
    <h1 class="my-4">Welcome to Burger Delight</h1>
    <p class="fs-4">Experience the Juiciest Burgers in Town</p>
    <a href="#" class="btn btn-primary" id="menuLinkBtn">View Menu</a>
</header>

<!-- Featured Burgers Section -->
<section class="container my-5">
    <h2 class="text-center">Featured Burgers</h2>
    <div class="row">
        <div class="col-md-4">
            <div class="card">
                <img src="https://source.unsplash.com/270x250/?burgers, cheeseburgers" class="card-img-top" alt="Burger 1">
                <div class="card-body">
                    <h5 class="card-title">Classic Cheeseburger</h5>
                    <p class="card-text">Our signature cheeseburger with all the classic fixings.</p>
                    <a href="#" class="btn btn-primary">Order Now</a>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card">
                <img src="https://source.unsplash.com/270x250.1/?burgers, hamburgers" class="card-img-top" alt="Burger 1">
                <div class="card-body">
                    <h5 class="card-title">Classic Hamburger</h5>
                    <p class="card-text">Our signature hamburger with all the classic fixings.</p>
                    <a href="#" class="btn btn-primary">Order Now</a>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card">
                <img src="https://source.unsplash.com/270x250/?burgers, hamburgers" class="card-img-top" alt="Burger 1">
                <div class="card-body">
                    <h5 class="card-title">Classic Hamburger</h5>
                    <p class="card-text">Our signature burger with all the classic fixings.</p>
                    <a href="#" class="btn btn-primary">Order Now</a>
                </div>
            </div>
        </div>
        <!-- Repeat similar structure for more featured burgers -->
    </div>
</section>
    `;

    const menuLinkBtn = homePage.querySelector('#menuLinkBtn');
    menuLinkBtn.addEventListener('click', goToMenu);

    return homePage;
}
