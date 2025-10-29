# Quick Setup Guide - Add Theme Toggle to All Pages

## ✅ Already Done:
- ✅ Created `css/theme-system.css`
- ✅ Created `js/theme-system.js`  
- ✅ Updated `hero_landing_zone.html`

## 📋 To-Do for Remaining Pages:

### For Each Page (course_portfolio.html, testimonials.html, etc.):

#### 1. Add CSS Link in `<head>`:
```html
<link rel="stylesheet" href="../css/theme-system.css">
```

#### 2. Add Theme Toggle Button in Desktop Navigation:
Place this BEFORE your navigation links:
```html
<button id="theme-toggle" class="theme-toggle" aria-label="Toggle dark/light mode">
    <div class="theme-toggle-slider">
        <svg class="theme-icon" id="moon-icon" fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
        </svg>
        <svg class="theme-icon hidden" id="sun-icon" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"></path>
        </svg>
    </div>
</button>
```

#### 3. Add Mobile Theme Toggle:
Place this next to mobile menu button:
```html
<button id="theme-toggle-mobile" class="theme-toggle scale-90" aria-label="Toggle dark/light mode">
    <div class="theme-toggle-slider">
        <svg class="theme-icon" id="moon-icon-mobile" fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
        </svg>
        <svg class="theme-icon hidden" id="sun-icon-mobile" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"></path>
        </svg>
    </div>
</button>
```

#### 4. Add JavaScript before `</body>`:
```html
<script src="../js/theme-system.js"></script>
```

## 🎯 Example Layout:

### Desktop Header:
```
[Logo] Modern Mantras    [🌙/☀️] Home | Courses | Testimonials | [Enroll]
```

### Mobile Header:
```
[Logo] Modern Mantras              [🌙/☀️] [☰]
```

## ⚡ Quick Copy-Paste:

Copy the button HTML from: `theme-toggle-template.html`

## 🧪 Testing Checklist:

- [ ] Click toggle - theme changes?
- [ ] Reload page - theme persists?
- [ ] Check all pages - consistent theme?
- [ ] Mobile view - toggle visible?
- [ ] Smooth transitions - no flickering?
- [ ] Notification appears?
- [ ] Icons switch correctly?

## 🎨 What Changes in Light Mode:

✅ Background: Dark → White  
✅ Text: White → Dark  
✅ Cards: Gray → White  
✅ Shadows: Strong → Subtle  
✅ Borders: Dark → Light  

## 📝 Notes:

- Theme choice saved in localStorage
- Works across ALL pages automatically
- No page refresh needed
- Smooth 0.4s transitions
- Professional notifications
- Fully responsive

Ready to deploy! 🚀
