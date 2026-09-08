import os
from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable, ListFlowable, ListItem
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors

pdf_path = os.path.join(os.path.dirname(__file__), "Vaibhavi_Lakhtariya_Resume.pdf")
doc = SimpleDocTemplate(
    pdf_path,
    pagesize=letter,
    rightMargin=40,
    leftMargin=40,
    topMargin=40,
    bottomMargin=40
)

styles = getSampleStyleSheet()

# Custom Styles
title_style = ParagraphStyle(
    'TitleStyle',
    parent=styles['Normal'],
    fontName='Helvetica-Bold',
    fontSize=20,
    leading=24,
    alignment=1, # Center
    textColor=colors.HexColor('#1A1918')
)

subtitle_style = ParagraphStyle(
    'SubTitleStyle',
    parent=styles['Normal'],
    fontName='Helvetica-Bold',
    fontSize=11,
    leading=14,
    alignment=1,
    textColor=colors.HexColor('#4A4744')
)

contact_style = ParagraphStyle(
    'ContactStyle',
    parent=styles['Normal'],
    fontName='Helvetica',
    fontSize=9.5,
    leading=13,
    alignment=1,
    textColor=colors.HexColor('#333333')
)

section_heading_style = ParagraphStyle(
    'SectionHeadingStyle',
    parent=styles['Normal'],
    fontName='Helvetica-Bold',
    fontSize=11,
    leading=14,
    spaceAfter=4,
    textColor=colors.HexColor('#1A1918')
)

body_style = ParagraphStyle(
    'BodyStyle',
    parent=styles['Normal'],
    fontName='Helvetica',
    fontSize=9.5,
    leading=14,
    textColor=colors.HexColor('#2C2A29')
)

bold_label_style = ParagraphStyle(
    'BoldLabelStyle',
    parent=body_style,
    fontName='Helvetica-Bold'
)

story = []

# Header
story.append(Paragraph("VAIBHAVI LAKHTARIYA", title_style))
story.append(Spacer(1, 3))
story.append(Paragraph("FRONT-END WEB DEVELOPER (WORDPRESS)", subtitle_style))
story.append(Paragraph('+91 75750 11648 &nbsp;|&nbsp; vaibhailakhtariya1771@gmail.com &nbsp;|&nbsp; <a href="https://www.linkedin.com/in/vaibhavi-lakhtariya-a58179235/" color="#B84D26"><u>LinkedIn Profile</u></a>', contact_style))
story.append(Paragraph("Ahmedabad, Gujarat, India", contact_style))
story.append(Spacer(1, 14))

# Section 1: Professional Summary
story.append(Paragraph("PROFESSIONAL SUMMARY", section_heading_style))
story.append(HRFlowable(width="100%", thickness=1, color=colors.HexColor('#1A1918'), spaceBefore=2, spaceAfter=8))
story.append(Paragraph(
    "Front-End Web Developer with 3.5+ years of experience building and maintaining responsive, high-performing "
    "WordPress websites for clients across different industries. Experienced in turning design files into clean, mobile-friendly "
    "websites that work smoothly across browsers and devices. Comfortable managing a website from design handoff all "
    "the way through development, testing, and launch. Focused on writing quality code, improving website speed, and "
    "delivering a great user experience.",
    body_style
))
story.append(Spacer(1, 14))

# Section 2: Core Skills
story.append(Paragraph("CORE SKILLS", section_heading_style))
story.append(HRFlowable(width="100%", thickness=1, color=colors.HexColor('#1A1918'), spaceBefore=2, spaceAfter=8))

skills = [
    ("Front-End Development: ", "HTML5, CSS3/SCSS, JavaScript, jQuery, PHP, React.js"),
    ("WordPress: ", "Custom theme development, Elementor, Gutenberg, Advanced Custom Fields, Custom Post Types"),
    ("Shopify: ", "Theme customization and storefront basics"),
    ("Database: ", "MySQL"),
    ("Design Tools: ", "Figma, Adobe XD, Canva"),
    ("Website Performance & SEO: ", "Page speed optimization, technical SEO, responsive design, cross-browser compatibility, web accessibility best practices (WCAG)"),
    ("Marketing & Tracking: ", "Meta Ads, Google Analytics, Google Tag Manager"),
    ("Other Tools: ", "Git, project management tools (ClickUp, Monday.com)")
]

for label, val in skills:
    p_text = f"<b>{label}</b>{val}"
    story.append(Paragraph(p_text, body_style))
    story.append(Spacer(1, 3))

story.append(Spacer(1, 10))

# Section 3: Professional Experience
story.append(Paragraph("PROFESSIONAL EXPERIENCE", section_heading_style))
story.append(HRFlowable(width="100%", thickness=1, color=colors.HexColor('#1A1918'), spaceBefore=2, spaceAfter=8))

story.append(Paragraph("<b>Front-End Developer — ZealousWeb Technologies Pvt. Ltd.</b>", body_style))
story.append(Paragraph("2022 – 2026 &nbsp;|&nbsp; Ahmedabad, Gujarat, India", ParagraphStyle('SubDate', parent=body_style, fontSize=9, textColor=colors.HexColor('#555555'))))
story.append(Spacer(1, 6))

exp_bullets = [
    "Built and delivered more than 50 custom WordPress websites, handling the full process from design handoff to final launch.",
    "Converted design files from Figma and PSD into responsive, pixel-perfect websites that work well on all browsers and devices.",
    "Created flexible, easy-to-manage website sections so clients can update content on their own.",
    "Wrote custom website features using HTML, CSS, JavaScript, and PHP, following WordPress best practices.",
    "Improved website loading speed and overall performance through better coding and optimization practices.",
    "Set up website tracking and analytics to help clients understand visitor behavior and make informed decisions.",
    "Handled ongoing website maintenance, including fixing bugs and keeping plugins and themes up to date.",
    "Worked closely with designers, back-end developers, and project managers to deliver projects on time.",
    "Made sure websites were accessible and easy to use for all visitors."
]

for bullet in exp_bullets:
    b_text = f"&bull; &nbsp;{bullet}"
    story.append(Paragraph(b_text, ParagraphStyle('BulletStyle', parent=body_style, leftIndent=12, firstLineIndent=-12, spaceAfter=4)))

story.append(Spacer(1, 10))

# Section 4: Education
story.append(Paragraph("EDUCATION", section_heading_style))
story.append(HRFlowable(width="100%", thickness=1, color=colors.HexColor('#1A1918'), spaceBefore=2, spaceAfter=8))

story.append(Paragraph("<b>Bachelor of Computer Applications (BCA)</b>", body_style))
story.append(Paragraph("Sardar Vallabhbhai Global University &nbsp;|&nbsp; 2019 – 2022", ParagraphStyle('SubDate2', parent=body_style, fontSize=9, textColor=colors.HexColor('#555555'))))
story.append(Spacer(1, 4))
story.append(Paragraph("Core coursework: Programming, Database Management Systems, Web Development, Software Engineering, Computer Networks.", body_style))

doc.build(story)
print(f"Generated {pdf_path}")
