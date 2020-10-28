import React from 'react';
import { Column } from './Column';
import { AppContainer } from './styles';
import { Card } from './Card';
import { AddNewItem } from './AddNewItem';

function App() {
  return (
    <AppContainer>
      <Column text="To Do">
        <Card text="Generate app scafold" />
      </Column>
      <Column text="In Progress">
        <Card text="Learn Typescript" />
      </Column>
      <Column text="Done">
        <Card text="Begin to user static typing" />
      </Column>
      <AddNewItem toggleButtonText="+ Add another list" onAdd={(text) => console.log(text)} />
    </AppContainer>
  );
}

export default App;
