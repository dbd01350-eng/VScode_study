import React, { useState, useMemo, useEffect } from 'react';
import { projects } from './data/projects';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ArchiveSection from './components/ArchiveSection';
import LearningJourney from './components/LearningJourney';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';

import './styles/archive.css';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [currentFilter, setCurrentFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  // Active section observer
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'archive', 'journey', 'about'];
      const offset = 80;
      let active = 'hero';
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < offset) {
          active = id;
        }
      });
      setActiveSection(active);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filtered projects
  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const matchFilter = currentFilter === 'all' || p.category === currentFilter;
      if (!matchFilter) return false;
      if (!searchQuery.trim()) return true;
      const q = searchQuery.trim().toLowerCase();
      return (
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.folder.toLowerCase().includes(q) ||
        p.file.toLowerCase().includes(q) ||
        p.technologies.some((t) => t.toLowerCase().includes(q)) ||
        p.keyConcepts.some((k) => k.toLowerCase().includes(q)) ||
        p.category.toLowerCase().includes(q)
      );
    });
  }, [currentFilter, searchQuery]);

  const selectedProject = useMemo(() => {
    return projects.find((p) => p.id === selectedProjectId) || null;
  }, [selectedProjectId]);

  return (
    <div className="app-container">
      <Navbar
        activeSection={activeSection}
        onFilterSelect={(filter) => {
          setCurrentFilter(filter);
        }}
      />

      <main id="main-content">
        <HeroSection />

        <ArchiveSection
          projects={projects}
          filteredProjects={filteredProjects}
          currentFilter={currentFilter}
          onFilterChange={(filter) => setCurrentFilter(filter)}
          searchQuery={searchQuery}
          onSearchChange={(q) => setSearchQuery(q)}
          onSelectProject={(id) => setSelectedProjectId(id)}
        />

        <LearningJourney />

        <AboutSection />
      </main>

      <Footer />

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProjectId(null)}
        />
      )}
    </div>
  );
}
