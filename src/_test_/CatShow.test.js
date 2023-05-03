import { render, screen } from '@testing-library/react'
import CatShow from '../pages/CatShow'
import { MemoryRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import mockCats from '../mockCats';

const renderShow = () => {
  render(
    <MemoryRouter initialEntries={["/catshow/1"]}>
      <Routes>
        <Route path="/catshow/:id" element={<CatShow cats={mockCats} />} />
      </Routes>
    </MemoryRouter>
  );
};

describe('<CatShow />', () => { 
    it('display info for cat that matches id #', () => {
        renderShow()
         expect(screen.getByText(`${mockCats[0].name}`, {exact: false})).toBeInTheDocument()
    })
 })