import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import StatsBar from './components/StatsBar';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import CTASection from './components/CTASection';
import HireMeDialog from './components/HireMeDialog';
import Footer from './components/Footer';

function App() {
  const [isHireDialogOpen, setIsHireDialogOpen] = useState(false);

  const handleOpenHireDialog = () => setIsHireDialogOpen(true);
  const handleCloseHireDialog = () => setIsHireDialogOpen(false);

  return (
    <Box sx={{ overflowX: 'hidden' }}>
      <Header onHireClick={handleOpenHireDialog} />
      <Box component="main" sx={{ maxWidth: '1280px', mx: 'auto', px: { xs: 2, md: 6 } }}>
        <HeroSection onHireClick={handleOpenHireDialog} />
        <StatsBar />
        <ProjectsSection />
        <SkillsSection />
        <CTASection onHireClick={handleOpenHireDialog} />
      </Box>
      <Footer />
      <HireMeDialog open={isHireDialogOpen} onClose={handleCloseHireDialog} />
    </Box>
  );
}

export default App;
