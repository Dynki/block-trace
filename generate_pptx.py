#!/usr/bin/env python3
"""Generate a PowerPoint presentation from the Block Trace pencil design."""

from pptx import Presentation
from pptx.util import Inches, Pt, Emu
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN, MSO_ANCHOR
from pptx.enum.shapes import MSO_SHAPE
import os

# --- Color Palette ---
BG_DARK = RGBColor(0x0A, 0x0F, 0x1C)
CARD_BG = RGBColor(0x1E, 0x29, 0x3B)
DARKER_BG = RGBColor(0x0F, 0x17, 0x2A)
ACCENT = RGBColor(0x22, 0xD3, 0xEE)
WHITE = RGBColor(0xFF, 0xFF, 0xFF)
GRAY_LIGHT = RGBColor(0x94, 0xA3, 0xB8)
GRAY_MED = RGBColor(0x64, 0x74, 0x8B)
GRAY_DARK = RGBColor(0x47, 0x55, 0x69)
BLACK = RGBColor(0x0A, 0x0F, 0x1C)

SLIDE_W = Inches(13.333)
SLIDE_H = Inches(7.5)


def set_slide_bg(slide, color=BG_DARK):
    bg = slide.background
    fill = bg.fill
    fill.solid()
    fill.fore_color.rgb = color


def add_text_box(slide, left, top, width, height, text, font_size=18,
                 color=WHITE, bold=False, font_name="Calibri", align=PP_ALIGN.LEFT,
                 line_spacing=None, word_wrap=True):
    txBox = slide.shapes.add_textbox(left, top, width, height)
    tf = txBox.text_frame
    tf.word_wrap = word_wrap
    p = tf.paragraphs[0]
    p.text = text
    p.font.size = Pt(font_size)
    p.font.color.rgb = color
    p.font.bold = bold
    p.font.name = font_name
    p.alignment = align
    if line_spacing:
        p.line_spacing = Pt(line_spacing)
    return txBox


def add_rounded_rect(slide, left, top, width, height, fill_color=CARD_BG):
    shape = slide.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, left, top, width, height)
    shape.fill.solid()
    shape.fill.fore_color.rgb = fill_color
    shape.line.fill.background()
    shape.rotation = 0.0
    # Adjust corner radius
    if hasattr(shape, 'adjustments') and len(shape.adjustments) > 0:
        shape.adjustments[0] = 0.05
    return shape


def add_accent_line(slide, left, top, width, height=Pt(3)):
    shape = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, left, top, width, height)
    shape.fill.solid()
    shape.fill.fore_color.rgb = ACCENT
    shape.line.fill.background()
    return shape


def add_slide_number(slide, num):
    add_text_box(slide, Inches(12.5), Inches(7.0), Inches(0.6), Inches(0.3),
                 f"{num:02d}", font_size=10, color=GRAY_DARK, font_name="Consolas")


def add_section_label(slide, left, top, text):
    add_text_box(slide, left, top, Inches(4), Inches(0.3),
                 text, font_size=10, color=ACCENT, bold=True, font_name="Consolas")


def add_title(slide, left, top, text, width=Inches(8), font_size=36):
    add_text_box(slide, left, top, width, Inches(1),
                 text, font_size=font_size, color=WHITE, bold=True)


def add_description(slide, left, top, text, width=Inches(7)):
    add_text_box(slide, left, top, width, Inches(1),
                 text, font_size=14, color=GRAY_MED, line_spacing=22)


def add_card(slide, left, top, width, height, title_text, desc_text,
             icon_text=None, title_size=14, desc_size=11):
    card = add_rounded_rect(slide, left, top, width, height)
    y_off = top + Inches(0.25)
    if icon_text:
        add_text_box(slide, left + Inches(0.25), y_off, Inches(0.5), Inches(0.3),
                     icon_text, font_size=18, color=ACCENT)
        y_off += Inches(0.35)
    add_text_box(slide, left + Inches(0.25), y_off, width - Inches(0.5), Inches(0.3),
                 title_text, font_size=title_size, color=WHITE, bold=True)
    y_off += Inches(0.35)
    add_text_box(slide, left + Inches(0.25), y_off, width - Inches(0.5), height - Inches(1),
                 desc_text, font_size=desc_size, color=GRAY_LIGHT, line_spacing=18)
    return card


