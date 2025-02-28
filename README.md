# Sonna - Music player

**Sonna** — is a web-based music app with search, favorites and playlist management features. The application provides a convenient interface for listening to music, as well as the ability to switch between tracks, add them to favorites and manage the playing state.

---

## 🚀 Getting started

To run the project locally on your computer, follow these steps:

### 1. Cloning a repository

Clone the repository to your local computer:

```bash
git clone https://github.com/Matvey-Vats/Sonna.git
```

### 2. Installing dependencies

Go to your project directory and install all the required dependencies:

```bash
cd Sonna
yarn
```

### 3. Project launch

After installing the dependencies, run the project:

```bash
yarn dev
```
---

## 📜 Project Description

Sonna is a music player that provides options for:

- Listening to music tracks.
- Adding tracks, artists, albums and playlists to favorites.
- Player state control (play, pause, switch).
- Saving data in local storage.
- Authorization and registration via firebase with the ability to log in with google
- Search music by keywords and filter the results.

---

## ⚙️ Main Features

- **Audio playback support**: Uses HTML5 `<audio>` element to play music tracks.
- **Favorites**: Tracks can be added to favorites and deleted.
- **Search**: Built-in keyword search.
- **Local storage**: All data (favorite tracks and whether the user is logged in) is saved in the browser's local storage.
- **Interface**: Simple and convenient user interface for comfortable use.
- **TypeScript**: The entire project is typed.

---

## 📂 Project structure

```
/Sonna
│
├── /src
│   ├── /assets
│   ├── /components
│   │   ├── Player.tsx    
│   │   ├── Search.tsx    
│   │   └── ...
│   ├── /pages
│   │   ├── Home.tsx
│   │   └── ...           
│   ├── App.tsx           
│   ├── index.tsx         
│   └── ...
├── /public
│   └── index.html       
├── package.json         
└── README.md            
```

---

## 🔧 Technologies

- **React** 
- **HTML5** 
- **TailwindCSS** 
- **LocalStorage**
- **React Router Dom**
- **TypeScript**
- **Redux Toolkit**
- **RTK Query**
- **React Hook Form**
- **Lucide Icons**
- **Swiper**
- **Firebase**
