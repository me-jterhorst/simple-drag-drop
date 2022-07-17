let draggableElements = document.querySelectorAll('[draggable*="true"]');
let dropZones = document.querySelectorAll('.dropZone');

[...draggableElements].forEach((dragElement, index) => {
  dragElement.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData('text/plain', index);
  });
});

[...dropZones].forEach((dropZone) => {
  dropZone.addEventListener('dragover', (event) => {
    event.preventDefault();
    event.target.setAttribute('data-drag-active', true);
  });

  dropZone.addEventListener('dragleave', (event) => {
    event.target.setAttribute('data-drag-active', false);
  });

  dropZone.addEventListener('drop', (event) => {
    event.preventDefault();

    const droppedElementIndex = event.dataTransfer.getData('text/plain');
    const droppedElement = draggableElements[droppedElementIndex];

    dropZone.appendChild(droppedElement);
    event.target.setAttribute('data-drag-active', false);
  });
});