# ============================================================
# CREATE PRESENTATION
# ============================================================

prs = Presentation()
prs.slide_width = SLIDE_W
prs.slide_height = SLIDE_H
blank_layout = prs.slide_layouts[6]  # Blank layout

# ============================================================
# SLIDE 1 - Title
# ============================================================
slide = prs.slides.add_slide(blank_layout)
set_slide_bg(slide)
add_accent_line(slide, Inches(0), Inches(0), SLIDE_W, Pt(3))

add_text_box(slide, Inches(2), Inches(2.2), Inches(9.3), Inches(0.8),
             "[Insert Company Name]", font_size=44, color=WHITE, bold=True,
             align=PP_ALIGN.CENTER)
add_text_box(slide, Inches(3), Inches(3.2), Inches(7.3), Inches(0.5),
             "Composable Token Infrastructure for Real-World Asset Traceability",
             font_size=20, color=ACCENT, align=PP_ALIGN.CENTER)
add_accent_line(slide, Inches(6.0), Inches(4.0), Inches(1.3), Pt(2))
add_text_box(slide, Inches(3), Inches(4.3), Inches(7.3), Inches(0.5),
             "Turning physical assets into verifiable digital structures.",
             font_size=14, color=GRAY_LIGHT, align=PP_ALIGN.CENTER)
add_slide_number(slide, 1)

# ============================================================
# SLIDE 2 - The Problem
# ============================================================
slide = prs.slides.add_slide(blank_layout)
set_slide_bg(slide)

add_section_label(slide, Inches(0.8), Inches(0.5), "THE PROBLEM")
add_title(slide, Inches(0.8), Inches(0.85), "Broken Traceability Across Industries")
add_description(slide, Inches(0.8), Inches(1.6),
                "Enterprise supply chains run on fragmented, siloed data that cannot be trusted across organisations.")

problems = [
    ("\u25A6", "Fragmented Systems",
     "Traceability data lives across dozens of disconnected ERPs, spreadsheets, and legacy databases with no shared source of truth."),
    ("\u26D4", "No Cross-Org Trust",
     "Enterprise data lacks cryptographic verifiability. Partners, auditors, and regulators cannot independently verify claims."),
    ("\u2718", "Unverifiable BOMs",
     "Bills of materials cannot be cryptographically verified. Component history is easily lost or falsified."),
    ("\u2370", "Hard to Audit",
     "Asset histories require manual reconstruction. Compliance audits are expensive, slow, and error-prone."),
    ("\u2611", "Manual Compliance",
     "Regulatory compliance is handled through manual processes \u2014 costly, unscalable, and constantly at risk of failure."),
]

card_w = Inches(2.25)
card_h = Inches(3.2)
start_x = Inches(0.8)
y = Inches(2.8)
gap = Inches(0.2)

for i, (icon, title, desc) in enumerate(problems):
    x = start_x + i * (card_w + gap)
    add_card(slide, x, y, card_w, card_h, title, desc, icon_text=icon)

add_slide_number(slide, 2)

# ============================================================
# SLIDE 3 - The Opportunity
# ============================================================
slide = prs.slides.add_slide(blank_layout)
set_slide_bg(slide)

add_section_label(slide, Inches(0.8), Inches(0.5), "THE OPPORTUNITY")
add_title(slide, Inches(0.8), Inches(0.85), "Three Forces Converging")
add_description(slide, Inches(0.8), Inches(1.6),
                "Regulatory pressure, enterprise SaaS maturity, and RWA tokenisation are creating an infrastructure-level opportunity.")

# Three pillars
pillars = [
    ("Blockchain\nInfrastructure", Inches(1.5)),
    ("Verifiable\nAsset Infrastructure", Inches(5.2)),
    ("Enterprise SaaS\nMaturity", Inches(8.9)),
]
for text, x in pillars:
    is_center = "Verifiable" in text
    fill = ACCENT if is_center else CARD_BG
    text_color = BLACK if is_center else WHITE
    h = Inches(1.6) if is_center else Inches(1.4)
    y_pos = Inches(2.9) if is_center else Inches(3.0)
    shape = add_rounded_rect(slide, x, y_pos, Inches(3.0), h, fill_color=fill)
    add_text_box(slide, x, y_pos + Inches(0.3), Inches(3.0), Inches(0.8),
                 text, font_size=16 if is_center else 14, color=text_color,
                 bold=True, align=PP_ALIGN.CENTER, line_spacing=22)

