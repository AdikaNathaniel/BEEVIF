from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import cm
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, HRFlowable, Table, TableStyle
)
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_JUSTIFY

OUTPUT = "BEEVIF_About.pdf"

doc = SimpleDocTemplate(
    OUTPUT,
    pagesize=A4,
    rightMargin=2*cm,
    leftMargin=2*cm,
    topMargin=2*cm,
    bottomMargin=2*cm,
)

styles = getSampleStyleSheet()

GOLD   = colors.HexColor("#C8960C")
DARK   = colors.HexColor("#1A1A2E")
WHITE  = colors.white
LIGHT  = colors.HexColor("#F5F5F5")

title_style = ParagraphStyle(
    "Title",
    parent=styles["Title"],
    fontSize=26,
    textColor=DARK,
    spaceAfter=4,
    alignment=TA_CENTER,
    fontName="Helvetica-Bold",
)

subtitle_style = ParagraphStyle(
    "Subtitle",
    parent=styles["Normal"],
    fontSize=13,
    textColor=GOLD,
    spaceAfter=6,
    alignment=TA_CENTER,
    fontName="Helvetica-Bold",
)

tagline_style = ParagraphStyle(
    "Tagline",
    parent=styles["Normal"],
    fontSize=10,
    textColor=colors.grey,
    spaceAfter=2,
    alignment=TA_CENTER,
    fontName="Helvetica-Oblique",
)

section_heading = ParagraphStyle(
    "SectionHeading",
    parent=styles["Heading2"],
    fontSize=13,
    textColor=DARK,
    spaceBefore=14,
    spaceAfter=6,
    fontName="Helvetica-Bold",
    borderPad=2,
)

body_style = ParagraphStyle(
    "Body",
    parent=styles["Normal"],
    fontSize=10,
    textColor=colors.HexColor("#333333"),
    spaceAfter=6,
    leading=15,
    alignment=TA_JUSTIFY,
    fontName="Helvetica",
)

bullet_style = ParagraphStyle(
    "Bullet",
    parent=body_style,
    leftIndent=16,
    spaceAfter=4,
    bulletIndent=6,
)

link_style = ParagraphStyle(
    "Link",
    parent=body_style,
    textColor=colors.HexColor("#0645AD"),
    alignment=TA_CENTER,
    fontSize=10,
)

story = []

# Header
story.append(Spacer(1, 0.3*cm))
story.append(Paragraph("BEEVIF", title_style))
story.append(Paragraph("Baiden Etsiakoh Eagle Vision Foundation", subtitle_style))
story.append(Paragraph("Accra, Ghana &nbsp;|&nbsp; Non-Governmental Organisation", tagline_style))
story.append(Spacer(1, 0.2*cm))
story.append(HRFlowable(width="100%", thickness=2, color=GOLD))
story.append(Spacer(1, 0.4*cm))

# About
story.append(Paragraph("About BEEVIF", section_heading))
story.append(Paragraph(
    "The Baiden Etsiakoh Eagle Vision Foundation (BEEVIF) is a Ghana-based, non-governmental "
    "organisation headquartered in Accra. Operating for over a decade, BEEVIF is committed to "
    "sustainable community development in underprivileged areas across rural Ghana. Through "
    "partnerships with sponsors and volunteers, the foundation delivers impactful programmes that "
    "transform lives and uplift entire communities.",
    body_style,
))

story.append(Spacer(1, 0.2*cm))
story.append(HRFlowable(width="100%", thickness=0.5, color=colors.lightgrey))

# Mission
story.append(Paragraph("Our Mission", section_heading))
story.append(Paragraph(
    "To empower individuals and families by providing access to quality education, "
    "promoting health and well-being, and ensuring food security.",
    body_style,
))

story.append(Spacer(1, 0.2*cm))
story.append(HRFlowable(width="100%", thickness=0.5, color=colors.lightgrey))

# Core Focus Areas
story.append(Paragraph("Core Focus Areas", section_heading))

