# Sales Dashboard Assignment

## Overview

This project is a React + TypeScript dashboard application created as part of the Aforro frontend assignment.

The application includes:

-> Dashboard UI implementation based on the provided Figma design
-> Charts and analytics sections
-> API integration with user table
-> Search, sorting, and filtering functionality
-> Responsive dashboard layout

---

## Tech Stack

-> React
-> TypeScript
-> Tailwind CSS
-> Recharts (for graph part)
-> Vite

---

## Features Implemented

### Part 1: Dashboard UI

-> Sidebar navigation
-> Dashboard header
-> Sales summary cards
-> Visitor insights chart
-> Revenue chart
-> Customer satisfaction chart
-> Target vs Reality section
-> Top products section
-> Sales mapping section
-> Volume vs Service Level chart

### Part 2: API Integration

Integrated API:
https://jsonplaceholder.typicode.com/users

Implemented features:

-> Fetch users data
-> Display users in table format
-> Search by name/email
-> Sort by name (A-Z / Z-A)
-> Filter by city
-> Loading state handling
-> Error state handling

---

## Project Structure

src/

-> components/

-> dashboard/

    -> charts/
    -> widgets/
    -> ui/

-> layout/

-> pages/

-> assets/

---

## Setup Instructions

1. Clone the repository

```bash
git clone https://github.com/Richa299/sales-dashboard.git
```

2. Navigate into project folder

```bash
cd sales-dashboard
```

3. Install dependencies

```bash
npm install
```

4. Run development server

```bash
npm run dev
```

5. Build project

```bash
npm run build
```

---

## Design Decisions

-> Used reusable `DashboardSection` components for scalable dashboard structure
-> Used Recharts for responsive chart rendering
-> Used Tailwind CSS for rapid UI development and responsive layouts
-> Implemented responsive grid-based dashboard structure instead of fixed-width layouts

---