# Arrows between pillars
for ax in [Inches(4.6), Inches(8.3)]:
    add_text_box(slide, ax, Inches(3.4), Inches(0.5), Inches(0.4),
                 "\u25B6", font_size=18, color=ACCENT, align=PP_ALIGN.CENTER)

# Stats bar
stats = [
    ("$16T+", "Projected RWA tokenisation market by 2030"),
    ("80%", "Of enterprises cite supply chain visibility as critical priority"),
    ("47+", "New supply chain due diligence regulations enacted globally since 2020"),
]
stat_w = Inches(3.7)
for i, (val, label) in enumerate(stats):
    x = Inches(0.8) + i * (stat_w + Inches(0.3))
    add_text_box(slide, x, Inches(5.3), stat_w, Inches(0.5),
                 val, font_size=28, color=ACCENT, bold=True, font_name="Consolas")
    add_text_box(slide, x, Inches(5.9), stat_w, Inches(0.5),
                 label, font_size=11, color=GRAY_LIGHT, line_spacing=16)

add_slide_number(slide, 3)

# ============================================================
# SLIDE 4 - The Solution (Token Packs)
# ============================================================
slide = prs.slides.add_slide(blank_layout)
set_slide_bg(slide)

add_section_label(slide, Inches(0.8), Inches(0.5), "THE SOLUTION")
add_title(slide, Inches(0.8), Inches(0.85), "Token Packs")
add_description(slide, Inches(0.8), Inches(1.6),
                "A real-world asset is represented as a root token with nested sub-tokens. "
                "Each sub-token can itself be a pack \u2014 enabling composable, recursive asset structures.",
                width=Inches(5.5))

# Left tree - Real Estate Example
add_text_box(slide, Inches(0.8), Inches(2.7), Inches(3), Inches(0.25),
             "REAL ESTATE EXAMPLE", font_size=9, color=GRAY_DARK, bold=True, font_name="Consolas")

# Root node
root_shape = add_rounded_rect(slide, Inches(2.0), Inches(3.1), Inches(2.8), Inches(0.45), ACCENT)
add_text_box(slide, Inches(2.0), Inches(3.13), Inches(2.8), Inches(0.4),
             "\u25A0  House Token", font_size=13, color=BLACK, bold=True, align=PP_ALIGN.CENTER)

# Child nodes
children_re = ["Survey Token", "Electrical Cert", "Renovation Token"]
for i, child in enumerate(children_re):
    x = Inches(0.8) + i * Inches(2.2)
    add_rounded_rect(slide, x, Inches(3.9), Inches(2.0), Inches(0.4), CARD_BG)
    add_text_box(slide, x, Inches(3.92), Inches(2.0), Inches(0.35),
                 child, font_size=11, color=WHITE, align=PP_ALIGN.CENTER)

# Right tree - Manufacturing Example
add_text_box(slide, Inches(7.2), Inches(2.7), Inches(3), Inches(0.25),
             "MANUFACTURING EXAMPLE", font_size=9, color=GRAY_DARK, bold=True, font_name="Consolas")

root2 = add_rounded_rect(slide, Inches(8.2), Inches(3.1), Inches(2.8), Inches(0.45), CARD_BG)
add_text_box(slide, Inches(8.2), Inches(3.13), Inches(2.8), Inches(0.4),
             "\u25A0  Finished Product", font_size=13, color=WHITE, bold=True, align=PP_ALIGN.CENTER)

children_mfg = ["Sub-Assembly", "QC Certificate"]
for i, child in enumerate(children_mfg):
    x = Inches(7.5) + i * Inches(2.5)
    add_rounded_rect(slide, x, Inches(3.9), Inches(2.2), Inches(0.4), CARD_BG)
    add_text_box(slide, x, Inches(3.92), Inches(2.2), Inches(0.35),
                 child, font_size=11, color=WHITE, align=PP_ALIGN.CENTER)

