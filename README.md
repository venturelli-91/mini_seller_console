![Mini Seller Console](https://img.shields.io/badge/Next.js-15.5.3-black) ![React](https://img.shields.io/badge/React-19.1.0-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.0-blue)

## 🚀 Features

### Lead Management

- **Lead List**: View all leads in a paginated, searchable table
- **Advanced Filtering**: Filter leads by name/company and status
- **Lead Details**: Click any lead to view detailed information in a slide-over panel
- **Add New Leads**: Modal form to create new leads with validation
- **Lead Conversion**: Convert qualified leads to opportunities with one click
- **CRUD Operations**: Full create, read, update, and delete functionality

### Opportunity Management

- **Opportunity Table**: Dedicated view for managing sales opportunities
- **Stage Tracking**: Monitor opportunity progress through different stages
- **Account Management**: Associate opportunities with account names

### User Experience

- **Responsive Design**: Optimized for desktop and mobile devices
- **Toast Notifications**: Real-time feedback for all user actions
- **Local Persistence**: Data persists between sessions using browser storage
- **Intuitive UI**: Clean, modern interface with consistent styling

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Frontend**: [React 19](https://reactjs.org/) with TypeScript
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/)
- **Development**: ESLint, TypeScript

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/mini-seller-console.git
   cd mini-seller-console
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
mini_seller/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Main dashboard page
│   └── src/
│       ├── components/
│       │   ├── leadList/    # Lead list and related components
│       │   ├── leadDetailPanel/  # Lead detail slide-over panel
│       │   ├── opportunityTable/ # Opportunity management
│       │   └── ui/          # Reusable UI components
│       ├── data/            # Static data files
│       ├── hooks/           # Custom React hooks
│       ├── services/        # Business logic services
│       ├── store/           # Zustand state stores
│       └── types/           # TypeScript type definitions
├── public/                  # Static assets
└── package.json
```

## 🎯 Usage

### Managing Leads

1. **View Leads**: Browse the lead list with pagination
2. **Search & Filter**: Use the search bar and status dropdown to filter leads
3. **View Details**: Click on any lead row to open the detail panel
4. **Edit Lead**: Modify lead information in the detail panel
5. **Convert Lead**: Use the "Convert" button to transform a lead into an opportunity
6. **Add Lead**: Click "Add Lead" to open the creation modal

### Managing Opportunities

1. **View Opportunities**: Switch to the opportunities tab
2. **Track Progress**: Monitor opportunity stages and amounts
3. **Remove Opportunities**: Delete opportunities when deals are closed

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📱 Responsive Design

The application is fully responsive and works seamlessly across:

- Desktop computers (1024px+)
- Tablets (768px - 1023px)
- Mobile devices (320px - 767px)

## 💾 Data Persistence

All data is stored locally in the browser using:

- LocalStorage for leads and opportunities
- Zustand for state management
- Automatic data synchronization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- State management by [Zustand](https://zustand-demo.pmnd.rs/)
- Icons from various sources

---

**Mini Seller Console** - Streamlining sales processes with modern web technology.
