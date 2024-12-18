---
layout: default
---

<section id="hero">
  <div class="hero-gradient"></div>
  <div class="hero-container">
    <img src="{{ '/assets/images/persona.png' | relative_url }}" alt="Avatar" class="hero-image">
    <h1>KAMAL RAJ</h1>
    <div class="divider"></div>
    <h2>Content Designer | UX Writer | Technical Writer</h2>
  </div>
</section>

<!-- Projects Section -->

<section id="projects">
    <div class="container">
        <h2>Portfolio</h2>
        <p class="section-description">Turning technical complexity into user delight. See how strategic content design drove 65% higher engagement and 30% faster product adoption across enterprise solutions.</p>
        <div class="projects-grid">
            <div class="project-card">
                <img src="{{ '/assets/images/microlearning.png' | relative_url }}" alt="Microlearning">
                <div class="project-card-content">
                    <h3>Microlearning Content Design</h3>
                    <p>Transformed technical documentation into user-centered learning experiences, increasing success rates by 65%.</p>
                    <a href="{{ site.baseurl }}/projects/microlearning-design/" class="btn">View Case Study</a>
                </div>
            </div>
            <div class="project-card">
                <img src="{{ '/assets/images/deployment-tool.png' | relative_url }}" alt="Deployment Tool Project">
                <div class="project-card-content">
                    <h3>Deployment Tool Content Design</h3>
                    <p>Simplified complex AI deployment workflows, reducing deployment time by 30% and improving user satisfaction to 85%.</p>
                    <a href="{{ site.baseurl }}/projects/deployment-tool-design/" class="btn">View Case Study</a>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- About Section -->

<section id="about">
    <div class="container">
        <h2>About</h2>
        <p class="section-description">UX writer and content strategist transforming technical complexity into intuitive product experiences. I combine strategic content design with clear technical writing to boost user engagement, streamline documentation, and create seamless digital experiences that drive adoption.</p>
        <div class="skills-grid">
            <div class="skill-card">
                <img src="{{ '/assets/images/content-strategy-skills.png' | relative_url }}" alt="Content Strategy">
                <h3>Content Strategy</h3>
                <p>Creating engaging content with a strategy-driven approach.</p>
            </div>
            <div class="skill-card">
                <img src="{{ '/assets/images/ux-writing-skills.png' | relative_url }}" alt="UX Writing">
                <h3>UX Writing</h3>
                <p>Crafting clear, concise copy for intuitive user experiences.</p>
            </div>
            <div class="skill-card">
                <img src="{{ '/assets/images/technical-writing-skills.png' | relative_url }}" alt="Prototyping">
                <h3>Technical Writing</h3>
                <p>Creating clear, concise developer docs for seamless user experience.</p>
            </div>
        </div>
    </div>
</section>

<section id="contact">
    <div class="container">
        <h2>Contact</h2>
        <p class="section-description">Let's collaborate on making your product's content more engaging and user-friendly.</p>
        <div class="contact-form">
            <form action="https://formspree.io/f/mkgnonyw" method="POST">
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

