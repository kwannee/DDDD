import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import React, { useCallback, useEffect, useState } from 'react';
import Layout from './components/Layout/Layout';
import classes from './App.module.css';
import Main from './components/Main/Main';
import Welcome from './components/Welcome/Welcome';
import Projects from './components/Projects/Projects';
import Project from './components/Project/Project';
import Login from './components/Login/Login';

import app from './firebase/firebase';
import Upload from './components/Upload/Upload';
import SignUp from './components/SignUp/SignUp';
import { fetchAllImagesByPath } from './firebase/utils/storage';
import Code from './components/Code/Code';
import MainProjects from './components/Main/projects/MainProjects';

function App() {
  const location = useLocation();
  const [images, setImages] = useState([]);

  const fetchAllProjects = useCallback(async () => {
    const thumbnails = await fetchAllImagesByPath('thumbnails/');
    setImages(thumbnails);
  }, []);

  useEffect(() => {
    fetchAllProjects();
  }, [fetchAllProjects]);

  return (
    <div className={classes.App}>
      <Layout>
        {location.pathname !== '/' && <Header />}
        <Routes>
          <Route path="/" element={<Welcome />} exact />
          <Route path="/main" element={<Main projects={images} />} exact />
          <Route path="/main/projects" element={<MainProjects projects={images} />} exact />
          <Route path="/projects/:category" element={<Projects images={images} />} />
          <Route
            path="/projects/:category/:detailCategory"
            element={<Projects images={images} />}
          />
          <Route path="/project/:category/:detailCategory/:name" element={<Project />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/code" element={<Code />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
