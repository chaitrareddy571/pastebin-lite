🚀 Pastebin Lite
Pastebin Lite is a lightweight full-stack web application that allows users to create, store, and share text snippets through unique URLs. The project demonstrates practical use of Next.js App Router, dynamic routing, API routes, and basic persistence, with a clean and user-friendly interface.

✨ Key Highlights (Recruiter-Friendly)
End-to-end full-stack implementation using Next.js
Dynamic routing for shareable paste URLs
REST-style API routes for creating and retrieving pastes
Clipboard integration for copying content and links
Deployed and accessible via cloud hosting (Vercel)

🛠️ Tech Stack
Frontend: Next.js (App Router), React
Backend: Next.js API Routes
Persistence: In-memory data store
Deployment: Vercel

💾 Persistence Strategy
Paste data is stored using an in-memory data store during application runtime.
Each paste is assigned a unique identifier and retrieved via API routes.
This approach is suitable for learning and demos. The design allows easy extension to persistent storage solutions such as Redis or PostgreSQL for production use.

▶️ How to Run Locally
1. Clone the repository
Bash
git clone https://github.com/chaitrareddy571/pastebin-lite.git
cd pastebin-lite
2. Install dependencies
Bash
npm install
3. Start the development server
Bash
npm run dev

Open the application in your browser at
http://localhost:3000

🌐 Live Deployment
The project is deployed using Vercel.
Live Demo:  
👉 https://pastebin-lite-vercel-pgxan34r5-chaitras-projects-57328bc2.vercel.app

🔐 Security & Best Practices
No secrets, API keys, or credentials are included
No hardcoded production URLs
Environment-safe and deployment-ready structure

📌 Future Enhancements
Persistent database integration (Redis / PostgreSQL)
Paste expiration support
Authentication and private pastes
Syntax highlighting for code snippets

👩‍💻 Author
Chaitra Reddy
Aspiring Software Developer | Full-Stack Enthusiast