pillars = [
    ("Education",
     "Supporting learning programmes and institutions — including Special Grace Academy — "
     "to provide quality educational opportunities for children in underserved communities."),
    ("Health",
     "Running medical outreach, awareness campaigns, and support services to advance "
     "community well-being and improve access to healthcare."),
    ("Food Security",
     "Implementing relief aid programmes and nutrition initiatives to help families "
     "access adequate, nutritious food and reduce poverty."),
]

for icon_label, description in pillars:
    story.append(Paragraph(f"<b>{icon_label}</b>", bullet_style))
    story.append(Paragraph(description, ParagraphStyle(
        "IndentedBody",
        parent=body_style,
        leftIndent=16,
        spaceAfter=8,
    )))

story.append(HRFlowable(width="100%", thickness=0.5, color=colors.lightgrey))

# Key Initiatives
story.append(Paragraph("Key Initiatives", section_heading))
initiatives = [
    "Medical outreach across rural Ghanaian communities",
    "Relief aid distribution for vulnerable families",
    "Educational support and school programmes",
    "Poverty reduction and livelihood development",
]
for item in initiatives:
    story.append(Paragraph(f"• &nbsp; {item}", bullet_style))

story.append(Spacer(1, 0.2*cm))
story.append(HRFlowable(width="100%", thickness=0.5, color=colors.lightgrey))

# Leadership Table
story.append(Paragraph("Leadership Team", section_heading))

table_data = [
    ["Name", "Role"],
    ["Thomas Etsiakoh",        "Chief Executive Officer (CEO)"],
    ["Hannah Etsiakoh",        "Vice President"],
    ["Samuel Gracious Etsiakoh", "International Liaison Officer"],
    ["Bertha Ghartey",         "Administrator"],
]

col_widths = [7*cm, 9*cm]
table = Table(table_data, colWidths=col_widths)
table.setStyle(TableStyle([
    ("BACKGROUND",   (0, 0), (-1, 0),  DARK),
    ("TEXTCOLOR",    (0, 0), (-1, 0),  WHITE),
    ("FONTNAME",     (0, 0), (-1, 0),  "Helvetica-Bold"),
    ("FONTSIZE",     (0, 0), (-1, 0),  10),
    ("ALIGN",        (0, 0), (-1, -1), "LEFT"),
    ("VALIGN",       (0, 0), (-1, -1), "MIDDLE"),
    ("FONTNAME",     (0, 1), (-1, -1), "Helvetica"),
    ("FONTSIZE",     (0, 1), (-1, -1), 10),
    ("ROWBACKGROUNDS", (0, 1), (-1, -1), [LIGHT, WHITE]),
    ("GRID",         (0, 0), (-1, -1), 0.5, colors.lightgrey),
    ("TOPPADDING",   (0, 0), (-1, -1), 6),
    ("BOTTOMPADDING",(0, 0), (-1, -1), 6),
    ("LEFTPADDING",  (0, 0), (-1, -1), 8),
]))
story.append(table)

story.append(Spacer(1, 0.4*cm))
story.append(HRFlowable(width="100%", thickness=0.5, color=colors.lightgrey))

# Partnership
story.append(Paragraph("Partner With Us", section_heading))
story.append(Paragraph(
    "BEEVIF actively seeks sponsors, donors, and partners to expand its reach and deepen its "
    "impact within underprivileged communities. If you or your organisation would like to "
    "collaborate, please visit our website below.",
    body_style,
))

story.append(Spacer(1, 0.3*cm))
story.append(HRFlowable(width="100%", thickness=2, color=GOLD))
story.append(Spacer(1, 0.3*cm))

# Link
story.append(Paragraph("Learn more about us:", ParagraphStyle(
    "LinkLabel", parent=body_style, alignment=TA_CENTER, textColor=colors.grey, fontSize=9,
)))
story.append(Paragraph(
    '<a href="https://sites.google.com/view/beevif/about" color="#0645AD">'
    'https://sites.google.com/view/beevif/about</a>',
    link_style,
))

story.append(Spacer(1, 0.5*cm))
story.append(Paragraph(
    "© 2026 Baiden Etsiakoh Eagle Vision Foundation · All Rights Reserved",
    ParagraphStyle("Footer", parent=body_style, alignment=TA_CENTER,
                   fontSize=8, textColor=colors.grey),
))

doc.build(story)
print(f"PDF created: {OUTPUT}")
