import React, { useState } from 'react';

function App() {
  const [tickets] = useState([
    { id: 1001, title: "Login Issues - Can't Access Account", description: "Customer is unable to log in to their account. They've tried resetting their password multiple times but still...", priority: "HIGH PRIORITY", date: "1/15/2024", name: "John Smith", status: "Open" },
    { id: 1003, title: "Unable to Download Invoice", description: "Customer cannot download their January invoice from the billing section. The download button is...", priority: "MEDIUM PRIORITY", date: "1/17/2024", name: "Michael Brown", status: "In-Progress" },
    { id: 1005, title: "App Crash on Launch", description: "Customer reports that the mobile app crashes immediately upon opening on Android 13...", priority: "HIGH PRIORITY", date: "1/19/2024", name: "David Wilson", status: "Open" },
    { id: 1007, title: "Two-Factor Authentication Issue", description: "Customer is not receiving 2FA codes on their registered phone number...", priority: "HIGH PRIORITY", date: "1/22/2024", name: "James Anderson", status: "Open" },
  ]);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <header className="bg-gray-800 p-4">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold">CS - Ticket System</div>
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:text-purple-400">Home</a></li>
            <li><a href="#" className="hover:text-purple-400">FAQ</a></li>
            <li><a href="#" className="hover:text-purple-400">Changelog</a></li>
            <li><a href="#" className="hover:text-purple-400">Blog</a></li>
            <li><a href="#" className="hover:text-purple-400">Download</a></li>
            <li><a href="#" className="hover:text-purple-400">Contact</a></li>
            <li><button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">+ New Ticket</button></li>
          </ul>
        </nav>
      </header>
      <main className="p-6">
        <section className="ticket-dashboard">
          <div className="status-board flex justify-between mb-6">
            <div className="status w-1/2 text-center p-4 rounded-lg" style={{ background: 'linear-gradient(to right, yellow, green)' }}>
              In-Progress<br /><span className="text-4xl">{tickets.filter(t => t.status === "In-Progress").length}</span>
            </div>
            <div className="status w-1/2 text-center p-4 rounded-lg" style={{ background: 'linear-gradient(to right, yellow, green)' }}>
              Resolved<br /><span className="text-4xl">{tickets.filter(t => t.status === "Resolved").length}</span>
            </div>
          </div>
          <div className="ticket-columns flex space-x-6">
            <div className="column w-1/2">
              <h2 className="text-xl font-semibold mb-4">Customer Tickets</h2>
              {tickets.map(ticket => (
                <div key={ticket.id} className="ticket bg-gray-800 p-4 mb-4 rounded-lg">
                  <div className="font-bold">{ticket.title}</div>
                  <div className="text-sm text-gray-400">{ticket.description}</div>
                  <div className="text-sm">#{ticket.id} {ticket.priority}</div>
                  <div className="text-sm">{ticket.name} - {ticket.date}</div>
                  <span className={`inline-block px-2 py-1 rounded-full text-xs ${ticket.status === "Open" ? "bg-green-500" : ticket.status === "In-Progress" ? "bg-yellow-500" : "bg-red-500"}`}>{ticket.status}</span>
                </div>
              ))}
            </div>
            <div className="column w-1/2">
              <h2 className="text-xl font-semibold mb-4">Task Status</h2>
              <div className="task bg-gray-800 p-4 mb-4 rounded-lg">Select a ticket to add to Task Status</div>
              <div className="task bg-green-900 p-4 rounded-lg">Resolved Task<br />No resolved tasks yet.</div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-black p-4 text-center">
        <div className="footer-content flex justify-around mb-4">
          <div>CS - Ticket System</div>
          <div>
            <p>Company</p>
            <p>About Us</p>
            <p>Our Mission</p>
            <p>Contact Us</p>
          </div>
          <div>
            <p>Services</p>
            <p>Products & Services</p>
            <p>Customer Stories</p>
            <p>Download Apps</p>
          </div>
          <div>
            <p>Information</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
            <p>Join Us</p>
          </div>
          <div>
            <p>Social Links</p>
            <p>🕒 @CS-Ticket-System</p>
            <p>📸 @CS-Ticket-System</p>
            <p>🐦 @CS-Ticket-System</p>
            <p>✉ support@cst.com</p>
          </div>
        </div>
        <p>&copy; 2025 CS - Ticket System. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;