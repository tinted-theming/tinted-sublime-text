# Tinted Sublime Text

Tinted themes for [Sublime Text]. Have a look at the [base16-gallery] to
get a preview of some of the supported themes and go to [Tinted Theming]
for more information about this theming project. This project contains
themes for both [Base16] and [Base24] scheme systems.

## Installation

1. Get the path of your Sublime Text `Packages/` dirctory. You can find
   the path of this directory opening sublime text and in the menu
   selecting `Preferences -> Browse Packages...`.
2. Navigate to the `Packages/` directory in the command line. `cd
   path/to/SublimeText/Packages`
3. Clone this GitHub repo into the above directory.

*IMPORTANT NOTE*: The directory in Sublime Text's `Package/` directory
must be called `tinted_theming`. So the path would be:
`path/to/sublime-text/Packages/tinted_theming`. This is the
package's internal name and any other directory name for the repo won't
work.

```shell
cd path/to/sublime-text/Packages
git clone https://github.com/tinted-theming/sublime-text tinted_theming
```

### [Package Control](https://packagecontrol.io/) users

1. Open command palette > Preferences: Package Control Settings
2. Add the following to `Package Control.sublime-settings` and save:

```json
"repositories": [
    "https://github.com/tinted-theming/tinted-sublime-text"
],
"package_name_map": {
    "tinted-sublime-text": "tinted_theming",
}
```

3. Open command palette > Package Control: Install Package
4. Search for "tinted_theming" and select it

## Usage

1. Open the Command Palette (Mac: `CMD + SHIFT + P`, Linux: `CTRL + SHIFT + C`)
2. Search for "Tinted Theming: Activate theme" and select it.
3. This will open a list of supported themes. Browse through or Search
   for and select the theme you want to use.

## Thanks

Thanks to [Ayu] for their great Sublime Text themes. I used their
project as a template for this repo.

[Sublime Text]: https://www.sublimetext.com
[base16-gallery]: https://tinted-theming.github.io/base16-gallery
[Tinted Theming]: https://github.com/tinted-theming
[Ayu]: https://github.com/dempfi/ayu
[Base16]: https://github.com/tinted-theming/home/blob/main/styling.md
[Base24]: https://github.com/tinted-theming/base24/blob/master/styling.md
