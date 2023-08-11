// contact.js
export function createContactPage() {
    const contactPage = document.createElement('section');
    contactPage.className = 'container';
    contactPage.innerHTML = `
    <section class="container my-5">
    <div class="row">
        <div class="col-md-6">
            <h2 class="mb-4">Contact Us</h2>
            <p>If you have any questions, comments, or feedback, please feel free to get in touch with us. We'd love to hear from you!</p>
            <ul class="list-unstyled">
                <li><strong>Address:</strong> 123 Burger Street, Cityville</li>
                <li><strong>Phone:</strong> (123) 456-7890</li>
                <li><strong>Email:</strong> info@burgerdelight.com</li>
            </ul>
        </div>
        <div class="col-md-6">
            <h2 class="mb-4">Get in Touch</h2>
            <form>
                <div class="form-group mt-4">
                    <input type="text" class="form-control" placeholder="Your Name">
                </div>
                <div class="form-group mt-4">
                    <input type="email" class="form-control" placeholder="Your Email">
                </div>
                <div class="form-group mt-4">
                    <textarea class="form-control" rows="5" placeholder="Your Message"></textarea>
                </div>
                <button type="submit" class="btn btn-primary mt-4 mb-2">Send Message</button>
            </form>
        </div>
    </div>
    </section>
    `;
    return contactPage;
}
