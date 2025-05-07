# SoftSell - Software License Resale Platform

A responsive, modern marketing website for a fictional software license resale platform called SoftSell. The platform helps businesses sell their unused software licenses quickly and at competitive market rates.

## 🚀 Features

### Core Features
- **Responsive Design**: Fully responsive layout optimized for mobile, tablet, and desktop devices
- **Modern UI**: Clean, professional design with a teal/emerald gradient theme
- **Dark/Light Mode**: Theme toggle with system preference detection and theme-aware components
- **Interactive Elements**: Smooth animations and transitions using Framer Motion
- **Accessibility**: Semantic HTML, appropriate contrast ratios, and screen reader support

### Interactive Components
- **Multi-step Sell Licenses Dialog**: Interactive 3-step process (Upload → Valuation → Payment)
- **AI-powered Chat Widget**: Gemini API integration with fallback to predefined responses
- **Validated Contact Form**: Client-side validation using Zod schema validation
- **Custom SVG Dashboard Visualization**: Theme-aware dashboard visualization in the hero section
- **Animated Section Transitions**: Scroll-triggered animations for enhanced user experience

### Main Sections
1. **Navigation**: Responsive navbar with theme toggle and "Sell My Licenses" button
2. **Hero**: Engaging headline with custom dashboard visualization and CTA buttons
3. **How It Works**: Three-step process with icons and descriptions
4. **Why Choose Us**: Key benefits with icons and descriptions
5. **Testimonials**: Customer reviews with attribution
6. **Contact Form**: Validated form with comprehensive fields
7. **Footer**: Company information, quick links, and legal links
8. **Floating Chat Widget**: AI-powered assistant for user questions

## 🎨 Design System

- **Color Palette**: Teal and emerald gradient theme that conveys trust, professionalism, and innovation
- **Typography**: Inter font with carefully crafted hierarchy for readability and emphasis
- **Component Library**: Extended shadcn/ui components with custom styling
- **Animation System**: Consistent animation patterns using Framer Motion
- **Icon System**: Lucide React icons with consistent sizing and styling
- **Responsive Patterns**: Mobile-first approach with tailored experiences for each device size

## 🛠️ Technical Implementation

### Frontend Framework
- **Next.js 15**: React framework with App Router for efficient page rendering
- **React 19**: Latest React features for component development
- **TypeScript**: Type-safe code for better developer experience and fewer bugs

### Styling and UI
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **shadcn/ui**: Accessible and customizable UI components
- **Framer Motion**: Animation library for smooth transitions and interactions

### Form Handling and Validation
- **React Hook Form**: Efficient form state management
- **Zod**: Schema validation for form inputs

### AI Integration
- **Gemini API**: Integration with Google's Gemini API for the chat widget
- **Fallback Mechanism**: Predefined responses for common questions when API is unavailable

## 🔧 Setup and Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/H-S-RATHI/softsell-website.git
   cd softsell-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```
   NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Gemini API Integration

To enable the AI chat widget with Gemini:

1. Get a Gemini API key from [Google AI Studio](https://ai.google.dev/)
2. Add your API key to the `.env.local` file as shown above
3. Restart the development server if it's already running

If no API key is provided, the chat widget will fall back to predefined responses for common questions.

## 🔍 Key Components

- **sell-licenses-dialog.tsx**: Multi-step dialog for the license selling process
- **chat-widget.tsx**: AI-powered floating chat assistant
- **hero.tsx**: Main landing section with custom dashboard visualization
- **contact-form.tsx**: Validated form with comprehensive fields
- **gemini-api.ts**: Integration with Google's Gemini API

## 🔮 Future Improvements

- **Backend Integration**: Add actual backend API for the contact form and license processing
- **User Authentication**: Implement user accounts and dashboard
- **Marketplace Features**: Add browsing and purchasing of available licenses
- **Analytics Dashboard**: Provide sellers with insights about their license sales
- **Payment Processing**: Integrate with payment gateways for actual transactions
- **Expanded Content**: Add blog, pricing, and about pages
- **Advanced Analytics**: Implement user behavior tracking and conversion optimization
- **Internationalization**: Add support for multiple languages

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- [shadcn/ui](https://ui.shadcn.com/) for the excellent component library
- [Lucide Icons](https://lucide.dev/) for the beautiful icon set
- [Framer Motion](https://www.framer.com/motion/) for the animation capabilities
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Next.js](https://nextjs.org/) for the React framework
