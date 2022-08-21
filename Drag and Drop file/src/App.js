import React, { useEffect, useState, useCallback } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useDropzone } from 'react-dropzone';
import './App.css';

const App = () => {

  const [images, setImages] = useState([]);

  // Dropzone
  const onDrop = useCallback((acceptedFiles, rejectFiles) => {
    acceptedFiles.forEach((file, index) => {
      const reader = new FileReader();
      reader.onload = () => {
        setImages(prevState => [...prevState, { id: index + 1, file: reader.result }]);
      }
      reader.readAsDataURL(file);
    });
    console.log('acceptedFiles', acceptedFiles);
    console.log('rejectFiles', rejectFiles);

  }, []);

  useEffect(() => {
    console.log(images);
    console.log(images.length);
  }, [images])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: 'image/png',
  });

  console.log(getRootProps(), getInputProps());

  // Fin Dropzone

  // Drag and Drop
  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  }

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const reorderedItems = reorder(images, result.source.index, result.destination.index);

    console.log(reorder);

    setImages(reorderedItems);

  }

  const getListStyle = (isDraggingOver) => ({
    background: isDraggingOver ? 'lightblue' : 'lightgrey',
    padding: 0,
    with: 250
  });

  const getItemStyle = (isDragging, draggableStyle) => ({
    userSelect: 'none',
    padding: 16,
    margin: '0 0 8px 0',
    background: isDragging ? 'lightgreen' : 'grey',
    ...draggableStyle
  });

  // FIN Drag and Drop

  return (
    <div className="App">
      <div className='dropzone' {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? 'Drag Active' : 'You can drop your file here'}
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div className="droppable" {...provided.droppableProps} ref={provided.innerRef} style={getListStyle(snapshot.isDraggingOver)}>
              {images.length > 0 &&
                images.map((el, index) => {
                  return (
                    <Draggable key={el.file} draggableId={el.file} index={index}>
                      {(provided, snapshot) => (
                        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}
                          style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}>
                          <span>{el.id}</span>
                          <img src={el.file} width="200px" height="150px" alt='drag' />
                        </div>
                      )}

                    </Draggable>
                  )
                })}
            </div>
          )}
        </Droppable>
      </DragDropContext>



    </div>
  )
}

export default App