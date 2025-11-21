module.exports = {
content: [
"./app/**/*.{js,ts,jsx,tsx}",
"./components/**/*.{js,ts,jsx,tsx}",
],
theme: {
extend: {
colors: {
'brand-blue': '#1E4ED8',
'brand-blue-light': '#3C6DF0',
'brand-gray-dark': '#334155',
'brand-gray-light': '#F3F4F6',
'accent-green': '#22C55E',
'accent-amber': '#F59E0B',
},
fontFamily: {
sans: ['Inter', 'system-ui', 'sans-serif'],
},
},
},
plugins: [],
}
