import React from 'react';
import Box from '@mui/material/Box';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import StatsBar from './components/StatsBar';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <Box sx={{ overflowX: 'hidden' }}>
      <Header />
      <Box component="main" sx={{ maxWidth: '1280px', mx: 'auto', px: { xs: 2, md: 6 } }}>
        <HeroSection />
        <StatsBar />
        <ProjectsSection />
        <SkillsSection />
        <CTASection />
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