# Sub-components
sub_comps = ["Component A", "Component B"]
for i, comp in enumerate(sub_comps):
    x = Inches(7.5) + i * Inches(1.5)
    add_rounded_rect(slide, x, Inches(4.6), Inches(1.3), Inches(0.35), DARKER_BG)
    add_text_box(slide, x, Inches(4.62), Inches(1.3), Inches(0.3),
                 comp, font_size=9, color=GRAY_LIGHT, align=PP_ALIGN.CENTER, font_name="Consolas")

# Explanation cards at bottom
exp_items = [
    ("Composable", "Assets contain other assets recursively, mirroring real-world complexity."),
    ("Verifiable", "Every sub-token is cryptographically linked to its parent pack."),
    ("Extensible", "New tokens can be added to any pack at any point in the lifecycle."),
]
for i, (title, desc) in enumerate(exp_items):
    x = Inches(0.8) + i * Inches(4.15)
    add_card(slide, x, Inches(5.5), Inches(3.95), Inches(1.6), title, desc, title_size=14, desc_size=11)

add_slide_number(slide, 4)

# ============================================================
# SLIDE 5 - How It Works (Architecture)
# ============================================================
slide = prs.slides.add_slide(blank_layout)
set_slide_bg(slide)

add_section_label(slide, Inches(0.8), Inches(0.5), "ARCHITECTURE")
add_title(slide, Inches(0.8), Inches(0.85), "How It Works")
add_description(slide, Inches(0.8), Inches(1.6),
                "A layered architecture designed for enterprise integration, data integrity, and scalable tokenisation.")

layers = [
    ("1", "Integration Layer", "REST APIs, webhooks, ERP connectors (SAP, Oracle, custom). Enterprise systems push asset data in.", ["REST API", "ERP", "Webhooks"]),
    ("2", "Tokenisation Engine", "Hierarchical token minting. Composable pack assembly. Schema validation and lifecycle event tracking.", ["Core"]),
    ("3", "Off-Chain Data Layer", "Indexed metadata storage. Fast querying. Document attachments. Full asset graph traversal.", ["Indexed"]),
    ("4", "On-Chain Hash Anchoring", "Cryptographic proof anchored to public or private chains. Tamper-evident. Immutable audit trail.", ["Chain-Agnostic"]),
    ("5", "Query & Analytics Dashboard", "Visual asset explorer. Provenance queries. Compliance reporting. Real-time event monitoring.", ["Dashboard"]),
]

layer_h = Inches(0.85)
layer_gap = Inches(0.12)
start_y = Inches(2.5)

for i, (num, title, desc, tags) in enumerate(layers):
    y = start_y + i * (layer_h + layer_gap)
    is_core = num == "2"
    fill = CARD_BG
    card = add_rounded_rect(slide, Inches(1.5), y, Inches(10.5), layer_h, fill_color=fill)

    # Number badge
    badge = add_rounded_rect(slide, Inches(1.8), y + Inches(0.2), Inches(0.4), Inches(0.4), ACCENT)
    add_text_box(slide, Inches(1.8), y + Inches(0.2), Inches(0.4), Inches(0.4),
                 num, font_size=14, color=BLACK, bold=True, font_name="Consolas", align=PP_ALIGN.CENTER)

    # Title + description
    add_text_box(slide, Inches(2.5), y + Inches(0.1), Inches(5), Inches(0.3),
                 title, font_size=14, color=WHITE, bold=True)
    add_text_box(slide, Inches(2.5), y + Inches(0.45), Inches(6), Inches(0.35),
                 desc, font_size=10, color=GRAY_LIGHT)

    # Tags
    tag_x = Inches(9.5)
    for tag in tags:
        tag_shape = add_rounded_rect(slide, tag_x, y + Inches(0.28), Inches(1.2), Inches(0.3), DARKER_BG)
        add_text_box(slide, tag_x, y + Inches(0.28), Inches(1.2), Inches(0.3),
                     tag, font_size=9, color=ACCENT, font_name="Consolas", align=PP_ALIGN.CENTER)
        tag_x += Inches(1.3)

add_slide_number(slide, 5)

# ============================================================
# SLIDE 6 - Why Token Packs Matter
# ============================================================
slide = prs.slides.add_slide(blank_layout)
set_slide_bg(slide)

add_section_label(slide, Inches(0.8), Inches(0.5), "WHY IT MATTERS")
add_title(slide, Inches(0.8), Inches(0.85), "The Composable Asset Graph")
add_description(slide, Inches(0.8), Inches(1.6),
                "Hierarchical Token Packs enable capabilities that flat tokenisation systems simply cannot deliver.")

