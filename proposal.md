# P R O P O S A L
# A N D  S C O P E  O F  W O R K
### F O R : B O L I W A L A  W E B  A P P L I C A T I O N
**P R E P A R E D  B Y :  A K S H A Y  G A I K W A D**  
**D A T E :  J U L Y  1 6 ,  2 0 2 6**

---

## 1. DETAILED SCOPE OF WORK
This project focuses on the development of the Boliwala platform. The goal is to build a robust, high-performance web application tailored for real estate bank auctions, complete with modern UI, secure authentication, a custom admin dashboard, and seamless payment integration.

### PART 1: UI/UX, FRONTEND DEVELOPMENT & PUBLIC PAGES
This phase focuses on building the visual architecture and ensuring a premium user experience.
*   **Modern Interface:** Implementation of a fast, responsive frontend using Next.js, adhering to the brand's premium, amber-accented design language.
*   **Core Public Pages:**
    *   **Homepage:** The main entry point featuring highlighted properties and calls to action.
    *   **Property Search / Grid View:** Dynamic property grids with advanced search filtering based on location, budget, and auction dates.
    *   **Listing Details Page:** Detailed pages for individual properties displaying images, specifications, and secure bank notice downloads.
*   **Channel Partner Integration:**
    *   **Landing Page:** Dedicated page to attract and explain the benefits to local real estate agents.
    *   **Onboarding Flow:** Registration and setup process for new channel partners.
*   **Standard & Informational Pages:** Implementation of essential pages including About Us, Contact Us, Services, Privacy Policy, Terms & Conditions, and Custom Error Pages (404/500).
*   **SEO & Content Strategy:** Dynamic meta tags, sitemap generation, and optimized structure for property listings to drive organic traffic.
*   **Interactive Elements:** Incorporating smooth animations and highlighted typography to create a dynamic, trustworthy feel.
*   **Mobile Application:** A free mobile app version of the website generated using the webintoapp platform.

### PART 2: BACKEND, AUTH SETUP & USER DASHBOARD
This phase focuses on data architecture, security, and user management.
*   **Database Schema:** Setting up robust relational databases in Supabase to handle properties, users, partners, and transaction history.
*   **Authentication Flows:** Integrating secure Google Sign-In and Email/Password flows to reduce onboarding friction.
*   **OTP Verification:** Implementing mandatory phone number verification via MSG91 to ensure authentic users and high-quality leads.
*   **User Profile / Buyer Dashboard:** A dedicated space for standard users to manage saved/bookmarked auctions, view payment history, and update notification preferences.
*   **Secure Storage:** Setting up Supabase Storage buckets for securely uploading property documents (e.g., bank notices, images).
*   **Data Privacy & Compliance:** Mechanisms to collect user consent for GDPR/local compliance regarding SMS and Email communications.

### PART 3: ADMIN DASHBOARD
This phase provides the internal tools required to run the platform efficiently.
*   **Listing Management:** A secure portal for admins (with role-based access control) to add, edit, and verify bank auction listings.
*   **Partner Management:** Approving and tracking channel partners, and managing their referral metrics.
*   **Lead Tracking:** Viewing user inquiries, consultation requests, and platform analytics in a centralized hub.

### PART 4: PAYMENTS, APIs & COMMUNICATIONS
This phase focuses on monetization and automated communications.
*   **Payment Gateway:** Integrating Razorpay to handle service fees, consultation charges, or premium tier subscriptions seamlessly and securely.
*   **Premium Access Logic:** Implementation of paywalls or gating logic for specific property details or document downloads.
*   **Transactional Emails:** Integrating Resend API to automatically dispatch welcome emails, auction alerts, and payment receipts.
*   **SMS Alerts:** Triggering automated SMS notifications for critical user updates using MSG91.
*   **Call-to-Action (CTA) Mechanics:** Clear workflows for users to download notices, book consultations, or contact support directly from listings.

### PART 5: QA & DEPLOYMENT
This final phase ensures the platform is stable, secure, and ready for public launch.
*   **Testing:** End-to-end testing of user flows, authentication, and payments to iron out any bugs.
*   **Security & CDN:** Configuring Cloudflare to protect the site from malicious traffic, manage DNS, and ensure fast load times globally.
*   **Production Deployment:** Publishing the Next.js application on Netlify with CI/CD (Continuous Integration/Continuous Deployment) via GitHub.

---

## 2. PROPOSED TECHNOLOGY STACK & INTEGRATIONS
To ensure the application remains highly performant, cost-effective, and secure, we propose the following optimal tech stack:

*   **Frontend Framework:** **Next.js & React** for SEO optimization and fast rendering.
*   **Backend & Database:** **Supabase** (PostgreSQL) for scalable, secure real-time data and authentication.
*   **Deployment:** **Netlify** for reliable frontend hosting.
*   **Security & Performance:** **Cloudflare** for DNS management, caching, and WAF (Web Application Firewall).
*   **Payments:** **Razorpay** for handling standard Indian payment methods (UPI, Cards, Netbanking).
*   **Communications:** **Resend** for transactional emails and **MSG91** for SMS OTPs and alerts.
*   **Authentication API:** **Google OAuth** integrated via Supabase Auth for seamless social login.

---

## 3. TIME FRAME
The total project duration is estimated at **4 to 6 Weeks**.

| Phase | Description | Duration |
| :--- | :--- | :--- |
| **Complete Project** | Full implementation of Parts 1 through 5 | 4-6 Weeks |

---

## 4. QUOTATION

| Services | Total Cost |
| :--- | :--- |
| **1. UI/UX & Frontend Development** | ₹45,000 |
| **2. Backend & Auth Setup** | ₹45,000 |
| **3. Admin Dashboard** | ₹35,000 |
| **4. Payments & APIs** | ₹15,000 |
| **5. QA & Deployment** | ₹10,000 |
| **TOTAL** | **₹1,50,000** |

---

## 5. PAYMENT TERMS & DELIVERABLES

### Payment Schedule
*   **50% Advance (₹75,000):** Required to officially initiate development.
*   **50% On Completion (₹75,000):** Due upon the final sign-off and deployment of the platform.

### Deliverables
*   **Continuous Code Delivery:** Source code will be actively committed and pushed to the project's GitHub repository for complete transparency.
*   **Live Deployments:** Interim updates will be deployed to a Netlify staging URL for client review as required.
*   **Mobile App:** A mobile application version of the website, converted via webintoapp (provided at no additional cost).

---

## 6. TERMS & CONDITIONS
*   **Client Responsibilities:** The 4-6 week timeline is strictly contingent upon the timely delivery of required assets, third-party API credentials (e.g., Razorpay, MSG91), and prompt feedback from the client.
*   **Project Acceptance & Support:** Upon completion, a formal delivery notice will be sent. The client will have a **7-day review period** to provide feedback or request revisions within the defined scope. If no feedback is received within this 7-day window, the project will be automatically considered accepted, and the final payment will become due. Following acceptance, a **14-day free technical support and bug fixing window** will commence.
*   **Scope Limits (Scope Creep):** Any additional features, revisions, or changes requested that fall outside the explicitly defined Scope of Work above will be considered extra work. Such requests will be quoted and billed separately.
*   **Third-Party Fees:** Third-party service charges (e.g., Domain registration, OTP SMS gateway costs, Razorpay transaction fees, or Supabase usage tiers) are not included in this quote and will be borne directly by the client.
*   **Post-Launch Maintenance:** Ongoing support, server maintenance, and future API updates after the free support window are not included and can be availed via a separate monthly Annual Maintenance Contract (AMC) (Recommended at ₹10,000/month).
