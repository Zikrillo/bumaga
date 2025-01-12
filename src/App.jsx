import { useState } from 'react'
import './App.css';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import SellPage from './pages/SellPage/SellPage';
import { Menubar } from 'primereact/menubar';
import 'primeicons/primeicons.css';
import DebtPage from './pages/DebtPage/DebtPage';
import AddPage from './pages/AddPage/AddPage';

function App() {
  const location = useNavigate();
  const items = [
    {
      label: 'Sotish',
      icon: 'pi pi-dollar',
      command: () => {
        location('./bumaga');
      }
    },
    {
      label: 'Qarz',
      icon: 'pi pi-wallet',
      command: () => {
        location('./debt');
      }
      
    },
    {
      label: "Maxsulotni omborga qo'shish",
      icon: 'pi pi-plus',
      command: () => {
        location('./add');
      }
    }   
  ];

  return (
    <div>
      <Menubar model={items} className='mb-20'/>
      <Routes>
        <Route path="/" element={<SellPage />} />
        <Route path="/add" element={<AddPage/>} />
        <Route path="/debt" element={<DebtPage/>} />
      </Routes>
    </div>
  );
}

export default App
