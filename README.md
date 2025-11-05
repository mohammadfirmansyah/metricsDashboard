# 📊 Metrics Dashboard

[![GitHub](https://img.shields.io/badge/GitHub-metricsDashboard-blue?logo=github)](https://github.com/mohammadfirmansyah/metricsDashboard)
[![React Native](https://img.shields.io/badge/React%20Native-0.81.5-blue?logo=react)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-~54.0.22-000020?logo=expo)](https://expo.dev/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A modern, interactive metrics dashboard built with React Native and Expo. This application features a bottom tab navigation system that displays four different types of charts - Line, Bar, Pie, and Progress charts - each in its own dedicated screen for optimal viewing experience.

## 📚 Documentation

- **[Contributing Guide](CONTRIBUTING.md)** - Learn how to contribute to this project
- **[Changelog](CHANGELOG.md)** - Version history and release notes

## ✨ Key Features

- **Bottom Tab Navigation**: Intuitive navigation with 4 dedicated tabs for each chart type
- **Line Chart**: Daily app usage metrics with smooth curved lines and gradient fill
- **Bar Chart**: Weekly usage statistics with color-coded bars
- **Pie Chart**: Category breakdown with random color generation and legend
- **Progress Chart**: Feature completion tracking with circular progress indicators
- **Real-time Data Fetching**: Dynamic data loading from external APIs using axios
- **Responsive Design**: Adapts to different screen sizes with dynamic width calculations
- **Modern UI**: Clean interface with professional styling and color scheme

## 📱 Screenshots

```
┌─────────────────────────────────────┐
│  📊 Metrics Dashboard               │
├─────────────────────────────────────┤
│                                     │
│   Daily App Usage                   │
│   ┌───────────────────────────┐   │
│   │     /\    /\              │   │
│   │    /  \  /  \    /\       │   │
│   │   /    \/    \  /  \      │   │
│   │  /            \/    \     │   │
│   └───────────────────────────┘   │
│   Mon  Tue  Wed  Thu  Fri         │
│                                     │
├─────────────────────────────────────┤
│ [Daily] [Weekly] [Category] [Features] │
└─────────────────────────────────────┘
```

## 🛠️ Technologies Used

- **React Native** - v0.81.5 - Cross-platform mobile framework
- **Expo SDK** - v54.0.22 - Development platform
- **React Navigation** - v7.x - Bottom tab navigation
- **react-native-chart-kit** - Bar, Pie, and Progress charts
- **react-native-gifted-charts** - Advanced line chart with animations
- **axios** - v1.13.2 - HTTP client for API requests
- **React Native SVG** - v15.14.0 - SVG rendering support

## 📂 Project Structure

```
metricsDashboard/
├── App.js              # Main application with tab navigation and chart screens
├── index.js            # Entry point
├── package.json        # Dependencies and scripts
├── app.json            # Expo configuration
├── LICENSE             # MIT License
├── README.md           # Project documentation
├── CONTRIBUTING.md     # Contribution guidelines
├── CHANGELOG.md        # Version history
└── assets/             # Images and static resources
```

## 🚀 Setup & Installation

Before you begin, ensure you have the following installed:
- **Node.js** >= 18.0
- **npm** or **yarn**
- **Expo CLI** (optional but recommended)

Follow these steps to get your development environment running:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mohammadfirmansyah/metricsDashboard.git
   cd metricsDashboard
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

## 💻 Usage / How to Run

1. **Start the development server:**
   ```bash
   npm start
   ```

2. **Run on specific platform:**
   ```bash
   # Run on web browser
   npm run web

   # Run on Android device/emulator
   npm run android

   # Run on iOS simulator (macOS only)
   npm run ios
   ```

3. **Navigate between tabs:**
   - Tap the bottom tabs to switch between different chart views
   - Each tab loads its data independently when accessed

## 📝 Chart Implementation Details

### 1. Daily Usage Screen (Line Chart)
Displays daily app usage metrics with a smooth, animated line chart featuring gradient fill and customizable data points.

```javascript
// Fetch daily usage data from API
const fetchDailyUsageMetrics = async () => {
  try {
    const response = await axios.get('API_ENDPOINT');
    setDailyUsageData(response.data);
  } catch (error) {
    console.log('Error fetching data:', error);
  }
};
```

**Key Features:**
- Curved line interpolation for smooth visualization
- Gradient fill from light blue to white
- Customizable data point colors and radius
- X-axis labels showing days of the week

### 2. Weekly Usage Screen (Bar Chart)
Visualizes weekly usage patterns with a vertical bar chart, displaying values on top of each bar for easy reading.

**Configuration:**
- Green gradient background (#8ccf9e)
- Values displayed on top of bars
- Zero-based scale for accurate comparison
- Responsive width based on screen size

### 3. Category Screen (Pie Chart)
Shows app usage distribution across categories with dynamically generated colors for each segment.

**Unique Implementation:**
```javascript
// Generate random hex colors for each category
let getRandomHexColor = () => {
  const randomNum = Math.floor(Math.random() * 16777215);
  return `#${randomNum.toString(16).padStart(6, "0")}`;
};
```

### 4. Features Screen (Progress Chart)
Tracks feature completion progress with circular progress indicators showing percentage completion.

**Display Format:**
- Multiple circular progress rings
- Label-based tracking
- Customizable stroke width and colors
- Absolute values displayed

## 📖 Learning Outcomes

This project demonstrates modern React Native development practices:

- ✅ **Navigation Architecture**: Implementing bottom tab navigation with React Navigation
- ✅ **State Management**: Managing independent state for each screen component
- ✅ **Data Fetching**: Async/await patterns with axios for API calls
- ✅ **Chart Libraries**: Integration of multiple charting libraries (chart-kit and gifted-charts)
- ✅ **Responsive Design**: Dynamic sizing with Dimensions API
- ✅ **Component Composition**: Separating screens into reusable components
- ✅ **Error Handling**: Proper try-catch blocks for network requests
- ✅ **Performance**: Lazy loading data only when screens are accessed

## 🤝 Contributing

We welcome contributions! Please see our **[Contributing Guide](CONTRIBUTING.md)** for details on how to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'feat: add some amazing feature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License. See the **[LICENSE](LICENSE)** file for details.

## 👨‍💻 Developer

- **Mohammad Firman Syah**
- **Project Link:** [https://github.com/mohammadfirmansyah/metricsDashboard](https://github.com/mohammadfirmansyah/metricsDashboard)

---

**Note**: For production deployment, consider implementing:
- Loading states and skeletons while data is fetching
- Error boundaries for robust error handling
- Data caching to reduce API calls
- Pull-to-refresh functionality
- Offline support with local storage
- Performance optimization with memo and useMemo

Built with ❤️ using React Native & Expo
