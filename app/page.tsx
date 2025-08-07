import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, Download, Code, Palette, Smartphone, Phone, GraduationCap, Users, Lightbulb, Search, Brain, Eye, MailOpenIcon as Envelope, PlaneIcon as PaperPlane } from 'lucide-react'
import Image from "next/image"

export default function AmaniPortfolio() {
  const projects = [
    {
      title: "Speakly",
      description: "Interactive Language Learning Mobile App",
      image: "/speakly-app-mockup.png",
      technologies: ["Figma", "Wireframing", "Prototyping", "User Research"],
      details: {
        goal: "Create an easy-to-use and motivating educational app",
        techniques: "Figma, Wireframing, Prototyping",
        methodology: "User Flows, Personas, User Research",
        challenges: "Design a simple and motivating learning interface"
      }
    }
  ]

  const skills = [
    { name: "Figma", level: 90 },
    { name: "Wireframing", level: 85 },
    { name: "Prototyping", level: 80 },
    { name: "User Research", level: 85 },
    { name: "UI Design", level: 75 },
    { name: "UX Design", level: 70 },
    { name: "Problem Solving", level: 90 },
    { name: "Team Collaboration", level: 85 }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Amani Karem</h1>
            <div className="flex gap-4">
              <Button variant="ghost" size="sm">Home</Button>
              <Button variant="ghost" size="sm">About</Button>
              <Button variant="ghost" size="sm">Skills</Button>
              <Button variant="ghost" size="sm">Projects</Button>
              <Button variant="ghost" size="sm">Contact</Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <Image
              src="/amani-profile-photo.jpg"
              alt="Amani Karem Mahmoud"
              width={200}
              height={200}
              className="rounded-full mx-auto mb-6 border-4 border-white shadow-lg object-cover"
            />
          </div>
          <h2 className="text-5xl font-bold text-slate-800 dark:text-white mb-4">
            Hi, I'm Amani Karem Mahmoud
          </h2>
          <p className="text-2xl text-purple-600 dark:text-purple-400 mb-4 font-semibold">
            UI/UX Designer
          </p>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
            A beginner UI/UX designer with practical experience from academic projects and freelance work. 
            Specialized in creating prototypes, user research, and creative thinking. 
            Known for attention to detail and strong client communication.
          </p>
          <div className="flex gap-4 justify-center mb-8 flex-wrap">
            <Button size="lg" className="gap-2">
              <Download className="w-4 h-4" />
              Download Resume
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              <Eye className="w-4 h-4" />
              View My Work
            </Button>
          </div>
          <div className="flex gap-4 justify-center">
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:manokarem07@gmail.com">
                <Mail className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://www.linkedin.com/in/amani-karem-8a6162324/" target="_blank">
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="tel:01060715517">
                <Phone className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-white dark:bg-slate-800">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-slate-800 dark:text-white">
            About Me
          </h3>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                I'm Amani Karem Mahmoud, a passionate beginner UI/UX designer excited about the world of user experience design. 
                I have practical experience from academic projects and freelance work, where I've developed my skills in 
                creating prototypes and conducting user research.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                I believe that good design should be simple and easy to use, focusing on real user needs. 
                I always strive to create designs that combine beauty with practical functionality.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                I excel in creative thinking, attention to detail, and the ability to communicate effectively 
                with clients to understand their vision and transform it into innovative designs.
              </p>
            </div>
            <div className="grid gap-6">
              <Card className="text-center">
                <CardHeader>
                  <Lightbulb className="w-8 h-8 text-blue-600 mb-2 mx-auto" />
                  <CardTitle>Creative Thinking</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-300">
                    Innovative solutions for complex design challenges
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <Users className="w-8 h-8 text-green-600 mb-2 mx-auto" />
                  <CardTitle>Effective Communication</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-300">
                    Strong collaboration and client communication skills
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <Search className="w-8 h-8 text-purple-600 mb-2 mx-auto" />
                  <CardTitle>Attention to Detail</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-300">
                    Precision and accuracy in every design element
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-slate-800 dark:text-white">
            Skills & Expertise
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="w-6 h-6 text-blue-600" />
                  Technical Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Figma</Badge>
                  <Badge variant="secondary">Wireframing</Badge>
                  <Badge variant="secondary">Prototyping</Badge>
                  <Badge variant="secondary">User Research</Badge>
                  <Badge variant="secondary">Personas</Badge>
                  <Badge variant="secondary">Empathy Maps</Badge>
                  <Badge variant="secondary">UI Design</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="w-6 h-6 text-purple-600" />
                  Soft Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Problem Solving</Badge>
                  <Badge variant="secondary">UI/UX Thinking</Badge>
                  <Badge variant="secondary">Time Management</Badge>
                  <Badge variant="secondary">Team Collaboration</Badge>
                  <Badge variant="secondary">Fast Learner</Badge>
                  <Badge variant="secondary">Attention to Detail</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Skills Progress */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium text-slate-700 dark:text-slate-300">{skill.name}</span>
                    <span className="text-sm text-slate-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project Section */}
      <section className="py-16 px-4 bg-white dark:bg-slate-800">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-slate-800 dark:text-white">
            Featured Project: Speakly App
          </h3>
          
          {/* Project Overview */}
          <Card className="max-w-4xl mx-auto overflow-hidden mb-12">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 text-center">
              <h4 className="text-3xl font-bold mb-2">Speakly</h4>
              <p className="text-xl opacity-90">Interactive Language Learning Mobile App</p>
            </div>
            <CardContent className="p-8">
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                A comprehensive mobile app designed to help users learn new languages through interactive lessons, 
                social features, and gamification. The app includes language selection, user profiles, progress tracking, 
                friend chat system, statistics dashboard, and seamless authentication flow.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <div>
                  <h5 className="font-semibold text-slate-800 dark:text-white mb-2">Project Goal</h5>
                  <p className="text-slate-600 dark:text-slate-300">Create an engaging and social language learning experience</p>
                </div>
                <div>
                  <h5 className="font-semibold text-slate-800 dark:text-white mb-2">Key Features</h5>
                  <p className="text-slate-600 dark:text-slate-300">Multi-language support, Social chat, Progress tracking</p>
                </div>
                <div>
                  <h5 className="font-semibold text-slate-800 dark:text-white mb-2">Design Tools</h5>
                  <p className="text-slate-600 dark:text-slate-300">Figma, Wireframing, Prototyping</p>
                </div>
                <div>
                  <h5 className="font-semibold text-slate-800 dark:text-white mb-2">User Research</h5>
                  <p className="text-slate-600 dark:text-slate-300">User Flows, Personas, Usability Testing</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <Badge>Figma</Badge>
                <Badge>UI/UX Design</Badge>
                <Badge>Mobile App Design</Badge>
                <Badge>User Research</Badge>
                <Badge>Prototyping</Badge>
                <Badge>Social Features</Badge>
              </div>
            </CardContent>
          </Card>

          {/* App Screenshots Gallery */}
          <div className="max-w-6xl mx-auto">
            <h4 className="text-2xl font-bold text-center mb-8 text-slate-800 dark:text-white">
              App Screenshots & User Flow
            </h4>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Splash Screen */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src="/speakly-splash.png"
                    alt="Speakly Splash Screen"
                    width={300}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h5 className="font-semibold mb-2">Splash Screen</h5>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Welcome screen with brand identity and call-to-action
                  </p>
                </CardContent>
              </Card>

              {/* Login Screen */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src="/speakly-login.png"
                    alt="Speakly Login Screen"
                    width={300}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h5 className="font-semibold mb-2">Login & Authentication</h5>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    User-friendly login with social media integration options
                  </p>
                </CardContent>
              </Card>

              {/* Language Selection */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src="/speakly-languages.png"
                    alt="Language Selection Screen"
                    width={300}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h5 className="font-semibold mb-2">Language Selection</h5>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Multiple language options with clear visual hierarchy
                  </p>
                </CardContent>
              </Card>

              {/* User Profile */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src="/speakly-profile.png"
                    alt="User Profile Screen"
                    width={300}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h5 className="font-semibold mb-2">User Profile</h5>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Progress tracking with visual indicators and achievements
                  </p>
                </CardContent>
              </Card>

              {/* Chat Feature */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src="/speakly-chat.png"
                    alt="Chat Feature Screen"
                    width={300}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h5 className="font-semibold mb-2">Social Chat</h5>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Connect with native speakers for language practice
                  </p>
                </CardContent>
              </Card>

              {/* Statistics */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src="/speakly-stats.png"
                    alt="Statistics Screen"
                    width={300}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h5 className="font-semibold mb-2">Statistics & Rankings</h5>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Performance metrics and friend leaderboards for motivation
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Design Process */}
            <Card className="mt-12 p-8">
              <h4 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white">Design Process & Key Features</h4>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h5 className="text-lg font-semibold mb-4 text-blue-600">User Experience Focus</h5>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                    <li>• Intuitive onboarding flow from splash to language selection</li>
                    <li>• Clean, accessible interface with consistent visual language</li>
                    <li>• Social features to enhance learning motivation</li>
                    <li>• Progress tracking with visual feedback</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-lg font-semibold mb-4 text-purple-600">Technical Considerations</h5>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                    <li>• Responsive design for various mobile screen sizes</li>
                    <li>• Consistent color scheme and typography</li>
                    <li>• User-friendly navigation and information architecture</li>
                    <li>• Gamification elements for user engagement</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-slate-800 dark:text-white">
            Education & Courses
          </h3>
          <Card className="max-w-2xl mx-auto text-center">
            <CardHeader>
              <GraduationCap className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
              <CardTitle className="text-xl">Damietta University - Faculty of Computers and Information</CardTitle>
              <CardDescription>Computer Science Department</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-semibold text-blue-600">Expected Graduation: 2026</p>
            </CardContent>
          </Card>

          <div className="mt-12">
            <h4 className="text-2xl font-bold text-center mb-8 text-slate-800 dark:text-white">Languages & Additional Courses</h4>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="text-center">
                <CardHeader>
                  <div className="text-4xl mb-4">🇪🇬</div>
                  <CardTitle>Arabic</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-600 font-semibold">Native Language</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <div className="text-4xl mb-4">🇺🇸</div>
                  <CardTitle>English</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-600 font-semibold">Fluent Speaker</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <div className="text-4xl mb-4">🎓</div>
                  <CardTitle>UI/UX Course</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-600 font-semibold">NTI Institute + Self-Learning</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-4">Get In Touch</h3>
          <p className="text-xl text-center mb-12 opacity-90 max-w-2xl mx-auto">
            Have a design project in mind? Or want to collaborate with me? Don't hesitate to reach out!
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <h4 className="text-2xl font-semibold mb-6">Contact Information</h4>
              <div className="flex items-center gap-4 bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Envelope className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="font-semibold">Email</h5>
                  <p className="opacity-90">manokarem07@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="font-semibold">Phone</h5>
                  <p className="opacity-90">01060715517</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="font-semibold">LinkedIn</h5>
                  <p className="opacity-90">amani-karem-8a6162324</p>
                </div>
              </div>
            </div>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                      placeholder="Message Subject"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>
                  <Button className="w-full bg-white text-blue-600 hover:bg-white/90">
                    <PaperPlane className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-slate-900 text-white">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Amani Karem Mahmoud. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
