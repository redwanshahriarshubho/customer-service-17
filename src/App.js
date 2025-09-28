import React, { useState } from 'react';

function App() {
  const [tickets] = useState([
    { id: 1001, title: "Login Issues - Can't Access Account", description: "Customer is unable to log in to their account. They've tried resetting their password multiple times but still...", priority: "HIGH PRIORITY", date: "1/15/2024", name: "John Smith", status: "Open" },
    { id: 1003, title: "Unable to Download Invoice", description: "Customer cannot download their January invoice from the billing section. The download button is...", priority: "MEDIUM PRIORITY", date: "1/17/2024", name: "Michael Brown", status: "In-Progress" },
    { id: 1005, title: "App Crash on Launch", description: "Customer reports that the mobile app crashes immediately upon opening on Android 13...", priority: "HIGH PRIORITY", date: "1/19/2024", name: "David Wilson", status: "Open" },
    { id: 1007, title: "Two-Factor Authentication Issue", description: "Customer is not receiving 2FA codes on their registered phone number...", priority: "HIGH PRIORITY", date: "1/22/2024", name: "James Anderson", status: "Open" },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CiAgPGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIgZmlsbD0iIzMzMyIgZmlsbC1vcGFjaXR5PSIwLjEiLz4KPC9zdmc+')] opacity-20"></div>
      
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-yellow-400 to-green-400 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-green-400 to-yellow-400 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse"></div>
      </div>

      <header className="sticky top-0 z-50 backdrop-blur-xl bg-gradient-to-r from-yellow-500/95 via-green-500/95 to-yellow-500/95 p-4 shadow-2xl border-b border-white/10">
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center shadow-xl border-2 border-white/20">
              <span className="text-2xl font-bold text-yellow-400">CS</span>
            </div>
            <div className="text-2xl font-bold text-black">Ticket System</div>
          </div>
          <ul className="flex space-x-8">
            {['Home', 'FAQ', 'Changelog', 'Blog', 'Download', 'Contact'].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-black transition-all duration-300 text-gray-800 font-medium relative group">
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
            <li>
              <button className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 border border-white/10">
                <span className="text-lg">+</span>
                <span>New Ticket</span>
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <main className="p-8 max-w-7xl mx-auto relative z-10">
        <section className="ticket-dashboard">
          <div className="status-board flex justify-between mb-16 gap-10">
            <div className="status flex-1 text-center p-12 rounded-3xl bg-gradient-to-br from-yellow-500/30 to-green-500/30 backdrop-blur-xl border border-yellow-500/40 shadow-2xl transform transition-all duration-700 hover:scale-105 hover:shadow-yellow-500/30 hover:border-yellow-500/50">
              <div className="text-xl font-semibold text-yellow-300 mb-4">In-Progress</div>
              <div className="text-8xl font-bold mt-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-green-300">
                {tickets.filter(t => t.status === "In-Progress").length}
              </div>
              <div className="mt-6 text-gray-300">Active tickets</div>
            </div>
            <div className="status flex-1 text-center p-12 rounded-3xl bg-gradient-to-br from-green-500/30 to-yellow-500/30 backdrop-blur-xl border border-green-500/40 shadow-2xl transform transition-all duration-700 hover:scale-105 hover:shadow-green-500/30 hover:border-green-500/50">
              <div className="text-xl font-semibold text-green-300 mb-4">Resolved</div>
              <div className="text-8xl font-bold mt-4 text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-yellow-300">
                {tickets.filter(t => t.status === "Resolved").length}
              </div>
              <div className="mt-6 text-gray-300">Completed tasks</div>
            </div>
          </div>

          <div className="ticket-columns flex space-x-10">
            <div className="column w-1/2">
              <div className="flex items-center justify-between mb-10">
                <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-green-300">
                  Customer Tickets
                </h2>
                <div className="text-sm px-5 py-2.5 rounded-full bg-yellow-500/30 text-yellow-300 border border-yellow-500/40 shadow-lg">
                  {tickets.length} tickets
                </div>
              </div>
              
              <div className="space-y-8">
                {tickets.map(ticket => (
                  <div 
                    key={ticket.id} 
                    className="ticket bg-gray-800/60 backdrop-blur-xl p-8 rounded-3xl border border-gray-700/50 hover:border-yellow-500/50 transition-all duration-700 transform hover:-translate-y-3 shadow-2xl hover:shadow-yellow-500/20 hover:bg-gray-800/80"
                  >
                    <div className="flex justify-between items-start mb-6">
                      <div className="font-bold text-2xl text-white">{ticket.title}</div>
                      <span className={`inline-block px-5 py-2 rounded-full text-sm font-semibold ${
                        ticket.status === "Open" ? "bg-gradient-to-r from-yellow-500/40 to-green-500/40 text-yellow-300 border border-yellow-500/40 shadow-xl" : 
                        ticket.status === "In-Progress" ? "bg-gradient-to-r from-yellow-500/40 to-green-500/40 text-green-300 border border-green-500/40 shadow-xl" : 
                        "bg-gradient-to-r from-green-500/40 to-yellow-500/40 text-green-300 border border-green-500/40 shadow-xl"
                      }`}>
                        {ticket.status}
                      </span>
                    </div>
                    <div className="text-gray-300 mb-6 text-lg">{ticket.description}</div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-4">
                        <span className="text-yellow-300 font-bold text-xl">#{ticket.id}</span>
                        <span className={`px-4 py-1.5 rounded-full text-sm font-semibold ${
                          ticket.priority === "HIGH PRIORITY" ? "bg-red-500/30 text-red-300 border border-red-500/40 shadow-lg" : "bg-yellow-500/30 text-yellow-300 border border-yellow-500/40 shadow-lg"
                        }`}>
                          {ticket.priority}
                        </span>
                      </div>
                      <div className="text-gray-300 flex items-center space-x-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                        <span>{ticket.name}</span>
                        <span className="text-gray-500">•</span>
                        <span>{ticket.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="column w-1/2">
              <div className="flex items-center justify-between mb-10">
                <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-yellow-300">
                  Task Status
                </h2>
                <div className="text-sm px-5 py-2.5 rounded-full bg-green-500/30 text-green-300 border border-green-500/40 shadow-lg">
                  Active
                </div>
              </div>
              
              <div className="task bg-gray-800/60 backdrop-blur-xl p-10 rounded-3xl border border-gray-700/50 mb-10 transition-all duration-700 hover:border-green-500/50 hover:shadow-green-500/20 hover:bg-gray-800/80 shadow-2xl">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500/30 to-yellow-500/30 flex items-center justify-center mr-5 shadow-xl border border-white/10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-300" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl text-gray-200">Add New Task</div>
                    <div className="text-sm text-gray-500 mt-2">Select a ticket to add to Task Status</div>
                  </div>
                </div>
                <div className="text-sm text-gray-500 ml-21 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                  </svg>
                  Drag and drop tickets here to track progress
                </div>
              </div>
              
              <div className="task bg-gradient-to-br from-green-800/40 to-yellow-800/40 backdrop-blur-xl p-10 rounded-3xl border border-green-500/40 shadow-2xl">
                <div className="flex items-center justify-between mb-8">
                  <div className="font-semibold text-2xl text-white flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500/40 to-yellow-500/40 flex items-center justify-center mr-5 shadow-xl border border-white/10">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-green-300" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    Resolved Tasks
                  </div>
                  <div className="text-sm px-5 py-2.5 rounded-full bg-green-500/30 text-green-300 border border-green-500/40 shadow-lg">
                    {tickets.filter(t => t.status === "Resolved").length}
                  </div>
                </div>
                <div className="text-gray-200 mt-4 text-lg">No resolved tasks yet.</div>
                <div className="mt-6 text-sm text-gray-500 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Completed tasks will appear here
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gradient-to-r from-gray-900/90 to-black/90 backdrop-blur-xl p-12 text-center border-t border-white/10 relative z-10">
        <div className="footer-content grid grid-cols-1 md:grid-cols-5 gap-12 max-w-7xl mx-auto mb-12">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-14 h-14 bg-gradient-to-r from-yellow-500 to-green-500 rounded-full flex items-center justify-center shadow-2xl border-2 border-white/20">
                <span className="text-2xl font-bold text-black">CS</span>
              </div>
              <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-green-300">
                Ticket System
              </div>
            </div>
            <p className="text-gray-500 text-sm mt-4 text-center md:text-left max-w-xs">Streamlining customer support with innovative solutions since 2023</p>
          </div>
          
          {[
            {
              title: "Company",
              items: ["About Us", "Our Mission", "Contact Us"]
            },
            {
              title: "Services",
              items: ["Products & Services", "Customer Stories", "Download Apps"]
            },
            {
              title: "Information",
              items: ["Privacy Policy", "Terms & Conditions", "Join Us"]
            },
            {
              title: "Social Links",
              items: ["🕒 @CS-Ticket-System", "📸 @CS-Ticket-System", "🐦 @CS-Ticket-System", "✉ support@cst.com"]
            }
          ].map((section, index) => (
            <div key={index} className="text-center md:text-left">
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-green-300 font-semibold mb-5 text-xl">
                {section.title}
              </p>
              <div className="space-y-4">
                {section.items.map((item, itemIndex) => (
                  <p 
                    key={itemIndex} 
                    className="text-gray-400 hover:text-white transition-all duration-300 cursor-pointer text-sm flex items-center justify-center md:justify-start group"
                  >
                    {item.startsWith('🕒') || item.startsWith('📸') || item.startsWith('🐦') || item.startsWith('✉') ? (
                      <>
                        <span className="mr-3 text-lg group-hover:scale-110 transition-transform">{item.substring(0, 2)}</span>
                        <span>{item.substring(3)}</span>
                      </>
                    ) : (
                      <span className="group-hover:translate-x-1 transition-transform inline-block">{item}</span>
                    )}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="border-t border-white/10 pt-10 max-w-7xl mx-auto">
          <p className="text-gray-500 text-sm">&copy; 2025 CS - Ticket System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;