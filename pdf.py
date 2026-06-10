from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors

def generate_test_pdf(filename="test_extraction_data.pdf"):
    # 1. Setup Document
    doc = SimpleDocTemplate(
        filename,
        pagesize=letter,
        rightMargin=40, leftMargin=40, topMargin=40, bottomMargin=40
    )
    story = []
    styles = getSampleStyleSheet()
    
    # Custom styles
    title_style = ParagraphStyle(
        'DocTitle', parent=styles['Heading1'], fontSize=22, leading=26, textColor=colors.HexColor("#1A365D"), spaceAfter=12
    )
    h2_style = ParagraphStyle(
        'SectionHeader', parent=styles['Heading2'], fontSize=14, leading=18, textColor=colors.HexColor("#2C5282"), spaceBefore=15, spaceAfter=8
    )
    body_style = ParagraphStyle(
        'TableBody', parent=styles['BodyText'], fontSize=9, leading=11
    )


    # --- PAGE 2: COMPLEX TABLE (Merged Cells & Multi-line Text) ---
    story.append(Paragraph("Scenario 2: Complex Table (Edge-Case Testing)", h2_style))
    story.append(Paragraph("This table features spanning/merged rows and longer text strings. Use this to check if your tool misaligns bounding boxes or loses column continuity.", styles['Normal']))
    story.append(Spacer(1, 15))

    complex_data = [
        ["Region", "Quarter", "Product Category", "Performance Metrics & Summary Notes", "Revenue Target achieved?"],
        ["North America", "Q1", "Enterprise SaaS", "Exceeded basic margins due to early Q1 renewals. Enterprise segment scaling fast.", "Yes"],
        ["", "Q2", "Consumer Hardware", "Supply chain constraints delayed shipping volumes. Backlog pushed to Q3.", "No"],
        ["Europe & EMEA", "Q1", "Professional Services", "Stable consulting delivery. Resourcing remained steady throughout the fiscal quarter.", "Yes"],
        ["", "Q2", "Enterprise SaaS", "Localized European hosting compliance requirements met ahead of schedule.", "Yes"]
    ]

    formatted_complex = [[Paragraph(cell, body_style) for cell in row] for row in complex_data]
    
    t2 = Table(formatted_complex, colWidths=[90, 55, 100, 210, 75])
    t2.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor("#2C5282")),
        ('ALIGN', (0, 0), (-1, -1), 'LEFT'),
        ('GRID', (0, 0), (-1, -1), 0.5, colors.HexColor("#CBD5E0")),
        # Merge Region for North America (Row 1 to Row 2)
        ('SPAN', (0, 1), (0, 2)),
        # Merge Region for Europe (Row 3 to Row 4)
        ('SPAN', (0, 3), (0, 4)),
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ('TOPPADDING', (0, 0), (-1, -1), 6),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 6),
    ]))

    for i in range(len(complex_data[0])):
        t2._cellvalues[0][i].style.textColor = colors.whitesmoke

    story.append(t2)

    # Build Document
    doc.build(story)
    print(f"Success: '{filename}' generated with structured test tables.")

if __name__ == "__main__":
    generate_test_pdf()