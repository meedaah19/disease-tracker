# Project Overview

## Project Title: Communicable Disease Tracker

### Tech Stack: React + API (disease.sh) + Chart.js or Recharts + Tailwind

**Goal**: Display live disease stats by country using public APIs, charts, and a clean UI.

# 🦠 Communicable Disease Tracker

A simple and interactive web application built with **React** and **Tailwind CSS** that allows users to view real-time data on communicable diseases like **COVID-19**, as well as static data for other diseases such as **Malaria**, **Cholera**, etc.

## 🚀 Features

- 📊 Visualize disease trends over the last 30 days using line charts.
- 🌍 For **COVID-19**, view data by specific countries (e.g., Nigeria, India, USA).
- 📁 Local data for other diseases (e.g., Malaria, Cholera) loaded from a static JSON file.
- 🎛️ Intuitive dropdown for disease selection and (for COVID-19) country selection.
- 📱 Responsive design and modern UI powered by Tailwind CSS.

## 📂 Folder Structure

    disease-tracker/
        ├── public/
        ├── src/
        │ ├── components/
        │ │ ├── Navbar.jsx
        │ │ ├── StatsCard.jsx
        │ │ ├── StatsPanel.jsx
        │ │ ├── Chart.jsx
        │ ├── data/
        │ │ └── diseases.json
        │ ├── pages/
        │ │ └── Home.jsx
        │ ├── App.jsx
        │ ├── index.js
        ├── package.json
        ├── tailwind.config.js
        └── README.md


## 📦 Tech Stack

- **React** – JavaScript library for building UI.
- **Tailwind CSS** – Utility-first CSS framework.
- **Chart.js** + `react-chartjs-2` – For rendering charts.
- **Axios** – For API calls.
- **disease.sh API** – Real-time COVID-19 data source.

## 🌐 API Used

- COVID-19 data: [disease.sh API](https://disease.sh/)
- Other disease data is mocked and stored locally in `src/data/diseases.json`.

## 🧠 How It Works

1. Users select a disease from the **Disease dropdown**.
2. If **COVID-19** is selected, a second dropdown appears for **country selection**.
3. Data is fetched either from the **API** (for COVID-19) or from **local JSON** (for other diseases).
4. The data is displayed as:
   - Stats (Total Cases, Deaths, Recovered)
   - A line chart for the past 30 days

## 🛠️ Setup & Running Locally

1. Clone the repo:

    git clone https://github.com/your-username/disease-tracker.git
    cd disease-tracker

2. Install dependencies:

    npm install

3. Run the development server:
    
    npm run dev

    Make sure your terminal is in the project root directory and your Node.js is up to date.

