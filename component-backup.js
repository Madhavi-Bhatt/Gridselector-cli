// Wait for DOMQL to be available
const waitForDOMQL = () => {
  return new Promise((resolve) => {
    if (window.domql) {
      resolve(window.domql)
    } else {
      const script = document.createElement('script')
      script.src = 'https://unpkg.com/domql@1.6.71/dist/domql.min.js'
      script.onload = () => {
        resolve(window.domql)
      }
      document.head.appendChild(script)
    }
  })
}

export const GridSelection = ({ columns = 16, rows = 8 }) => {
  const state = {
    selectedCells: {},
    clickedCell: null
  };

  const createCell = (x, y) => {
    return createElement('div', {
      style: {
        background: state.selectedCells[`${x},${y}`] ? '#3D7BD9' : '#E8F1FF',
        borderRadius: '2px',
        cursor: 'pointer',
        aspectRatio: '1/1',
        boxSizing: 'border-box'
      },
      onClick: () => handleCellClick(x, y)
    });
  };

  const handleCellClick = (x, y) => {
    state.clickedCell = { x, y };
    const newSelectedCells = {};
    for (let i = 0; i <= x; i++) {
      for (let j = 0; j <= y; j++) {
        newSelectedCells[`${i},${j}`] = true;
      }
    }
    state.selectedCells = newSelectedCells;
    updateGrid();
  };

  const updateGrid = () => {
    const grid = document.querySelector('.grid-container');
    if (!grid) return;
    
    grid.innerHTML = '';
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < columns; x++) {
        grid.appendChild(createCell(x, y));
      }
    }

    const footer = document.querySelector('.grid-footer');
    if (footer) {
      footer.innerHTML = `
        <div class="coordinates">
          Selection coordinates: ${state.clickedCell ? `${state.clickedCell.x + 1},${state.clickedCell.y + 1}` : '-'}
        </div>
        <div class="count">
          Total cells selected: ${Object.keys(state.selectedCells).length}
        </div>
      `;
    }
  };

  // Create container
  const container = createElement('div', {
    className: 'grid-container',
    style: {
      display: 'grid',
      gridTemplateColumns: `repeat(${columns}, 1fr)`,
      gridTemplateRows: `repeat(${rows}, 1fr)`,
      gap: '4px',
      background: '#f9f9f9',
      borderRadius: '8px',
      padding: '8px',
      marginBottom: '18px',
      boxSizing: 'border-box',
      userSelect: 'none',
      width: '100%',
      aspectRatio: `${columns}/${rows}`
    }
  });

  // Create footer
  const footer = createElement('div', {
    className: 'grid-footer',
    style: {
      marginTop: 'auto',
      fontSize: '15px',
      color: '#222',
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 4px'
    }
  });

  // Create modal
  const modal = createElement('div', {
    className: 'grid-modal',
    style: {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      background: '#fff',
      borderRadius: '16px',
      boxShadow: '0 8px 16px rgba(0,0,0,0.08)',
      padding: '28px',
      minWidth: 'fit-content',
      minHeight: 'fit-content',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontFamily: 'Europa, Arial, sans-serif',
      width: 'fit-content',
      zIndex: '1000'
    }
  }, [
    createElement('h2', {
      style: {
        fontWeight: 'bold',
        fontSize: '22px',
        marginBottom: '18px',
        alignSelf: 'flex-start'
      }
    }, 'Grid Selection'),
    container,
    footer
  ]);

  // Add modal to document
  document.body.appendChild(modal);
  
  // Initialize grid
  updateGrid();

  return {
    destroy: () => {
      if (modal && modal.parentNode) {
        modal.parentNode.removeChild(modal);
      }
    }
  };
};