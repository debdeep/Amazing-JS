## 📌 First Input Delay (FID) / Interaction to Next Paint (INP)

- **Definition:**  
  - **FID (legacy):** Delay between first user interaction and browser response.  
  - **INP (new metric):** Measures responsiveness across all interactions.  

- **Good Thresholds:**  
  - FID ≤ 100 ms  
  - INP ≤ 200 ms  

### 🔧 Optimization Tips
- Break up long JavaScript tasks (>50 ms).  
- Use `requestIdleCallback` or Web Workers for heavy computations.  
- Apply code splitting and tree‑shaking.  
- Avoid unnecessary re‑renders in Vue/React.  
- Prefetch critical resources.  