benefits = [
    ("\u21BA", "Complete Lifecycle Wrapping",
     "Every event, certificate, and modification is captured as a token within the asset\u2019s pack \u2014 creating a full digital twin of its history."),
    ("\u2387", "Recursive Provenance",
     "Trace any component back through its entire chain of custody, no matter how deeply nested in the asset hierarchy."),
    ("\u2713", "BOM Cryptographic Integrity",
     "Bills of materials are verified at the component level. Tampering with any sub-token invalidates the pack hash."),
    ("\u26A0", "Component-Level Recall",
     "Identify every product that contains a specific sub-component. Instant recall at any depth of the hierarchy."),
    ("\u2606", "Asset-Level Proof Generation",
     "Generate verifiable proof documents for any asset or sub-component on demand. Auditors can independently verify without system access."),
]

# 2 column layout: left (2 cards), right (2 cards), bottom-right (1 card)
col_w = Inches(3.7)
card_h = Inches(2.2)
gap_x = Inches(0.2)
gap_y = Inches(0.2)
base_y = Inches(2.6)

positions = [
    (Inches(0.8), base_y),
    (Inches(0.8), base_y + card_h + gap_y),
    (Inches(0.8) + col_w + gap_x, base_y),
    (Inches(0.8) + col_w + gap_x, base_y + card_h + gap_y),
    (Inches(0.8) + 2 * (col_w + gap_x), base_y),
]

for i, (icon, title, desc) in enumerate(benefits):
    x, y = positions[i]
    add_card(slide, x, y, col_w, card_h, title, desc, icon_text=icon)

add_slide_number(slide, 6)

# ============================================================
# SLIDE 7 - Use Cases
# ============================================================
slide = prs.slides.add_slide(blank_layout)
set_slide_bg(slide)

add_section_label(slide, Inches(0.8), Inches(0.5), "USE CASES")
add_title(slide, Inches(0.8), Inches(0.85), "Industry Applications")

use_cases = [
    ("Manufacturing", "BOM verification with cryptographic integrity at every assembly stage.",
     "Engine Assembly\n  \u251C\u2500 Cylinder Block\n  \u251C\u2500 Crankshaft\n  \u2514\u2500 QC Report", True),
    ("Real Estate", "Property certificates, surveys, and renovation history in a single verifiable pack.",
     "Property Token\n  \u251C\u2500 Title Deed\n  \u251C\u2500 Survey Report\n  \u2514\u2500 Energy Rating", False),
    ("Pharmaceuticals", "End-to-end supply chain traceability from raw material to patient delivery.",
     "Drug Batch\n  \u251C\u2500 Raw Material Cert\n  \u251C\u2500 Lab Analysis\n  \u2514\u2500 Chain of Custody", False),
    ("Energy / Carbon", "Verifiable carbon credit provenance with full project and methodology documentation.",
     "Carbon Credit\n  \u251C\u2500 Project Audit\n  \u251C\u2500 Measurement Data\n  \u2514\u2500 Retirement Record", False),
]

uc_w = Inches(2.85)
uc_h = Inches(4.8)
start_x = Inches(0.8)
gap = Inches(0.2)
base_y = Inches(2.0)

for i, (title, desc, tree, is_featured) in enumerate(use_cases):
    x = start_x + i * (uc_w + gap)
    card = add_rounded_rect(slide, x, base_y, uc_w, uc_h, CARD_BG)

    # Header bar
    header_fill = ACCENT if is_featured else DARKER_BG
    header_color = BLACK if is_featured else WHITE
    header = add_rounded_rect(slide, x, base_y, uc_w, Inches(0.45), header_fill)
    add_text_box(slide, x + Inches(0.2), base_y + Inches(0.07), uc_w - Inches(0.4), Inches(0.35),
                 title, font_size=13, color=header_color, bold=True)

    # Description
    add_text_box(slide, x + Inches(0.2), base_y + Inches(0.6), uc_w - Inches(0.4), Inches(1.0),
                 desc, font_size=11, color=GRAY_LIGHT, line_spacing=16)

    # Tree structure
    tree_bg = add_rounded_rect(slide, x + Inches(0.15), base_y + Inches(1.8),
                                uc_w - Inches(0.3), Inches(1.5), DARKER_BG)
    # Add tree text with multiple paragraphs
    txBox = slide.shapes.add_textbox(x + Inches(0.3), base_y + Inches(1.95),
                                      uc_w - Inches(0.6), Inches(1.3))
    tf = txBox.text_frame
    tf.word_wrap = True
    lines = tree.split("\n")
    for j, line in enumerate(lines):
        if j == 0:
            p = tf.paragraphs[0]
        else:
            p = tf.add_paragraph()
        p.text = line
        p.font.size = Pt(9)
        p.font.name = "Consolas"
        if j == 0:
            p.font.color.rgb = ACCENT
            p.font.bold = True
        elif "\u2514" in line:
            p.font.color.rgb = GRAY_MED
        else:
            p.font.color.rgb = GRAY_LIGHT
        p.space_after = Pt(3)

