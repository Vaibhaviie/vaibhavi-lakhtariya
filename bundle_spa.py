import os
import re
import json

base_dir = r"c:\Users\Admin\.gemini\antigravity-ide\scratch\vaibhavi-portfolio"

index_path = os.path.join(base_dir, "index.html")
style_path = os.path.join(base_dir, "style.css")
script_path = os.path.join(base_dir, "script.js")
assets_dir = os.path.join(base_dir, "assets")

os.makedirs(assets_dir, exist_ok=True)

template_path = os.path.join(base_dir, "template.html")

with open(index_path, "r", encoding="utf-8") as f:
    html = f.read()

body_match = re.search(r"<body[^>]*>(.*?)</body>", html, re.DOTALL | re.IGNORECASE)
body_html = body_match.group(1).strip() if body_match else ""

if ("<div id=\"root\"></div>" in body_html or not body_html) and os.path.exists(template_path):
    with open(template_path, "r", encoding="utf-8") as tf:
        body_html = tf.read().strip()
elif not body_html:
    print("Could not find body content or template.html")
    exit(1)

with open(style_path, "r", encoding="utf-8") as f:
    css = f.read()

with open(script_path, "r", encoding="utf-8") as f:
    js = f.read()

# Write css asset
with open(os.path.join(assets_dir, "index-tap_ZvS0.css"), "w", encoding="utf-8") as f:
    f.write(css)

# Create assets/index-BESIVZCu.js
json_html = json.dumps(body_html)

bundle_js = f"""// Vite/SPA Client Bundle - Vaibhavi Lakhtariya Portfolio
(function() {{
    const template = {json_html};

    function mountAndInit() {{
        const root = document.getElementById('root');
        if (!root) return;
        root.innerHTML = template;
        
        // Execute Interactive Application Logic
        initPortfolioApp();
    }}

    function initPortfolioApp() {{
{js}
    }}

    if (document.readyState === 'loading') {{
        document.addEventListener('DOMContentLoaded', mountAndInit);
    }} else {{
        mountAndInit();
    }}
}})();
"""

with open(os.path.join(assets_dir, "index-BESIVZCu.js"), "w", encoding="utf-8") as f:
    f.write(bundle_js)

spa_index_html = """<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vaibhavi Lakhtariya — Front-End Web Developer</title>
    <meta name="description" content="Portfolio of Vaibhavi Lakhtariya, Front-End Web Developer with 3.5+ years of experience crafting fast, responsive web applications & digital experiences in Ahmedabad, India." />
    <meta name="author" content="Vaibhavi Lakhtariya" />
    
    <!-- Favicon Initials SVG -->
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='20' fill='%23C85A32'/><text x='50%' y='62%' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-weight='bold' font-size='42' fill='%23FFFFFF'>VL</text></svg>" />
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Syne:wght@500;600;700;800&display=swap" rel="stylesheet" />
    
    <!-- FontAwesome 6 Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    
    <!-- GSAP & ScrollTrigger CDN -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" defer></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js" defer></script>
    
    <script type="module" crossorigin src="assets/index-BESIVZCu.js"></script>
    <link rel="stylesheet" crossorigin href="assets/index-tap_ZvS0.css" />
</head>
<body>
    <div id="root"></div>
</body>
</html>"""

with open(index_path, "w", encoding="utf-8") as f:
    f.write(spa_index_html)

print("SUCCESS: index.html transformed into SPA root template!")
