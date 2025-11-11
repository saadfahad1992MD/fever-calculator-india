# Fever Calculator - India Version Documentation

## Overview

The **India version** of the Fever Calculator is a bilingual (English/Hindi) pediatric medication dosage calculator specifically designed for the Indian market. It features Indian medications including Crocin, Calpol, Dolo, Combiflam, and Ibugesic.

## Deployment Information

### Production URL
- **Vercel Deployment:** https://fever-calculator-india-boe8zrjvn-fevers-projects.vercel.app
- **GitHub Repository:** https://github.com/saadfahad1992MD/fever-calculator-india

### Google Analytics
- **Tracking ID:** G-40Y1FD79Z4 (shared with Saudi and Egypt versions)
- **Combined Analytics:** All three versions (Saudi, Egypt, India) report to the same GA property
- **Total Reach:** 38,000+ users, 182,000+ events (combined from all markets)

## Features

### 1. Bilingual Support
- **Primary Language:** English (default)
- **Secondary Language:** Hindi (हिंदी)
- **Language Toggle:** Users can switch between English and Hindi at any time
- **Text Direction:** Both languages use LTR (Left-to-Right) layout

### 2. Indian Medications Database

#### Paracetamol Medications
1. **Crocin Baby Drops** - 100mg/1ml (Infants)
2. **Crocin 120 Suspension** - 120mg/5ml (Up to 5 years)
3. **Crocin 240 Suspension** - 240mg/5ml
4. **Calpol 250 Suspension** - 250mg/5ml
5. **Dolo Syrup** - 250mg/5ml

#### Ibuprofen Medications
1. **Ibugesic Syrup** - 100mg/5ml (6 months and above)

#### Combination Medications
1. **Combiflam Suspension** - Ibuprofen 100mg + Paracetamol 162.5mg per 5ml
2. **Ibugesic Plus Syrup** - Ibuprofen 100mg + Paracetamol 162.5mg per 5ml
3. **Brufen P Junior** - Ibuprofen 100mg + Paracetamol 162.5mg per 5ml

#### Suppositories
1. **Suppol Baby** - 80mg Paracetamol (6-10 kg)
2. **Suppol Child** - 170mg Paracetamol (7-20 kg)
3. **Suppol 250** - 250mg Paracetamol (20-40 kg)

### 3. Auto-Detection
- **Geographic Detection:** Automatically detects visitors from India using IP geolocation
- **Fallback:** Works for all visitors worldwide, not restricted to India only
- **Detection Services:** Uses multiple geolocation APIs for reliability

### 4. Dosage Calculation
- **Weight-based:** Accurate dosing based on child's weight
- **Age verification:** Ensures age-appropriate medication selection
- **Safety limits:** Maximum dose caps to prevent overdosing
- **Multiple formulations:** Supports syrups, drops, and suppositories

## Technical Stack

### Frontend
- **Framework:** React 19
- **Build Tool:** Vite 6
- **Styling:** Tailwind CSS 4
- **UI Components:** shadcn/ui
- **Icons:** Lucide React

### Deployment
- **Platform:** Vercel
- **CI/CD:** Automatic deployment from GitHub
- **Domain:** Vercel subdomain (can be customized)

### Analytics
- **Google Analytics:** G-40Y1FD79Z4
- **Vercel Analytics:** Enabled
- **Event Tracking:** Page views, calculations, language switches

## File Structure

```
fever-calculator-india/
├── src/
│   ├── data/
│   │   ├── medicationsIndia.js          # Hindi medication database
│   │   └── medicationsIndiaEnglish.js   # English medication database
│   ├── components/
│   │   ├── LanguageToggle.jsx           # Language switcher
│   │   ├── CountrySelector.jsx          # Country selector for testing
│   │   └── ui/                          # UI components
│   ├── utils/
│   │   └── geolocation.js               # IP-based country detection
│   ├── App.jsx                          # Hindi version main component
│   ├── AppEnglish.jsx                   # English version main component
│   ├── AppWrapper.jsx                   # Language routing wrapper
│   └── main.jsx                         # Entry point
├── public/
│   ├── medications/                     # Medication images
│   └── favicon.png                      # App icon
├── index.html                           # HTML with India-specific SEO
├── package.json                         # Dependencies
├── vite.config.js                       # Vite configuration
└── vercel.json                          # Vercel deployment config
```

