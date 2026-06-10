# Modern Presentation Pages with Next.js & Tailwind CSS

This repository is designed to create modern presentation pages using Next.js and Tailwind CSS.

## Structure

- Each route represents a separate presentation topic.
- Every presentation page should be self-contained and independently accessible.

## Design Requirements

- Match the original Canva slide design as closely as possible.
- Leverage modern frontend capabilities provided by Next.js.
- Utilize Tailwind CSS for responsive and maintainable styling.
- Ensure a clean, professional, and visually appealing presentation experience.
- Recreate layouts, typography, spacing, colors, icons, and visual hierarchy with high fidelity to the Canva design.

## Technical Guidelines

- Use App Router architecture.
- Optimize performance and responsiveness.
- Use reusable components whenever possible.
- Support desktop, tablet, and mobile devices.
- Implement animations and transitions where appropriate to enhance the presentation experience.

## Interactive with user
- Usually use `playwright-cli --help`  command  for research before using `playwright-cli` tool
- Use `playwright-cli open ...`  command  for view page 
- Use `playwright-cli show` for user track your progress persistently.
- Use teminal command `playwright-cli show --annotate`  for user annotation  and wait  user  input
- Dont use another browser to view result use only `playwright-cli`