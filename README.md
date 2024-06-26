# Frontend Mentor - Calculator app solution
## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### Screenshot

**THEME 1**
![](./public/Screenshots/theme-1.png)

**THEME 2**
![](./public/Screenshots/theme-2.png)

**THEME 3**
![](./public/Screenshots/theme-3.png)

### Links

- Solution URL: (https://www.frontendmentor.io/solutions/calculator-app-iIkVpS1Ezl)
- Live Site URL: Vercel (https://calculator-app-coral-tau.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- [React](https://reactjs.org/) - JS library


### What I learned
I added the comments for readability and for easy navigation.
Because there were a lot of code on the screen and I wanted to go to a particular place, with the comment I could just search and easily find it. Also create a state that handles an object for all the color changes in each theme. 
```js
  {/* Example */}
    const [changes, setChanges] = useState({
        mainBgColor: null, // For the main backgorund
        textColor: null, // Color of all the texts
        keyPad_ToggleBgColor: null, // Background for the toggle button and the keypad
        screenBgColor: null, // Background for the screen
        keyBgColor: null, // Background for the keys
        keyColor: null, // Color of the text on the keys e.g., 1,2,3 etc
        keyShadow: null, // Shadow for each key e.g., 0-9, operators, and point
        del_Reset_BgColor: null, // Background color for DELETE & RESET KEY
        del_Reset_Equal_TextColor: null, // Color for DELETE, RESET & EQUAL SIGN KEY
        del_ResetShadow: null, // Shadow for DELETE & RESET key
        equal_Toggle_BgColor: null, // Background color for EQUAL SIGN KEY
        equalShadow: null, // Shadow for EQUAL SIGN KEY
        equalTextColor: null // Color for EQUAL SIGN KEY
    });
``` 

For the theme toggle button. I used a grid to be able to navigate where to stop. The grid creates a box like structure for each theme which allows me to be able to click on it by adding the `onclick` function. I also set a state to keep track of the current theme, which changes based on the theme that has been clicked. Added a little bit of CSS transform and transition to give it a feel of movement from right to left when toggled. I addded custom CSS transition for each theme. For example
```css
    .theme-2 {
        transform: translateX(0.6rem);
    }
```
And then used the ternary operator to conditionally render the class based on the theme number.
```js
    const [themeNumber, setThemeNumber] = useState("1");

    className={`red ${themeNumber && `theme-${themeNumber}`}`};
```

### Continued development
Am still practicing on using the Context API provided by React, and some other hooks. I could have used Routing to get this done easily, in terms of changing the colors and background, but i wanted to challenge myself.

## Useful Resources
- ChatGPT

## Author

<!-- - Website - [Add your name here](https://www.your-site.com) -->
- Frontend Mentor - [@AshongAbdallah06](https://www.frontendmentor.io/profile/AshongAbdallah06)
- Twitter - [@XuGaR_2_0_0_6](https://twitter.com/XuGaR_2_0_0_6)
