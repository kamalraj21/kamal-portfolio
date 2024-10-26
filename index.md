---
layout: default
---

<section id="hero">
    <div class="container">
        <img src="{{ '/assets/images/persona.png' | relative_url }}" alt="Avatar">
        <h1>KAMAL RAJ</h1>
        <div class="divider"></div>
        <h2>Web Developer - UX Writer - Content Strategist</h2>
    </div>
</section>

<section id="projects">
    <div class="container">
        <h2>Portfolio</h2>
        <div class="projects-grid">
            <div class="project-card">
                <img src="{{ '/assets/images/ecommerce.jpg' | relative_url }}" alt="Project 1">
                <h3>SaaS Platform</h3>
                <p>Improved user retention with a redesigned onboarding process.</p>
                <a href="#" class="btn">View Case Study</a>
            </div>
            <div class="project-card">
                <img src="{{ '/assets/images/project-management (1).png' | relative_url }}" alt="Project 2">
                <h3>UX Redesign</h3>
                <p>Led the UX/UI redesign for a FinTech startup.</p>
                <a href="#" class="btn">View Case Study</a>
            </div>
        </div>
    </div>
</section>

<section id="about">
    <div class="container">
        <h2>About</h2>
        <div class="skills-grid">
            <div class="skill-card">
                <img src="{{ '/assets/images/skills.gif' | relative_url }}" alt="Content Strategy">
                <h3>Content Strategy</h3>
                <p>Creating engaging content with a strategy-driven approach.</p>
            </div>
            <div class="skill-card">
                <img src="{{ '/assets/images/prototype.png' | relative_url }}" alt="UX Writing">
                <h3>UX Writing</h3>
                <p>Crafting clear, concise copy for intuitive user experiences.</p>
            </div>
            <div class="skill-card">
                <img src="{{ '/assets/images/prototype.png' | relative_url }}" alt="Prototyping">
                <h3>Prototyping</h3>
                <p>Building high-fidelity prototypes to test usability and flow.</p>
            </div>
        </div>
    </div>
</section>

<section id="contact">
    <div class="container">
        <h2>Contact</h2>
        <div class="contact-form">
            <form action="https://formspree.io/f/your-form-id" method="POST">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" required>
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required>
                </div>
                <div class="form-group">
                    <label for="message">Message</label>
                    <textarea id="message" name="message" required></textarea>
                </div>
                <button type="submit" class="submit-btn">Send Message</button>
            </form>
        </div>
    </div>
</section>


