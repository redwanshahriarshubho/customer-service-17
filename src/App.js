import React, { useState } from 'react';

function App() {
  const [tickets] = useState([
    { id: 1001, title: "Login Issues - Can't Access Account", description: "Customer is unable to log in to their account. They've tried resetting their password multiple times but still...", priority: "HIGH PRIORITY", date: "1/15/2024", name: "John Smith", status: "Open" },
    { id: 1003, title: "Unable to Download Invoice", description: "Customer cannot download their January invoice from the billing section. The download button is...", priority: "MEDIUM PRIORITY", date: "1/17/2024", name: "Michael Brown", status: "In-Progress" },
    { id: 1005, title: "App Crash on Launch", description: "Customer reports that the mobile app crashes immediately upon opening on Android 13...", priority: "HIGH PRIORITY", date: "1/19/2024", name: "David Wilson", status: "Open" },
    { id: 1007, title: "Two-Factor Authentication Issue", description: "Customer is not receiving 2FA codes on their registered phone number...", priority: "HIGH PRIORITY", date: "1/22/2024", name: "James Anderson", status: "Open" },
  ]);

  return (
    <div className="bg-black text-white min-h-screen">
      <header className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-green-500 p-4">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold text-black">CS - Ticket System</div>
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:text-black transition-colors text-gray-800">Home</a></li>
            <li><a href="#" className="hover:text-black transition-colors text-gray-800">FAQ</a></li>
            <li><a href="#" className="hover:text-black transition-colors text-gray-800">Changelog</a></li>
            <li><a href="#" className="hover:text-black transition-colors text-gray-800">Blog</a></li>
            <li><a href="#" className="hover:text-black transition-colors text-gray-800">Download</a></li>
            <li><a href="#" className="hover:text-black transition-colors text-gray-800">Contact</a></li>
            <li><button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors">+ New Ticket</button></li>
          </ul>
        </nav>
      </header>
      <main className="p-6">
        <section className="ticket-dashboard">
          <div className="status-board flex justify-between mb-6 gap-4">
            <div className="status flex-1 text-center p-6 rounded-lg bg-gradient-to-r from-yellow-400 to-green-500 text-black shadow-lg">
              <div className="text-lg font-semibold">In-Progress</div>
              <div className="text-5xl font-bold mt-2">{tickets.filter(t => t.status === "In-Progress").length}</div>
            </div>
            <div className="status flex-1 text-center p-6 rounded-lg bg-gradient-to-r from-green-400 to-yellow-500 text-black shadow-lg">
              <div className="text-lg font-semibold">Resolved</div>
              <div className="text-5xl font-bold mt-2">{tickets.filter(t => t.status === "Resolved").length}</div>
            </div>
          </div>
          <div className="ticket-columns flex space-x-6">
            <div className="column w-1/2">
              <h2 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-green-500">Customer Tickets</h2>
              {tickets.map(ticket => (
                <div key={ticket.id} className="ticket bg-gray-900 p-4 mb-4 rounded-lg border border-gray-700 hover:border-yellow-500 transition-colors">
                  <div className="font-bold text-white">{ticket.title}</div>
                  <div className="text-sm text-gray-400 mt-2">{ticket.description}</div>
                  <div className="text-sm mt-2 text-gray-300">#{ticket.id} {ticket.priority}</div>
                  <div className="text-sm text-gray-300">{ticket.name} - {ticket.date}</div>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs mt-2 font-medium ${
                    ticket.status === "Open" ? "bg-gradient-to-r from-yellow-400 to-green-500 text-black" : 
                    ticket.status === "In-Progress" ? "bg-gradient-to-r from-yellow-500 to-green-400 text-black" : 
                    "bg-gradient-to-r from-green-500 to-yellow-500 text-black"
                  }`}>
                    {ticket.status}
                  </span>
                </div>
              ))}
            </div>
            <div className="column w-1/2">
              <h2 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-500">Task Status</h2>
              <div className="task bg-gray-900 p-4 mb-4 rounded-lg border border-gray-700 hover:border-green-500 transition-colors">
                <div className="text-gray-300">Select a ticket to add to Task Status</div>
              </div>
              <div className="task bg-gradient-to-r from-green-800 to-yellow-800 p-4 rounded-lg border border-gray-700">
                <div className="font-semibold text-white">Resolved Task</div>
                <div className="text-gray-200 mt-1">No resolved tasks yet.</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gradient-to-r from-black via-gray-900 to-black p-6 text-center border-t border-gray-800">
        <div className="footer-content flex justify-around mb-6">
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-green-500 font-semibold">
            CS - Ticket System
          </div>
          <div>
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-green-500 font-semibold mb-2">Company</p>
            <p className="text-gray-400 hover:text-white transition-colors cursor-pointer">About Us</p>
            <p className="text-gray-400 hover:text-white transition-colors cursor-pointer">Our Mission</p>
            <p className="text-gray-400 hover:text-white transition-colors cursor-pointer">Contact Us</p>
          </div>
          <div>
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-green-500 font-semibold mb-2">Services</p>
            <p className="text-gray-400 hover:text-white transition-colors cursor-pointer">Products & Services</p>
            <p className="text-gray-400 hover:text-white transition-colors cursor-pointer">Customer Stories</p>
            <p className="text-gray-400 hover:text-white transition-colors cursor-pointer">Download Apps</p>
          </div>
          <div>
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-green-500 font-semibold mb-2">Information</p>
            <p className="text-gray-400 hover:text-white transition-colors cursor-pointer">Privacy Policy</p>
            <p className="text-gray-400 hover:text-white transition-colors cursor-pointer">Terms & Conditions</p>
            <p className="text-gray-400 hover:text-white transition-colors cursor-pointer">Join Us</p>
          </div>
          <div>
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-green-500 font-semibold mb-2">Social Links</p>
            <p className="text-gray-400 hover:text-white transition-colors cursor-pointer">🕒 @CS-Ticket-System</p>
            <p className="text-gray-400 hover:text-white transition-colors cursor-pointer">📸 @CS-Ticket-System</p>
            <p className="text-gray-400 hover:text-white transition-colors cursor-pointer">🐦 @CS-Ticket-System</p>
            <p className="text-gray-400 hover:text-white transition-colors cursor-pointer">✉ support@cst.com</p>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-4">
          <p className="text-gray-400">&copy; 2025 CS - Ticket System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;