add_slide_number(slide, 7)

# ============================================================
# SLIDE 8 - Competitive Landscape
# ============================================================
slide = prs.slides.add_slide(blank_layout)
set_slide_bg(slide)

add_section_label(slide, Inches(0.8), Inches(0.5), "COMPETITIVE LANDSCAPE")
add_title(slide, Inches(0.8), Inches(0.85), "Infrastructure, Not Another Token Platform", width=Inches(9))

# Table
headers = ["Capability", "Simple NFT\nPlatforms", "Traditional\nERP Systems", "Single-Layer\nRWA Platforms", "[Company Name]"]
rows_data = [
    ["Hierarchical token structures", "\u2717", "\u2717", "\u2717", "\u2713"],
    ["Cryptographic provenance", "Partial", "\u2717", "Partial", "\u2713"],
    ["Enterprise ERP integration", "\u2717", "\u2713", "\u2717", "\u2713"],
    ["Recursive BOM verification", "\u2717", "\u2717", "\u2717", "\u2713"],
    ["Cross-org verifiable trust", "Partial", "\u2717", "Partial", "\u2713"],
]

table_left = Inches(0.8)
table_top = Inches(2.4)
table_width = Inches(11.7)
num_cols = 5
num_rows = len(rows_data) + 1

table_shape = slide.shapes.add_table(num_rows, num_cols, table_left, table_top,
                                      table_width, Inches(4.0))
table = table_shape.table

col_widths = [Inches(3.2), Inches(2.1), Inches(2.1), Inches(2.1), Inches(2.2)]
for i, w in enumerate(col_widths):
    table.columns[i].width = w

# Header row
for j, header in enumerate(headers):
    cell = table.cell(0, j)
    cell.text = header
    cell.fill.solid()
    cell.fill.fore_color.rgb = ACCENT
    p = cell.text_frame.paragraphs[0]
    p.font.size = Pt(11)
    p.font.bold = True
    p.font.color.rgb = BLACK
    p.font.name = "Calibri"
    p.alignment = PP_ALIGN.CENTER if j > 0 else PP_ALIGN.LEFT
    cell.vertical_anchor = MSO_ANCHOR.MIDDLE

# Data rows
for i, row in enumerate(rows_data):
    for j, val in enumerate(row):
        cell = table.cell(i + 1, j)
        cell.text = val
        cell.fill.solid()
        cell.fill.fore_color.rgb = CARD_BG if i % 2 == 0 else DARKER_BG
        p = cell.text_frame.paragraphs[0]
        p.font.size = Pt(11)
        p.font.name = "Calibri" if j == 0 else "Consolas"
        p.alignment = PP_ALIGN.LEFT if j == 0 else PP_ALIGN.CENTER
        cell.vertical_anchor = MSO_ANCHOR.MIDDLE

        if val == "\u2713" and j == 4:
            p.font.color.rgb = ACCENT
            p.font.bold = True
        elif val == "\u2713":
            p.font.color.rgb = GRAY_LIGHT
            p.font.bold = True
        elif val == "\u2717":
            p.font.color.rgb = GRAY_DARK
        elif val == "Partial":
            p.font.color.rgb = GRAY_MED
            p.font.name = "Consolas"
        elif j == 0:
            p.font.color.rgb = WHITE

add_slide_number(slide, 8)

