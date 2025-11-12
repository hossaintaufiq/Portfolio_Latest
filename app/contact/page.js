// app/contact/page.js

// 1. Export metadata from this Server Component
export const metadata = {
  title: "Contact | Let's Work Together",
  description:
    "Let’s connect to discuss web development, app creation, AI/ML projects, or research collaborations.",
};

// 2. Import the Client Component
import ContactClientPage from './ContactClientPage';

// 3. Export the Server Component function
export default function ContactPage() {
  // This Server Component simply renders the Client Component
  return <ContactClientPage />;
}