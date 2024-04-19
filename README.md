# Menu Item Extractor & Visualizer

This project is designed to parse and extract menu items from provided text formatted as `<number>. <Menu Text>` and visually represent them as interactive nodes in a ReactFlow canvas. Users can add, delete, duplicate nodes, and connect them with directional edges to visualize relationships or sequences.

## Features

- **Menu Extraction**: Extract menu items using regular expressions from text input.
- **ReactFlow Integration**: Visualize and interact with extracted items on a ReactFlow canvas.
- **Node Interactions**: Add, delete, and duplicate nodes, and manage connections with edges.

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 14.x or higher)
- npm (usually comes with Node.js)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repository/menu-item-visualizer.git
   cd menu-item-visualizer
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload if you make edits.

## Usage

### Extracting Menu Items

1. Enter the text containing menu items formatted as `<number>. <Menu Text>` into the provided textarea.
2. Click the **Extract** button to parse and display the menu items in a list below the input area.

### Visualizing on ReactFlow

1. Each extracted menu item will appear as a node on the ReactFlow canvas.
2. Use the controls:
   - **Add Node**: Adds a new node to the canvas.
   - **Delete Node**: Deletes a selected node.
   - **Duplicate Node**: Creates a copy of the selected node with a new, unique identifier.

3. Drag to move nodes and click to select. Click and drag from a node’s edge connector to create a new edge to another node.

## Customization

Modify the regex pattern or ReactFlow settings in the source code to tailor the app to different formats or visualization requirements.

## Contributing

Contributions are welcome! Please fork the repository and submit pull requests with your proposed changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

