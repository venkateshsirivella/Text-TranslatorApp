import React from 'react'
import { Link } from 'react-router-dom'
import { Languages, Shuffle, Code, Sparkles } from 'lucide-react'

const Home = () => {
  const projects = [
    {
      title: 'Text Translator',
      description: 'Translate text between different languages using RapidAPI integration.',
      icon: Languages,
      link: '/translator',
      color: 'bg-blue-500',
      features: ['Multi-language support', 'Real-time translation', 'Clean UI']
    },
    {
      title: 'Random String Generator',
      description: 'Generate random strings with customizable options using React hooks.',
      icon: Shuffle,
      link: '/random-generator',
      color: 'bg-green-500',
      features: ['useState hook', 'useCallback hook', 'useEffect hook']
    }
  ]

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-primary-600 to-purple-600 rounded-2xl flex items-center justify-center">
              <Code className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            React Frontend
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-purple-600">
              {' '}Projects
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A collection of beginner-friendly React applications showcasing modern frontend development 
            with React hooks, routing, and API integration.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <div
                key={project.title}
                className="card hover:scale-105 transform transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className={`w-12 h-12 ${project.color} rounded-xl flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                        <Sparkles className="w-3 h-3 text-primary-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={project.link}
                  className="btn-primary w-full text-center inline-block"
                >
                  Explore Project
                </Link>
              </div>
            )
          })}
        </div>

        {/* Tech Stack */}
        <div className="card text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Built With Modern Technologies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'React 18', desc: 'Latest React features' },
              { name: 'React Router', desc: 'Client-side routing' },
              { name: 'Tailwind CSS', desc: 'Utility-first CSS' },
              { name: 'RapidAPI', desc: 'API integration' }
            ].map((tech, index) => (
              <div key={tech.name} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                  {tech.name}
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                  {tech.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home