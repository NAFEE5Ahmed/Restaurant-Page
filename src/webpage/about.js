// about.js
export function createAboutPage() {
    const aboutPage = document.createElement('div');
    aboutPage.className = 'container';
    aboutPage.innerHTML = `
    <section class="container my-5">
    <div class="row">
        <div class="col-md-6">
            <h2 class="mb-4">About Burger Delight</h2>            
            <p> Welcome to Burger Delight! We are a passionate team dedicated to bringing you the best burger experience in town. Our journey started with a simple idea: to create mouthwatering burgers that are crafted with love and made from the finest ingredients.</p> 
            <p>Our chefs have perfected the art of burger-making, and every burger on our menu is a delicious masterpiece. From classic cheeseburgers to gourmet creations, we take pride in every bite.</p> 
            <p> But it's not just about the burgers; it's about the experience. We believe in warm hospitality and creating a comfortable environment where you can enjoy every moment of your visit.</p> 
            <p> At Burger Delight, we're not just a restaurant; we're a community of burger enthusiasts. We're here to satisfy your cravings and share the joy of a perfect burger with you.</p> 
            <p>Come join us, experience the delight, and be a part of our Burger Delight family. We can't wait to serve you!</p> 
        </div>
        <div class="col-md-6">
            <img src="https://source.unsplash.com/500x520/?about, office" alt="About Us Image" class="img-fluid">
        </div>
    </div>
</section>
    `;
    return aboutPage;
}
