# 🧱 SOLID Principles in Software Design

The **SOLID principles** are five key guidelines for writing clean, maintainable, and scalable object-oriented code.  
They help developers design systems that are easier to understand, extend, and refactor.

---

## 1. **S — Single Responsibility Principle (SRP)**

- **Definition:** A class should have **only one reason to change**.  
- **Goal:** Each class/module should handle a single responsibility.  
- **Example:**  
  - ❌ A `User` class that handles authentication, logging, and profile updates.  
  - ✅ Split into `AuthService`, `Logger`, and `UserProfile`.  

---

## 2. **O — Open/Closed Principle (OCP)**

- **Definition:** Software entities should be **open for extension, but closed for modification**.  
- **Goal:** Add new functionality without altering existing code.  
- **Example:**  
  - ❌ Adding new payment methods by editing the `PaymentProcessor` class.  
  - ✅ Use an interface `IPaymentMethod` and extend with `CreditCard`, `UPI`, `PayPal`.  

---

## 3. **L — Liskov Substitution Principle (LSP)**

- **Definition:** Subtypes must be substitutable for their base types **without altering correctness**.  
- **Goal:** Derived classes should honor the behavior expected of the base class.  
- **Example:**  
  - ❌ A `Square` class inheriting from `Rectangle` but breaking width/height logic.  
  - ✅ Ensure `Square` properly respects `Rectangle` contracts.  

---

## 4. **I — Interface Segregation Principle (ISP)**

- **Definition:** Clients should not be forced to depend on interfaces they do not use.  
- **Goal:** Prefer **smaller, specific interfaces** over large, general ones.  
- **Example:**  
  - ❌ A `IMachine` interface with `print()`, `scan()`, `fax()` — forces all implementations to support all methods.  
  - ✅ Split into `IPrinter`, `IScanner`, `IFax`.  

---

## 5. **D — Dependency Inversion Principle (DIP)**

- **Definition:** High-level modules should not depend on low-level modules. Both should depend on **abstractions**.  
- **Goal:** Reduce coupling by depending on interfaces/abstract classes.  
- **Example:**  
  - ❌ `EmailService` directly instantiates `SmtpClient`.  
  - ✅ `EmailService` depends on an `IMailClient` interface, with `SmtpClient` as one implementation.  

---

## ⚖️ Summary Table

| Principle | Focus                        | Key Idea |
|-----------|------------------------------|----------|
| SRP       | Responsibility               | One class → One job |
| OCP       | Extensibility                | Extend without modifying existing code |
| LSP       | Substitutability             | Derived classes must honor base contracts |
| ISP       | Interface design             | Small, specific interfaces |
| DIP       | Dependency management        | Depend on abstractions, not concretions |

---