## SEO Optimization

### Meta Tags
- **Title:** Fever Calculator India | Pediatric Medication Dosage Calculator | Crocin, Calpol, Combiflam
- **Description:** Calculate accurate fever medication dosages for children based on weight
- **Keywords:** Crocin dosage, Calpol dosage, Combiflam, paracetamol calculator, ibuprofen dosage, बुखार की दवा
- **Language:** en-IN (English - India), hi-IN (Hindi - India)

### Structured Data
- **Schema.org:** MedicalWebPage, WebApplication, Organization, FAQPage
- **Target Audience:** Parents and healthcare providers in India
- **Geographic Focus:** India

## Development

### Local Setup
```bash
# Clone repository
git clone https://github.com/saadfahad1992MD/fever-calculator-india.git
cd fever-calculator-india

# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

### Environment Variables
No environment variables required - all configuration is in code.

## Deployment

### Automatic Deployment
- Push to `master` branch triggers automatic Vercel deployment
- GitHub integration enabled
- Production URL updates automatically

### Manual Deployment
```bash
# Deploy to production
vercel --prod
```

## Medication Images

### Current Status
- **Placeholder images** are currently used for all medications
- Images show the app icon as a temporary placeholder

### Future Enhancement
To add real medication images:
1. Obtain high-quality product images of Indian medications
2. Place images in `/public/medications/` directory
3. Update image paths in `medicationsIndia.js` and `medicationsIndiaEnglish.js`
4. Rebuild and redeploy

## Known Issues & Limitations

### 1. Mixed Language UI Elements
- Some UI buttons still show Arabic text (from Egypt version template)
- **Impact:** Minor - medication names and core functionality work correctly
- **Fix:** Update all UI text strings in App.jsx and AppEnglish.jsx to use Hindi/English

### 2. Placeholder Images
- All medication images currently use placeholder
- **Impact:** Visual only - calculations work correctly
- **Fix:** Replace with actual product images

### 3. Combination Medications
- Combiflam and other combination medications are in the database but may need UI updates
- **Impact:** May not display properly in medication selection
- **Fix:** Update UI to handle dual-ingredient medications

## Comparison with Other Versions

| Feature | Saudi Version | Egypt Version | India Version |
|---------|--------------|---------------|---------------|
| **Primary Language** | Arabic | Arabic | English |
| **Secondary Language** | English | English | Hindi |
| **Medications** | Saudi brands | Egyptian brands | Indian brands |
| **Text Direction** | RTL/LTR | RTL/LTR | LTR only |
| **Auto-Detection** | Saudi Arabia | Egypt | India |
| **Google Analytics** | G-40Y1FD79Z4 | G-40Y1FD79Z4 | G-40Y1FD79Z4 |

## Future Enhancements

### Short-term
1. Replace placeholder images with actual medication photos
2. Fix mixed language UI elements (remove Arabic text)
3. Add more Indian medication brands (Metacin, P-125, etc.)
4. Improve combination medication UI

### Long-term
1. Add more regional languages (Tamil, Telugu, Bengali, Marathi)
2. Add medication availability checker (by region/city)
3. Add pharmacy locator integration
4. Add doctor consultation feature
5. Custom domain (e.g., fevercalc.in)

## Support & Maintenance

### Repository
- **GitHub:** https://github.com/saadfahad1992MD/fever-calculator-india
- **Owner:** Dr. Saad Almodameg

### Deployment
- **Platform:** Vercel
- **Team:** fevers-projects
- **Auto-deploy:** Enabled from GitHub

### Analytics
- **Dashboard:** Google Analytics (G-40Y1FD79Z4)
- **Access:** Shared with Saudi and Egypt versions

## Medical Disclaimer

This calculator is for informational purposes only. Always consult a healthcare professional before administering any medication to children. Dosages are based on standard pediatric guidelines but individual cases may vary.

## License

All rights reserved. Created by Dr. Saad Almodameg.

---

**Last Updated:** November 11, 2025
**Version:** 1.0.0
**Status:** Production (with placeholder images)
