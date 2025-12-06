# Dashboard – Anthesis Technical Test

This project is the solution to the Anthesis technical assessment, built using Angular 20.
It consumes a local mock dataset: gas-emissions.mock.json, which provides emission records for visualization, filtering, and comparison.

The application includes dynamic filtering options, a tabular emissions list, and visual charts powered by Chart.js.

The project is deployed on Netlify for easy access and demonstration, [here is the deployed project](https://dashboardanthesis.netlify.app/).

## 🧪 Testing

Unit tests were implemented using Vitest together with Angular’s zoneless testing utilities.

Main test coverage is located in:


- filtered-records.spec.ts / the core testing file, covering the filtering logic and service behavior

- app.spec.ts  basic /  application initialization tests

<br>

Install dependencies
```bash
npm i
```


Start the development server
```bash
ng serve
```

The app will be available at:

http://localhost:4200/

Run tests
```bash
ng test
```

## 📦 Technologies Used

- Angular 20 (standalone components + zoneless change detection)

Vitest (unit testing)

Chart.js (data visualization)

TypeScript

SCSS