# ============================================================
# SLIDE 9 - Business Model
# ============================================================
slide = prs.slides.add_slide(blank_layout)
set_slide_bg(slide)

add_section_label(slide, Inches(0.8), Inches(0.5), "BUSINESS MODEL")
add_title(slide, Inches(0.8), Inches(0.85), "Revenue Architecture")
add_description(slide, Inches(0.8), Inches(1.6),
                "Multiple revenue streams aligned with platform usage and enterprise adoption.")

bm_items = [
    ("RECURRING", "SaaS Subscription",
     "Tiered platform access based on volume, features, and support level. Starter, Growth, and Enterprise plans."),
    ("USAGE-BASED", "Token Minting Fees",
     "Per-token minting fee for each asset or sub-token created. Volume discounts for enterprise customers."),
    ("USAGE-BASED", "Anchoring Fees",
     "Per-event on-chain anchoring fee. Batched for cost efficiency. Chain-agnostic pricing."),
]

bm_items2 = [
    ("HIGH-VALUE", "Enterprise Deployments",
     "Custom deployments, private instances, dedicated support, and SLA-backed infrastructure."),
    ("ADD-ON", "Analytics Module",
     "Advanced asset graph analytics, compliance reporting, and predictive insights."),
]

card_w = Inches(3.7)
card_h = Inches(2.2)

# Row 1
for i, (badge, title, desc) in enumerate(bm_items):
    x = Inches(0.8) + i * (card_w + Inches(0.2))
    y = Inches(2.6)
    add_card(slide, x, y, card_w, card_h, title, desc)
    # Badge
    is_primary = badge == "RECURRING"
    badge_fill = ACCENT if is_primary else DARKER_BG
    badge_color = BLACK if is_primary else ACCENT
    badge_shape = add_rounded_rect(slide, x + Inches(0.25), y + Inches(0.2), Inches(1.4), Inches(0.25), badge_fill)
    add_text_box(slide, x + Inches(0.25), y + Inches(0.2), Inches(1.4), Inches(0.25),
                 badge, font_size=8, color=badge_color, bold=True, font_name="Consolas", align=PP_ALIGN.CENTER)

# Row 2
for i, (badge, title, desc) in enumerate(bm_items2):
    x = Inches(0.8) + i * (card_w + Inches(0.2))
    y = Inches(5.0)
    add_card(slide, x, y, card_w, card_h, title, desc)
    badge_shape = add_rounded_rect(slide, x + Inches(0.25), y + Inches(0.2), Inches(1.4), Inches(0.25), DARKER_BG)
    add_text_box(slide, x + Inches(0.25), y + Inches(0.2), Inches(1.4), Inches(0.25),
                 badge, font_size=8, color=ACCENT, bold=True, font_name="Consolas", align=PP_ALIGN.CENTER)

add_slide_number(slide, 9)

# ============================================================
# SLIDE 10 - Roadmap
# ============================================================
slide = prs.slides.add_slide(blank_layout)
set_slide_bg(slide)

add_section_label(slide, Inches(0.8), Inches(0.5), "ROADMAP")
add_title(slide, Inches(0.8), Inches(0.85), "Building in Phases")

phases = [
    ("PHASE 1", "Core Token Engine", [
        "Hierarchical token minting",
        "Pack assembly & validation",
        "On-chain anchoring MVP",
        "REST API & basic dashboard"
    ], True),
    ("PHASE 2", "ERP Integrations", [
        "SAP & Oracle connectors",
        "Webhook event system",
        "Compliance reporting"
    ], False),
    ("PHASE 3", "Cross-Chain Interop", [
        "Multi-chain anchoring",
        "Cross-chain asset queries"
    ], False),
    ("PHASE 4", "AI-Driven Analytics", [
        "Predictive asset intelligence",
        "Automated compliance alerts"
    ], False),
]

phase_w = Inches(2.85)
phase_gap = Inches(0.2)
base_y = Inches(2.2)

