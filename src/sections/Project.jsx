import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import ProjectCard from './ProjectCard';

// Helper untuk memastikan path gambar benar di GitHub Pages
const withBase = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;

const Project = () => {
  const portfolioItems = [
    {
      title: 'Website Ansa Academy',
      description: 'Website Profile Ansa Academy Platform Mentoring Lomba',
      image: withBase('/project4.png'),
      tags: ['React', 'Tailwind'],
      detailsLink: 'https://ansa-academy-mn84dqvce-novawardanus-projects.vercel.app/',
      previewLink: 'https://ansa-academy-mn84dqvce-novawardanus-projects.vercel.app/',
    },
    {
      title: 'Website BEM',
      description: 'Website Profile Badan Eksekutif Mahasiswa Fakultas Ilmu Komputer',
      image: withBase('/project3.png'),
      tags: ['React', 'Tailwind'],
      detailsLink: 'https://bem-website-silk.vercel.app/',
      previewLink: 'https://bem-website-silk.vercel.app/',
    },
    {
      title: 'Laporan Perkembangan Siswa',
      description: 'Sebuah sistem yang menjembatani antara guru dan murid untuk mendapatkan akses perkembangan siswa setiap bulannya',
      image: withBase('/project2.png'),
      tags: ['React.js', 'Tailwind', 'Firebase'],
      detailsLink: 'https://database-al-akbar.web.app/',
      previewLink: 'https://database-al-akbar.web.app/',
    },
    {
      title: 'Website Profile',
      description: 'Website profil perusahaan Barincore.Id',
      image: withBase('/project1.png'),
      tags: ['React.js', 'Tailwind'],
      detailsLink: 'https://redesign-braincore-w9tu-q7krco0im-novawardanus-projects.vercel.app/',
      previewLink: 'https://redesign-braincore-w9tu-q7krco0im-novawardanus-projects.vercel.app/',
    },
  ];

  const [showModal, setShowModal] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isCardsVisible, setIsCardsVisible] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  const { ref: headerRef, inView: isHeaderInView } = useInView({ triggerOnce: true });
  const { ref: cardsRef, inView: isCardsInView } = useInView({ triggerOnce: true });
  const { ref: buttonRef, inView: isButtonInView } = useInView({ triggerOnce: true });

  useEffect(() => {
    setIsHeaderVisible(isHeaderInView);
    setIsCardsVisible(isCardsInView);
    setIsButtonVisible(isButtonInView);
  }, [isHeaderInView, isCardsInView, isButtonInView]);

  useEffect(() => {
    document.body.style.overflow = showModal ? 'hidden' : 'auto';
  }, [showModal]);

  const handleOpenModal = () => {
    setIsOpening(true);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowModal(false);
      setIsClosing(false);
      setIsOpening(false);
    }, 500);
  };

  const initialItems = portfolioItems.slice(0, 3);

  return (
    <section
      id="project"
      className="relative min-h-screen flex flex-col justify-center items-center bg-[#242424] text-white pt-24 px-6 md:flex-col md:gap-12"
    >
      {/* Heading */}
      <div data-aos="fade-left" className="absolute top-24 right-6 md:right-20 text-right">
        <div className="flex items-center gap-3 justify-end mb-1">
          <div className="flex-1 border-t-4 rounded-sm border-[#777777]"></div>
          <h2 className="text-3xl font-extrabold text-[#777777]">Recent</h2>
        </div>
        <h3 className="text-3xl font-extrabold italic text-white">PROJECT</h3>
      </div>

      {/* Tombol kiri atas */}
      <div data-aos="fade-right" className="absolute top-28 left-6 md:left-20">
        <button
          ref={buttonRef}
          onClick={handleOpenModal}
          className={`text-white text-xl font-semibold border-2 border-white px-6 py-2 rounded-full hover:bg-white hover:text-[#242424] transition duration-300 transform hover:scale-105 ${
            isButtonVisible ? 'animate__animated animate__fadeInUp' : ''
          }`}
          style={{ animationDuration: '2s', animationDelay: '0.5s' }}
        >
          See all project
        </button>
      </div>

      {/* Portfolio Cards */}
      <div
        data-aos="zoom-in"
        data-aos-duration="1500"
        ref={cardsRef}
        className={`grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center w-full max-w-7xl mx-auto md:mt-16 mt-30 px-4 ${
          isCardsVisible ? 'animate__animated animate__fadeIn' : ''
        }`}
      >
        {initialItems.map((item, index) => (
          <ProjectCard key={index} {...item} />
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className={`fixed inset-0 flex items-center justify-center bg-black/90 z-100 transition-opacity duration-300 ${
            isClosing ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <button
            onClick={handleCloseModal}
            className="fixed top-6 right-6 text-4xl text-white font-bold z-50 hover:scale-110 transition-transform"
          >
            &times;
          </button>
          <div
            className={`bg-[#1B1B1B] rounded-lg p-6 relative w-full max-w-6xl max-h-[80vh] overflow-y-auto transform transition-all duration-500 ${
              isOpening ? 'scale-105 translate-y-0 opacity-100' : 'scale-95 translate-y-5 opacity-0'
            } ${isClosing ? 'scale-90 opacity-0' : ''}`}
          >
            <h3 className="text-2xl font-bold text-center mb-4 text-white">All Project</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {portfolioItems.map((item, index) => (
                <ProjectCard key={index} {...item} />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Project;
