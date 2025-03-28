# SPontify Frontend

This is the frontend built using Next.js, Auth.js, ShadCN, Tailwind CSS, and TypeScript.

##  Features
- **Next.js 14** – Fast and optimized React framework
- **Auth.js** – Secure authentication and session management
- **ShadCN** – Pre-built UI components with Radix
- **Tailwind CSS** – Utility-first CSS for easy styling
- **TypeScript** – Static typing for better development experience

## 📦 Tech Stack
- **Framework:** Next.js
- **Authentication:** Auth.js
- **UI Components:** ShadCN (Radix-based components)
- **Styling:** Tailwind CSS
- **Language:** TypeScript

## 🛠️ Setup & Installation
### Prerequisites
- Node.js (Latest LTS recommended)
- npm or yarn

### Installation
1. Install dependencies:
   ```sh
   npm install  
   ```
2. Create a `.env` file and configure environment variables:
   ```sh
   API_BASE_URL= BACKEND_URL_WITH_SLCE_API(/api)
   ```
3. Run the development server:
   ```sh
   npm run dev 
   ```

##  Authentication Setup
This project uses **Auth.js** for authentication. You can configure providers such as Google, GitHub, or custom credentials in `src/app/api/auth/[...nextauth].ts`.

##  Styling
Tailwind CSS is used for styling with utility classes. ShadCN components provide pre-styled UI elements.

##  Deployment
To deploy the application:
```sh
npm run build 
```
Then deploy on **Vercel**, **Netlify**, or your preferred hosting provider.
