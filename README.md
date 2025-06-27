# Start-Up-Website-Responsive I
# Company Landing Page

This project is a responsive, multi-section React landing page built with modular components, custom CSS, and images uplaoded from the provided Figma design. It is designed to highlight key offerings such as welcome messaging, collaboration benefits, team members, partners, and connectivity/interoperability with allied businesses and platforms.

## Live Demo
- [[live_demo]( )]

## Project Outline

The project includes the following main components:

### 🔹 NavBar Section
- Showing the Navigation logo from the left.
- Start-Up business title(Start).
- A reactive Hamburger Menu displaying at Mobile View resolutions and displaying as Navigation Links at Desktop View resolutions.

### 🔹 Welcome Section
- Introduces the brand with a hero layout.
- Responsive layout with text and image (team) side-by-side on desktop, stacked on mobile.
- Call-to-action: "Explore" button.

### 🔹 InterCollaboration Section
- Explains collaboration benefits.
- Text-image layout with reversed stacking on larger screens.
- Includes a dark "Learn More" button.

### 🔹 Connectivity Section
- Details connectivity advantages.
- Similar layout to `InterCollaboration`, but with reversed flex direction on desktop.
- Includes a second styled "Learn More" button.

### 🔹 Partners Section
- Showcases partner logos (e.g., Google, Microsoft, Airbnb, Facebook, Spotify).
- Logos stack vertically on mobile and align horizontally on desktop.
- Call-to-action: "Learn More" button.

### 🔹 Teams Section
- Displays team member cards with their names and designations
- Responsive grid layout with names and images.
- Includes a CTA button to explore more.


## Folder Structure

/src
│
├── components/
    NavBar.js/css
│   ├── WelcomeSection.js / .css
│   ├── InterCollaboration.js / .css
│   ├── Connectivity.js / .css
│   ├── PartnersSection.js / .css
│   ├── TeamsSection.js / .css
    FooterSection.js/css
│
├── images/
│   └── [project assets like logos, buttons, team images]
│
└── App.js

├── Pages/
    
│   ├── Home.js / .css
│   ├── Portfolio.js / .css
│   ├── Services.js / .css
│   ├── Contact.js / .css
│
├── App.js/css/
│   └── imports/links
│
└── Index.js/css
 License
 README.md


## Responsive Design

The layout uses custom CSS media queries:

| Screen Width         | Behavior                             |
|----------------------|--------------------------------------|
| `≤ 768px` (Mobile)   | Stacked layout, centered buttons/logos |
| `769px - 1023px`     | Tablet scaling, still stacked        |
| `≥ 1024px` (Desktop) | Horizontal layouts, aligned text and images |

Logos, and text areas are responsive.


##  Technologies Used

- React.js (Functional Components)
- Custom CSS with media queries
- Image assets (SVG + PNG)
- Fonts: `Work Sans`, `Crimson Text`


##  To Run 

1. Clone the repository:
   git clone https://github.com/yourusername/Start-Up-Website-Responsive\startup.git
   cd Start-Up-Website-Responsive\startup
   

2. Install dependencies:
   npm install

3. Start the development server:
   npm start


## Presentation link
[[Presentation Link](https://www.loom.com/share/9a13633c9bdc4f638f1208c3a2400f3a?sid=e17511ef-8940-4401-82eb-3a76dc837d46)]  

## Acknowledgments

All UI layout and styling decisions were based on a Figma design(1440-Homepage) and
(1441-Portfolio) translated into responsive CSS using a mobile-first approach.


## Author
Name: [Tolulope McSmith - EHIS03042]
Contact: [tolulope.mcsmith@gmail.com]
 [[Github Profile](https://github.com/EHIS03042)]

## License
 This project is published under the MIT License.This license grants users the rights to use, copy, modify, merge, publish, distribute and sublicense the licensed IP.It however requires that the original copyright notice and license text must be included in all copies or substantial portions of the project in accordance with the terms and conditions stipulated in the license.
