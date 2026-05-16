## 📌 Cumulative Layout Shift (CLS)

- **Definition:** Quantifies unexpected layout shifts during page load.  
- **Good Threshold:** ≤ 0.1  
- **Poor:** > 0.25  

### 🔧 Optimization Tips
- Set explicit width/height for images and videos.  
- Reserve space for ads, embeds, iframes.  
- Avoid inserting content above existing elements.  
- Use `font-display: swap` for web fonts.  
- Preload critical fonts and assets.  