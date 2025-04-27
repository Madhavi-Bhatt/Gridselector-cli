# Grid Selection Component

An interactive grid selection component built with DOMQL and Symbols API.

## Features

- Interactive grid with customizable dimensions
- Cell selection with visual feedback
- Selection coordinates display
- Total selected cells counter
- Responsive design
- 1:1 aspect ratio cells

## Requirements

- Node.js >= 14.0.0
- npm

## Installation

```bash
# Install the package globally
npm install -g grid-selection-project
```

## Usage

### Initialize a New Project

```bash
# Create a new directory
mkdir my-grid-project
cd my-grid-project

# Initialize the project using the starter-kit template
grid-cli init
```

### Create a Grid Component

```bash
# Create a grid with default dimensions (16x8)
grid-cli create

# Create a grid with custom dimensions
grid-cli create -x 10 -y 5
```

### Development

```bash
# Start the development server
npm start

# Build for production
npm run build
```

## Project Structure

```
.
├── src/
│   ├── components/
│   │   └── GridSelection/
│   │       └── index.js
│   ├── styles/
│   │   └── main.css
│   └── index.js
├── public/
│   └── index.html
├── bin/
│   └── cli.js
└── package.json
```

## CLI Commands

### init
Initializes a new project using the starter-kit template.

### create
Generates a grid component with specified dimensions.

Options:
- `-x, --columns`: Number of columns (default: 16)
- `-y, --rows`: Number of rows (default: 8)

## License

ISC
