# Grid Selection CLI

A command-line interface tool for grid selection with an interactive web component.

## Features

- Interactive grid selection component
- Command-line interface for grid operations
- Real-time coordinate tracking
- Cell selection visualization
- Responsive grid layout

## Installation

```bash
# Install the package
npm install grid-selection-cli

# Install CLI tool globally
npm install -g .
```

## Usage

### CLI Usage

Basic usage:
```bash
grid-cli
```

Create a grid with custom dimensions:
```bash
grid-cli create -x 20 -y 15
```

Export selected grid data:
```bash
grid-cli --export grid-data.json
```

### Web Component Usage

Basic implementation:
```javascript
import { GridSelection } from 'grid-selection-cli';

// Initialize grid with default dimensions (16x10)
const grid = GridSelection();

// Cleanup when done
grid.destroy();
```

Custom grid dimensions:
```javascript
// Create a 20x15 grid
const grid = GridSelection({ 
  columns: 20, 
  rows: 15 
});
```

Example with event handling:
```javascript
const grid = GridSelection({
  columns: 16,
  rows: 10,
  onSelect: (coordinates) => {
    console.log('Selected coordinates:', coordinates);
  }
});
```

### Example Output

When using the grid component, you'll see:
1. A visual grid with cells
2. Selected cells highlighted in blue (#3D7BD9)
3. Unselected cells in light blue (#E8F1FF)
4. Footer showing:
   - Current selection coordinates
   - Total number of selected cells

## Development

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Setup

1. Clone the repository:
```bash
git clone https://github.com/Madhavi-Bhatt/Gridselector-cli.git
cd Gridselector-cli
```

2. Install dependencies:
```bash
npm install
npm install -g - install cli tool globally
```

### Available Scripts

- `npm start` - Start development server with Parcel
- `npm run build` - Build for production
- `npm test` - Run standard linter
- `npm run fix` - Fix linting issues

## Project Structure

- `bin/cli.js` - CLI entry point
- `grid-component.js` - Core grid selection component
- `index.html` - Web interface
- `package.json` - Project configuration and dependencies

## Dependencies

- chalk - Terminal styling
- commander - CLI framework
- domql - DOM manipulation
- lodash - Utility functions
- preact - UI framework
- simple-git - Git operations

## License

ISC License

## Author

Madhavi

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## Issues

Please report any issues or bugs to the [issue tracker](https://github.com/Madhavi-Bhatt/Gridselector-cli/issues).
