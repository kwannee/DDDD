import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import React, { useState } from 'react';
import Layout from './components/Layout/Layout';
import classes from './App.module.css';
import Main from './components/Main/Main';
import Welcome from './components/Welcome/Welcome';
import Projects from './components/Projects/Projects';
import Project from './components/Project/Project';

function App() {
  const location = useLocation();
  const [images, setImages] = useState([
    {
      name: 'abc1',
      detailCategory: 'architecture',
      src: 'https://picsum.photos/215/210',
      category: 'design',
    },
    {
      name: 'abc2',
      detailCategory: 'architecture',
      src: 'https://picsum.photos/215/211',
      category: 'design',
    },
    {
      name: 'abc3',
      detailCategory: 'architecture',
      src: 'https://picsum.photos/215/212',
      category: 'design',
    },
    {
      name: 'abc4',
      detailCategory: 'interior',
      src: 'https://picsum.photos/215/213',
      category: 'design',
    },
    {
      name: 'abc5',
      detailCategory: 'interior',
      src: 'https://picsum.photos/215/214',
      category: 'design',
    },
    {
      name: 'abc1',
      detailCategory: 'furniture',
      src: 'https://picsum.photos/215/210',
      category: 'design',
    },
    {
      name: 'abc2',
      detailCategory: 'etc',
      src: 'https://picsum.photos/215/211',
      category: 'design',
    },
    {
      name: 'abc3',
      detailCategory: 'rendering',
      src: 'https://picsum.photos/215/212',
      category: 'digital',
    },
    {
      name: 'abc4',
      detailCategory: 'rendering',
      src: 'https://picsum.photos/215/213',
      category: 'digital',
    },
    {
      name: 'abc5',
      detailCategory: 'rendering',
      src: 'https://picsum.photos/215/214',
      category: 'digital',
    },
    {
      name: 'abc1',
      detailCategory: 'rendering',
      src: 'https://picsum.photos/215/210',
      category: 'digital',
    },
    {
      name: 'abc2',
      detailCategory: 'etc',
      src: 'https://picsum.photos/215/211',
      category: 'digital',
    },
    {
      name: 'abc3',
      detailCategory: 'etc',
      src: 'https://picsum.photos/215/212',
      category: 'digital',
    },
    {
      name: 'abc3',
      detailCategory: 'etc',
      src: 'https://picsum.photos/215/212',
      category: 'digital',
    },
    {
      name: 'abc3',
      detailCategory: 'etc',
      src: 'https://picsum.photos/215/212',
      category: 'digital',
    },
    {
      name: 'abc3',
      detailCategory: 'etc',
      src: 'https://picsum.photos/215/212',
      category: 'digital',
    },
    {
      name: 'abc3',
      detailCategory: 'etc',
      src: 'https://picsum.photos/215/212',
      category: 'digital',
    },
    {
      name: 'abc3',
      detailCategory: 'etc',
      src: 'https://picsum.photos/215/212',
      category: 'digital',
    },
    {
      name: 'abc3',
      detailCategory: 'etc',
      src: 'https://picsum.photos/215/212',
      category: 'digital',
    },
    {
      name: 'abc3',
      detailCategory: 'etc',
      src: 'https://picsum.photos/215/212',
      category: 'digital',
    },
    {
      name: 'abc3',
      detailCategory: 'etc',
      src: 'https://picsum.photos/215/212',
      category: 'digital',
    },
    {
      name: 'abc3',
      detailCategory: 'etc',
      src: 'https://picsum.photos/215/212',
      category: 'digital',
    },
    {
      name: 'abc3',
      detailCategory: 'etc',
      src: 'https://picsum.photos/215/212',
      category: 'digital',
    },
    {
      name: 'abc3',
      detailCategory: 'etc',
      src: 'https://picsum.photos/215/212',
      category: 'digital',
    },
    {
      name: 'abc3',
      detailCategory: 'etc',
      src: 'https://picsum.photos/215/212',
      category: 'digital',
    },
    {
      name: 'abc3',
      detailCategory: 'etc',
      src: 'https://picsum.photos/215/212',
      category: 'digital',
    },
    {
      name: 'abc4',
      detailCategory: 'architecture',
      src: 'https://picsum.photos/215/213',
      category: 'detail',
    },
    {
      name: 'abc5',
      detailCategory: 'architecture',
      src: 'https://picsum.photos/215/214',
      category: 'detail',
    },
    {
      name: 'abc1',
      detailCategory: 'interior',
      src: 'https://picsum.photos/215/210',
      category: 'detail',
    },
    {
      name: 'abc2',
      detailCategory: 'interior',
      src: 'https://picsum.photos/215/211',
      category: 'detail',
    },
    {
      name: 'abc3',
      detailCategory: 'etc',
      src: 'https://picsum.photos/215/212',
      category: 'detail',
    },
    {
      name: 'abc4',
      detailCategory: 'etc',
      src: 'https://picsum.photos/215/213',
      category: 'detail',
    },
    {
      name: 'abc5',
      detailCategory: 'architects',
      src: 'https://picsum.photos/215/214',
      category: 'drawing',
    },
    {
      name: 'abc1',
      detailCategory: 'architects',
      src: 'https://picsum.photos/215/210',
      category: 'drawing',
    },
    {
      name: 'abc2',
      detailCategory: 'interior',
      src: 'https://picsum.photos/215/211',
      category: 'drawing',
    },
    {
      name: 'abc3',
      detailCategory: 'interior',
      src: 'https://picsum.photos/215/212',
      category: 'drawing',
    },
    {
      name: 'abc4',
      detailCategory: 'architecture',
      src: 'https://picsum.photos/215/213',
      category: 'drawing',
    },
    {
      name: 'abc5',
      detailCategory: 'architecture',
      src: 'https://picsum.photos/215/214',
      category: 'drawing',
    },
    {
      name: 'abc5',
      detailCategory: 'architecture',
      src: 'https://picsum.photos/215/214',
      category: 'drawing',
    },
    {
      name: 'abc5',
      detailCategory: 'architecture',
      src: 'https://picsum.photos/215/214',
      category: 'drawing',
    },
  ]);
  return (
    <div className={classes.App}>
      <Layout>
        {location.pathname !== '/' && <Header />}
        <Routes>
          <Route path="/" element={<Welcome />} exact />
          <Route path="/main" element={<Main images={images} />} exact />
          <Route path="/projects/:category" element={<Projects images={images} />} />
          <Route
            path="/projects/:category/:detailCategory"
            element={<Projects images={images} />}
          />
          <Route
            path="/project/:category/:detailCategory/:name"
            element={<Project images={images} />}
          />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
