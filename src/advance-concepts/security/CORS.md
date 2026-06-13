# 🌐 Cross-Origin Resource Sharing (CORS)

## 1. What is CORS?
- **Definition**: A security mechanism enforced by browsers that controls how resources (like APIs, fonts, scripts) can be requested from a different origin (domain, protocol, or port).
- **Purpose**: Prevents malicious websites from making unauthorized requests to another site on behalf of a user.

---

## 2. Same-Origin Policy (SOP)
- Browsers normally enforce **SOP**, meaning:
  - A web page can only request resources from the **same origin** (same domain, protocol, and port).
- Example:
  - Page at `https://example.com` can freely access `https://example.com/api`.
  - But requests to `https://api.example.org` are blocked unless CORS allows it.

---

## 3. How CORS Works
- When a browser makes a **cross-origin request**, it sends an **Origin header**.
- The server responds with **Access-Control-Allow-Origin** and other headers to indicate whether the request is allowed.

### Key Response Headers:
- `Access-Control-Allow-Origin`: Specifies which origins can access the resource (`*` for all, or a specific domain).
- `Access-Control-Allow-Methods`: Lists allowed HTTP methods (GET, POST, PUT, DELETE).
- `Access-Control-Allow-Headers`: Lists allowed custom headers.
- `Access-Control-Allow-Credentials`: Indicates if cookies/auth headers can be sent.

---

## 4. Preflight Requests
- For non-simple requests (e.g., `PUT`, `DELETE`, or custom headers), the browser sends an **OPTIONS request** first.
- The server must respond with allowed methods/headers before the actual request proceeds.

---

## 5. Example
### Client Request
```js
fetch("https://api.example.com/data", {
  method: "GET",
  credentials: "include"
});