for i, (badge_text, title, items, is_active) in enumerate(phases):
    x = Inches(0.8) + i * (phase_w + phase_gap)
    card_h = Inches(4.5)
    card = add_rounded_rect(slide, x, base_y, phase_w, card_h, CARD_BG)

    # Phase header
    header_fill = ACCENT if is_active else DARKER_BG
    header_color = BLACK if is_active else (ACCENT if i < 2 else GRAY_MED)
    header = add_rounded_rect(slide, x, base_y, phase_w, Inches(0.45), header_fill)
    add_text_box(slide, x + Inches(0.2), base_y + Inches(0.07), phase_w - Inches(0.4), Inches(0.35),
                 badge_text, font_size=10, color=header_color, bold=True, font_name="Consolas")

    # Title
    add_text_box(slide, x + Inches(0.2), base_y + Inches(0.6), phase_w - Inches(0.4), Inches(0.35),
                 title, font_size=16, color=WHITE, bold=True)

    # Items
    item_color = GRAY_LIGHT if i < 2 else GRAY_MED
    dash_color = ACCENT if i < 2 else GRAY_DARK
    for j, item in enumerate(items):
        iy = base_y + Inches(1.1) + j * Inches(0.4)
        add_text_box(slide, x + Inches(0.2), iy, Inches(0.3), Inches(0.3),
                     "\u2500", font_size=10, color=dash_color, font_name="Consolas")
        add_text_box(slide, x + Inches(0.5), iy, phase_w - Inches(0.7), Inches(0.3),
                     item, font_size=11, color=item_color)

add_slide_number(slide, 10)

# ============================================================
# SLIDE 11 - Long-Term Vision
# ============================================================
slide = prs.slides.add_slide(blank_layout)
set_slide_bg(slide)

add_section_label(slide, Inches(0.8), Inches(0.5), "LONG-TERM VISION")
add_title(slide, Inches(0.8), Inches(0.85),
          "The Trust Infrastructure Layer for Real-World Assets", width=Inches(10))
add_description(slide, Inches(0.8), Inches(1.6),
                "We are building the foundational layer that enterprises, governments, and financial institutions "
                "will use to verify, trade, and govern physical assets.", width=Inches(9))

visions = [
    ("Asset-Backed\nLending",
     "Verifiable asset packs become collateral. Lenders can independently verify provenance and integrity."),
    ("Automated\nCompliance",
     "Regulatory compliance verified automatically against on-chain asset structures. Zero manual overhead."),
    ("ESG\nIntelligence",
     "ESG metrics derived from verifiable asset data. Auditable sustainability claims for every product."),
    ("Cross-Industry\nComposability",
     "Token packs from different industries interoperate. A building can reference carbon credits, supply chain data, and financial instruments."),
]

vis_w = Inches(2.85)
vis_h = Inches(3.5)
gap = Inches(0.2)
base_y = Inches(3.0)

for i, (title, desc) in enumerate(visions):
    x = Inches(0.8) + i * (vis_w + gap)
    add_card(slide, x, base_y, vis_w, vis_h, title, desc, title_size=14, desc_size=11)

add_slide_number(slide, 11)

# ============================================================
# SLIDE 12 - Closing
# ============================================================
slide = prs.slides.add_slide(blank_layout)
set_slide_bg(slide)
add_accent_line(slide, Inches(0), Inches(0), SLIDE_W, Pt(3))

add_text_box(slide, Inches(2), Inches(2.2), Inches(9.3), Inches(1.0),
             "\u201CVersion Control for Physical Assets.\u201D",
             font_size=38, color=WHITE, bold=True, align=PP_ALIGN.CENTER)
add_accent_line(slide, Inches(6.0), Inches(3.5), Inches(1.3), Pt(2))
add_text_box(slide, Inches(2), Inches(3.8), Inches(9.3), Inches(0.5),
             "[Insert Company Name]", font_size=20, color=ACCENT, bold=True, align=PP_ALIGN.CENTER)
add_text_box(slide, Inches(2), Inches(4.6), Inches(9.3), Inches(0.3),
             "contact@company.com", font_size=12, color=GRAY_MED, font_name="Consolas", align=PP_ALIGN.CENTER)
add_text_box(slide, Inches(2), Inches(4.95), Inches(9.3), Inches(0.3),
             "www.company.com", font_size=12, color=GRAY_MED, font_name="Consolas", align=PP_ALIGN.CENTER)
add_slide_number(slide, 12)

# ============================================================
# SAVE
# ============================================================
output_path = os.path.join(os.path.dirname(__file__), "BlockTrace_Pitch_Deck.pptx")
prs.save(output_path)
print(f"Presentation saved to: {output_path}")
