import nexus from '@/assets/nexus.jpg'
import campus from '@/assets/campus.jpg'
import drone from '@/assets/drone.jpg'
import science from '@/assets/science.jpg'

export const projects = [
  { name: 'Global Nexus AI Discord Bot', description: 'Exploring intelligent conversations and connected communities through a Discord bot.', category: 'AI · COMMUNITY', tags: 'PYTHON · AI', image: nexus, alt: 'Concept artwork of a glass AI chat bot and its connected network' },
  { name: 'CampusBuddy AI', description: 'An AI companion concept built around the everyday needs of campus life.', category: 'AI · STUDENT LIFE', tags: 'REACT · NEXT.JS', image: campus, alt: 'Concept artwork of a campus with an AI assistant' },
  { name: 'Custom Drone Design', description: 'Bringing electronics, physical design, and embedded thinking into the air.', category: 'HARDWARE · FLIGHT', tags: 'ESP32 · PCB', image: drone, alt: 'Illustrative quadcopter drone with an exposed flight controller' },
  { name: 'The Terminal Science Educational YouTube Channel', description: 'Making science more approachable through visual storytelling and animation.', category: 'SCIENCE · EDUCATION', tags: 'MANIM · PYTHON', image: science, alt: 'Concept artwork of mathematical waves and orbital geometry' },
]

export const skills = [
  { name: 'Languages', items: [['C', 'core'], ['C++', 'core'], ['Python', 'core']] },
  { name: 'Web Dev', items: [['React', 'build'], ['Next.js', 'build'], ['Tailwind', 'style'], ['Flask', 'serve']] },
  { name: 'Hardware', items: [['ESP32', 'embed'], ['PCB design', 'design']] },
  { name: 'Tools', items: [['Manim', 'viz'], ['Git', 'vcs'], ['Linux', 'os'], ['VS Code', 'edit']] },
]

export const navigation = ['Projects', 'About', 'Skills', 'Education', 'Contact']