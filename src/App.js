import React, { useState } from 'react';

function App() {
  const [tickets] = useState([
    { id: 1001, title: "Login Issues - Can't Access Account", description: "Customer is unable to log in to their account. They've tried resetting their password multiple times but still...", priority: "HIGH PRIORITY", date: "1/15/2024", name: "John Smith", status: "Open" },
    { id: 1003, title: "Unable to Download Invoice", description: "Customer cannot download their January invoice from the billing section. The download button is...", priority: "MEDIUM PRIORITY", date: "1/17/2024", name: "Michael Brown", status: "In-Progress" },
    { id: 1005, title: "App Crash on Launch", description: "Customer reports that the mobile app crashes immediately upon opening on Android 13...", priority: "HIGH PRIORITY", date: "1/19/2024", name: "David Wilson", status: "Open" },
    { id: 1007, title: "Two-Factor Authentication Issue", description: "Customer is not receiving 2FA codes on their registered phone number...", priority: "HIGH PRIORITY", date: "1/22/2024", name: "James Anderson", status: "Open" },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse"></div>
      </div>

      <header className="sticky top-0 z-50 backdrop-blur-lg bg-gradient-to-r from-yellow-500/90 via-green-500/90 to-yellow-500/90 p-4 shadow-lg">
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center shadow-lg">
              <span className="text-2xl font-bold text-yellow-400">CS</span>
            </div>
            <div className="text-2xl font-bold text-black">Ticket System</div>
          </div>
          <ul className="flex space-x-6">
            {['Home', 'FAQ', 'Changelog', 'Blog', 'Download', 'Contact'].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-black transition-colors duration-300 text-gray-800 font-medium">{item}</a>
              </li>
            ))}
            <li>
              <button className="bg-black text-white px-5 py-2.5 rounded-lg hover:bg-gray-800 transition-all duration-300 flex items-center space-x-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                <span className="text-lg">+</span>
                <span>New Ticket</span>
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <main className="p-6 max-w-7xl mx-auto relative z-10">
        <section className="ticket-dashboard">
          <div className="status-board flex justify-between mb-12 gap-8">
            <div className="status flex-1 text-center p-10 rounded-3xl bg-gradient-to-br from-yellow-500/20 to-green-500/20 backdrop-blur-lg border border-yellow-500/30 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-yellow-500/20">
              <div className="text-xl font-semibold text-yellow-400 mb-3">In-Progress</div>
              <div className="text-7xl font-bold mt-3 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-green-400">
                {tickets.filter(t => t.status === "In-Progress").length}
              </div>
              <div className="mt-5 text-gray-400">Active tickets</div>
            </div>
            <div className="status flex-1 text-center p-10 rounded-3xl bg-gradient-to-br from-green-500/20 to-yellow-500/20 backdrop-blur-lg border border-green-500/30 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-green-500/20">
              <div className="text-xl font-semibold text-green-400 mb-3">Resolved</div>
              <div className="text-7xl font-bold mt-3 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-400">
                {tickets.filter(t => t.status === "Resolved").length}
              </div>
              <div className="mt-5 text-gray-400">Completed tasks</div>
            </div>
          </div>

          <div className="ticket-columns flex space-x-8">
            <div className="column w-1/2">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-green-400">
                  Customer Tickets
                </h2>
                <div className="text-sm px-4 py-2 rounded-full bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 shadow-md">
                  {tickets.length} tickets
                </div>
              </div>
              
              <div className="space-y-6">
                {tickets.map(ticket => (
                  <div 
                    key={ticket.id} 
                    className="ticket bg-gray-800/50 backdrop-blur-lg p-6 rounded-3xl border border-gray-700 hover:border-yellow-500/50 transition-all duration-500 transform hover:-translate-y-2 shadow-2xl hover:shadow-yellow-500/10"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="font-bold text-xl text-white">{ticket.title}</div>
                      <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold ${
                        ticket.status === "Open" ? "bg-gradient-to-r from-yellow-500/30 to-green-500/30 text-yellow-400 border border-yellow-500/30 shadow-md" : 
                        ticket.status === "In-Progress" ? "bg-gradient-to-r from-yellow-500/30 to-green-500/30 text-green-400 border border-green-500/30 shadow-md" : 
                        "bg-gradient-to-r from-green-500/30 to-yellow-500/30 text-green-400 border border-green-500/30 shadow-md"
                      }`}>
                        {ticket.status}
                      </span>
                    </div>
                    <div className="text-gray-400 mb-4">{ticket.description}</div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-3">
                        <span className="text-yellow-400 font-bold text-lg">#{ticket.id}</span>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          ticket.priority === "HIGH PRIORITY" ? "bg-red-500/20 text-red-400 border border-red-500/30" : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                        }`}>
                          {ticket.priority}
                        </span>
                      </div>
                      <div className="text-gray-300 flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                        <span>{ticket.name}</span>
                        <span>•</span>
                        <span>{ticket.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="column w-1/2">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-400">
                  Task Status
                </h2>
                <div className="text-sm px-4 py-2 rounded-full bg-green-500/20 text-green-400 border border-green-500/30 shadow-md">
                  Active
                </div>
              </div>
              
              <div className="task bg-gray-800/50 backdrop-blur-lg p-8 rounded-3xl border border-gray-700 mb-8 transition-all duration-500 hover:border-green-500/50 hover:shadow-green-500/10 shadow-2xl">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-green-500/20 to-yellow-500/20 flex items-center justify-center mr-4 shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xl text-gray-300">Add New Task</div>
                    <div className="text-sm text-gray-500 mt-1">Select a ticket to add to Task Status</div>
                  </div>
                </div>
                <div className="text-sm text-gray-500 ml-18 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                  </svg>
                  Drag and drop tickets here to track progress
                </div>
              </div>
              
              <div className="task bg-gradient-to-br from-green-800/30 to-yellow-800/30 backdrop-blur-lg p-8 rounded-3xl border border-green-500/30 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="font-semibold text-xl text-white flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-500/30 to-yellow-500/30 flex items-center justify-center mr-4 shadow-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    Resolved Tasks
                  </div>
                  <div className="text-sm px-4 py-2 rounded-full bg-green-500/20 text-green-400 border border-green-500/30 shadow-md">
                    {tickets.filter(t => t.status === "Resolved").length}
                  </div>
                </div>
                <div className="text-gray-200 mt-3">No resolved tasks yet.</div>
                <div className="mt-5 text-sm text-gray-500 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Completed tasks will appear here
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-lg p-10 text-center border-t border-gray-800 relative z-10">
        <div className="footer-content grid grid-cols-1 md:grid-cols-5 gap-10 max-w-7xl mx-auto mb-10">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-green-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-2xl font-bold text-black">CS</span>
              </div>
              <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-green-400">
                Ticket System
              </div>
            </div>
            <p className="text-gray-500 text-sm mt-3 text-center md:text-left max-w-xs">Streamlining customer support with innovative solutions since 2023</p>
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
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-green-400 font-semibold mb-4 text-lg">
                {section.title}
              </p>
              <div className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <p 
                    key={itemIndex} 
                    className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer text-sm flex items-center justify-center md:justify-start"
                  >
                    {item.startsWith('🕒') || item.startsWith('📸') || item.startsWith('🐦') || item.startsWith('✉') ? (
                      <>
                        <span className="mr-2">{item.substring(0, 2)}</span>
                        <span>{item.substring(3)}</span>
                      </>
                    ) : item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-800 pt-8 max-w-7xl mx-auto">
          <p className="text-gray-500 text-sm">&copy; 2025 CS - Ticket System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;