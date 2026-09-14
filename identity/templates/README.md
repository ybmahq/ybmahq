# identity/templates/ — the template set (operational, to be built)

Templates are built in the tools the founders actually use, from the components and tokens in
`identity/brand/`. None exist yet; this is the list and the rules each must follow.

| Template | Tool | Rules |
|---|---|---|
| Letterhead A4 | Word / Pages / Docs | wordmark 24 mm cap top-left · address in label style at the foot · body Söhne Buch 10.5/15 · margins 20 mm · nothing else on the page |
| Proposal | Docs / InDesign | indigo cover (display headline, labels, wordmark at foot) · chalk inner pages · one field per spread · proof numbers in data style |
| Company profile | InDesign | photo with one round corner per spread · proof in one indigo field · label → headline → body → proof |
| Presentation 16:9 | Keynote / Slides | covers ink or indigo; content chalk; alternate grounds; one round thing per slide; proof slides = one number + key bar |
| Email signature | HTML | symbol 34 px · a 2 px stem · name Kräftig · role and division Buch · no images, no banners |
| Social post 1:1 / 4:5 | Figma | three kinds only: indigo sentence · chalk number · photograph; wordmark 18 px at the foot |
| Business card 85 × 55 | InDesign | front: wordmark 26 px cap, name, role, one contact line · back: symbol white on indigo, off-centre |
| Document folder | InDesign | indigo flood, white symbol front, white wordmark back |
| Acquisition endorsement kit | Figma | endorsement line in ink and white · placement rules from guideline §16 · announcement card |

Every template imports the logo from `identity/logo/` (never redrawn) and the values from
`identity/brand/colour/tokens.css`. A template that needs a colour, size or shape not in the tokens
is wrong, not the tokens.
