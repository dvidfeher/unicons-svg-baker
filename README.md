# unicons-svg-baker
Removes fill attributes and replaces them with CSS classes for unicons library so the colors can be customized from CSS 

# Usage

Make sure you download the icon set with the default color settings.
Hex: `#6563ff`

Place the icons inside the `unicons` folder.

Run `node generate.js`

# Add the following CSS

```css
svg
{
    fill: #ff0000;
    color:#ff0000;

    .uim-primary
    {
        opacity: 1;
    }

    .uim-secondary
    {
        opacity: 0.70;
    }

    .uim-tertiary
    {
        opacity: 0.50;
    }

    .uim-quaternary
    {
        opacity: 0.25;
    }

    .uim-quinary
    {
        opacity: 0;
    }
}
```
