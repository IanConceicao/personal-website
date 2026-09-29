// ─────────────────────────────────────────────────────────────
// Resume template: all styling lives here.
// Content goes in resume.typ. You rarely need to touch this file.
// ─────────────────────────────────────────────────────────────

#let ink = rgb("#231f20")      // body text
#let accent = rgb("#0066a6")   // section headings
#let rule-color = rgb("#dcdbdb")

#let left-width = 306pt        // Experience column
#let col-gap = 41.4pt          // gap between the two columns
#let subcol = 102.3pt          // width of the first sub-column in two-up lists

// Vertical rhythm helper. Text uses cap-height/baseline edges, so a
// baseline-to-baseline distance `d` before text of size `s` is
// v(d - 0.714 * s). 0.714 is Open Sans' cap height.
#let cap = 0.714
#let gap(d, s) = v(d - cap * s, weak: false)

// ── Page + base text ─────────────────────────────────────────
#let resume(body) = {
  set document(title: "Ian Conceicao – Resume", author: "Ian Conceicao")
  set page(paper: "us-letter", margin: (left: 36pt, right: 36pt, top: 37pt, bottom: 30pt))
  set text(font: "Open Sans", fill: ink, size: 9pt, weight: 300, lang: "en",
           top-edge: "cap-height", bottom-edge: "baseline")
  set par(spacing: 0pt, leading: 15pt - cap * 9pt)
  body
}

// ── Header ───────────────────────────────────────────────────
#let contact-row(icon, label, target) = link(target, grid(
  columns: (18pt, auto),
  align: horizon,
  box(image(icon, width: 11.6pt, height: 11.6pt), baseline: 0pt),
  label,
))

#let header(name: "", title: "", summary: [], contacts: ()) = {
  grid(
    columns: (left-width, 1fr),
    column-gutter: col-gap,
    [
      #text(size: 24pt, weight: 600)[#name]
      #gap(23pt, 12pt)
      #text(size: 12pt, weight: 400)[#title]
      #gap(19.5pt, 9.5pt)
      #set par(leading: 15pt - cap * 9.5pt)
      #text(size: 9.5pt)[#summary]
    ],
    // Placed so the contact list doesn't push the divider down.
    place(top + left, dy: 4.9pt - (11.6pt - cap * 9pt) / 2, grid(
      row-gutter: 21.5pt - 11.6pt,
      ..contacts.map(c => contact-row(..c)),
    )),
  )
  v(22.8pt)
  line(length: 100%, stroke: 1pt + rule-color)
}

// ── Two columns ──────────────────────────────────────────────
#let columns-body(left, right) = grid(
  columns: (left-width, 1fr),
  column-gutter: col-gap,
  left, right,
)

// Blue section heading. `first: true` for the heading right under the rule.
#let section(title, first: false, after: 26pt) = {
  if first { gap(31pt, 14pt) } else { gap(after, 14pt) }
  text(size: 14pt, weight: 600, fill: accent)[#title]
}

// Bullet list: one paragraph per bullet, justified, wraps flush left
// like the original.
#let bullets(size: 9pt, pitch: 15pt, between: 18pt, first: 19.6pt, items) = {
  set par(justify: true, leading: pitch - cap * size)
  set text(size: size, hyphenate: true)
  for (i, b) in items.enumerate() {
    if i == 0 { gap(first, size) } else { gap(between, size) }
    [#text(weight: 400)[•] #b]
  }
}

// ── Left column: Experience entries ─────────────────────────
// `first: true` for the first entry under a section heading.
#let job(company, role, items, first: false, company-size: 13pt) = {
  if first { gap(24.6pt, company-size) } else { gap(26.5pt, company-size) }
  text(size: company-size, weight: 600)[#company]
  gap(22.1pt, 11pt)
  text(size: 11pt, weight: 400)[#role]
  bullets(items)
}

// ── Right column pieces ─────────────────────────────────────
#let school(name, degree) = {
  gap(23.4pt, 12pt)
  {
    set par(leading: 15.6pt - cap * 12pt)
    text(size: 12pt, weight: 600)[#name]
  }
  gap(21pt, 10pt)
  text(size: 10pt, weight: 600)[#degree]
}

// Two-up list (electives, skills). Items fill left, right, left, right…
// Each sub-column flows independently, so a wrapped item only pushes
// its own column down.
#let two-up(items, size: 9pt, pitch: 13.5pt, first: 15pt) = {
  gap(first, size)
  set text(size: size)
  set par(leading: pitch - cap * size)
  let left = items.enumerate().filter(((i, _)) => calc.even(i)).map(((_, x)) => x)
  let right = items.enumerate().filter(((i, _)) => calc.odd(i)).map(((_, x)) => x)
  grid(
    columns: (subcol, 1fr),
    left.join(linebreak()), right.join(linebreak()),
  )
}

#let subhead(body, after: 19.5pt) = {
  gap(after, 9pt)
  text(size: 9pt, weight: 400)[#body]
}

// Skill group: bold category + either a single-column list or a two-up grid.
#let skills(category, items, two-col: true, first: false) = {
  if first { gap(24pt, 11pt) } else { gap(18.5pt, 11pt) }
  text(size: 11pt, weight: 600)[#category]
  if two-col {
    two-up(items, first: 15pt)
  } else {
    gap(15pt, 9pt)
    set par(leading: 14.5pt - cap * 9pt)
    items.join(linebreak())
  }
}

#let project(title, items) = {
  gap(24pt, 11pt)
  text(size: 11pt, weight: 600)[#title]
  bullets(size: 8pt, pitch: 13pt, between: 13pt, first: 17.5pt, items)
}
