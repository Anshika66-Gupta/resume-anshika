import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="px-5 lg:px-28 flex justify-between flex-col lg:flex-row" id="about">
      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10 }}
        viewport={{ once: true }}
      >
        <img
          className="max-h-100 w-auto"
          src="/assets/border-about.png"
          alt="About Me Illustration"
        />
      </motion.div>

      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="lg:text-4xl text-2xl mt-4 lg:mt-0">
          About <span className="font-extrabold">Me</span>
        </h2>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-5 lg:mt-10">
I am a results-driven Software Development Engineer and Full-Stack Web Developer with extensive experience in designing, developing, and maintaining scalable web applications and distributed systems. I work across the entire development lifecycle—from requirement analysis and system design to implementation, testing, and deployment—ensuring high performance, security, and reliability.        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
My expertise includes building responsive, user-centric interfaces, developing robust backend services, designing RESTful APIs, and optimizing databases for efficiency and scalability. With a strong foundation in data structures, algorithms, and system design principles, I focus on writing clean, maintainable, and testable code while following best engineering practices.        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
I thrive in collaborative environments, enjoy solving complex technical challenges, and continuously upskill to stay aligned with emerging technologies and industry standards, aiming to deliver impactful and production-ready solutions.        </p>

        <div className="mt-8 lg:mt-12">
          <h3 className="text-xl lg:text-2xl font-semibold mb-4">Education</h3>
          <ul className="space-y-3">
            <motion.li
              className="flex items-start gap-3 text-[#71717A] text-sm/6 lg:text-base"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="text-black font-bold mt-1">•</span>
              <span><strong>B.Tech in Electronics & Communications Engineering</strong> - Guru Nanak Dev University, Amritsar (2019 - 2023)</span>
            </motion.li>
            <motion.li
              className="flex items-start gap-3 text-[#71717A] text-sm/6 lg:text-base"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <span className="text-black font-bold mt-1">•</span>
              <span><strong>M.Tech in Artificial Intelligence & Data Science Engineering</strong> - IIT Patna, (2024 - 2026)</span>
            </motion.li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
